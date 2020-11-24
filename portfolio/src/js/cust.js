$(document).ready(function() {


//Smooth scrolling for navigation

const scrlink = $('.anchlink').click(function (e) {
  e.preventDefault();
  var target = $($(this).attr('href'));
  if (target.length) {
    var scrollTo = target.offset().top - 55;
    $('body, html').animate({ scrollTop: scrollTo + 'px' }, 1500);
  }
});



// This highlights the menu item for the current section
  const currsect = $('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });


//Makes the cards rotate  
$(".click-card").click(function(){
  $(this).toggleClass("flipped");
});

// Filtering for portfolio

});