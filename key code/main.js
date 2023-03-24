const textAr = document.querySelector('#textarea');
const total = document.querySelector('.total');
const remaing  = document.querySelector('.remaing');

textAr.addEventListener('keyup', () => {
    updateCounter();
})

const updateCounter = function () {
    total.innerHTML = textAr.value.length;
    remaing.innerHTML = textAr.getAttribute('maxlength') - textAr.value.length;
}