console.log("hola")


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

createImgHero();