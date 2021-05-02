const GoogleAuth = new firebase.auth.GoogleAuthProvider();
 const google = document.querySelector(".google");

const firebaseConfig = {
    apiKey: "AIzaSyBdfkMseSGB-rOfgvFVoc9zdaXK4z8X4GM",
    authDomain: "plasma-d9139.firebaseapp.com",
    databaseURL: "https://plasma-d9139-default-rtdb.firebaseio.com",
    projectId: "plasma-d9139",
    storageBucket: "plasma-d9139.appspot.com",
    messagingSenderId: "457821438147",
    appId: "1:457821438147:web:13bb2d12a7c9fe5022e276",
    measurementId: "G-S6X182SY6G"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //To sign in with pop-up.
firebase.auth().signInWithPopup(googleAuth);

//To sign in with redirect. 
firebase.auth().signInWithRedirect(googleAuth);


google.addEventListener("click", signInWithPopup);





    // import firebase from "firebase/app";


    // let provider = new firebase.auth.GoogleAuthProvider();


    // firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //         /** @type {firebase.auth.OAuthCredential} */
    //         var credential = result.credential;


    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         var token = credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         // ...
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // The email of the user's account used.
    //         var email = error.email;
    //         // The firebase.auth.AuthCredential type that was used.
    //         var credential = error.credential;
    //         // ...
     //   });
    