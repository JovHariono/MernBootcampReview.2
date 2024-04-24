const txtUsername = document.querySelector("#txtUsername")
const txtPassword = document.querySelector("#txtPassword")
const tampilUsername = document.querySelector("#tampilUsername")
const tampilPassword = document.querySelector("#tampilPassword")
const btnSignIn = document.querySelector("#btnSignIn")
var user = {
    username: "",
    password: "",
}

txtUsername.addEventListener("change", (e) => {
    user.username = e.target.value
})

txtPassword.addEventListener("change", (e) => {
    user.password = e.target.value
})

btnSignIn.addEventListener("click", (e) => {
    e.preventDefault()

    tampilUsername.innerHTML = user.username
    tampilPassword.innerHTML = user.password    
})

// txtUsername.addEventListener("keydown", (e) => {
//     console.log(e.target.value)
// })