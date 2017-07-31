# Intro to React workshop

## Resources
In addition to the material we saw in class, the [ReactJS Basics by Mindspace](https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS) is a great introductory video series on the subject of React. At any point during this workshop, feel free to pause and take a look at it.

## Creating the initial environment
Let's create our initial React environment using [`create-react-app`](https://github.com/facebookincubator/create-react-app). This will allow us to concentrate on learning React rather than wasting time setting up Webpack, Babel and friends. In class we learned how these tools work with each other to allow us to develop modern apps that work across a majority of browsers. Know that under the hood, `create-react-app` uses these exact tools, but automates the process for us.

If you're going to do this in Cloud9, ideally you'll want your `/home/ubuntu/workspace` directory to be directly the place where `create-react-app` creates its files. Unfortunately if you try to run it, it will tell you that the directory is not empty. Here's how we'll do it. First, install `create-react-app` globally with:

```sh
npm install --global create-react-app
```

Then, move to the `/home/ubuntu` directory, remove the `workspace` directory and recreate it with `create-react-app`:

```sh
cd /home/ubuntu
rm -r workspace && create-react-app workspace
```

The second command says to recursively remove the workspace directory, and the `&&` says to run `create-react-app` only if that is successful. After a few minutes, you should have your structure created for you.

## Creating simple, stateless, pure components
Pure components are the simplest ones to work with. They pretty much only have a `render` method, and `render` uses the component instance's props -- `this.props` -- exclusively to output a tree of components.

Given the same props, a stateless, pure component will always return the same output. It won't rely on a global variable, `Math.random()` or anything other than the props that can change between calls.

Unfortunately, all our app can't be stateless otherwise there would be no dynamism nor interactivity. For example, if a component represents a countdown timer, then it needs to keep track of the current remaining time somewhere. But as we'll see later, even if we need to store some state, we can still make use of pure components to display a representation of this state.

For now, let's take a look at creating some pure components...

### Pure component #1: `ImageCaption`
In the `src/` directory, create a file called `ImageCaption.js` with the following code:

```javascript
import React from 'react';

class ImageCaption extends React.Component {
  render() {
    return (
      <figure>
      </figure>
    );
  }
}

export default ImageCaption;
```

This is a standard layout for a pure component. Pretty much every component you create will have this base layout.

Now, complete the code of your component's `render` method. Your component will be used like this:

```javascript
<ImageCaption source="http://placekitten.com/g/210/210" text="This is a kittenz!"/>
```

This will render an **instance** of the `ImageCaption` **component**. This instance of the component will receive two **props**. The first prop is `source` and the second one is `text`. The set of props will be available to the component instance's `render` method under **`this.props`**.

Your component should output a [`figure`](http://html5doctor.com/the-figure-figcaption-elements/) like this:

```javascript
<figure>
  <img src="http://placekitten.com/g/210/210"/>
  <figcaption>
    This is a kittenz!
  </figcaption>
</figure>
```

Once you have completed your `render` method, go to your `App.js`. Use `import` to import your `ImageCaption` component. Then, in the `render` method of `App`, after the content that's already there, add an `<h2>` that says "testing ImageCaption", and use `<ImageCaption>` to output the following image http://i.imgur.com/D8JWn.jpg with an appropriate caption. End it all with an `<hr/>` to create a spacing for the next exercise.

### Lists of items
For this exercise, we will use the same `ImageCaption` component to render a list of images with captions. The data will come from an array of objects, something that you should be quite familiar with by now. Data often comes in as arrays of objects, and applications often display lists of things.

Add the following array as a global variable at the top of your `App.js`:

```javascript
var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];
```

In your `App` component, add a `renderImage` method that can be used with `map`. It should take an object like the one in the array above, and map it to an `<ImageCaption>` element.

To use your mapping function, you can take advantage of the fact that JSX lets you use an array of elements as a value, like this:

```javascript
<div>
  {imageList.map(this.renderImage)}
</div>
```

This will call `renderImage` once for each object in the array, and end up with a new array of three `<ImageCaption>` elements. They'll be placed inside the `<div>`.

As you test this, open your console and notice that React gives you the following warning:

**Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `Constructor`. See https://fb.me/react-warning-keys for more information.**

What React is telling you here is that to do its work well -- its work being to efficiently update the *real* DOM of the page -- it needs you to give a unique identifier to each item you output in a list. This way, React can quickly tell which item is which without having to look inside.

To do this, add a `key` prop to each `<ImageCaption>` in your `renderImage` method. In this case, because each object your receive has a unique `id`, you can use that as the `key`. You'll know you did it successfully when you refresh your page and the warning is gone.

**NOTE**: This pattern of having reusable components used to display lists/arrays of things pops up everywhere when dealing with UIs. It's one of the few things you should memorize and know how to do by heart. The steps are always the same:

1. Create a component for a single item in the list
2. `map` from an array of data to an array of instances of the component
3. Find a unique piece of data to use as the `key` of each component in the list

If you don't want to create a named mapping function, the following pattern is also commonplace for one-off lists:

```javascript
<div>
{
  imageList.map(function(item) {
    return <ImageCaption ...>;
  });
}
</div>
```

Written in ES2015 syntax with arrow functions, it becomes even nicer:

```javascript
{imageList.map(item => <ImageCaption .../>)}
```

### Wrapper components and `this.props.children`
Earlier on, you saw how to pass props to component instances. It looks a lot like writing the attributes of an HTML element like `<a href="..."`. Sometimes, we want to create components that are *wrappers*.

Let's say we want to create a component that renders as a box with a 5px red border all around it, and puts any elements we pass to it inside the box. Passing data to components is done through props. But how would you pass elements -- children -- to a component? It's easy, you simply nest them inside the tag for the component, and they'll be available as a special prop called "children". You can access it as `this.props.children` in the receiving component.

Here's how the `RedBox` component would look:

```javascript
import React from 'react';

class RedBox extends React.Component
  render() {
    return (
      <div className="red-box">
        {this.props.children}
      </div>
    );
  }
};
```

And here's how it would be used:

```javascript
<RedBox>
  <p>This will be in the red box</p>
  <img alt="This too!" src="http://placekitten.com/g/200/200"/>
</RedBox>
```

Which would give the following output:

```html
<div class="red-box">
  <p>This will be in the red box</p>
  <img alt="This too!" src="http://placekitten.com/g/200/200">
</div>
```

All that would be left to do is add some CSS for the `red-box` class name.

For this exercise, we want to create a `Layout` *wrapper component*. This component will output a common navigation bar, some varying content that will be passed as the `children` prop, and a common footer at the end.

Here's what the output of `Layout` should look like:

```html
<div class="layout">
  <nav class="main-nav">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
  <main>
    <!-- the varying content should go here -->
  </main>
  <footer>
    Copywhat 2016 Kittens
  </footer>
</div>
```

Create this component in a file called `src/Layout.js`. Then, test it inside `App.js`. Below the last `<hr/>`, write an `<h2>` saying "Testing Layout". Then, create an instance of the `<Layout>` component. Its children should be a level 2 heading with the text "About us" and a paragraph with the text "We are React developers!". The word "React" should link to the ReactJS home page. If you don't know what the URL is, find it and bookmark it. Check it often if you use React to build applications.

This concludes the section on pure components. As you can see, pure components is easy. Everything happens in the `render` function, and the output is always based on the props. Because the same input (props) always gives the same output, pure components can be made super performant by using the [Pure Render Mixin](https://facebook.github.io/react/docs/pure-render-mixin.html). This is a more advanced topic so feel free to skip it completely and come back to it later ;)

## Components that receive user input
In this section, we are going to create some React components that receive user input. We'll start with a stateless component, then we'll look at our first stateful component.

### Guess the number, stateless edition
In `src/`, create a file called `GuessTheNumber.js`. In it, create a component called `GuessTheNumber`. Your component will accept a prop called `numberToGuess`. The prop is required and should be a number.

Your component should output a text input box and a button. When the button is clicked, your component should retrieve the current value of the text input. If the input is equal to the `numberToGuess` prop, then you should `alert('You are correct')`. If not, you should `alert` whether the user guessed a lower or higher number.

Since this component is stateless, there will not be a "number of tries" or anything like that. Start by creating a `render` method that outputs a text input and a button. Add an `onClick` prop to the button and give it the value `this._handleButtonClick`. Because you're inside the `render` method's code, `this` represents an instance of the `GuessTheNumber` component.

To add a `_handleButtonClick` method to your component, all you have to do is add it to the class, on top of the `render` method. In this method, you'll need to retrieve the value of the rendered input box. How can you do that? If this was jQuery, you'd probably select the input box using a class name or ID or something, then call `.val()` to retrieve the value.

In React, when we need to refer to the DOM -- we need to do it in this case because the DOM is holding the value of the input box -- we can add a `ref` property to the element we want to reference, like this:

```javascript
<input type="text" ref="userGuess"/>
```

Then, in the `_handleButtonClick` method, we can refer to the DOM element related to this ref by using `this.refs.userGuess`. Since this DOM element is an `input`, it will have a DOM property called `value` that will have its current value. So `this.refs.userGuess.value` will give you the current guess of the user. Use it to `alert` the appropriate message :)

While the component itself seems stateless on the surface, it's actually referring to a piece of data from the DOM, namely the input box. In the next few exercises, we'll see that sometimes this is not enough and we'll need to create our own state to hold on to extra information that is not -- and should not -- be present in the DOM, as it often is with jQuery.

Once you have implemented your component, test it by importing it in `App.js` and add it to your ever-growing list of components :) It should look like this (but with the rest of your exercises above it):

![guessing stateless](http://i.imgur.com/c811KE2.gif)

For now, we'll put this exercise on hold to explore a few easy stateful components. Then we'll come back to this and create a complete, stateful number guessing game.

### Stateful component: you clicked ...
Create a component -- you should know where by now -- called `YouClicked`. This component should output a button and a message below the button. At first the message should say "You have not clicked the button". When the button is clicked once, the message should change to "You have clicked the button once". Then, "You have clicked the button twice". After that, "You have clicked the button X times".

To do this, you'll need to keep track of a value over time. In React components, you can do this by using the state object and `this.setState`. You should only store the minimal amount of data necessary to display your component properly. In our case, if we have the number of times the button is clicked, we can derive the message to be output in the `render` method.

Add a method `constructor` to your `YouClicked` component. In it, call `super()` and then assign `this.state` an object with a single key `timesClicked` with the value 0. Then, in your `render` method, add a `{this.state.timesClicked}` somewhere to see the output. It should say `0` if you preview it in the browser.

Add an `onClick` event handler to the button of your component. This should call a method of your component called `_handleButtonClick`. In this method, you should use `this.setState` to change the state of your component. The reason why you call `this.setState` instead of simply re-assigning with `this.state.timesClicked++` has to do with how React detects that it has to render your component. Here, what you want to do in your event handler is:

```javascript
this.setState({
  timesClicked: this.state.timesClicked + 1
});
```

As you know by now, calling `setState` will trigger a re-render of your component. Since the value of `this.state.timesClicked` will have changed, `render` will give a different output and the DOM will be updated to reflect this.

When you get it working, make your component display the appropriate message (you clicked once, twice, ...) based on the value of `this.state.timesClicked`. All the display logic will be in the `render` method.

When you get the basics working, add a RESET button to your component. Clicking the reset button should reset the click counter to zero. It should also add 1 to the `timesReset` state, or create it if it doesn't exist. Use the `timesReset` state to display an additional message "You have reset X times". You should only display the additional message if the user has reset at least once.

Here's what your component should look like:

![click counter](http://i.imgur.com/uCS50SC.gif)

### Stateful component: character counter
Create a component called `CharacterCounter`. Your component should have a text input, and a character count next to it. Add an `onInput` event handler to the input field, and point it to a method called `_handleInput`. In the `_handleInput` method, you can get the current value of the input field like this:

```javascript
({
  _handleInput(event) {
    var value = event.target.value;
    // continue here...
  }
})
```

You'll receive the DOM event, and you'll get one every time the value of the input field changes. `target` is the DOM element, and `value` is its current value. Use this value along with `this.setState` to keep track of the current value in a state called `currentInput`. To do this the right way, you should also add a `constructor` method and assign an empty string as the `currentInput` state with `this.state = {currentInput: ""}`. Then, in the `render` method, display the number of characters in `this.state.currentInput` -- hint: it's just a string.

As always you'll be testing this component by importing it in `App.js` and adding it with the rest of the exercises.

### Stateful components and [controlled components](https://facebook.github.io/react/docs/forms.html): character limit
This exercise expands on the previous one. You can copy your current `CharacterCounter` to a new component called `CharacterLimit`, or you can start it from scratch.

The `CharacterLimit` component will accept a prop called `limit`. It should be a number, and is required.

Then, add a `value` prop to the input field. Give it the value of `"hello"` and view your component in the browser. Notice that React gives you a warning about a read-only field? Since the `render` method gives a constant value to the `value` property, the value cannot change.

While this seems weird, we'll be able to use this to control the value of the input, but still hook to its `onInput` method to get the next value. We'll then be able to decide if we want to let it through or not.

Here are the steps to create a [controlled input component](https://facebook.github.io/react/docs/forms.html):

1. In your `constructor` method, keep track of the current input value. We already have a `currentInput` from the previous step. This is where we'll keep the "true" value of the input field.
2. In your `render` method, give the input field a prop `value` equal to `this.state.currentInput`.
3. In your `render` method, attach an `onInput` event handler to your input field
4. Make your event handler accept one argument -- call it `event` -- and check under `event.target.value` for the new value of the input field. If you use `setState` to change the value of `currentInput` here, the input field will be updated on the next `render`.

For this exercise, in your input event handler, you'll use `event.target.value`'s length and check it against `this.props.limit` to see if you should let the new value go through or not. If the new value is less than the limit, then you can call `this.setState` to change `currentInput` to the new value. If not, you don't need to do anything.

Finally, in the `render` method, instead of displaying the character count, display "X remaining" next to the input field.

Test your input component using `<CharacterLimit limit={140}/>`. Note that with the current version of this component, you won't be able to retrieve the value of the input field since it's encapsulated in the `CharacterLimit` component.

### Number guessing game
For this exercise, you will create a `NumberGuessing` game component. The component will play a game of guess the number. For every game, it will choose a number between 1 and 100. The user will have an input field and a GUESS button.

They will have 5 tries to guess the number. To guess a number the user must put it in the input field, and click the GUESS button. When they do that, the game will check if the number is the right one. If it is, the user interface is changed to a simple "YOU WIN". If it's not, the user is shown a message that says whether the guess is too low or too high. They will also be shown a list of their guesses, as well as the number of remaining guesses. If the guesses are expired before the user wins, the interface is changed to a simple "YOU LOSE" and we show the winning number.

For both the "YOU WIN" and "YOU LOSE" screens, there will be a button labeled "NEW GAME". Pressing this button will reset the game.

When the component gets mounted in the DOM, we'll want to start a new game. The display of the game will change as a result of calling `this.setState` at appropriate moments during the [lifecycle of the component](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods). Here are the different pieces of state we'll need to keep track of:

```javascript
({
  gameStatus: 'win|lose|playing',
  numberToGuess: 42, // something between 1 and 100 generated when we start a game
  guesses: [] // initially guesses is an empty array
})
```

Since you'll be starting a game from multiple places (initial mounting, and clicking NEW GAME), your `constructor` function should assign an empty object to `this.state`. You should have a method called `_startGame` that will use `this.setState` to reset the game. It will set the `gameStatus` to `playing`, the `numberToGuess` using `Math.random`, and the `guesses` to an empty array.

In the `render` method, if `this.state.gameStatus` is not defined, simply return `null`.

The next thing you'll want to do is start a new game **when the component gets mounted in the DOM**. There happens to be a method that you can implement in your component that will be called exactly as soon as the component gets mounted: `componentDidMount`. If you add this method to your component, React will call it right after your component is displayed on the screen. In this method, you can call `this._startGame()` to make this happen. This will in turn call `setState`, which will re-render your component. At that point the game will start :)

Here's an example of the game being played:

![guessing game](http://i.imgur.com/RmIQblR.gif)

### Components and AJAX
For this exercise, we're going to be doing an AJAX call to the GitHub API to retrieve some information, then build a component that will output this information in a nice way.

The first question is "How do I make AJAX calls with React?" and the answer is, you don't! React is a view library, it deals with user interface components and their interactions.

Loading data with AJAX can be done with *any* library that supports it, or with Vanilla JS. In our case, the easiest way will be using the modern `fetch` function. If we want our app to be supported in older browsers, we can [polyfill `fetch`](https://github.com/github/fetch).

Then, let's create a component called `GithubProfile` in the components directory. You'll mount it in your `<App>` like the rest of your exercises. The `GithubProfile` component will take a prop called `username`, a string that is required.

Next, in the `GithubProfile` component, implement a `constructor` method that assigns an empty object to `this.state`. In this component, we're going to use state to let us know when our AJAX call has completed.

Next, we need to make an AJAX call to the GitHub API to retrieve the user info that is in our `this.props.username`. Here's an example of a GitHub API output for a user profile:

`https://api.github.com/users/gaearon`
```json
{
  "login": "gaearon",
  "id": 810438,
  "avatar_url": "https://avatars.githubusercontent.com/u/810438?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gaearon",
  "html_url": "https://github.com/gaearon",
  "followers_url": "https://api.github.com/users/gaearon/followers",
  "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
  "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
  "organizations_url": "https://api.github.com/users/gaearon/orgs",
  "repos_url": "https://api.github.com/users/gaearon/repos",
  "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gaearon/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dan Abramov",
  "company": "Facebook",
  "blog": "http://twitter.com/dan_abramov",
  "location": "London, UK",
  "email": "dan.abramov@me.com",
  "hireable": null,
  "bio": "Created: Redux, React Hot Loader, React DnD. Now helping make @reactjs better at @facebook.",
  "public_repos": 176,
  "public_gists": 48,
  "followers": 10331,
  "following": 171,
  "created_at": "2011-05-25T18:18:31Z",
  "updated_at": "2016-07-28T14:41:02Z"
}
```

It's a simple, flat JavaScript object. The API URL is always the same prefix, and ends with the username. Easy.

The next thing we need to do is find out what's the best place to make our AJAX call. We need to do it as soon as our component instance gets mounted in the DOM. What's that I hear? `componentDidMount`! React will call this method as soon as our component has been mounted in the DOM.

Implement `componentDidMount` for your `GithubProfile` component. In it, use `$.getJSON` to load the appropriate GitHub API URL for the username in your props. In the callback, use `this.setState` to add a `user` object to your state, and set it  to the response of the AJAX call.

:warning: **NOTE**: You are going to run into trouble when trying to use `this.setState` inside the success callback of your fetch AJAX call. That's because the callback is a new function and creates a new `this` context, so you lose the `this` that you had access to in the `componentDidMount` outer function. [There are a few different ways to fix it](http://exploringjs.com/es6/ch_arrow-functions.html). Use `bind` if you are comfortable with it, or `var that = this` otherwise.

Finally, implement the `render` method for your component. `render` should check if the state contains a `user` object. If it does not, then it should return a `div` with the text "LOADING". If the `user` object is in the state, then your `render` method should return something like this:

```html
<div class="github-user">
  <img class="github-user__avatar" src="URL OF THE AVATAR"/>
  <div class="github-user__info">
    <p>USERNAME OF THE USER (REAL NAME OF THE USER)</p>
    <p>BIO OF THE USER IF THERE IS ONE</p>
  </div>
</div>
```

And the end result should look like this in your browser:

![github user](http://i.imgur.com/D2rykuo.png)

:warning: **NOTE**: You'll have to add some CSS if you want your output to look like mine ;) Perhaps a `float` and `width`/`height` on that image, `border-radius` to make circular, ...

### Advanced: inter-component communication
This exercise is going to expand on the previous one. For this exercise, we're going to create two new components, `GithubSearch` and `GithubSearchForm`. We'll use these two components along with the `GithubProfile` component from the previous exercise.

At the end of this exercise, your component should look and act like this:

![github search 2](http://i.imgur.com/Lfmn7Um.gif)

* Step 1: Create a pure `GithubSearchForm` component. Here is the code of it:
```javascript
import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <p>Enter a GitHub username:</p>
        <input type="text" />
        <button>Go!</button>
      </form>
    );
  }
};
```

* Step 2: Create a component called `GithubSearch`. Start with the following code:
```javascript
import React from 'react';
import GithubProfile from './GithubProfile';
import GithubSearchForm from './GithubSearchForm';

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <GithubSearchForm/>
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}
      </div>
    );
  }
};
```
:warning: **Notice that this component is using `GithubSearchForm`. Make sure to import it.**

Let's see what's going on in `GithubSearch`: first off, we're initializing our state to an empty object. This signals that this component will need to be stateful. Then, in `render`, we are outputting a `GithubSearchForm`. This component will manage the user input, and will be aware of when the user clicked on the Go! button.

Our problem is this: *the submit event happens in the `GithubSearchForm` component, but we need to know about this inside the `GithubSearch` parent component*. The two components need to **communicate**.

React's documentation provides a [recipe to follow for splitting up and communicating between components](https://facebook.github.io/react/docs/thinking-in-react.html). In our case, it boils down to adding a method `_handleSearch` in the `GithubSearch` component, and passing this method as a **prop** to `GithubSearchForm`. When the search form detects an input, it will be able to call the method passed down to it, without needing to know where the method came from. Let's implement this slowly:

* Step 3: detect form submission in `GithubSearchForm`
If we're going to communicate to our parent component that the user want to do a search, we first have to detect the search in the child component.

  1. In the `render` method of `GithubSearchForm`, add a `ref` to the input box and set it to `userInput`.
  2. Add an `onSubmit` event handler to your `<form>` element, and point it to a method called `_handleSubmit`.
  3. In _handleSubmit, use `this.refs.userInput.value` to find the value of the input. `console.log` it for now.
  4. Test your component and note that submitting the form makes the whole page reload! We have to PREVENT the form from submitting. You should know how to do this by now :)

* Step 4: pass a handling function from `GithubSearch`
In the `GithubSearch` component, add a function called _handleSearch(searchTerm). For now, just `console.log` the value of `searchTerm`. Then, pass a prop called `onSearch` to the `GithubSearchForm` component and make it the `_handleSearch` method you just created:

```javascript
<GithubSearchForm onSearch={this._handleSearch}/>
```

* Step 5: accept the `onSearch` prop in your `GithubSearchForm` component
In the `_handleSubmit` of the `GithubSearchForm` component you created in a previous step, instead of using `console.log`, use `this.props.onSearch` and pass it the value of the search form from your refs.

When all this is wired up, you've basically created an **[inverse data flow](https://facebook.github.io/react/docs/thinking-in-react.html#step-5-add-inverse-data-flow)** between your components: a child component is communicating to a parent component using a function that was passed down to it as a prop.

* Step 6: closing the loop
Now that your `GithubSearch` component is aware of the new search value, modify the `_handleSearch` method. Instead of simply `console.log`ging the value, use `this.setState` to set the value of the `user` state. This will trigger a re-render of your `GithubSearch` component. When it gets re-rendered, `this.state.user` will be set to the value that was in the form. The value will be used by render in the following expression: `{this.state.user ? <GithubProfile username={this.state.user}/> : null}`. Since `user` is now set, `render` will output a `GithubProfile` component. When this component gets output, its `componentDidMount` function will be called. It will do its AJAX call and output the user box :)

Here's an example of it "working":

![github-search](http://i.imgur.com/J0Vel9g.gif)

:warning: **OOPS! What's happening?** It seems like our component is working the first time around, but whenever we type a second username, the `GithubProfile` component doesn't refresh. If you look at the video closely, you'll notice that the `username` prop of the `GithubProfile` component *does* get updated. So why does this not trigger a new AJAX call??

Let's check our `GithubProfile` component. The AJAX call is currently being done in **`componentDidMount`**. Mount. In this case, the component is already mounted in the DOM, the only thing that happened is that its prop has changed. When a component's props change, it doesn't get re-mounted in the DOM. Its current DOM is modified instead, using the result of the latest call to `render`. When this happens, another [React Component lifecycle](https://facebook.github.io/react/docs/component-specs.html) method gets called: [`componentDidUpdate`](https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate). If you implement this function you can trigger a new AJAX call if the component gets updated.

Here's how to fix your `GithubProfile` component:

1. Rename the `componentDidMount` method to `fetchData`
2. Create a new `componentDidMount` method, and call `this.fetchData` in it
3. :warning: Test to make sure things are still working as before!
4. Implement the `componentDidUpdate` method. In it, check if the `prevProps` username is different from the current props' username. **If and only if they are different**, do another call to `this.fetchData`. Since `fetchData` is using `this.props` to do its job, it will fetch the new user info :)

When you are done, your component should behave like this (**NOTE**: this is the same screencast as in the beginning of this exercise):

![github search 2](http://i.imgur.com/Lfmn7Um.gif)
