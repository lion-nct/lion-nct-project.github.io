new Drift(document.querySelector("img"), {
  inlinePane: true,
  containInline: true,
  // inlinePane: 105,
  zoomFactor: 2,
});

// arxikopoihsi megalis / kai piso zoom arxikhs eikonas
// me ena apo ta thumbnail mas
//var first = $('.thumbnails').find('img').attr('src');
var first = $(".thumbnails").find("img:eq(0)").attr("src"); //for second image
// h proth pou fenetai
$(".main-image img").attr("src", first);
//kai to zoom on hover thn
$(".main-image img").attr("data-zoom", first);

// otan klikaroume ena apo ta thumbnail ...to pathmeno
// thumbnail na antika8ista thn arxikh mas photo kai ths piso ths
$(".thumbnails .zoom").click(function (e) {
  e.preventDefault();
  var photo_fullsize = $(this).find("img").attr("src");
  $(".main-image img").attr("src", photo_fullsize);
  $(".main-image img").attr("data-zoom", photo_fullsize);
});
