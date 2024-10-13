// Función para capturar el feedback
document.getElementById('capture-btn').addEventListener('click', function() {
    html2canvas(document.getElementById('feedback-section')).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'feedback.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

// Función para cambiar la imagen de perfil al subir una nueva
document.getElementById('upload-image').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('profile-pic');
        img.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

// Función para puntuar con estrellas
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-value'));
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
    });
});
