
//signup form
document.getElementById("signUpSubmitBtn").addEventListener("click", (e) => {
    const inputs = document.getElementsByClassName("InputBoxes");
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
  })
  