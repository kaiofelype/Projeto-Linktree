function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-Light.png")
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar-Dark.png")
  }

  // para mudar o alt agora temos:
  if (html.classList.contains("light")) {
    // se tiver o light
    img.setAttribute("alt", "foto da namorada mais linda do mundo, fundo light")
  } else {
    // se não tiver o light
    img.setAttribute(
      "alt",
      "foto da namorada do Kaio a mulher mais linda desse mundo, fundo dark",
    )
  }
}
