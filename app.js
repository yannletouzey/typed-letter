function spanId(id) {
    const textWithId = document.getElementById('' + id)
    let text = textWithId.textContent
    let width = textWithId.clientWidth
    let textArray = Array.from(text)
    textWithId.innerHTML = ""
    textWithId.style.width = width + 1 + "px"
    textWithId.style.textAlign = "right" // If you want "left" or "center"
    for (let i = 0; i < textArray.length; i++) {
        let letter = textArray[i];
        setTimeout(
            function () {
                textWithId.innerHTML += `<span class="letter letter${i}">${letter}</span>`
            }, i * 100
        )
    }
}
// Like this spanId("id or class") 
// or 
// variable declare here like this ex: const variable = document.getElementById('variable') spanId(variable)
spanId()
