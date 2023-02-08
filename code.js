const myOpen = document.querySelector(".open");
const myClose = document.querySelector(".close");
const barreMenu = document.querySelector(".menu");

myOpen.addEventListener("click", ()=>{
barreMenu.style.transform = "translateY(380px)";
barreMenu.style.transition = "0.9s";
myOpen.style.zIndex = "-1";
myClose.style.zIndex = "1";
myClose.style.opacity = "0";
myOpen.style.opacity = "1";
});
myClose.addEventListener("click", ()=>{
    barreMenu.style.transform = "translateY(-380px)";
    barreMenu.style.transition = "0.9s";
    myClose.style.zIndex = "-1";
    myOpen.style.zIndex = "1";
    myClose.style.opacity = "1";
    myOpen.style.opacity = "0";
    });
