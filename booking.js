function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }
  
  function formatDateISOToReadable(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const place = getQueryParam("place") || "Not set";
    const date = getQueryParam("date") || "";
    const people = getQueryParam("people") || "Not set";
  
    document.getElementById("sum-place").textContent = place;
    document.getElementById("sum-date").textContent = date ? formatDateISOToReadable(date) : "Not set";
    document.getElementById("sum-people").textContent = people;
  
    const form = document.getElementById("bookingForm");
    const hint = document.getElementById("formHint");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      hint.textContent = "Request submitted. We will contact you shortly.";
      hint.style.opacity = "1";
  
      form.reset();
    });
  });
  