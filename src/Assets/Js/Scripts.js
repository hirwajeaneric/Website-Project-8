/*Sticky header*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('nav');
    nav.classList.toggle('sticky', windows.scrolly>0);
});