// todo: load existing data from the local
getLocal();
renderUI();

document.getElementById("btnThem").onclick = function () {
  // todo: disabled button
  btnToggle("btnThemNV", "btnCapNhat");

  // todo: set form to initial status
  document.getElementById("tknv").removeAttribute("disabled");
  resetForm();

  // todo: change title modal
  document.getElementById("header-title").innerHTML = "Thêm nhân viên";
};

// todo: add employees
function addEmployee() {
  // todo: get employee information
  var newEmployee = createNewEmployees("add");
  if (newEmployee != undefined) {
    // todo: view employees
    employee_list.push(newEmployee);

    saveLocal(employee_list);
    renderUI();

    // todo: reset form
    resetForm();
  }
}

function editEmployee(account) {
  // todo: disabled button
  btnToggle("btnCapNhat", "btnThemNV");
  document.getElementById("tbUpdate").innerHTML = "";

  // todo: change title modal
  document.getElementById("header-title").innerHTML = "Cập nhật thông tin";

  // todo: fetch current employee's data to the form
  fetchData(account);
}

function updateEmployee() {
  // todo: get employee new information
  var changedEmployee = createNewEmployees();
  if (changedEmployee) {
    // todo: update employee
    for (var i = 0; i < employee_list.length; i++) {
      if (employee_list[i].account == changedEmployee.account) {
        employee_list[i] = changedEmployee;
      }
    }

    // todo: re-render UI
    renderUI();
    saveLocal(employee_list);

    // todo: notify update success
    document.getElementById("tbUpdate").innerHTML = "Cập nhật thành công";
    document.getElementById("btnCapNhat").setAttribute("disabled", "");
    document.getElementById("btnCapNhat").classList.add("disabled");
  }
}

function deleteEmployee(account) {
  for (var i = 0; i < employee_list.length; i++) {
    if (employee_list[i].account == account) {
      employee_list.splice(i, 1);
    }
    renderUI();
    saveLocal(employee_list);
  }
}
