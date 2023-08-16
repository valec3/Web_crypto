console.log("hola")

document.addEventListener("scroll",()=>{
    let scrollPos = window.scrollY;
    const header = document.querySelector("#header");
    if(scrollPos>0){
        header.classList.add("header_solid")
    }else{
        header.classList.remove("header_solid")
    }
})

const navbar = document.querySelector(".nav_links");
const toggleMenu = document.querySelector(".btn_menu");
toggleMenu.addEventListener("click",()=>{
    toggleMenu.classList.toggle("active");
    navbar.classList.toggle("active");
})
window.addEventListener("scroll",()=>{
    navbar.classList.remove("active");
    toggleMenu.classList.remove("active");
})

const heroContent = document.querySelector("#hero-imgs");

function createImgHero(){
    
    for (let i = 1; i < 9; i++) {
        const containerHeroImg = document.createElement("FIGURE");
        const heroImg = document.createElement("IMG");
        heroImg.src = `./img/crypto-${i}.png`;
        containerHeroImg.appendChild(heroImg);
        heroContent.appendChild(containerHeroImg);
    }
}

const navLinks = document.querySelectorAll(".nav_link");
let navLinkAfter = 0;
// navLinks.forEach((navLink,i)=>{
//     navLink.addEventListener("click",()=>{
//         navLinks[navLinkAfter].classList.remove("active");
//         navLink.classList.add("active");
//         navLinkAfter = i;
//     })
// })

const sections = document.querySelectorAll("section");
sections.forEach((sec,i)=>{
    document.addEventListener("scroll",()=>{
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            // La sección está visible en la ventana
            navLinks[navLinkAfter].classList.remove("active");
            navLinks[i].classList.add("active");
            navLinkAfter=i;
            // Añade la clase activa correspondiente
            console.log
        }
    })
})


createImgHero();