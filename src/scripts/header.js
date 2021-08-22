const headerTag = document.querySelector('.header')

// when I scroll down the page, at a certain point,
// add a class to make the header white, smaller and add a box shadow.

const toggleHeader = function () {
  const pixels = window.pageYOffset

  if (pixels > 60) {
    headerTag.classList.add('scrolled')
  } else {
    headerTag.classList.remove('scrolled')
  }
}

toggleHeader()

document.addEventListener('scroll', function () {
  toggleHeader()
})




 