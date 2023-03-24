let tabs = document.querySelectorAll('.tabs-simple');
let contents = document.querySelectorAll('.tabs-content');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click', () =>{
        contents.forEach((content)=>{
            content.classList.remove('active');
        });
        tabs.forEach((tab)=>{
            tab.classList.remove('active');
        });
        tab.classList.add("active");
        contents[index].classList.add("active");
    })
})