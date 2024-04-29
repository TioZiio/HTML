/*Menu site*/
let menu = document.querySelector(".menuLinks");
let menuDois = document.querySelector("meubtn");

menuDois.onclick =() =>{
    menu.classList.toggle('active');

}
/* Scroll*/
window.onscroll = () =>{
  let toopSite = document.querySelector("header");

  toopSite.classList.toggle('sticky', window.scrollY > 100);
}

/*slide destaque @mateusviniciusoliveira00@gmail.com/mateusmdmmt@gmail.com*/
var swiper = new Swiper(".msSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* Inicio contador freelancer mateusmdmmt@gmail.com*/
  let campoConta = document.querySelectorAll('.numero');

  let intervalo = 1000;

  campoConta.forEach((campoConta) =>{
    let valorInicial = 0;
    
    let finalValor = parseInt(campoConta.getAttribute("tlts-c-valor"));

    let duracao = Math.floor(intervalo/finalValor);

    let contador = setInterval(function (){
      valorInicial += 1;

      campoConta.texContent = valorInicial;

      if(valorInicial == finalValor){
        clearInterval(contador);
      }
      }, duracao);

    


  }); 
  /* Fim contador freelancer mateusmdmmt@gmail.com*/

  /*slide depoimentos @mateusviniciusoliveira00@gmail.com/mateusmdmmt@gmail.com*/
var swiper = new Swiper(".meusDepoimentos", {
 slidesPerView:1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints:{
    640:{
      slidesPerView:1,
  spaceBetween: 10,
    },
    768:{
      slidesPerView:2,
  spaceBetween: 40,
    },
    1024:{
      slidesPerView:3,
  spaceBetween: 50,
    },

  },

});