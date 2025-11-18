// Accessor Property
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Use property-like method (getter)
  get fullName() {
    return `get ${this.firstName} ${this.lastName}`;
  }

  // Assign a value
  set fullName(value) {
    console.log(`set ${value}`);
  }
}

const student = new Student("Suzy", "Kim");
console.log(student.firstName);
// console.log(student.fullName()); -> Without 'get', call as a funciton
console.log(student.fullName); // Access like a property, not a function
student.fullName = "Anna Lee";
