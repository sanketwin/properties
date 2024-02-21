const base_url = "http://127.0.0.1:5000/";

$(document).ready(function () {
  console.log("ready!");
  if (sessionStorage.getItem("token")) {
    const dashboard = document.getElementById("dashboard");
    dashboard.classList.add("d-block");
    dashboard.classList.remove("d-none");
  }
});

function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  var data = {
    email: email,
    password: password,
  };

  fetch(base_url + "user/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let message = "";
      if (data.access_token) {
        document.getElementById("errorMessage").innerHTML = message;
        alert("Login Successful");
        const dashboard = document.getElementById("dashboard");
        dashboard.classList.add("d-block");
        dashboard.classList.remove("d-none");
        sessionStorage.setItem("token", data.access_token);
      } else {
        message = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                        <i class="fa-solid fa-circle-xmark me-2"></i>
                        <div>
                            ${data.error}
                        </div>
                        </div>`;
        console.log(message);
        document.getElementById("errorMessage").innerHTML = message;
      }
    });
}

function logout() {
  sessionStorage.clear();
  location.reload();
}
