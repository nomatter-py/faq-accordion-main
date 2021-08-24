const containerElements = document.querySelectorAll(".card__section__faq__container");
containerElements.forEach(
    (item) => item.addEventListener("click", toggleBlock)
);

function toggleBlock() {

    let heading = this.firstElementChild;
    heading.classList.toggle("bold");

    let arrow_img = this.querySelector(".arrow-img");
    arrow_img.classList.toggle("rotate-arrow");

    let sBlock = this.nextElementSibling
    sBlock.classList.toggle("hidden");

}