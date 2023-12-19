/* Acionando botão scrolltop */
let scrollTop = document.querySelector(".scroll-top");

/* Acionando botão scrolltop */
window.onscroll = () => {
    scrollTop.classList.toggle("active", window.scrollY > 0);
  };
  
  scrollTop.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };