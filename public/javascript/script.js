$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY>16){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY>300){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
  });
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
  });
  $('.carousel').owlCarousel({
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:false
      }
    }
  })
})

// typing animation script

var typed=new Typed(".typing",{
  strings:["Front-end Developer","Back-end Developer","Designer","Programmer"],
  typeSpeed:150,
  backSpeed:80,
  loop:true
})