//Shrinking Header on Scroll
 window.addEventListener('scroll', function(){

   const target = document.querySelector('header');
   var sticky = target.offsetTop + 100;

     if (window.pageYOffset > sticky) {
       target.classList.add('sticky');
     } else {
       target.classList.remove('sticky');
     }

});

//Scroll & Parallax Function
window.addEventListener('scroll', function() {

  const target = document.querySelector('.lax');

  var scrolled = window.pageYOffset;
  var rate = scrolled * .35;

    if (target){
      target.style.transform = 'translate3D(0px, '+rate+'px, 0px)';
    }

});

//Fade in when in view Function
const inViewport = (entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is_inview", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
  threshold: 1
};

// Attach observer to every [data-inview] element:
const ELs_inViewport = document.querySelectorAll('[data]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});


//Anfrage Mietverwaltung Form Opener
window.onload = function(){

  var btnAnfrage = document.querySelector("#mietverwaltungAnfrage");
  var formAnfrage = document.querySelector(".mietverwaltung_form");

  btnAnfrage.onclick = function(){
    formAnfrage.classList.toggle("anfrage")
  }
};


//Vorteile box Click Function
document.onload = function(){

  var container = document.querySelector("#vorteile_box");

  var content = document.querySelector("#vorteile_content");
  var allgemeineContent = content.querySelector(".allgemeine");
  var kaufmaennischeContent = content.querySelector(".kaufmaennische");
  var technischeContent = content.querySelector(".technische");


  var allgemeineBtn = container.querySelector(".allgemeineBtn");
  var kaufmaennischeBtn = container.querySelector(".kaufmaennischeBtn");
  var technischeBtn = container.querySelector(".technischeBtn");

  allgemeineBtn.onclick = function(){
    kaufmaennischeBtn.classList.remove("active")
    technischeBtn.classList.remove("active")
    this.classList.add("active")

    allgemeineContent.classList.add("active")
    kaufmaennischeContent.classList.remove("active")
    technischeContent.classList.remove("active")
  }

  kaufmaennischeBtn.onclick = function(){
    allgemeineBtn.classList.remove("active")
    technischeBtn.classList.remove("active")
    this.classList.add("active")

    kaufmaennischeContent.classList.add("active")
    allgemeineContent.classList.remove("active")
    technischeContent.classList.remove("active")
  }

  technischeBtn.onclick = function(){
    allgemeineBtn.classList.remove("active")
    kaufmaennischeBtn.classList.remove("active")
    this.classList.add("active")

    technischeContent.classList.add("active")
    allgemeineContent.classList.remove("active")
    kaufmaennischeContent.classList.remove("active")
  }
};


import 'navigation.js'
