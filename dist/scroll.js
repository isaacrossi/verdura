const anchors = document.querySelectorAll('a');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    const href = anchor.getAttribute('href');
    if (href.charAt(0) === '#') {
      event.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      })
    }
  })
})