window.addEventListener("load", () => {
  $("#form").submit(function (e) {
    $("#successMsg").addClass("d-none");
    $("#loading").show();
    $("#errMsg").addClass("d-none");
    $("#closeBtn").addClass("d-none");

    e.preventDefault();

    var name = $("#user_name").val();
    let sub = $("#subject").val();
    let email = $("#email").val();
    let msg = $("#message").val();

    var data = {
      service_id: "service_fwrt9js",
      template_id: "template_my78pow",
      user_id: "Vkvlz1IH93sFNaoDG",
      template_params: {
        user_name: name,
        subject: sub,
        user_email: email,
        message: msg,
      },
    };bhftih
    console.log(data);

    $("#staticBackdrop").modal("show");

    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        $("#loading").hide();
        $("#successMsg").removeClass("d-none");
        $("#closeBtn").removeClass("d-none");
        $("#user_name").val("");
        $("#subject").val("");
        $("#email").val("");
        $("#message").val("");
      })
      .fail(function (error) {
        console.log("Oops... " + JSON.stringify(error));
        $("#loading").hide();
        $("#errMsg").removeClass("d-none");
        $("#closeBtn").removeClass("d-none");
      });
  });
});
