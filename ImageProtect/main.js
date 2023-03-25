let card = document.querySelector('.card');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let btn = document.querySelector('.btn');
let aHref = document.querySelector('.aHref');
let background = document.querySelector('.background');

let password = 'mesud123';
btn.addEventListener('click', checkPassword);
inputPassword.addEventListener('input',resetInputPassword);
inputEmail.addEventListener('input',resetEmailPassword);

function checkPassword() {
    let valPass = inputPassword.value;
    let valEmail = inputEmail.value;
    let atPosition = valEmail.indexOf("@");
    if (valPass === password) {
        console.log("tacna passs");
        if (valEmail.includes("@") && valEmail.includes(".") && valEmail.endsWith("com")
            && atPosition > 2 && atPosition < valEmail.length - 3) {
            showImage();
        } else {
            errorEmail();
        };
    } else {
        errorPasword();       
    };
};

function resetInputPassword() {
    inputPassword.style.border = "1px solid #333";
};

function resetEmailPassword () {
    inputEmail.style.border = "1px solid #333";
};

function showImage() {
    card.style.display = "none";
    background.style.filter = "blur(0px)";
    aHref.style.display = "block";
};

function errorPasword() {
    inputPassword.style.border = "1px solid red";
};

function errorEmail() {
    inputEmail.style.border = "1px solid red";
};