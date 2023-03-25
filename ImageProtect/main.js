let card = document.querySelector('.card');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let btn = document.querySelector('.btn');
let aHref = document.querySelector('.aHref');
let background = document.querySelector('.background');
let password = 'mesud123';

btn.addEventListener('click', () => {
    let passValue = inputPassword.value;
    let length = passValue.length;
    if(length <= 8){
        checkPassword(passValue);
    }
});

function checkPassword(passValue){

    if(password === passValue){
        console.log(password);
        console.log(passValue);
        showImage();
    }else{
        inputPassword.style.border = "1px solid red";
    }
};

function showImage(){
   card.style.display = "none";
   background.style.filter = "blur(0px)";
   aHref.style.display = "block";
};