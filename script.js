// Seleccionamos los elementos
const captureBtn = document.getElementById('capture-btn');
const feedbackSection = document.getElementById('feedback-section');

// Función para capturar la sección de feedback
// Asegúrate de importar html-to-image si lo necesitas
// import { toPng } from 'html-to-image';

captureBtn.addEventListener('click', () => {
    const feedbackSection = document.getElementById('feedback-section'); // Asegúrate de que este sea el id correcto

    // Usar html-to-image para capturar la imagen
    htmlToImage.toPng(feedbackSection, { quality: 1 }) // Puedes ajustar la calidad si es necesario
        .then(function (dataUrl) {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'feedback.png'; // Nombre del archivo
            link.click(); // Disparamos el evento para descargar
        })
        .catch(function (error) {
            console.error('Error al capturar la imagen:', error);
        });

// Función para cargar una imagen de perfil personalizada
const uploadImageInput = document.getElementById('upload-image');
const profilePic = document.getElementById('profile-pic');

uploadImageInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        profilePic.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
// Interactividad para las estrellas
const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Remover la clase 'selected' de todas las estrellas
        stars.forEach(s => s.classList.remove('selected'));
        
        // Agregar la clase 'selected' a las estrellas hasta la que fue clickeada
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
        }
    });
});
