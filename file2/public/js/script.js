const menuIcon  = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const navbar    = document.querySelector(".navbar");
const header    = document.querySelector("#header");

document.addEventListener("DOMContentLoaded", () => {

    menuIcon.addEventListener("click", () => {
      menuIcon.style.display  = "none";
      closeIcon.style.display = "block";
      header.classList.toggle("bg");
      navbar.classList.toggle("active");
    });
  
    closeIcon.addEventListener("click", () => {
      closeIcon.style.display = "none";
      menuIcon.style.display  = "block";
      header.classList.toggle("bg");
      navbar.classList.remove("active");
    });

    window.onscroll = () =>{
        navbar.classList.remove("active");
        // closeIcon.style.display = "none";
        // menuIcon.style.display  = "block";
    };
  });  

  //Scroll: 
document.addEventListener("scroll", () => {
    let header = document.querySelector('.header');

    if(window.scrollY > 30){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// let header = document.querySelector("#header");

// // Navbar:
// menu.addEventListener("click", ()=>{
//     navbar.classList.toggle("active");
// });

// menu.addEventListener("click", ()=>{
//     header.classList.toggle("bg");
// });

// window.onscroll = () =>{
//     navbar.classList.remove("active");
// };
