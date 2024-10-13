// Seleccionamos los elementos
const captureBtn = document.getElementById('capture-btn');
const feedbackSection = document.getElementById('feedback-section');

// Función para capturar la sección de feedback
captureBtn.addEventListener('click', () => {
    html2canvas(feedbackSection, { scale: 2 }).then(canvas => {
        // Convertimos el canvas a una imagen
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'feedback.png';  // Nombre del archivo
        link.click();  // Disparamos el evento para descargar
    });
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
