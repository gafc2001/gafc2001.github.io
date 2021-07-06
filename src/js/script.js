let barProgress = document.getElementsByClassName('progress');
for (const element of barProgress) {
    progress = element.getAttribute('data-lvl');
    element.style.width = progress + "%";
}
