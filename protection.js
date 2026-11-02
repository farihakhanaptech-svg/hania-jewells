/* Hania Jewels - basic content-protection deterrents.
   These measures discourage casual copying; they cannot prevent screenshots,
   developer-tools access, downloads, or copying by determined visitors. */
document.addEventListener("contextmenu", function (event) {
  if (event.target && event.target.closest("img")) {
    event.preventDefault();
  }
});
document.addEventListener("dragstart", function (event) {
  if (event.target && event.target.closest("img")) {
    event.preventDefault();
  }
});
