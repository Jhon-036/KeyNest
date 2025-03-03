const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.userName === userName && user.password === password)
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.userName}`)

    localStorage.setItem('login_succes', JSON.stringify(validUser))
    window.location.href = '/pages/panel.html'
})