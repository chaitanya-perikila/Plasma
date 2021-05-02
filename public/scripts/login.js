window.addEventListener('load' , ()=>{
   // document.getElementById('signin_google').addEventListener('click' , google_login)
// document.getElementById('signin_facebook').addEventListener('click' , google_login)
// function google_login(){
//     console.log('logged in');
// }
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
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
  firebase.analytics();
  let provider = new firebase.auth.GoogleAuthProvider();
  document.getElementById('signin_google').addEventListener('click' , google_login)
document.getElementById('signin_facebook').addEventListener('click' , google_login)
function myFunction() {
    location.replace("blood.html");
  }
function google_login(){
    console.log('logged in');
    firebase.auth().signInWithPopup(provider).then(res=>{
        console.log(res);
        myFunction();
        
    }).catch(e=>{
        console.log(e)
    })
} 
});