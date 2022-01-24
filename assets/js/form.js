$(function() {
  var documentTop = $(document).scrollTop();
  var form = $('form');

  var inputName = $('#name');
  var inputNameValue = inputName.val();

  var inputLastName = $('#last-name');
  var inputLastNameValue = inputLastName.val();

  var inputEmail = $('#email');
  var inputEmailValue = inputEmail.val();

  function formAnimation(documentTop) {
    var offset = $(window).height() * (3 / 4);
    var formTop = form.offset().top;

    if (documentTop > formTop - offset) {
      form.addClass('left-animation-start');
      return;
    }

    form.removeClass('left-animation-start');
  }

  formAnimation(documentTop);

  $(window).scroll(debounce(function() {
    documentTop = $(document).scrollTop();
    formAnimation(documentTop);
  }, 50));

  inputName.keyup(function() { inputNameValue = inputName.val() });

  inputLastName.keyup(function() { inputLastNameValue = inputLastName.val() });

  inputEmail.keyup(function() { inputEmailValue = inputEmail.val() });

  form.submit(function() {
    console.log(inputEmailValue, inputNameValue, inputLastNameValue);
    
    inputEmail.val('');
    inputName.val('');
    inputLastName.val('');

    return false;
  });
  
});
