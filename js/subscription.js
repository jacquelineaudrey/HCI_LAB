const priceValues = {
  free: {
    monthly: 0,
    yearly: 0,
  },
  explorer: {
    monthly: 19.99,
    yearly: 219.99,
  },
  achiever: {
    monthly: 51.99,
    yearly: 599.99,
  },
  master: {
    monthly: 89.99,
    yearly: 999.99,
  },
};

// "monthly" / "yearly"
let mode = "monthly";
const tableElementList = document.querySelectorAll(".table");

const setPrice = () => {
  tableElementList.forEach((element) => {
    const type = element.dataset.type;
    const priceElement = element.querySelector(".price");
    const durationElement = element.querySelector(".month");

    priceElement.textContent = priceValues[type][mode];
    durationElement.textContent = mode === "yearly" ? "/yr" : "/mo";
  });
};

// ===================================== SWITCH =======================================

const switchElement = document.querySelector(".switch");
switchElement.addEventListener("click", () => {
  switchElement.classList.toggle("active");

  const labels = switchElement.querySelectorAll('.switch-label');
  if (mode === "monthly") {
    mode = "yearly";
    labels[0].classList.replace('active', 'inactive');
    labels[1].classList.replace('inactive', 'active');
  } else {
    mode = "monthly";
    labels[0].classList.replace('inactive', 'active');
    labels[1].classList.replace('active', 'inactive');
  }

  setPrice();
});

const initSwitch = () => {
  const labels = switchElement.querySelectorAll('.switch-label');
  labels[0].classList.add('active'); 
  labels[1].classList.add('inactive'); 
};

initSwitch();
setPrice();

