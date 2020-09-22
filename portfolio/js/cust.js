$(document).ready(function(){


//Smooth scrolling for navigation

const scrlink = $('.anchlink').click(function (e) {
  e.preventDefault();
  var target = $($(this).attr('href'));
  if (target.length) {
    var scrollTo = target.offset().top;
    $('body, html').animate({ scrollTop: scrollTo + 'px' }, 700);
  }
});

// This highlights the menu item for the current section
  const currsect = $('.navbar-nav .nav-link').click(function () {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });


// Filtering for portfolio

});