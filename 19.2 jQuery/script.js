// $(document).ready(() => {
//   $("h1").css("color", "red");
// });

// $(document).ready(function () {
//   $("h1").css("color", "green");
// });

// $(function () {
//   $("h1").css("color", "teal");
// });

// $(() => {
//   $("h1").css("font-size", "60px").css("padding", "0px").css("margin", "0px");
// });

$("h1").click(() => {
  $("h1").css("background", "gray");
});

$("button").click(() => {
  $("h1").text("Loveable");
  setTimeout(() => {
    $("h1").html("<h1><em>I'm Serious o</em></h1>");
  }, 1000);
});

$("input").keypress((event) => {
  $("h1").text(event.key)
});
