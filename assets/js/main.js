$(function () {
  var documentTop = $(document).scrollTop();
  var allSections = $('.section');

  function sectionAnimation(documentTop) {
    var offset = $(window).height() * (3 / 4);

    allSections.each(function() {
      var itemTop = $(this).offset().top;

      var title = $(this).children('h2');
      var leftAnimationElement = $(this).find('.left-animation');
      var rightAnimationElement = $(this).find('.right-animation');

      if (documentTop > itemTop - offset) {
        title.addClass('title-animation');
        leftAnimationElement.addClass('left-animation-start');
        rightAnimationElement.addClass('right-animation-start');

        return;
      }

      leftAnimationElement.removeClass('left-animation-start');
      title.removeClass('title-animation');
      rightAnimationElement.removeClass('right-animation-start');
    });
  }

  sectionAnimation(documentTop);

  $(window).scroll(debounce(function() {
    documentTop = $(document).scrollTop();
    sectionAnimation(documentTop);
  }, 50));
  
});
