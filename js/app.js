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
navLinks.forEach((navLink,i)=>{
    navLink.addEventListener("click",()=>{
        navLinks[navLinkAfter].classList.remove("active");
        navLink.classList.add("active");
        navLinkAfter = i;
    })
})



createImgHero();