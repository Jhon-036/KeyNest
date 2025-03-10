class Usuario {
    constructor(name, lastName, userName, email, password) {
        this.name = name;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}

class Autenticador {
    constructor() {
        this.usuarios = this.obtenerUsuarios();
    }

    //Obtener los usuarios del LocalStorage
    obtenerUsuarios() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        return usuarios
    }

    //Guardar los usuarios en el LocalStorage
    guardarUsuarios(){
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    }

    //Registar usuario
    registrar(name, lastName, userName, email, password) {
        const usuarioExiste = this.usuarios.find((user) => user.userName === userName);
        if(usuarioExiste) {
            return { success : false, message: "El usuario ya existe!"};
        }

        const nuevoUsuario = new Usuario(name, lastName, userName, email, password);
        this.usuarios.push(nuevoUsuario);
        this.guardarUsuarios();
        return { success : true, message: "Registro exitoso."}
    }

    //Iniciar sesion
    login(userName, password) {
        const usuario = this.usuarios.find((user) => user.userName === userName && user.password === password);
        if(usuario) {
            localStorage.setItem("usuarioActual", JSON.stringify(usuario))
            return { success: true, message: "Login exitoso."}
        } else {
            return { success: false, message: "Usuario o contraseña incorrectos."}
        }
    }

    //Cerrar sesion
    logout() {
        localStorage.removeItem("usuarioActual");
    }

    //Verificar si hay un usuario autenticado
    estaAutenticado(){
        return localStorage.getItem("usuarioActual") !== null;
    }

    //Obtener el usuario actual
    obtenerUsuarioActual() {
        return JSON.parse(localStorage.getItem("usuarioActual"))
    }
}