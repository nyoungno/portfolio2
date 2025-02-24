document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // 네비게이션 높이 고려
          behavior: "smooth",
        });
      }
    });
  });
});
