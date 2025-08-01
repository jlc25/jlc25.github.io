function showHide(id) {
  const content = document.getElementById(id);
  console.log(content.style.display);

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
