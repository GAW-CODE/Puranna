// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDu7Km2fDYWWIJSGt7-48DAhumU2rOnAQg",
  authDomain: "planner-91682.firebaseapp.com",
  databaseURL: "https://planner-91682.firebaseio.com",
  projectId: "planner-91682",
  storageBucket: "planner-91682.appspot.com",
  messagingSenderId: "357427542830",
  appId: "1:357427542830:web:a4762ae8b0399bafc058bf",
  measurementId: "G-ZV8YN4NESV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

//uid of user
let uid;
  
/**
//signOut
document.querySelector(".signOutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
  });
})
*/