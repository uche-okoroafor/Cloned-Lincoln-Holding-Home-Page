$(function () {
  // jQuery methods go here...

  const awardContainer = $('#awards-container')

  $('#close-venues-menu').click(() => {
    $('.our-venues-container').css({ display: 'none', opacity: '0' })
  })
  $(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
      // ESC
      $('#galleryContainer').css({ display: 'none' })
      $('.our-venues-container').css({ display: 'none', opacity: '0' })
      $('.video-backdrop').css({ display: 'none' })
    }
  })

  $('.menu-icon').click(() => {
    $('.our-venues-container').css({
      display: 'flex'
    })

    setTimeout(() => {
      $('.our-venues-container').css({
        opacity: '1',
        transition: 'opacity 0.6s ease-in'
      })
    }, 500)
  })

  $('#watch-video').click(() => {
    $('.video-backdrop').css({ display: 'flex' })
  })

  $('.video-backdrop').on('click', function (e) {
    if (e.target !== this) return

    $('.video-backdrop').css({ display: 'none' })
  })

  $('.close-video').click(() => {
    $('.video-backdrop').css({ display: 'none' })
  })

  $('#about-lincoln-link').click(() => {
    $('html, body').animate(
      {
        scrollTop: $('#about-lincoln').offset().top
      },
      500
    )
  })

  $('.gallery').click(() => {
    $('#galleryContainer').css({ display: 'flex' })
  })
  $('#view-gallery').click(() => {
    $('#galleryContainer').css({ display: 'flex' })
  })

  const animateAwardContainer = () => {
    setTimeout(() => {
      awardContainer.css({
        transform: 'translateX(-24%)',
        transition: 'transform  2s ease-in'
      })
    }, 2000)
    setTimeout(() => {
      awardContainer.css({
        transform: 'translateX(-49%)',
        transition: 'transform  2s ease-in'
      })
    }, 6000)
    setTimeout(() => {
      awardContainer.css({
        transform: 'translateX(-75%)',
        transition: ' transform  2s ease-in'
      })
    }, 10000)
    setTimeout(() => {
      awardContainer.css({
        transform: 'translateX(-105%)',
        transition: ' transform  2s ease-in'
      })
    }, 14000)

    setTimeout(() => {
      awardContainer.css({
        transform: 'translateX(0%)',
        transition: ' transform  0.001s ease-in'
      })
    }, 20000)
  }

  let slideCount = 0

  $('#next-image').click(() => {
    if (slideCount === -1400) {
      return $('#previous-image').css({ fill: '#ededee' })
    }
    slideCount -= 100
    $('.images').css({
      transform: ` translateX(${slideCount}%)`,
      transition: ' transform  0.5s ease-in'
    })
  })

  $('#previous-image').click(() => {
    if (slideCount === 0) {
      return $('#previous-image').css({ fill: '#ededee' })
    }
    slideCount += 100
    $('.images').css({
      transform: ` translateX(${slideCount}%)`,
      transition: ' transform  0.5s ease-in'
    })
  })
  $('#closeGalleryContainer').click(() => {
    $('#galleryContainer').css({ display: 'none' })
  })
  $('#galleryContainer').on('click', function (e) {
    if (e.target !== this) return

    $('#galleryContainer').css({ display: 'none' })
  })

  const images = document.querySelectorAll('.gallery-img')
  const imagesContainer = document.querySelector('.images')

  const slidesImages = document.querySelectorAll('.slide-image-container')
  const slidesIndicators = document.querySelectorAll('.dot')
  const slidesIndicatorsContainer = document.querySelector('#teams-indicator')
  let slideIndex = 0
  let replaySlide = true
  const animateSlides = () => {
    for (const element of slidesImages) element.style = 'display:none;opacity:0'
    slideIndex++
    if (slideIndex > slidesImages.length) {
      slideIndex = 1
    }
    for (const element of slidesIndicators) {
      element.style = 'background:rgb(132, 108, 72,0)'
    }
    slidesImages[slideIndex - 1].style.display = 'block'
    setTimeout(() => {
      slidesImages[slideIndex - 1].style =
        'opacity:1;transition:opacity 0.4s ease-in'
    }, 50)
    slidesIndicators[slideIndex - 1].style = 'background:rgb(132, 108, 72,1)'
    if (replaySlide) {
      setTimeout(animateSlides, 4000)
    }
  }

  slidesIndicatorsContainer.addEventListener('click', function (e) {
    if (e.target.id !== 'teams-indicator') {
      replaySlide = false
      slideIndex = 0
      slideIndex = +e.target.id
      animateSlides()
    }
  })

  animateSlides()
  animateAwardContainer()

  setInterval(() => {
    animateAwardContainer()
  }, 25000)
})
