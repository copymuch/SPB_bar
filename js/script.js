let bttns = document.querySelectorAll('.aside-bttn');
let block = document.querySelector('.aside__covers');
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let covers = document.querySelectorAll('.cover img');

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


let reservBttns = document.querySelectorAll('.reserv-bttn');
let closeBttn = document.querySelector('.close-bttn');
let popUp = document.querySelector('.pop-up');
let popUpBg = document.querySelector('.fullpage');


closeBttn.onclick = function() {
    body.classList.toggle('fixed-page');
    popUpBg.classList.toggle('active');
    popUp.classList.toggle('active');
}

reservBttns.forEach((reservBttn)=> {
    reservBttn.onclick = function() {
        body.classList.toggle('fixed-page');
        popUpBg.classList.toggle('active');
        popUp.classList.toggle('active');
    }
})

let riderItems = document.querySelectorAll('.equip__item');
let riderTexts = document.querySelectorAll('.equip__text-content');
let riderArrows  = document.querySelectorAll('.arrow');


riderItems.forEach((riderItem)=> {
    riderItem.addEventListener('click', arrowClick);
    let riderId = riderItem.getAttribute('id');

    function arrowClick() {
        switch(riderId) {
            case 'item1':
                this.classList.toggle('active');
                riderArrows[0].classList.toggle('rotate');
                riderTexts[0].classList.toggle('active');
                break;
            case 'item2':
                this.classList.toggle('active');
                riderArrows[1].classList.toggle('rotate');
                riderTexts[1].classList.toggle('active');
                break;
            case 'item3':
                this.classList.toggle('active');
                riderArrows[2].classList.toggle('rotate');
                riderTexts[2].classList.toggle('active');
                break;
            case 'item4':
                this.classList.toggle('active');
                riderArrows[3].classList.toggle('rotate');
                riderTexts[3].classList.toggle('active');
                break;
            case 'item5':
                this.classList.toggle('active');
                riderArrows[4].classList.toggle('rotate');
                riderTexts[4].classList.toggle('active');
                break;
            case 'item6':
                this.classList.toggle('active');
                riderArrows[5].classList.toggle('rotate');
                riderTexts[5].classList.toggle('active');
                break;
        }
    }
});


