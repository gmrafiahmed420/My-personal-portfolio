// navbar javascript start--------------------------------

let navList = document.querySelector('#navbarSupportedContent').querySelectorAll('a');

navList.forEach(element => {
    element.addEventListener("click", function(){
        navList.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
})


window.addEventListener('scroll', function(){
    let navBar = document.querySelector('.navbar ');
    navBar.classList.toggle('sticky', window.scrollY > 50);
})


// navbar javascript start--------------------------------





// social links javascript start--------------------------------

window.addEventListener('scroll', function(){
    let socialLink = document.querySelector('.social_links');
    socialLink.classList.toggle('active', window.scrollY > 9000);
})

// social links javascript start--------------------------------




// top-botton arrow javascript start--------------------------------

window.addEventListener('scroll', function(){
    let socialLinks = document.querySelector('.top_arrow');
    socialLinks.classList.toggle('active', window.scrollY > 9000);
})

window.addEventListener('scroll', function(){
    let bottomArrow = document.querySelector('.bottom_arrow');
    bottomArrow.classList.toggle('active', window.scrollY > 9000);
})

// top-botton arrow javascript start--------------------------------






// resume area javascipts start---------------------------------



// $(function(){
//     $("#education a").on('click',function(e){
//         e.preventDefault();
//         $(this).tab("show");
//     })
// })


let resume_a = document.querySelector('.resume_content_btn').querySelectorAll('a');

resume_a.forEach(element => {
    element.addEventListener("click", function(){
        resume_a.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
})


$(document).ready(function(){
    $('.resume_content_btn li a').click(function(){
         var tab_id = $(this).attr('data-tab')
         $('.resume_content_btn li a').removeClass('active')
         $('.tab-data').removeClass('active')
         $(this).addClass('active')
         $("#"+tab_id).addClass('active')
    })
})

// let tab_header = document.getElementsByClassName("tab_header")[0];

// let tab_indicator = document.getElementsByClassName("tab_indicator")[0];

// let tab_body = document.getElementsByClassName("tab_body")[0];

// let tabsPane = tab_header.getElementsByTagName("div");

// for(let i=0; i<tabsPane.length; i++){
//     tabsPane[i].addEventListener("click", function(){
//         tab_header.getElementsByClassName("active")
//         [0].classList.remove("active");

//         tabsPane[i].classList.add("active");
//         tab_body.getElementsByClassName("active")
//         [0].classList.remove("active");

//         tab_body.getElementsByTagName("div")
//         [i].classList.add("active");

//         tab_indicator.style.left = `calc(calc(100% / 4) * ${i})`;
//     });
// }
// resume area javascipts start---------------------------------




// pricing.forEach(element => {
//     element.addEventListener("click", function(){
//         pricing.forEach(nav=>nav.classList.remove("active"))

//         this.classList.add("active");
//     })
// })

// var slide = document.getElementById('slide');
// var arrow = document.getElementById('arrow');
// var arrow2 = document.getElementById('arrow2');

// let x = 0;

// arrow.onclick = function(){
//     x = x - 600;
//     slide.style.top = x + "px"
// }

// navbar javascript end

// let typed = new Typed('.typingText', {
//     strings: ["Developer.", "Professional Coder..."],
//     typeSpeed: 70,
//     backSpeed: 70,
//     loop: true
// }) 

// pricing_area javascript start

let pricing_area = document.querySelector('.pricing_btn').querySelectorAll('a');

pricing_area.forEach(element => {
    element.addEventListener("click", function(){
        pricing_area.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
})


$(document).ready(function(){
    $('.pricing_btn li a').click(function(){
         var price_id = $(this).attr('data-tab')
         $('.pricing_btn li a').removeClass('active')
         $('.price-data').removeClass('active')
         $(this).addClass('active')
         $("#"+price_id).addClass('active')
    })
})


// pricing_area javascript end