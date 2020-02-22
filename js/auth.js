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

//signup form
let submitButton = document.getElementById("signButton");

if (submitButton != null) {
 submitButton.addEventListener("click", (e) => {
   const inputs = document.getElementsByClassName("inputBox");
   console.log(inputs);
   const email = inputs[0].value;
   const password = inputs[1].value;
   auth.createUserWithEmailAndPassword(email, password).then(cred => {
   }).catch(err => {
     console.log(err.message);
   }).finally(() => {
     for(let i=0;i<inputs.length;i++){
       inputs.value="";
     }
   })
 });
}

//state change
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
    setupUI(user);
    window.location.href = '../index.html';
  }
  else {
    console.log("logged out");
  }
})
/**
//log in
document.getElementById("loginSubmitBtn").addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm[`email`].value;
  const password = signInForm[`password`].value;
  const inputArrLog = document.getElementsByClassName("InputBoxes");
  auth.signInWithEmailAndPassword(email, password).then(cred => {
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    signInForm.reset();
  });
})
//signOut
document.querySelector(".signOutBtn").addEventListener("click", () => {
  auth.signOut().then(() => {
  });
})

//submit reminder
document.getElementById("submitBtn").addEventListener("click", (e) => {
  const reminder_title = document.getElementById("title").value;
  const reminder_time = document.getElementById("timee").value;
  const reminder_date = document.getElementById("datee").value;
  const reminder_priority = document.getElementById("priorityCheck").checked;

  db.collection(uid).doc().set({
      title: reminder_title,
      time: reminder_time,
      date: reminder_date,
      priority: reminder_priority,
      month: parseInt(reminder_date.substring(5, 7))
  });
  console.log("success")
})
 */