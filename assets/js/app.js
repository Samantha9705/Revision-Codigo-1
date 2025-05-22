const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Suponiendo que el HTML tiene estos IDs o clases correctamente definidos
const txtname = document.querySelector('#name');
const blog = document.querySelector('#blog');
const location = document.querySelector('.location');

async function displayUser(username) {
  txtname.textContent = 'Cargando...';

  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    txtname.textContent = data.name || 'Nombre no disponible';
    blog.textContent = data.blog || 'Blog no disponible';
    location.textContent = data.location || 'Ubicación no disponible';
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('¡OH NO!');
  console.log(err);
  txtname.textContent = `Algo salió mal: ${err.message}`;
}

// Llamada a la función
displayUser('stolinski');
