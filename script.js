document.addEventListener('DOMContentLoaded', () => {
  const feedbackSection = document.getElementById('feedback-section');
  const captureBtn = document.getElementById('capture-btn');
  const uploadInput = document.getElementById('upload-image'); // Input para subir imágenes
  const profilePic = document.getElementById('profile-pic'); // Imagen de perfil
  const stars = document.querySelectorAll('.star'); // Estrellas de puntuación

  // Función para capturar la sección de feedback
  captureBtn.addEventListener('click', () => {
    setTimeout(() => {
      domtoimage.toPng(feedbackSection)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'feedback.png'; // Nombre del archivo descargado
          link.click(); // Activa la descarga
        })
        .catch((error) => {
          console.error('Error al capturar la imagen:', error);
        });
    }, 500); // Retraso para asegurar que todo se ha renderizado correctamente
  });

  // Función para gestionar la puntuación con estrellas
  if (stars.length > 0) {
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('selected')); // Remueve la clase seleccionada de todas las estrellas
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('selected'); // Marca las estrellas hasta la seleccionada
        }
      });
    });
  } else {
    console.error('No se encontraron estrellas.');
  }

  // Función para subir imágenes y colocarlas en el círculo de perfil
  if (uploadInput) {
    uploadInput.addEventListener('change', (event) => {
      const file = event.target.files[0]; // Obtiene el archivo subido
      const reader = new FileReader();

      if (file) {
        reader.readAsDataURL(file); // Lee el archivo como una URL de datos
        reader.onload = () => {
          profilePic.src = reader.result; // Asigna la imagen subida al elemento de imagen de perfil
        };
      } else {
        console.error('No se seleccionó ningún archivo.');
      }
    });
  } else {
    console.error('Elemento de subida de imágenes no encontrado.');
  }
});
