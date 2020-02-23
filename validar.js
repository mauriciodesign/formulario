function validar(){ //Se crea la funcion validar
    var nombre, apellidos, correo, usuario, clave , telefono, expresion; 
    nombre = document.getElementById('nombre').value   //guarda la id nombre con su valor 
    apellidos = document.getElementById('apellidos').value //guarda la id apellidos con su valor 
    correo = document.getElementById('correo').value //guarda la id correo con su valor 
    usuario = document.getElementById('usuario').value //guarda la id usuario con su valor 
    clave = document.getElementById('pass').value //guarda la id pass con su valor 
    telefono = document.getElementById('telefono').value //guarda la id telefono con su valor 

    expresion = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico


    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){  //si el campo de la id esta vacio muestra una alerta 
        alert("todos los campos son obligatorios"); //alerta
        return false; //interrumpe la ejecución del formulario
    }
    else if(nombre.length > 30){ //si el texto que se escriba en el campo es mayor a 30 muestra una alerta  
        alert("El nombre es muy largo")
        return false;  //interrumpe la ejecución del formulario
    }
    else if(apellidos.length > 80){ //si el texto que se escriba en el campo es mayor a 80 muestra una alerta 
        alert("Los apellidos son muy largos")
        return false;  //interrumpe la ejecución del formulario
    }
    else if(correo.length > 100){ //si el texto que se escriba en el campo es mayor a 100 muestra una alerta 
        alert("El correo es muy largos")
        return false;  //interrumpe la ejecución del formulario
    }
    else if(!expresion.test(correo)){
        alert("El correo no es valido")
        return false;  //interrumpe la ejecución del formulario
    }
    else if(usuario.length > 20){ //si el texto que se escriba en el campo es mayor a 20 muestra una alerta 
        alert("El usuario es muy largos")
        return false;  //interrumpe la ejecución del formulario 
    }
    else if(clave.length > 20){ //si el texto que se escriba en el campo es mayor a 20 muestra una alerta 
        alert("La clave es muy largos")
        return false;  //interrumpe la ejecución del formulario
    }
    else if(telefono.length > 15){ //si el texto que se escriba en el campo es mayor a 15 muestra una alerta 
        alert("El numero de telefono es muy largos")
        return false;  //interrumpe la ejecución del formulario
    }
    else if(isNaN(telefono)){  //si lo que se escriba en el  campo no es numero muestra una alerta 
        alert("Ingrese solo numeros")
        return false;  //interrumpe la ejecución del formulario
    }

    var saludo = "Bienvenido " + nombre + apellidos + " !!!. Gracias por registrarte. Tu Nombre de Usuario es: " + usuario + " y tu contraseña " + clave; //variable que concatena texto y los valores ingresados de variables espesificas, que se muestra al llenar todos los datos. 

    alert(saludo); //alerta con el contenido de la variable saludo
}