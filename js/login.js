
//log in
document.getElementById("loginButton").addEventListener('click', (e) => {
  let arr = document.getElementsByClassName("inputBox");  
  const email = arr[0].value;
    const password = arr[1].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      Array.from(arr).forEach(e =>{
        e.value="";
      });
    });
  })
  
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
    location.href = './index.html';
  }
  else {
    console.log("logged out");
  }
})
  //signOut
  /**
  document.querySelector(".signOutBtn").addEventListener("click", () => {
    auth.signOut().then(() => {
    });
  })
  
   */
