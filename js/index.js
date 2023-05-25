const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle the visibility of the accordion content
    header.nextElementSibling.classList.toggle("active");

    // Toggle the active class on the accordion header
    header.classList.toggle("active");
  });
});
