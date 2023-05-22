function Employee(
  _account,
  _fullName,
  _email,
  _password,
  _workDay,
  _basicSalary,
  _role,
  _workHourInMonth
) {
  // * attribute
  this.account = _account;
  this.fullName = _fullName;
  this.email = _email;
  this.password = _password;
  this.workDay = _workDay;
  this.basicSalary = _basicSalary;
  this.role = _role;
  this.workHourInMonth = _workHourInMonth;

  // * method
  this.totalSalary = function () {
    if (this.role == "Sếp") {
      return this.basicSalary * 3;
    } else if (this.role == "Trưởng phòng") {
      return this.basicSalary * 2;
    } else if (this.role == "Nhân viên") {
      return this.basicSalary;
    }
  };
  this.rate = function () {
    if (this.workHourInMonth >= 192) {
      return "Xuất sắc";
    } else if (this.workHourInMonth >= 176 && this.workHourInMonth < 192) {
      return "Giỏi";
    } else if (this.workHourInMonth >= 160 && this.workHourInMonth < 176) {
      return "Khá";
    } else {
      return "Trung bình";
    }
  };
}
