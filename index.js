const button = document.querySelector(".js-btn");
const text = document.querySelector(".js-title")

const onClick = () => {
    text.style.color = "#2A9EFD"
}

button.addEventListener("click", onClick)