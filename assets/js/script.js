const bsCollapse = new bootstrap.Collapse("#cards", {
  toggle: true,
});

let cards_container = document.querySelector(".cards");
let cards = cards_container.querySelectorAll(".card");
cards.forEach(function (item) {
  item.addEventListener("click", function () {
    //console.log(this);
    let nombre = this.querySelector(".card__nombre");
    nombre.style.fontWeight = "normal";
  });
});
