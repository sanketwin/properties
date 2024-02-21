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

function register() {
  var name = document.getElementById("registerName").value;
  var email = document.getElementById("registerEmail").value;
  var password = document.getElementById("registerPassword").value;
  var mobile = document.getElementById("registerMobile").value;
  var city = document.getElementById("registerCity").value;

  var message = "";

  var data = {
    name: name,
    email: email,
    password: password,
    mobileNumber: mobile,
    city: city,
  };

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Yes",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(base_url + "user/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            document.getElementById("errorMessage").innerHTML = message;
            Swal.fire({
              title: "Yay ! Registration Successful",
              icon: "success",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Proceed to Login",
            }).then((result) => {
              if (result.isConfirmed) {
                const register = document.getElementById("regContainer");
                const login = document.getElementById("logContainer");

                register.classList.add("d-none");

                login.classList.remove("d-none");
                login.classList.add("d-block");
              }
            });
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
  });
}

function logout() {
  sessionStorage.clear();
  location.reload();
}
