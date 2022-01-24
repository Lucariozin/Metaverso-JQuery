$(function() {
  var documentTop = $(document).scrollTop();
  var homeSection = $('#home');
  var header = $('header');

  var nav = $('nav');
  var hamburguerButton = $('.hamburguer-button');
  var hamburguerButtonImg = $('.hamburguer-button > img');

  function headerAnimation(documentTop) {
    if (documentTop > 150 ) {
      if (header.hasClass('fixed-header')) return;

      homeSection.css('padding-top', '100px');
      header.hide().addClass('fixed-header').fadeIn(300);

      return;
    }

    homeSection.css('padding-top', '10px');
    header.removeClass('fixed-header');
  }

  function navAnimation() {
    if ($(window).width() <= 650) {
      nav.hide().addClass('fixed-nav');
      nav.removeClass('fixed-nav-animation');

      hamburguerButtonImg.attr('src', './assets/img/hamburguer-icon.png');
      hamburguerButton.fadeIn();

      return;
    }

    nav.show().removeClass('fixed-nav');
    nav.removeClass('fixed-nav-animation');

    hamburguerButton.hide();
  }

  headerAnimation(documentTop);
  navAnimation();

  $(window).scroll(debounce(function() {
    documentTop = $(document).scrollTop();
    headerAnimation(documentTop);
  }, 20));

  $(window).resize(function() {
    navAnimation();
  });

  hamburguerButton.click(function() {
    nav.show().toggleClass('fixed-nav-animation');

    if (nav.hasClass('fixed-nav-animation')) {
      hamburguerButtonImg.hide().attr('src', './assets/img/close-icon.png').fadeIn();
      return;
    }

    hamburguerButtonImg.hide().attr('src', './assets/img/hamburguer-icon.png').fadeIn();
  });

  nav.click(function() {
    nav.removeClass('fixed-nav-animation');
    hamburguerButtonImg.hide().attr('src', './assets/img/hamburguer-icon.png').fadeIn();
  });
  
});
