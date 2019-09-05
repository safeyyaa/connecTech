var usersData;
var promise = fetch("./user.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    usersData = data;
  });
function doLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (value of usersData) {
    if (value.userName == username && value.password == password) {
      localStorage.setItem("username", username);
      console.log(localStorage.getItem(username));
      if (
        localStorage.getItem(username) === null ||
        localStorage.getItem(username) === "NaN"
      ) {
        localStorage.setItem(username, 0);
      } else {
        localStorage.setItem(username, localStorage.getItem(username));
      }
      window.open("dashboard.html");
    } else {
      window.alert("You don't have Authitication to Access");
      window.open("index.html");
    }
  }
}
