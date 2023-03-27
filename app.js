const btn = document.querySelector('.compartir');
const ventana = document.querySelector('.ventana');

btn.addEventListener('click', ()=>{
    ventana.classList.toggle('mostrar')
    btn.classList.toggle('mostrar')
});