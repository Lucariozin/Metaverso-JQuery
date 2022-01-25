$(function() {
  var documentTop = $(document).scrollTop();
  var form = $('form');

  var inputsForm = {
    name: $("#name"),
    lastName: $("#last-name"),
    email: $("#email"),
  };

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

  form.submit(function() {
    console.log(inputsForm.email.val(), inputsForm.name.val(), inputsForm.lastName.val());
    
    inputsForm.email.val('');
    inputsForm.name.val('');
    inputsForm.lastName.val('');

    return false;
  });
  
});
