var personalDetails;
var jobDetails;
var payslipDetails;
var promise = fetch("./employee.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    personalDetails = data;
    // viewEmpDetails();
    for (v of personalDetails) {
      if (localStorage.getItem("LoggedInUser") == v.emp_username) {
        var employeeName = v.emp_name;
      }
    }
    document.getElementById("user").innerHTML = employeeName;
    var status;
    var empName = localStorage.getItem("LoggedInUser");
    for (value of personalDetails) {
      if (value.emp_username == empName) {
        status = value.status;
      }
    }
    if (status == "Regular_Emp") {
      document.getElementById("ViewCandidate").style.display = "none";
      document.getElementById("ViewRequest").innerHTML = "Add Request";
      document.getElementById("ViewEmployee").style.display = "none";
    }
  });

var promise = fetch("./jobDetails.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    jobDetails = data;
  });

var promise = fetch("./payslip.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    payslipDetails = data;
  });

function viewEmpDetails() {
  document.getElementById("addRequest").style.display = "none";
  var emp;
  var empName = localStorage.getItem("LoggedInUser");
  for (pData of personalDetails) {
    if (pData.emp_username == empName) {
      emp = getPersonalDetails(pData);
      for (jData of jobDetails) {
        if (jData.emp_username == pData.emp_username) {
          emp += getJobDetails(jData);
        }
      }
    }
    document.getElementById("container").innerHTML = emp;
  }
}
function getPersonalDetails(data) {
  return (
    "<b> Personal Details </b> <br> <br> " +
    "Name: " +
    data.emp_name +
    "<br> <br>" +
    "Data of Birth: " +
    data.DOB +
    "<br> <br>" +
    "Emirates ID: " +
    data.EID +
    "<br> <br>" +
    "Phone Number: " +
    data.Phone +
    "<br> <br>" +
    "Address: " +
    data.Address +
    "<br> <br>"
  );
}

function getJobDetails(data) {
  return (
    "<b> Job Details </b> <br> <br> " +
    "Hire Date: " +
    data.HigherD +
    "<br> <br>" +
    "Department: " +
    data.Department +
    "<br> <br>" +
    "Position: " +
    data.emp_position +
    "<br> <br>" +
    "Line Manager: " +
    data.line_mang +
    "<br> <br>" +
    "Salary: " +
    data.emp_salary +
    " AED <br> <br>"
  );
}
function requestLetters() {
  document.getElementById("addRequest").style.display = "block";
  document.getElementById("container").innerHTML = "";
  var selected = document.getElementById("requestSelect").value;
  if (selected == "housing" || selected == "bank") {
    var content = document.createElement("button");
    content.setAttribute("class", "requestBtn");
    content.setAttribute("onclick", "addRequest()");
    content.innerHTML = "Add Request";
    document.getElementById("dashboard_content").appendChild(content);
  }
}
function addRequest() {
  var selected = document.getElementById("requestSelect").value;
  if (selected == "housing") {
    console.log("get ", localStorage.getItem("LoggedInUser"));
    localStorage.setItem(
      localStorage.getItem("LoggedInUser"),
      parseInt(localStorage.getItem(localStorage.getItem("LoggedInUser"))) + 1
    );
  }
}
function penddingRequest() {}
function viewRequestedLetters() {}

function viewEmployee() {
  // document.getElementById("dashboard_content").innerHTML = "";
  document.getElementById("searchBoxId").style.display = "block";
  // var searchForm = document.createElement("form");
  // searchForm.setAttribute("class", "searchBox");
  // var searchBar = document.createElement("input");
  // searchBar.setAttribute("placeholder", "Search ... ");
  // searchBar.setAttribute("type", "text");
  // searchBar.setAttribute("id", "searchBarInput");
  // searchBar.setAttribute("onkeyup", "fillterdProducts()");
  // searchForm.appendChild(searchBar);
  // document.getElementById("searchBoxId").appendChild(searchForm);
  // var displayContent = document.createElement("div");
  // displayContent.setAttribute("class", "content");
  document.getElementById("container").innerHTML = "";
  createTables(personalDetails);
}
function viewPayslip() {
  document.getElementById("addRequest").style.display = "none";
  var empName = localStorage.getItem("LoggedInUser");
  for (pData of payslipDetails) {
    if (pData.emp_username == empName) {
      document.getElementById("container").innerHTML =
        "<b> Payslip Details </b> <br> <br> " +
        "Total Salary: " +
        pData.emp_salary +
        " AED <br> <br>" +
        "Housing: " +
        pData.housing +
        " AED <br> <br>" +
        "Educations: " +
        pData.educations +
        " AED <br> <br>" +
        "Total Deduction: " +
        pData.totalDeduct +
        " AED <br> <br>";
    }
  }
}

function fillterdProducts() {
  var search_input = document.getElementById("searchInput").value;
  document.getElementById("container").innerHTML = "";
  if (search_input != undefined) {
    createTables(
      personalDetails.filter(value => {
        var lowerCaseProduct = value.emp_name.toLowerCase();
        return lowerCaseProduct.includes(search_input);
      })
    );
  }
}
function viewCandidates() {}

function createTables(records) {
  //   var displayedEmp = [];
  //   for (let value in records[0]) {
  //     if (value != "status" || value != "emp_username") {
  //       displayedEmp.push(records);
  //     }
  //     console.log("display ", displayedEmp);

  //     // if(value.status != "status" || value.emp_username = "")
  //   }
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("container").appendChild(table);
}

function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}

function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}
