$(document).ready(function () {
  // home bg
  const dt = JSON.parse(sessionStorage.getItem("bg"));
  const popup = JSON.parse(sessionStorage.getItem("popup"));

  // bg
  if (dt) {
    let welcome = dt.find((element) => element.type === "Welcome");
    let rooms = dt.find((element) => element.type === "Rooms");
    let restuarant = dt.find((element) => element.type === "Restaurant");
    console.log(welcome.url, rooms.url, restuarant.url);
    $("#CrousalWelcome").css({
      "background-image": "url(" + welcome.url + ")",
    });
    $("#CrousalRooms").css({
      "background-image": "url(" + rooms.url + ")",
    });
    $("#CrousalRest").css({
      "background-image": "url(" + restuarant.url + ")",
    });
  } else {
    $.get("https://brown-adder-coat.cyclic.app/bg", function (data) {
      console.log(data);
      sessionStorage.setItem("bg", JSON.stringify(data));

      let welcome = data.find((element) => element.type === "Welcome");
      let rooms = data.find((element) => element.type === "Rooms");
      let restuarant = data.find((element) => element.type === "Restaurant");
      console.log(welcome.url, rooms.url, restuarant.url);
      $("#CrousalWelcome").css({
        "background-image": "url(" + welcome.url + ")",
      });
      $("#CrousalRooms").css({
        "background-image": "url(" + rooms.url + ")",
      });
      $("#CrousalRest").css({
        "background-image": "url(" + restuarant.url + ")",
      });
    });
  }

  // updatePopup

  if (popup) {
  } else {
    $.get("https://brown-adder-coat.cyclic.app/updatePopup", function (data) {
      // sessionStorage.setItem("popup", JSON.stringify(data));
      console.log(data);
    }).done(function (data) {
      var image1 = new Image();
      image1.src = data[0].url;
      sessionStorage.setItem("popup", JSON.stringify(data));
      $("#popImg").append(image1);
      $("#popup-model").addClass("show-model");
    });
  }
});
