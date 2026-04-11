const scroll_top = document.getElementById("scroll_top");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      scroll_top.style.display = "block";
    } else {
      scroll_top.style.display = "none";
    }
  });

  scroll_top.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });