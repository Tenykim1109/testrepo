let input = document.querySelector(".chat-input")
const btn = document.querySelector(".js-input-button")
const body = document.querySelector("main")

const onClick = () => {
    if (!input.value) {
        return
    }
    const p = document.createElement("p")
    p.className = "message"
    p.textContent = input.value
    body.prepend(p)
    input.value = "";
}

const onKeyDown = (e) => {
    if (e.key == "Enter") {
        onClick()
    }
}

btn.addEventListener("click", onClick)
window.addEventListener("keydown", onKeyDown)