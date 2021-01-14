$(document).ready(function() {


//Smooth scrolling for navigation

const scrlink = $('.anchlink, .homelink').click(function (e) {
  e.preventDefault();
  var target = $($(this).attr('href'));
  if (target.length) {
    var scrollTo = target.offset().top - 55;
    $('body, html').animate({ scrollTop: scrollTo + 'px' }, 1000);
  }
});



// This highlights the menu item for the current section
  const currsect = $('.navbar-nav .nav-link .homelink').click(function () {
    $('.navbar-nav .nav-link .homelink').removeClass('active');
    $(this).addClass('active');
  });


//Makes the cards rotate  
$(".click-card").click(function(){
  $(this).toggleClass("flipped");
});

// Filtering for portfolio


//Typed.js - A JavaScript library by Matt Boldt




});