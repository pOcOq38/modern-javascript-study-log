//Full-time, part-time class
//information of employee: name, department, hours per month
//full-time: $10 per hour, part-time: $8
//monthly payment according to above info

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  monthlyPay(hoursPerMonth, payRate) {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}

const fullTimeEmployee = new FullTimeEmployee("Rach", "HR", 160);
console.log(fullTimeEmployee.monthlyPay());
const partTimeEmployee = new PartTimeEmployee("Elle", "s/w", 140);
console.log(partTimeEmployee.monthlyPay());
