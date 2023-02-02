var queryString = window.location.search;
var parameters = new URLSearchParams(queryString);
var query = parameters.get("query");

if (query === "dark") {
  document.querySelector("body").style.cssText = "background-color: black;";

}
else if (query === "light") {
  document.querySelector("body").style.cssText = "background-color: white";

}