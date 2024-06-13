function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    return 0;
  } else {
    this.marks = this.marks.concat(marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return 0;
  } else {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
