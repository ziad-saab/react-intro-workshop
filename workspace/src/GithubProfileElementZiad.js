// import React, {Component} from 'react'; //React is the default export from that file that can be any name you want could be even TheReactLibrary, the second is a named Export which is a function ( a class function ).  React.Component is the property which is the same method.
//
// //We split the two components into one: 1) Logic (state exists) 2) Presentation (no state)
//
// class GithubProfileElementZiad extends Component {
//     render() {
//
//         var user = this.props.user;
//
//         return (
//             <div className="github-user">
//                 <img className="github-user__avatar" src={user.avatar_url} alt={user.name}/>
//                 <div className="github-user__info">
//                     <p>{user.name}</p>
//                     <p>{user.bio}</p>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default GithubProfileElementZiad;

import React from 'react'; //React is the default export from that file that can be any name you want could be even TheReactLibrary, the second is a named Export which is a function ( a class function ).  React.Component is the property which is the same method.

//We split the two components into one: 1) Logic (state exists) 2) Presentation (no state)
//NB: Second dummy presentation pattern => just make it a function
function GithubProfileElementZiad(props) {

    var user = props.user;

    return (
        <div className="github-user">
            <img className="github-user__avatar" src={user.avatar_url} alt={user.name}/>
            <div className="github-user__info">
                <p>{user.name}</p>
                <p>{user.bio}</p>
            </div>
        </div>
    );

}

export default GithubProfileElementZiad;