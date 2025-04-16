const certificados = [
    "images/certificates/diploma-ciberseguridad.webp",
    "images/certificates/diploma-flutter.webp",
    "images/certificates/diploma-frontend-developer.webp",
    "images/certificates/diploma-guia-seguridad-informatica.webp",
    "images/certificates/diploma-interfaces-android.webp",
    "images/certificates/diploma-intro-pentesting.webp",
    "images/certificates/diploma-kotlin.webp",
    "images/certificates/diploma-linux.webp",
    "images/certificates/diploma-owasp-top-10.webp",
    "images/certificates/diploma-python-funciones.webp",
    "images/certificates/diploma-redes.webp",
    "images/certificates/diploma-servidores-linux.webp",
    "images/certificates/diploma-tailwind-css-2020.webp",
    "images/certificates/diploma-terminal.webp"
];


const docCert = document.getElementById("viewCert");

certificados.forEach(c => {
    docCert.innerHTML += `<img src=/${c} frame-border="0" style="all: unset; width: 560px; height: 500px"></img>`
});