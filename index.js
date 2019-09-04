function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function aboutUs() {
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  var p1 = document.createElement("p");
  p1.innerHTML = "ABOUT US";
  var container1 = document.getElementById("navHeader");
  var p2 = document.createElement("p");
  container1.appendChild(p1);
  p2.innerHTML = "nr;lgaenjo;rjvnk;dmclkeamjv;nrfbjesrsdjavh;owergnavhru;ei";
  var container2 = document.getElementById("container");
  container2.appendChild(p2);
  closeNav();
}

function Profile() {
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  var p1 = document.createElement("p");
  p1.innerHTML = "PROFILE";
  var container1 = document.getElementById("navHeader");
  var p2 = document.createElement("p");
  container1.appendChild(p1);
  p2.innerHTML = "nr;lgaenjo;rjvnk;dmclkeamjv;nrfbjesrsdjavh;owergnavhru;ei";
  var container2 = document.getElementById("container");
  container2.appendChild(p2);
  closeNav();
}

function Request() {
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  var p1 = document.createElement("p");
  p1.innerHTML = "REQUEST";
  var container1 = document.getElementById("navHeader");
  var p2 = document.createElement("p");
  container1.appendChild(p1);
  p2.innerHTML = "nr;lgaenjo;rjvnk;dmclkeamjv;nrfbjesrsdjavh;owergnavhru;ei";
  var container2 = document.getElementById("container");
  container2.appendChild(p2);
  closeNav();
}

function Help() {
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  var p1 = document.createElement("p");
  p1.innerHTML = "HELP";
  var container1 = document.getElementById("navHeader");
  var p2 = document.createElement("p");
  container1.appendChild(p1);
  p2.innerHTML = "nr;lgaenjo;rjvnk;dmclkeamjv;nrfbjesrsdjavh;owergnavhru;ei";
  var container2 = document.getElementById("container");
  container2.appendChild(p2);
  closeNav();
}
