
let submitButton = document.getElementById("signButton");
console.log("hi")
if (submitButton != null) {
 submitButton.addEventListener("click", (e) => {
   const inputs = document.getElementsByClassName("inputBox");
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
auth.onAuthStateChanged(user => {
    if (user) {
      console.log("logged in");
      location.href = './index.html';
    }
    else {
      console.log("logged out");
    }
  })