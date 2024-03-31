$(document).ready(function () {
  let responsive = {
    0: {
      items: 1
    },
    600: {
      items: 1.2
    },
    768: {
      items: 2
    },
    1000: {
      items: 3
    },
    1400: {
      items: 3.6
    }
  }

  $('.destination-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
      "<i class='bi bi-arrow-left nav' type='button'></i>",
      "<i class='bi bi-arrow-right nav' type='button'></i>",
    ],
    responsive: responsive
  });


  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    loop: false,
    autoplay: 5000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [
      "<i class='bi bi-arrow-left nav' type='button'></i>",
      "<i class='bi bi-arrow-right nav' type='button'></i>",
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1.2
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1400: {
        items: 3.2
      }
    }
  });

});

window.onload = () => {
  setTimeout(() => {
    $(".loader-wrapper").remove();
    $("main").show()
  }, 1500);
};

function checkForm(data) {
  alert("Your Email is " + data.email.value.trim());
}

$(".nav-item .nav-link").on('click', () => {
  if ($('html').hasClass('overflow-hidden')) {
    $('html').removeClass('overflow-hidden');
    $('#navbarNav').removeClass('active show');
  }
})