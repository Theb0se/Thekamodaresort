window.addEventListener("load", () => {
  $("#form").submit(function (e) {
    $("#successMsg").addClass("d-none");
    $("#loading").show();
    $("#errMsg").addClass("d-none");
    $("#closeBtn").addClass("d-none");
    e.preventDefault();

    var name = $("#user_name").val();
    let number = $("#number").val();
    let checkIn_date = $("#checkin").val();
    let duration = $("#duration").val();
    let hear_About = $("#hear_About").val();
    let reservationType = $("#reservationType").val();
    let porpose = $("#porpose").val();
    let serviceQuality = $("#serviceQuality").val();
    let Cleanliness = $("#Cleanliness").val();
    let food = $("#food").val();
    let Staff = $("#Staff").val();
    let overAll_exp = $("#overAll_exp").val();
    let suggestion = $("#suggestion").val();

    let data = {
      name,
      number,
      checkIn_date,
      duration,
      hear_About,
      reservationType,
      porpose,
      serviceQuality,
      Cleanliness,
      food,
      Staff,
      overAll_exp,
      suggestion,
    };

    console.log(data);

    //   var data = {
    //     service_id: "service_bae5ruq",
    //     template_id: "template_ux3z35u",
    //     user_id: "Vkvlz1IH93sFNaoDG",
    //     template_params: {
    //       user_name: name,
    //       subject: sub,
    //       user_number: number,
    //       message: msg,
    //     },
    //   };
    //   console.log(data);

    //   $("#exampleModal").modal("show");

    //   $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    //     type: "POST",
    //     data: JSON.stringify(data),
    //     contentType: "application/json",
    //   })
    //     .done(function () {
    //       $("#loading").hide();
    //       $("#successMsg").removeClass("d-none");
    //       $("#closeBtn").removeClass("d-none");
    //       $("#user_name").val("");
    //       $("#subject").val("");
    //       $("#email").val("");
    //       $("#message").val("");
    //     })
    //     .fail(function (error) {
    //       console.log("Oops... " + JSON.stringify(error));
    //       $("#loading").hide();
    //       $("#errMsg").removeClass("d-none");
    //       $("#closeBtn").removeClass("d-none");
    //     });
  });
});
