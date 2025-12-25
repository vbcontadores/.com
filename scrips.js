document.querySelectorAll('.menu-servicio').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    const targetId = this.getAttribute('href')
    const target = document.querySelector(targetId)

    const windowHeight = window.innerHeight
    const elementHeight = target.offsetHeight

    const offset = (windowHeight / 2) - (elementHeight / 2)
    const position = target.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: position,
      behavior: 'smooth'
    })
  })
})


const menubtn=document.getElementById("menubtn");
const  menuHorizontal=document.getElementById("menuHorizontal")
  menubtn.addEventListener("click",()=>{
  menuHorizontal.classList.toggle("active");
  if(menuHorizontal.classList.contains("active")){
    menubtn.innerHTML = "&#9776";
    menubtn.setAttribute("aria-expanded","true")
  }else{
    menubtn.innerHTML="&#9776";
    menubtn.setAttribute("aria-expanded","false")
  }
});

const menuVertical = document.getElementById("menuVertical");

btn.addEventListener("click", () => {
  menuVertical.classList.toggle("active");
});