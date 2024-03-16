window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0 )
})

const faqs=document.querySelectorAll('.faq');

faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        const ok = faq.querySelector('.faq__icon i');
        if(ok.className ==="fas fa-light fa-plus"){
            ok.className="fas fa-light fa-minus";
        }
        else{
            ok.className="fas fa-light fa-plus"
        }
    })
})

const menu=document.querySelector('.nav__menu');
const menuBtn=document.querySelector('#open-menu-btn');
const closeBtn=document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',()=>{
        menu.style.display="flex";
        closeBtn.style.display="inline-block"
        menuBtn.style.display="none";
})

closeBtn.addEventListener('click',()=>{
    menu.style.display="none";
    menuBtn.style.display="inline-block";
    closeBtn.style.display="none"
})
const closeNav=()=>{

}

