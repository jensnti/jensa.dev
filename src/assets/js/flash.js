const flash = (consent) => {
  if (!consent) {
    const flash = document.querySelector("#flash-message")
    flash.classList.toggle("hidden")
    flash.setAttribute("role", "alertdialog")
    flash.setAttribute("aria-labelledby", "flash-message--content")
    const inner = flash.querySelector(".flash__inner")
    const message = inner.querySelector(".flash__message")
    const button = document.createElement("button")
    button.classList.add("button", "flash__button")
    button.textContent = `OK`
    const p = document.createElement("p")
    p.id = "flash-message--content"
    p.textContent = `Den här webbplatsen sparar information i din webbläsare.`
    message.appendChild(p)
    inner.appendChild(button)
    button.addEventListener("click", () => {
      localStorage.setItem("consent", "true")
      flash.classList.toggle("hidden")
    })
  }
}

module.exports = flash
