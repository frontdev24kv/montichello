'use strict';

// -------------------- burger -----------------------------

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('close');
    nav.classList.toggle('active');

    // accessibility: update aria-expanded
    burger.setAttribute('aria-expanded', String(isOpen));

    // optional: prevent page scrolling when menu open
    if (nav.classList.contains('active')) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  });
}

// ------------------------------------------------------------
const moreDetailsBtn = document.querySelector('#more_details');
const moreDetailsBtn2 = document.querySelector('#more_details_2');
const text = document.querySelector('#text');
const addMoreContent = () => {
  text.textContent += text.textContent;
  moreDetailsBtn.disabled = true;
};

moreDetailsBtn.addEventListener('click', addMoreContent);

// ----------------------------------------------------

$('.screen.slider').slick({
  dots: true
});

$('.card__box.slider').slick({
  dots: true, // shows navigation dots
  infinite: true, // infinite loop
  speed: 500, // animation speed
  slidesToShow: 3, // how many slides visible at once
  slidesToScroll: 1, // how many slides to scroll per move
  autoplay: true, // enables auto play
  autoplaySpeed: 4000, // delay between slides
  arrows: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    }
  ]
});

//  ------ gallery ---------

document.addEventListener('DOMContentLoaded', function () {
  const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true, 
    touchNavigation: true, 
    zoomable: true 
  });
});

const seeMoreBtn = document.getElementById('see-more-btn');
let buttonText = seeMoreBtn.textContent;
const images = document.querySelectorAll('.grid-item');

seeMoreBtn.addEventListener('click', () => {
  [...images].map((img) => {
    if (img.classList.contains('see-more')) {
      if (img.classList.contains('hidden-img')) {
        img.classList.remove('hidden-img');
        seeMoreBtn.textContent = 'SEE LESS';
      } else {
        img.classList.add('hidden-img');
        seeMoreBtn.textContent = 'SEE MORE';
      }
    }
  });
});

// ----------------- map ----------------------------

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([50.3919,30.9087], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '<p>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</p>',
  }).addTo(map);

  const capital = L.marker([50.3919,30.9087])
    .addTo(map)
    .bindPopup("<b>The capital of Ukraine</b><br>Kyiv, Ukraine")
    .openPopup()

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const userMarker = L.marker([userLat, userLng])
          .addTo(map)
          .bindPopup("<b>You are here!</b>")
          .openPopup();

        // Fit map to show both points
        const bounds = L.latLngBounds([
          [userLat, userLng],
          [50.3919,30.9087],
        ]);
        map.fitBounds(bounds);
      },
      function (error) {
        console.warn("Geolocation failed or denied.", error);
      }
    );
  } else {
    console.warn("Geolocation is not supported by this browser.");
  }
});

// ----------------------- form validation-------------------

const form = document.querySelector(".contact__form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Clear old errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  [nameInput, emailInput].forEach((input) => input.classList.remove("error"));

  // Validate Name
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Please enter your name");
    isValid = false;
  } else if (nameInput.value.trim().length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
    isValid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Please enter your email");
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email address");
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, message) {
  const errorSpan = input.parentElement.querySelector(".error");
  errorSpan.textContent = message;
  input.classList.add("error");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
