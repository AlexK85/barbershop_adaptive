function slideReviews(className) {
  let elementsReviews = document.querySelectorAll(".reviews__item");
  let toggleReviews = document.querySelectorAll(".slider__toggle-reviews");

  //скрываем все элементы
  elementsReviews.forEach((elem) => {
    elem.classList.add("hidden-desktop");
  });

  //показываем нужный элемент
  let elenent = document.querySelector(className);
  elenent.classList.remove("hidden-desktop");

  // делаем не активными все кнопки
  toggleReviews.forEach((elem) => {
    elem.classList.remove("reviews__toggles--active");
  });

  // делаем активной кнопку, которую нажали
  let target_element = event.target;
  target_element.classList.add("reviews__toggles--active");
}

// ПЕРЕКЛЮЧЕНИЕ БОКОВЫХ КНОПОК СЛАЙДЕРА
let elements = document.querySelectorAll(".reviews__item");
let current = 0;

// скрывает элементы и делает не прозрачными их
function slider() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("opacity0");
  }
  elements[current].classList.remove("opacity0");
}
slider();

document.querySelector(".reviews__prev").onclick = function () {
  if (current - 1 == -1) {
    current = elements.length - 1;
  } else {
    current--;
  }
  slider();
};

document.querySelector(".reviews__next").onclick = function () {
  if (current + 1 == elements.length) {
    current = 0;
  } else {
    current++;
  }
  slider();
};
