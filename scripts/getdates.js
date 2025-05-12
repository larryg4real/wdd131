const currentyear = new Date().getFullYear();
document.querySelector("footer").innerHTML = document.querySelector("footer").innerHTML.replace("©2025", '©${currentYear}');
document.getElementById("copyright 2025").textContent = new Date().getFullYear();
const LastModified = document.LastModified;
document.getElementById("lastModifield").textContent = document.lastModifield;