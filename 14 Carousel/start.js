let currentIndex = 0;
function displayImage(imagElems, newIndex) {
  const lastIndex = imagElems.length - 1;
  if (newIndex < 0) {
    newIndex = lastIndex;
  } else if (newIndex > lastIndex) {
    newIndex = 0;
  }

  const newImage = imagElems[newIndex];
  newImage.scrollIntoView({ behavior: "smooth" });

  currentIndex = newIndex;
}

function run() {
  const imagElems = document.querySelectorAll("img");
  const prevBtnElem = document.querySelector(".previous");
  const nextBtnElem = document.querySelector(".next");

  prevBtnElem.addEventListener("click", () =>
    displayImage(imagElems, currentIndex - 1)
  );
  nextBtnElem.addEventListener("click", () =>
    displayImage(imagElems, currentIndex + 1)
  );
}

run();
