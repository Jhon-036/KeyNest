const autenticador = new Autenticador();

if(!autenticador.estaAutenticado()) {
    window.location.href = "/pages/login.html";
} else {
    const usuarioActual = autenticador.obtenerUsuarioActual();
}

document.getElementById("logOut").addEventListener("click", () => {
    autenticador.logout();
    window.location.href = '/pages/login.html'
})