let name = document.getElementById ("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let loginButton = document.getElementById("login-btn")

loginButton.addEventListener("click",(e)=>{
    e.preventDefault()
   
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);
})