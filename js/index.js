(function() {
    "use strict"

    document.addEventListener('DOMContentLoaded', () => {

        //mapa 
        var map = L.map('mapa').setView([-34.581143, -58.41362], 17);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([-34.581143, -58.41362]).addTo(map)
            .bindPopup('Linea.')
            .openPopup();


        //formulario
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');


        const error = document.getElementsByClassName('error');
        const errorCorreo = document.getElementById('errorEmail');

        nombre.addEventListener('blur', validacion);
        apellido.addEventListener('blur', validacion);
        telefono.addEventListener('blur', validacion);
        email.addEventListener('blur', validarMail);

        function validacion() {
            if (this.value === '') {
                this.style.border = '2px solid red';
                error.style.marginTop = '0';
                this.style.marginBottom = '0';
            } else {
                this.style.border = 'none';
            }
        };

        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                errorEmail.style.display = 'none';
                this.style.border = 'none';
            } else {
                errorEmail.style.display = 'block';
                this.style.border = '1px solid red';
            }
        };

        registro.addEventListener('submit', (e) => {
            e.preventDefault();
        }); //no pasa nada si envio. quitar para usar php

    }); //DOM Content Loaded

    //menu responsivo
    $('.mobile-menu').click(function(){ 
        $('.navegacion').slideToggle();
        console.log('hola, antonio');
    });
    $('#nav').click(function(){ 
        $('.navegacion').slideToggle();
        console.log('hola, jose');
    });
})();