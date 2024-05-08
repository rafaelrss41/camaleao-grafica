function toogle(){
    let trailer  = document.querySelector('.trailer');
    let video = document.querySelector('.video');
    
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause(); 

    }