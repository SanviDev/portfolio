const certificados = [
    "images/certificates/diploma-ciberseguridad.pdf",
    "images/certificates/diploma-flutter.pdf",
    "images/certificates/diploma-frontend-developer.pdf",
    "images/certificates/diploma-guia-seguridad-informatica.pdf",
    "images/certificates/diploma-interfaces-android.pdf",
    "images/certificates/diploma-intro-pentesting.pdf",
    "images/certificates/diploma-kotlin.pdf",
    "images/certificates/diploma-linux.pdf",
    "images/certificates/diploma-owasp-top-10.pdf",
    "images/certificates/diploma-python-funciones.pdf",
    "images/certificates/diploma-redes.pdf",
    "images/certificates/diploma-servidores-linux.pdf",
    "images/certificates/diploma-tailwind-css-2020.pdf",
    "images/certificates/diploma-terminal.pdf"
];

const docCert = document.getElementById("viewCert");

certificados.forEach(c => {
    docCert.innerHTML += `<iframe src=/${c} frame-border="0" style="all: unset; width: 500px; height: 500px"></iframe>`
});