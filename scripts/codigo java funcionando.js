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





/// codigo funcionando ///