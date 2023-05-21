// todo: account length 4-6 and must be unique - not empty
function checkAccount(account, type) {
  if (type == "add") {
    if (account.length >= 4 && account.length <= 6) {
      for (var i = 0; i < employee_list.length; i++) {
        if (account == employee_list[i].account) {
          document.getElementById("tbTKNV").style.display = "block";
          document.getElementById("tbTKNV").innerHTML = "Tài khoản đã tồn tại";
          return false;
        }
      }
      document.getElementById("tbTKNV").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbTKNV").style.display = "block";
      document.getElementById("tbTKNV").innerHTML =
        "*Vui lòng nhập tài khoản dài 4 - 6 chữ";
      return false;
    }
  }
  return true;
}

// todo: fullName must be letters - not empty
function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

function checkFullName(fullName) {
  var name = removeAscent(fullName);
  var nameRegex = /^[A-Za-z\s]+$/;
  if (name.match(nameRegex) && name != "") {
    document.getElementById("tbTen").innerHTML = "";
    return true;
  } else if (name == "") {
    document.getElementById("tbTen").style.display = "block";
    document.getElementById("tbTen").innerHTML = "* Vui lòng nhập họ tên";
    return false;
  }
  document.getElementById("tbTen").style.display = "block";
  document.getElementById("tbTen").innerHTML = "* Họ tên chỉ gồm các chữ cái";
  return false;
}

// todo: email must match the email regex - not empty
function checkEmail(email) {
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (emailRegex.test(email)) {
    document.getElementById("tbEmail").innerHTML = "";
    return true;
  } else if (email == "") {
    document.getElementById("tbEmail").style.display = "block";
    document.getElementById("tbEmail").innerHTML = "* Vui lòng nhập email";
    return false;
  }
  document.getElementById("tbEmail").style.display = "block";
  document.getElementById("tbEmail").innerHTML = "* Email không hợp lệ";
  return false;
}

// todo: password length 6-10 include at least 1 number, 1 uppercase letter and 1 special letter - not empty
function checkPassword(password) {
  var passwordRegex = /^(?=\S*?[A-Z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{6,10}$/;
  if (passwordRegex.test(password)) {
    document.getElementById("tbMatKhau").innerHTML = "";
    return true;
  } else {
    document.getElementById("tbMatKhau").style.display = "block";
    document.getElementById(
      "tbMatKhau"
    ).innerHTML = `* Vui lòng nhập mật khẩu gồm:
    <br>&nbsp;&nbsp;&nbsp; 1. Từ 6 đến 10 ký tự
    <br>&nbsp;&nbsp;&nbsp; 2. Ít nhất một chữ số
    <br>&nbsp;&nbsp;&nbsp; 3. Ít nhất một ký tự in hoa
    <br>&nbsp;&nbsp;&nbsp; 4. Ít nhất một ký tự đặc biệt`;
    return false;
  }
}

// todo: wordDay must match mm/dd/yyyy - not empty
function isValidDate(str) {
  // todo: First check for the pattern
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(str)) return false;

  // todo: Parse the date parts to integers
  var parts = str.split("/");
  var day = parseInt(parts[1], 10);
  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[2], 10);

  // todo: Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // todo: Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // todo: Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

function checkWorkDay(workDay) {
  var validDate = isValidDate(workDay);
  if (validDate) {
    document.getElementById("tbNgay").innerHTML = "";
    return true;
  } else {
    document.getElementById("tbNgay").style.display = "block";
    document.getElementById("tbNgay").innerHTML =
      "* Vui lòng nhập hoặc chọn ngày làm việc theo định dạng mm/dd/yyyy";
    return false;
  }
}

// todo: basicSalary 1 000 000 - 20 000 000 - not empty
function checkBasicSalary(basicSalary) {
  if (basicSalary >= 1000000 && basicSalary <= 20000000) {
    document.getElementById("tbLuongCB").innerHTML = "";
    return true;
  } else {
    document.getElementById("tbLuongCB").style.display = "block";
    document.getElementById("tbLuongCB").innerHTML =
      "* Vui lòng nhập mức lương từ 1.000.000 đến 20.000.000 đ";
    return false;
  }
}

// todo: role must be "Sếp", "Trưởng phòng", "Nhân viên"
function checkRole(role) {
  if (role == "Sếp" || role == "Trưởng phòng" || role == "Nhân viên") {
    document.getElementById("tbChucVu").innerHTML = "";
    return true;
  } else {
    document.getElementById("tbChucVu").style.display = "block";
    document.getElementById("tbChucVu").innerHTML = "* Vui lòng chọn chức vụ";
    return false;
  }
}

// todo: workHourInMonth 80 - 200 hours - not empty
function checkWorkHourInMonth(workHourInMonth) {
  if (workHourInMonth >= 80 && workHourInMonth <= 200) {
    document.getElementById("tbGiolam").innerHTML = "";
    return true;
  } else {
    document.getElementById("tbGiolam").style.display = "block";
    document.getElementById("tbGiolam").innerHTML =
      "* Vui lòng nhập giờ làm từ 80 - 200 giờ";
    return false;
  }
}
