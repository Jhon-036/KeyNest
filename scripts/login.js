const autenticador = new Autenticador();

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    const resultado = autenticador.login(userName,password);

    // Mostrar mensaje con alert
    alert(resultado.message);

    if(resultado.success) {
        window.location.href = '/pages/panel.html';
    }
})