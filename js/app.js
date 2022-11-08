$(document).ready(function () {

  $(".error-email").hide();
  $(".error-password").hide();

  $(".login").click(function () {
    var email_regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}', 'i');

    $("#email").removeClass("error");
    $(".error-email").hide();
    $("#password").removeClass("error");
    $(".error-password").hide();
    
    var email = $('#email').val();
    var password = $("#password").val()
    
    if (!(email_regex.test(email))) {
      $("#email").addClass("error");
      $(".error-email").show();
    }
    if (password.length < 8) {
      $("#password").toggleClass("error");
      $(".error-password").show();
    }
    else {
      $(".right-content").empty();
      $(".right-content").append("<h2>Logged In</h2>");
    }
  });
});
