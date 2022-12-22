document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    darkMode();
})

function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('nav.navegacion');
    if (navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar')
    } else { 
        navegacion.classList.add('mostrar')
    }
    //otra forma de hacerlo
    //navegacion.classList.toggle('mostrar')
}

function darkMode() {
    let botonDarkMode = document.querySelector('.dark-mode-boton');
    botonDarkMode.addEventListener('click', (function () {
        document.body.classList.toggle('dark-mode')
    })
    
    )
}