$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('showing');
    });

    
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  
 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

});
});

//like button
let likeBtn = document.querySelector('.like-btn');
let likeIcon =document.querySelector('#icon');
let count = document.querySelector('#count');
//button clicked
let clicked = false;
likeBtn.addEventListener("click",() => {
  if(!clicked){
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  }
  else{
    clicked=false;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent--;
  }
});




