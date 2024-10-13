// Seleccionamos los elementos
const captureBtn = document.getElementById('capture-btn');
const feedbackSection = document.getElementById('feedback-section');

// Función para capturar la sección de feedback
captureBtn.addEventListener('click', () => {
    html2canvas(feedbackSection, { scale: 10 }).then(canvas => {
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
captureBtn.addEventListener('click', () => {
    html2canvas(feedbackSection, {
        scale: 3,  // Aumenta la escala para mejorar la resolución
        useCORS: true,  // Para evitar problemas con imágenes externas
        allowTaint: true  // Esto evitará que algunas imágenes generen problemas
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'feedback.png';
        link.click();
    });
});
    // Aquí manejas el canvas
});

