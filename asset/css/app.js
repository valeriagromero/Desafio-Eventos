const enlace = document.createElement('A');

enlace.textContent = 'Carrito';

console.log(enlace);

enlace.href = '/carrito';

console.log(enlace);



const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);

enlace.onclick = miCarrito;
function miCarrito(){
    alert("Cargaste al carrito");
}

const texto1 = document.createElement('P');
texto1.textContent = 'actas';
texto1.classList.add('parroquiales', 'actas');

const texto2 = document.createElement('P');
texto2.textContent = 'Parroquiales';
texto2.classList.add('titulo');

const texto3 = document.createElement('P');
texto3.textContent = '€ 190 por persona';
texto3.classList.add('precio');


console.log(texto1);
console.log(texto2);
console.log(texto3);

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(texto1)
info.appendChild(texto2)
info.appendChild(texto3)

console.log(info);

const imagen = document.createElement('img');
imagen.src = './imagenes/Acta.svg';

const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => {
    console.log('click nav');
})

const d = document;

const form = d.getElementById('formulario');
form.addEventListener('submit', (e) => {

    e.preventDefault();

    const nombre = d.getElementById('nombreApellido').value;
    const correo = d.getElementById('correo').value;
    const comentario = d.getElementById('comentario').value;

    const datos = {

        nombre,
        correo,
        comentario

    }

    console.log(datos);


})