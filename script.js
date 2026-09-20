let navbar = document.querySelector('.header .navbar');
const menuBtn = document.querySelector('#menu-btn');

if (menuBtn && navbar) {
  menuBtn.onclick = () => {
    navbar.classList.toggle('active');
  };
}

const aboutVideo = document.querySelector('.about .video-container .video');
const videoBtns = document.querySelectorAll('.about .video-container .controls .control-btn');

if (aboutVideo && videoBtns.length) {
  videoBtns.forEach((btn) => {
    btn.onclick = () => {
      const src = btn.getAttribute('data-src');
      if (src) aboutVideo.src = src;
    };
  });
}

// prefill form
(function prefillIndexBookingForm() {
  const placeInput = document.getElementById("placeInput");
  const dateInput = document.getElementById("dateInput");
  const peopleInput = document.getElementById("peopleInput");
  const packageSelect = document.getElementById("packageInput");

  // conditions
  if (!placeInput || !dateInput || !peopleInput) return;

  const params = new URLSearchParams(window.location.search);
  const place = params.get("place");
  const pkg = params.get("package");

  if (place) placeInput.value = place;
  if (pkg) {
    // dropdown 
    if (packageSelect) packageSelect.value = pkg;

    placeInput.dataset.selectedPackage = pkg;
  }
})();

// Booking search
const searchForm = document.getElementById("searchForm");
if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const placeEl = document.getElementById("placeInput");
    const dateEl = document.getElementById("dateInput");
    const peopleEl = document.getElementById("peopleInput");
    const packageSelect = document.getElementById("packageInput");

    const place = placeEl ? placeEl.value.trim() : "";
    const date = dateEl ? dateEl.value : "";
    const people = peopleEl ? Number(peopleEl.value) : 0;

    const pkg =
      (packageSelect && packageSelect.value) ||
      (placeEl && placeEl.dataset.selectedPackage) ||
      "";

    // Validation
    if (!place) {
      alert("Please enter a destination.");
      if (placeEl) placeEl.focus();
      return;
    }

    if (!date) {
      alert("Please select a travel date.");
      if (dateEl) dateEl.focus();
      return;
    }

    if (!people || people < 1) {
      alert("Please enter number of travelers (at least 1).");
      if (peopleEl) peopleEl.focus();
      return;
    }

    const url =
      `booking.html?place=${encodeURIComponent(place)}` +
      `&package=${encodeURIComponent(pkg)}` +
      `&date=${encodeURIComponent(date)}` +
      `&people=${encodeURIComponent(String(people))}`;

    window.location.href = url;
  });
}