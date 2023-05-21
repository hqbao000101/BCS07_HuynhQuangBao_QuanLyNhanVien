var employee_list = [];

// todo: add new employees
function createNewEmployees(type) {
  // todo: get input data
  var account = document.getElementById("tknv").value;
  var fullName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var workDay = document.getElementById("datepicker").value;
  var basicSalary = document.getElementById("luongCB").value * 1;
  var role = document.getElementById("chucvu").value;
  var workHourInMonth = document.getElementById("gioLam").value * 1;
  // todo: validation
  var validateValue = true;
  validateValue =
    checkAccount(account, type) &
    checkFullName(fullName) &
    checkEmail(email) &
    checkPassword(password) &
    checkWorkDay(workDay) &
    checkBasicSalary(basicSalary) &
    checkRole(role) &
    checkWorkHourInMonth(workHourInMonth);

  if (!validateValue) {
    return;
  }

  // todo: create a new employee
  var employee = new Employee(
    account,
    fullName,
    email,
    password,
    workDay,
    basicSalary,
    role,
    workHourInMonth
  );

  return employee;
}

function getCurrentDay() {
  const date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (month < 10) {
    return `0${month}/${day}/${year}`;
  }
  return `${month}/${day}/${year}`;
}

function resetForm() {
  var currentDate = getCurrentDay();
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = currentDate;
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "Chọn chức vụ";
  document.getElementById("gioLam").value = "";
}

function renderUI() {
  var content = "";
  for (var i = 0; i < employee_list.length; i++) {
    var employee_total_salary = employee_list[i].totalSalary();
    var formatSalary = employee_total_salary.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    content += `
    <tr>
      <td>${employee_list[i].account}</td>
      <td>${employee_list[i].fullName}</td>
      <td>${employee_list[i].email}</td>
      <td>${employee_list[i].workDay}</td>
      <td>${employee_list[i].role}</td>									
      <td>${formatSalary}</td>
      <td>${employee_list[i].rate()}</td>
      <td>
        <button class="btn btn-warning px-3 py-2 mr-1 text-white" onclick="editEmployee('${
          employee_list[i].account
        }')" data-toggle="modal" data-target="#myModal">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button class="btn btn-danger px-3 py-2" onclick="deleteEmployee('${
          employee_list[i].account
        }')">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </td>
    </tr>
    `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

function btnToggle(activeBtn, disabledBtn) {
  document.getElementById(activeBtn).removeAttribute("disabled");
  document.getElementById(activeBtn).classList.remove("disabled");
  document.getElementById(disabledBtn).setAttribute("disabled", "");
  document.getElementById(disabledBtn).classList.add("disabled");
}

function fetchData(account) {
  for (var i = 0; i < employee_list.length; i++) {
    if (employee_list[i].account == account) {
      var currentEmployee = employee_list[i];
      document.getElementById("tknv").setAttribute("disabled", "");
      document.getElementById("tknv").value = currentEmployee.account;
      document.getElementById("name").value = currentEmployee.fullName.trim();
      document.getElementById("email").value = currentEmployee.email;
      document.getElementById("password").value = currentEmployee.password;
      document.getElementById("datepicker").value = currentEmployee.workDay;
      document.getElementById("luongCB").value = currentEmployee.basicSalary;
      document.getElementById("chucvu").value = currentEmployee.role;
      document.getElementById("gioLam").value = currentEmployee.workHourInMonth;
    }
  }
}
