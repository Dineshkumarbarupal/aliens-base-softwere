document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("mg a");
  const screens = document.querySelectorAll("screen");

  function navigateTo(hashPath) {
    screens.forEach(screen => {
      screen.classList.toggle("active", screen.getAttribute("href") === hashPath);
    });

    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${hashPath}`);
    });
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const hash = link.getAttribute("href").substring(1); // remove #
      navigateTo(hash);
      location.hash = hash;
    });
  });

  // On initial load
  const currentHash = location.hash.substring(1) || "/Home";
  navigateTo(currentHash);

  // If hash changes manually
  window.addEventListener("hashchange", () => {
    const currentHash = location.hash.substring(1) || "/Home";
    navigateTo(currentHash);
  });
});
