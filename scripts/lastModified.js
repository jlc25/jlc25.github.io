function lastModified() {
  let day = document.lastModified.slice(3, 5);
  let month = document.lastModified.slice(0, 2);
  let year = document.lastModified.slice(6, 10);

  const elements = document.getElementsByClassName("last-modified");
  elements[0].innerHTML = `Last updated: ${day}/${month}/${year}`;
}
