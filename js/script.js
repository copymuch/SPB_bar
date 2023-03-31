let bttns = document.querySelectorAll('.aside-bttn');
let block = document.querySelector('.aside__covers');
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let covers = document.querySelectorAll('.cover img');
let reservBttn = document.querySelector('.reserv-bttn');


let closeBttn = document.querySelector('.close-bttn');
let popUp = document.querySelector('.pop-up');
let popUpBg = document.querySelector('.fullpage');

bttns.forEach((bttn) => {
    bttn.onclick = function() {
        id = bttn.getAttribute('id');
        if (id == 'b1') {
            div1.style.background = 'rgba(213, 98, 29, 0.07)';
            div2.style.background = 'rgba(213, 98, 29, 0.05)';
            covers.forEach((cover)=>{
                cover.style.filter = 'blur(0)';
            })
        } else {
            div1.style.background = 'rgba(213, 98, 29, 0.05)';
            div2.style.background = 'rgba(213, 98, 29, 0.07)';
            covers.forEach((cover)=>{
                cover.style.filter = 'blur(7px)';
            })
        }
    }
})

closeBttn.onclick = function() {
    body.classList.toggle('fixed-page');
    popUpBg.classList.toggle('active');
    popUp.classList.toggle('active');
}


reservBttn.onclick = function() {
    body.classList.toggle('fixed-page');
    popUpBg.classList.toggle('active');
    popUp.classList.toggle('active');
}