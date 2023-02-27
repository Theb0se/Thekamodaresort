const exec = $("#execBtn");
const premiumClub = $("#premiumClubBtn");
const familyClub = $("#familyClubBtn");
const kamodaSuit = $("#kamodaSuitBtn");
let yourDate = new Date();
let min = yourDate.toISOString().split("T")[0];

//setting room type
exec.click(function () {
  $("#roomType").val("Executive Room");
  $("#successMsg").hide();
  $("#errorMsg").hide();
  $("#fill").hide();
  $("#arivalDate").attr({ min: min });
  $("#depDate").attr({ min: min });
});

premiumClub.click(function () {
  $("#roomType").val("Premium Club Room");
  $("#successMsg").hide();
  $("#errorMsg").hide();
  $("#fill").hide();
  $("#arivalDate").attr({ min: min });
  $("#depDate").attr({ min: min });
});

familyClub.click(function () {
  $("#roomType").val("Family Club Room");
  $("#successMsg").hide();
  $("#errorMsg").hide();
  $("#fill").hide();
  $("#arivalDate").attr({ min: min });
  $("#depDate").attr({ min: min });
});

kamodaSuit.click(function () {
  $("#roomType").val("The Kamoda Suite Room");
  $("#successMsg").hide();
  $("#errorMsg").hide();
  $("#fill").hide();
  $("#arivalDate").attr({ min: min });
  $("#depDate").attr({ min: min });
});

$("#BookNow").click(function () {
  const type = $("#roomType").val();
  const userName = $("#user_name").val();
  const number = $("#number").val();
  const arival = $("#arivalDate").val();
  const departure = $("#depDate").val();
  const numberOfGuests = $("#numberOfGuests").val();
  const email = $("#email").val();

  var data = {
    service_id: "service_bae5ruq",
    template_id: "template_cp4dkfe",
    user_id: "Vkvlz1IH93sFNaoDG",
    template_params: {
      user_name: userName,
      user_number: number,
      user_email: email,
      room_type: type,
      arrival: arival,
      Departure: departure,
      number_guests: numberOfGuests,
    },
  };

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  $("#successMsg").hide();

  if (
    !type ||
    !userName ||
    !number ||
    !arival ||
    !departure ||
    !numberOfGuests
  ) {
    $("#fill").show();
  } else if (email && !email.match(mailformat)) {
    $("#fill").show();
    $("#fill").text("Please Enter Correct Email Address!");
  } else {
    $("#successMsg").hide();
    $("#errorMsg").hide();
    $("#fill").hide();
    $("#loading").show();

    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        $("#loading").hide();
        $("#successMsg").show();
        $("#user_name").val("");
        $("#number").val("");
        $("#arivalDate").val("");
        $("#depDate").val("");
        $("#numberOfGuests").val("");
        $("#email").val("");
      })
      .fail(function (error) {
        $("#loading").hide();
        $("#errorMsg").show();
        console.log(error);
      });
  }
});
