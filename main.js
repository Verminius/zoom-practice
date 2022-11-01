const container = document.getElementById("container");
const img = document.querySelector("img");

function zoom() {
  container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(3)";
  });
}

function unzoom() {
  img.style.transformOrigin = "center";
  img.style.transform = "scale(1)";
}
