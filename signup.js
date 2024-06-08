let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", handleAuthentication);

function handleAuthentication(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log("User signed in: ", user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error: ", errorCode, errorMessage);
    });
}

function handleGoogleAuthentication() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

const firebaseConfig = {
    apiKey: "AIzaSyBjDlYRAORXoGOVG5BGcn7rzWxHbIHrz5Y",
    authDomain: "story-time-3127b.firebaseapp.com",
    databaseURL: "https://story-time-3127b-default-rtdb.firebaseio.com",
    projectId: "story-time-3127b",
    storageBucket: "story-time-3127b.appspot.com",
    messagingSenderId: "172026169157",
    appId: "1:172026169157:web:78e810a6e6cdb8acc3202c",
    measurementId: "G-J9R6PBKP9L"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  

