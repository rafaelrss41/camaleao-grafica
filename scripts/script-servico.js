let stars = document.getElementById('stars');
let moon1 = document.getElementById('moon1');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', ()=>{

    let value = scrollY;

    stars.style.left = value * 0.5 + 'px';
    moon1.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top =value * 0.5 + 'px';

});