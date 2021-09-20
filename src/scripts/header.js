const headerTag = document.querySelector('.header')
const imageTag = document.querySelectorAll('.header nav img')

// when I scroll down the page, at a certain point,
// add a class to make the header white, smaller and add a box shadow.

const toggleHeader = function () {
  const pixels = window.pageYOffset

  if (pixels > 60) {
    headerTag.classList.add('scrolled')
    imageTag.forEach(image => {
      image.src= "img/blue_underline.svg"
    })
  } else {
    headerTag.classList.remove('scrolled')
    imageTag.forEach(image => {
      image.src= "img/white_underline.svg"
    })
  }
}

toggleHeader()

document.addEventListener('scroll', function () {
  toggleHeader()
})




 