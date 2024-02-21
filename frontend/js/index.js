function toggleButton() {
  (sidebar = document.querySelector(".sidebar")),
    sidebar.classList.toggle("close");
}

function loadPage(pageUrl, element) {
  fetch(pageUrl)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("home").innerHTML = data;
      document.querySelectorAll(".anchor").forEach((item) => {
        item.parentElement.classList.remove("active");
      });
      element.parentElement.classList.add("active");
    })
    .catch((error) => console.error("Error loading page:", error));
}

function renderRegister() {
  document.getElementById("errorMessage").innerHTML = "";
  const register = document.getElementById("regContainer");
  const login = document.getElementById("logContainer");
  const mainContainer = document.getElementById("mainContainer");

  mainContainer.classList.add("moveRight");

  login.classList.add("d-none");

  register.classList.remove("d-none");
  register.classList.add("d-block");
}

function renderLogin() {
  document.getElementById("errorMessage").innerHTML = "";
  const register = document.getElementById("regContainer");
  const login = document.getElementById("logContainer");

  register.classList.add("d-none");

  login.classList.remove("d-none");
  login.classList.add("d-block");
}
