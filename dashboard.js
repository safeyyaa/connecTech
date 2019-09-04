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
  var emp;
  //   var empName = localStorage.getItem("username");
  for (pData of personalDetails) {
    if (pData.emp_name == "Safeya") {
      //   emp = JSON.parse(pData);
      emp = getPersonalDetails(pData);
      for (jData of jobDetails) {
        if (jData.emp_username == pData.emp_username) {
          emp += getJobDetails(jData);
        }
      }
    }
    document.getElementById("dashboard_content").innerHTML = emp;
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
  var selected = document.getElementById("requestSelect").value;
  console.log(selected);
  if (selected == "housing") {
    document.getElementById("dashboard_content").innerHTML = "Hi";
  }
  // document.getElementById("addRequest").style.display = "none";
}

function viewRequestedLetters() {}

function viewEmployee() {
  // document.getElementById("dashboard_content").innerHTML = "";
  document.getElementById("searchBoxId").style.display = "block";
  createTables(personalDetails);
  // var searchForm = document.createElement("form");
  // searchForm.setAttribute("class", "searchBox");
  // var searchBar = document.createElement("input");
  // searchBar.setAttribute("placeholder", "Search ... ");
  // searchBar.setAttribute("type", "text");
  // searchBar.setAttribute("id", "searchBarInput");
  // searchBar.setAttribute("onkeyup", "fillterdProducts()");
  // searchForm.appendChild(searchBar);
  // document.getElementById("dashboard_content").appendChild(searchForm);
  // var displayContent = document.createElement("div");
  // displayContent.setAttribute("class", "content");
}
function viewPayslip() {
  console.log(payslipDetails);
  document.getElementById("dashboard_content").innerHTML = "";
  //   var empName = localStorage.getItem("username");
  for (pData of payslipDetails) {
    if (pData.emp_username == "safeya1") {
      document.getElementById("dashboard_content").innerHTML =
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
  document.getElementById("dashboard_content").appendChild(table);
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
