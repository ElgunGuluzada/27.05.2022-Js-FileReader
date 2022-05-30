
let signIn = document.getElementById("sign-in")
let InputName = document.getElementById("InputName")
let InputSurname = document.getElementById("InputSurname")
let InputUsername = document.getElementById("InputUsername")
let InputTextArea = document.getElementById("InputTextArea")
let logIn = document.getElementById("log-in")
let name = document.getElementById("name")
let nameUpdate = document.getElementById("name-update")
let surname = document.getElementById("surname")
let username = document.getElementById("username")
let textArea = document.getElementById("textArea")
let iconUser = document.getElementById("icon-user")
let submit = document.getElementById("submit")

submit.addEventListener("click", function (ev) {
    ev.preventDefault()
    signIn.classList.add("d-none")
    iconUser.classList.remove("d-none")
    logIn.classList.remove("d-none")
    name.value = InputName.value
    surname.value = InputSurname.value
    username.value = InputUsername.value
    textArea.value = InputTextArea.value
})



nameUpdate.onclick = function () {
    localStorage.setItem(name, name.value)
}


