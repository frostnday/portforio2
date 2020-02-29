const skrolltop = require('skrolltop')

export const scrollById = (id) => {
  const targetElement = document.getElementById(id)

  if (targetElement) {
    const intNowY = window.pageYOffset
    const objBounds = targetElement.getBoundingClientRect().top + intNowY - 40

    skrolltop.scrollTo({
      element: window,
      to: objBounds,
      duration: 700
    })
  }
}
