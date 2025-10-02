console.log("hi hi heey");

let pageTitle = document.querySelector("#page-title");

//Javascript timeout function changes h1 title after 3 seconds
setTimeout(function () {
  pageTitle.style.color = "pink";
}, 3000);

//click event on header changes background color
document.querySelector("header").onclick = function () {
  document.querySelector("body").style.backgroundColor = "black";
};

document.querySelector("#image-fish").addEventListener("click", function () {
  document.querySelector("#image-fish").style.display = "none";
});

document
  .querySelector("#image-fishshoe")
  .addEventListener("click", function () {
    document.querySelector("#image-fishshoe").style.display = "none";
  });

document
  .querySelector("#image-johnpork")
  .addEventListener("click", function () {
    document.querySelector("#image-johnpork").style.display = "none";
  });

document.querySelector("#image-lobster").addEventListener("click", function () {
  document.querySelector("#image-lobster").style.display = "none";
});

document
  .querySelector("#image-lobstermeal")
  .addEventListener("click", function () {
    document.querySelector("#image-lobstermeal").style.display = "none";
  });
