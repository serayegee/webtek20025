const arrows = document.querySelectorAll(".arrow");
const sliderLists = document.querySelectorAll(".slider-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = sliderLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
  if (imageItem - (5 + clickCounter) >= 0) {

      sliderLists[i].style.transform = `translateX(${
        sliderLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
  }else{
sliderLists[i].style.transform="translateX(0)";
  }
});
});

