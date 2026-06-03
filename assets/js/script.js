document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  if (backToTopBtn) {
    // When the user scrolls down 100px from the top of the document, show the button
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.classList.add("show-btn");
      } else {
        backToTopBtn.classList.remove("show-btn");
      }
    });

    // When the user clicks on the button, scroll to the top of the document
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
