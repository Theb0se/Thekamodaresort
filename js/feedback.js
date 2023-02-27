window.addEventListener("load", () => {
  $("#reservationType").change(function () {
    let reservationType = $("#reservationType").val();

    if (reservationType === "Others") {
      $("#otherReservationInput").removeClass("d-none");
      $("#other-booking-type").attr("required", "true");
    } else {
      $("#otherReservationInput").addClass("d-none");
      $("#other-booking-type").removeAttr("required");
    }
  });

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
    // reservation type
    function type() {
      let type = $("#reservationType").val();

      if (type === "Others") {
        return $("#other-booking-type").val();
      } else {
        return $("#reservationType").val();
      }
    }

    let porpose = $("#porpose").val();
    let serviceQuality = $("#serviceQuality").val();
    let Cleanliness = $("#Cleanliness").val();
    let food = $("#food").val();
    let Staff = $("#Staff").val();
    let overAll_exp = $("#overAll_exp").val();
    let suggestion = $("#suggestion").val();

    let data = {
      name: name,
      number: number,
      checkin: checkIn_date,
      duration: duration,
      hearAbout: hear_About,
      ReservationType: type(),
      VisitPurpose: porpose,
      ServiceQuality: serviceQuality,
      Cleanliness: Cleanliness,
      Food: food,
      StaffBehaviour: Staff,
      OverallExperience: overAll_exp,
      OtherSuggestion: suggestion,
    };

    console.log(data);

    $("#exampleModal").modal("show");
    let loacl = "http://localhost:8080/feedback";
    let server = "https://brown-adder-coat.cyclic.app/feedback";

    // axios
    axios
      .post(server, data)
      .then(function (response) {
        $("#loading").hide();
        $("#successMsg").removeClass("d-none");
        $("#closeBtn").removeClass("d-none");
      })
      .catch(function (error) {
        console.log("Oops... " + JSON.stringify(error));
        $("#loading").hide();
        $("#errMsg").removeClass("d-none");
        $("#closeBtn").removeClass("d-none");
      });
  });
});
