
document.addEventListener('DOMContentLoaded', ()=>{
    const header = document.querySelector('.site-header');

    if(!header) return;

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 20) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});