const panels = document.querySelectorAll('.panel');

panels.forEach (panel => {
    panel.addEventListener('click', ()=>{
        clickActive();
         if(panel){
            panel.classList.add('active');
         }
    })
})

const clickActive = function () {
    panels.forEach( panel =>{
        panel.classList.remove('active');
    })
}
