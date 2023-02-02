var queryString = window.location.search;
var parameters = new URLSearchParams(queryString);
var query = parameters.get("query");
if (query === "remove") {
    document.querySelector(".removed p").style.visibility = "visible";
    document.querySelector(".restored").style.visibility = "hidden";
    document.querySelector(".restored .next").style.visibility = "visible";
    document.querySelector(".restored .previous").style.visibility = "visible";


  }
  else if (query === "restore") {
    document.querySelector(".restored").style.visibility = "visible";
    document.querySelector(".removed p").style.visibility = "hidden";
  }