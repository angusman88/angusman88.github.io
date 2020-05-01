let miImage = document.querySelector(".imagen");
console.log(miImage)
miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.jpg') {
      miImage.setAttribute('src','images/firefox2.jpg');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.jpg');
    }
}

var miBoton = document.querySelector("button")
var miTitulo = document.querySelector("h1")

function estableceNombreUsuario (){

    var miNombre = prompt("por favor introduce tu nombre")
    localStorage.setItem("nombre","mi nombre")
    miTitulo.textContent= "Soy el super lince "+ miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Soy el super lince,' + nombreAlmacenado;

    miBoton.onclick = function() {
        estableceNombreUsuario();
    }
}


/// codigo funcionando ///