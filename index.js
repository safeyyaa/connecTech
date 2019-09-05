function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function aboutUs() {
  document.getElementById("welcome").innerHTML = "";
  document.getElementById("gif").innerHTML = "";
  document.getElementById("navImage").innerHTML = "";
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("container").innerHTML = "";

  var img = document.createElement("div");
  var aboutImg = document.createElement("img");
  aboutImg.setAttribute("class", "Navimage");
  aboutImg.src = "logo.png";
  img.appendChild(aboutImg);
  var container = document.getElementById("navImage");
  container.appendChild(img);

  var p1 = document.createElement("p");
  p1.innerHTML = "ABOUT US";
  var container1 = document.getElementById("navHeader");
  var p2 = document.createElement("p");
  container1.appendChild(p1);
  p2.innerHTML =
    "We are a Connect Tech Technology Website,<br> that Connects the employees and the HR Team<br> to facilitate the communication between them.";
  var p3 = document.createElement("p");
  p3.innerHTML =
    "Our aim  is to provide a Self-Managed employees so,<br> they can collaborate with the HR Team in order to minimize the long process that HR faced.";
  var p4 = document.createElement("p");
  p4.innerHTML =
    "Collaboration brings meaning <br> and adds value to the way<br> team members perceive their job.";
  var h1 = document.createElement("h1");
  h1.innerHTML = "Kindly find our website.";
  var container2 = document.getElementById("container");
  container2.append(p2, p3, p4, h1);
  closeNav();
}

function Profile() {
  document.getElementById("welcome").innerHTML = "";
  document.getElementById("gif").innerHTML = "";
  document.getElementById("navImage").innerHTML = "";
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("container").innerHTML = "";

  var img = document.createElement("div");
  var proImg = document.createElement("img");
  proImg.setAttribute("class", "Navimage");
  proImg.src = "profile.png";
  img.appendChild(proImg);
  var container = document.getElementById("navImage");
  container.appendChild(img);

  var p1 = document.createElement("p");
  p1.innerHTML = "PROFILE";
  var container1 = document.getElementById("navHeader");
  container1.appendChild(p1);

  var p2 = document.createElement("div");
  var ul1 = document.createElement("ol");
  ul1.innerHTML = "Employee Procedures :";
  var li1 = document.createElement("li");
  li1.innerHTML = "Request for a letter.";
  var li2 = document.createElement("li");
  li2.innerHTML = "Modify & View their Personal Details.";
  var li3 = document.createElement("li");
  li3.innerHTML = "View their Job Details.";
  ul1.append(li1, li2, li3);
  p2.appendChild(ul1);

  var p3 = document.createElement("div");
  var ul2 = document.createElement("ol");
  ul2.innerHTML = "HR Procedures :";
  var li4 = document.createElement("li");
  li4.innerHTML = "Approve Employee’s request.";
  var li5 = document.createElement("li");
  li5.innerHTML = "Add & Delete Employees.";
  var li6 = document.createElement("li");
  li6.innerHTML = "Assign new Employees to departments.";
  var li7 = document.createElement("li");
  li7.innerHTML = "Provide Training Programs.";
  ul2.append(li4, li5, li6, li7);
  p3.appendChild(ul2);

  var p4 = document.createElement("p");
  p4.innerHTML =
    "Our Employee’s are more likely to continue working for a business longer<br> when they have strong ties with the people<br> they work with and feel that they’re a part of something important. ";
  var container2 = document.getElementById("container");
  container2.append(p2, p3, p4);
  closeNav();
}

function Request() {
  document.getElementById("welcome").innerHTML = "";
  document.getElementById("gif").innerHTML = "";
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("navImage").innerHTML = "";
  document.getElementById("container").innerHTML = "";

  //header
  var p1 = document.createElement("p");
  p1.innerHTML = "REQUEST";
  var contain = document.getElementById("navHeader");
  contain.appendChild(p1);
  //img1
  var img1 = document.createElement("div");
  var reqImg = document.createElement("img");
  reqImg.setAttribute("class", "Navimage");
  reqImg.src = "Approv.png";
  img1.appendChild(reqImg);
  var container = document.getElementById("navImage");
  container.appendChild(img1);

  var p1 = document.createElement("p");
  p1.innerHTML = "- Pending Requests.";

  var p2 = document.createElement("p");
  p2.innerHTML = "- Approved Requests.";

  var p3 = document.createElement("p");
  p3.innerHTML = "- Dropdown list (Letters Type).";

  var container3 = document.getElementById("container");
  container3.append(p1, p2, p3);
  closeNav();
}

function Help() {
  document.getElementById("welcome").innerHTML = "";
  document.getElementById("gif").innerHTML = "";
  document.getElementById("navImage").innerHTML = "";
  document.getElementById("navHeader").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  var img = document.createElement("div");
  var helpImg = document.createElement("img");
  helpImg.src = "help.png";
  img.appendChild(helpImg);
  var container = document.getElementById("navImage");
  container.appendChild(img);

  var p1 = document.createElement("p");
  p1.innerHTML = "HELP";
  var container1 = document.getElementById("navHeader");
  container1.appendChild(p1);

  var help = document.createElement("div");
  var email = document.createElement("p");
  email.innerHTML = "Email: connectech@egov.ae";
  var tel = document.createElement("p");
  tel.innerHTML = "Tel No.: 600 88 998";
  help.appendChild(email);
  help.appendChild(tel);
  var container2 = document.getElementById("container");
  container2.appendChild(help);
  closeNav();
}
