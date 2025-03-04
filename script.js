/* Menu hamburguesa*/

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuContainer = document.querySelector('.menu-container');

    menuToggle.addEventListener('click', function() {
        menuContainer.classList.toggle('active');
    });
});


/* Validación de formulario */
document.querySelector('form').addEventListener('submit', function(event) {
    const inputs = document.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = '#a80000'; /* Color rojo de Microsoft Fluent Design */
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Por favor, completa todos los campos requeridos.');
    }
});