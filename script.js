let captionsList = document.querySelectorAll(".caption-item");
let unitsList = document.querySelectorAll(".unit");

captionsList.forEach(function (item, index) {
  item.addEventListener("mouseover", function () {
    unitsList[index].classList.add("hovered");
  });

  item.addEventListener("mouseout", function () {
    unitsList[index].classList.remove("hovered");
  });
});

// добавление и удаление

let btn = form.btn;

let purcashe = {};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("Клик по кнопке");
  purcashe.name = form.name.value;
});
