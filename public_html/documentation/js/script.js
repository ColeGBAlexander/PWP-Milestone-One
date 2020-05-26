$(document).ready(function () {


  document.getElementById( elementId: "contact")
  $("#contact").validate({
    debug: true,
    errorClass: "alert alert-danger",
    errorLabelContainer: "#output-area",
    errorElement: "div",
    //rules here  define what is good or bad imput
    //each rule

    rules: {
      name: {
        required: true
      },
      email: {
        email: true,
        required: true
      },
      message: {
        required: true,
        maxLength: 2000
      }
    },
    //error message to display to the end user when rules above dont pass
    messages: {
      name: {
        required: "Please enter your name"
      },
      email: {
      required: "email is a required field",
      email: "Invalid Email"
    },
    message: {
      required: "message is required",
      maxLength: "Message is too long"
      }
    },

    submitHandler: function (form) {
      $("#contact").ajaxSubmit({
        type: "POST",
        url: $("#contact").attr("action"),
        sucsess: function (ajaxOutput){
          $("#output-area").css("display", "")
          $("#output-area").html(ajaxOutput)


          if($(".alert-success").length >= 1) {
            $("#contact")[0].reset();
          }


        }
      })

    }
  })
})