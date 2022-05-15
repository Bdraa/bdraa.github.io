let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

// Reviews Swiper
var swiper = new Swiper(".review-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Email HS
  function validate() {
      let name = document.querySelector(".name");
      let Email = document.querySelector(".email");
      let msg = document.querySelector(".message");
      let sendBtn = document.querySelector(".send-btn");

      sendBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if(name.value == "" || Email.value == "" || msg.value == ""){
              emptyerror();
          } else{
              sendmail (name.value, Email.value, msg.value);
              success();
          }
      });
  }
  validate();

  function sendmail(name,email,msg){
    emailjs.send("service_2x5b1xc","template_otmgnza",{
        to_name: name,
        from_name: email,
        message: msg,
        });
  }

  function emptyerror() {
    swal("Please Check Again!", "Fields cannot be Empty!", "error");
  }
  function success() {
    swal("Sent, Hurray!", "I will try to reply in 24 hours. Thank you.", "success");
  }

//   Header background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY> 0);
});

// HI

anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});