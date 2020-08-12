function slide(className) {
  let elements = document.querySelectorAll(".advantages__item");
  let buttons = document.querySelectorAll(".slider__toggle");

  // скрываем все элементы
  elements.forEach((elem) => {
    elem.classList.add("hidden-mobile");
    // debugger;
  });

  // показываем нужный элемент
  let element = document.querySelector(className);
  element.classList.remove("hidden-mobile");

  // делаем не активными все кнопки
  buttons.forEach((elem) => {
    elem.classList.remove("advantages__toggle--active");
  });

  // делаем активной кнопку, которую нажали
  let target_element = event.target;
  target_element.classList.add("advantages__toggle--active");
}
