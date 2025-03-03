const user = JSON.parse(localStorage.getItem('login_succes')) || false
if (!user) {
    window.location.href = '/pages/login.html'
}

const logOut = document.getElementById('logOut')
logOut.addEventListener('click', () => {
    alert('Hasta pronto!')
    localStorage.removeItem('logini_succes')
    window.location.href = '/pages/login.html'
})