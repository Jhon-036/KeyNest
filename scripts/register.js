const autenticador = new Autenticador();

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Registrar el usuario
    const resultado = autenticador.registrar(name, lastName, userName, email, password);

    // Mostrar mensaje con alert
    alert(resultado.message);

    // Redirigir al login si el registro fue exitoso
    if (resultado.success) {
        window.location.href = '/pages/login.html';
    }
});