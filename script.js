
let signIn = document.getElementById("sign-in")
let InputName = document.getElementById("InputName")
let InputSurname = document.getElementById("InputSurname")
let InputUsername = document.getElementById("InputUsername")
let InputTextArea = document.getElementById("InputTextArea")
let logIn = document.getElementById("log-in")
let name = document.getElementById("name")
let nameUpdate = document.getElementById("name-update")
let surname = document.getElementById("surname")
let surnameUpdate = document.getElementById("surname-update")
let username = document.getElementById("username")
let usernameUpdate = document.getElementById("username-update")
let textArea = document.getElementById("textArea")
let textAreaUpdate = document.getElementById("textArea-update")

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
    localStorage.setItem("Name", InputName.value)
    localStorage.setItem("Surname", surname.value)
    localStorage.setItem("Username", username.value)
    localStorage.setItem("Description", textArea.value)
})


nameUpdate.onclick = function () {
    localStorage.setItem("Name", name.value)
}
surnameUpdate.onclick = function () {
    localStorage.setItem("Surname", surname.value)
}
usernameUpdate.onclick = function () {
    localStorage.setItem("Username", username.value)
}
textAreaUpdate.onclick = function () {
    localStorage.setItem("Description", textArea.value)
}


