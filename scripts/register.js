const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const userName = document.getElementById('userName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserEmailRegister = Users.find(user => user.email === email)
    if (isUserEmailRegister) {
        return alert('El usuario ya esta registrado!')
    } 

    Users.push({
        name:name,
        lastName:lastName,
        userName:userName,
        email:email,
        password:password
    })

    localStorage.setItem('users',JSON.stringify(Users))
    alert('Registro exitoso')

    //REDIRECCION AL LOBBY
    window.location.href = '/pages/login.html'
})