 var loading = document.getElementById("loading");
 window.addEventListener('load', function () {
    loading.style.display = "none";
});

// rotate navbar
$(".nav-kecil").click(function(){
    $(this).toggleClass("down")
})

// navbar 
const humberger = document.querySelector('.nav-kecil');
const navLink = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar li');

humberger.addEventListener("click", () => {
    navLink.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

// smooth scroll
//const body = document.body,
//    scrollWarp = document.getElementsByClassName("badan")[0],
//    height = scrollWarp.getBoundingClientRect().height - 1,
  //  speed = 0.2;

//var offset = 0;

//body.style.height = Math.floor(height) + "px";

//function smoothScroll() {
//    offset += (window.pageYOffset - offset) * speed;translateZ
//
//    var scroll = "translateY(-" + offset + "px) (0)";
//   scrollWarp.style.transform = scroll;
//
//    callscroll = requestAnimationFrame(smoothScroll);
//}
//smoothScroll();

// pop up navbar 
 var atasScroll = window.pageYOffset;
 window.onscroll = function () {
    var agakBawahScroll = window.pageYOffset;
    if (atasScroll > agakBawahScroll) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-320vw";
    }
    atasScroll = agakBawahScroll;
}

// scroll top 
const toTop = document.querySelector(".keatas");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
});

// klik navbar to content
const contentClick = (value) => {
    const komponen = document.getElementById(`content${value}`);
    komponen.scrollIntoView();
};

//scroll hiasan 
let scrollKanan;
window.onload = () => {
    scrollKanan = document.getElementById("myScroll");
}

window.onscroll = () => {
    const panjang = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const presentasi = (window.scrollY / panjang) * 100;
    scrollKanan.style.width = presentasi + '%';
}

// doc tampil scroll
function PopDocument() {
    var bidang1 = document.querySelector('.dokumentasi1');
    var StartBidang = bidang1.getBoundingClientRect().top;
    var ScreenBidang  = window.innerHeight;

    if (StartBidang <= ScreenBidang){
        bidang1.classList.add('dokumen-aktif')
    } else {
        bidang1.classList.remove('dokumen-aktif');
    }
}

function PopDocument2() {
    var bidang1 = document.querySelector('.dokumentasi2');
    var StartBidang = bidang1.getBoundingClientRect().top;
    var ScreenBidang  = window.innerHeight;

    if (StartBidang <= ScreenBidang){
        bidang1.classList.add('dokumen-aktif2')
    } else {
        bidang1.classList.remove('dokumen-aktif2');
    }
}

function PopDocument3() {
    var bidang1 = document.querySelector('.dokumentasi3');
    var StartBidang = bidang1.getBoundingClientRect().top;
    var ScreenBidang  = window.innerHeight;

    if (StartBidang <= ScreenBidang){
        bidang1.classList.add('dokumen-aktif3')
    } else {
        bidang1.classList.remove('dokumen-aktif3');
    }
}

function PopDocument4() {
    var bidang1 = document.querySelector('.dokumentasi4');
    var StartBidang = bidang1.getBoundingClientRect().top;
    var ScreenBidang  = window.innerHeight;

    if (StartBidang <= ScreenBidang){
        bidang1.classList.add('dokumen-aktif4')
    } else {
        bidang1.classList.remove('dokumen-aktif4');
    }
}

window.addEventListener('scroll', PopDocument);
window.addEventListener('scroll', PopDocument2);
window.addEventListener('scroll', PopDocument3);
window.addEventListener('scroll', PopDocument4); 
