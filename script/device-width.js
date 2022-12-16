const navbar= document.getElementById('nav-bar-id')
const navbarM= document.getElementById('nav-bar-id-m')
const heroPageR= document.getElementById('hero-page-right-side-id')
var width= window.innerWidth;
if(width<820)
{
    navbar.style.display= "none";
    navbarM.style.display="block";
    heroPageR.style.display="none";
}
else{
    navbar.style.display="block";
    heroPageR.style.display="flex";
    navbarM.style.display="none";
}
let scrollTop = window.scrollY;
    window.addEventListener('scroll',function(){
        if(scrollTop < this.window.scrollY)
        {
            navbar.style.top = '-100vh';
            navbarM.style.bottom= '-100vh';
        }
        else{
            navbar.style.top="0%";
            navbarM.style.bottom="0%";
        }
        scrollTop =window.scrollY;
    })