const hamburger = document.querySelector('.header .nav-bar .nav-list .menu-bar .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header_menu = document.querySelector('.header .nav-bar .nav-list .menu-bar .menu');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    header_menu.classList.toggle('active');
});

//Service Cards
//Show hidden service card (info card)
let showCard1 = document.getElementsByClassName("card1");
let showCard2 = document.getElementsByClassName("card2");
let showCard3 = document.getElementsByClassName("card3");
let showCard4 = document.getElementsByClassName("card4");

//Show Card
function showReview1() {
    for(card1 of showCard1) {
        card1.classList.remove("cardInfo1");
    }
}
function showReview2() {
    for(card2 of showCard2) {
        card2.classList.remove("cardInfo2");
    }
}
function showReview3() {
    for(card3 of showCard3) {
        card3.classList.remove("cardInfo3");
    }
}
function showReview4() {
    for(card4 of showCard4) {
        card4.classList.remove("cardInfo4");
    }
}

//Minimize Card
function minReview1() {
    for(min of showCard1) {
        min.classList.toggle("cardInfo1");
    }
}
function minReview2() {
    for(min2 of showCard2) {
        min2.classList.toggle("cardInfo2");
    }
}
function minReview3() {
    for(min3 of showCard3) {
        min3.classList.toggle("cardInfo3");
    }
}
function minReview4() {
    for(min4 of showCard4) {
        min4.classList.toggle("cardInfo4");
    }
}
//End Service Cards