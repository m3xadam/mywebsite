let intro = document.querySelector('.intro');
let logo =document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})

function gotoport(){
    window.location.href="portfolio.html";
}

function gotocont(){
    window.location.href='mailto:adamabdullahi559@gmail.com';
}

function gotowh(){
    window.location.href='https://wa.me/message/2S2G3QAFAMEPB1';
}