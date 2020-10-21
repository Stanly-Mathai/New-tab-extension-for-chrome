function getBackgroundAsset(a) {
  $.get(
    "https://6v0luvcal3.execute-api.us-west-2.amazonaws.com/prod/backgroundimagecached",
    a
  ).fail(fallback);
}
// var crrImg;
function loadImage(a) {
  crrImg = a;
  url = a.high_res_comp;
  $("body").css({ backgroundImage: "url('" + url + "')" });
  title = toTitleCase(a.title);
  $(".info-box .title").text(title);
}

function toTitleCase(a) {
  return a.replace(/\w\S*/g, function (b) {
    return b.charAt(0).toUpperCase() + b.substr(1).toLowerCase();
  });
}

getBackgroundAsset(function (a) {
  if (a && a.high_res_comp) {
    loadImage(a);
  } else {
    fallback();
  }
});
function fallback() {
  response = {
    high_res_comp: "/images/133462856.jpg",
    artist: "Life On White",
    id: 133462856,
    title: "Atlantic Puffins on Mykines",
  };
  loadImage(response);
}
