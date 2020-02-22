
//log in
document.getElementById("loginButton").addEventListener('submit', (e) => {
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
  