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
var uid;

//signup form
var signUpForm = document.querySelector("#signUpForm");
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signUpForm[`email`].value;
  const password = signUpForm[`password`].value;
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
  }).catch(err => {
    console.log(err.message);
  }).finally(() => {
    signUpForm.reset();
  })
})

//state change
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
    setupUI(user);
  }
  else {
    console.log("logged out");
  }
})

//sign in
var signInForm = document.querySelector("#signInForm");
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInForm[`email`].value;
  const password = signInForm[`password`].value;
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
var reminderForm = document.querySelector("#reminder");
reminderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const reminder_title = reminderForm['reminder_title'].value;
  const reminder_time = reminderForm['reminder_time'].value;
  const reminder_date = reminderForm['reminder_date'].value;
  const reminder_priority = reminderForm['reminder_priority'].value == "true" ? true : false;

  db.collection(uid).doc().set({
      title: reminder_title,
      time: reminder_time,
      date: reminder_date,
      priority: reminder_priority,
      month: parseInt(reminder_date.substring(5, 7))
  });
  reminderForm.reset();
})
