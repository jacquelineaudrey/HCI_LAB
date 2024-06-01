document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button-selection button");
  const cards = document.querySelectorAll(".video-card");
  let currentLevel = "elementary";

  const openModalButton = document.getElementById("open-modal-button");
  const modal = document.getElementById("modal");
  const closeButton = modal.querySelector(".close");
  const upgradeButton = modal.querySelector("#upgrade-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const level = button.getAttribute("data-level");

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      if (level !== "fav") {
        currentLevel = level;
      }

      cards.forEach((card) => {
        if (level === "fav") {
          if (card.getAttribute("data-level").includes("fav")) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        } else {
          if (card.getAttribute("data-level").includes(currentLevel)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });

  document.getElementById("senior-btn").click();

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  upgradeButton.addEventListener("click", function () {
    window.location.href = "subscription.html";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  function performSearch() {
    const searchTerm = document.getElementById("search").value.toLowerCase();

    cards.forEach((card) => {
      const courseName = card
        .querySelector(".course-name")
        .textContent.toLowerCase();
      if (courseName.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  document
    .getElementById("search-btn")
    .addEventListener("click", performSearch);

  document
    .getElementById("search")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        performSearch();
      }
    });

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const level = card.getAttribute("data-level");

      if (level === "senior") {
        modal.style.display = "none";
        window.location.href = "learning.html";
      } else if (level === "junior" || level === "elementary") {
        modal.style.display = "block";
      }
    });
  });
});

function toggleFav(element) {
  const videoCard = element.closest(".video-card");
  const dataLevel = videoCard.getAttribute("data-level");

  if (dataLevel.includes("fav")) {
    modal.style.display = "none";
    videoCard.setAttribute("data-level", dataLevel.replace(" fav", ""));
    element.src = "../assets/love.png";
    element.classList.remove("active-fav");
  } else if (element.src.includes("love.png")) {
    modal.style.display = "none";
    element.src = "../assets/self-love.png";
    videoCard.setAttribute("data-level", `${dataLevel} fav`);
    element.classList.add("active-fav");
  }
}
