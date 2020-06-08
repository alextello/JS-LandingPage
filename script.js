const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);

// Mostrar modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Ocultar modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// oculatr modal haciendo click afuera
window.addEventListener('click', e =>
    e.target == modal ? modal.classList.remove('show-modal') : false
);
