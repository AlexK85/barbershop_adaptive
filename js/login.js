let form = document.querySelector("form");
let buttonLogin = document.querySelector(".user-list__login");

buttonLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("show-form");
});
