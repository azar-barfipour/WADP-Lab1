const numbers = [1, 2, 3];
const sumFunc = require("./module");
const res = sumFunc.mySum(...numbers);
console.log(res);

const myArr = [1, 2, 3, 4, 5, 6];
const result = sumFunc.mySum(...myArr);
console.log(result);

const mySecondArr = myArr.map((num) => num * 2);
const average = sumFunc.mySum(...mySecondArr) / mySecondArr.length;
console.log(mySecondArr.filter((num) => num > average));

setTimeout(() => {
  console.log("GoodBye");
}, 3000);

const Employee = {
  name: "Azar",
  email: "azar.bb@gmail.com",
  department: "A1",
  startDate: "Sep 2022",
};

const { name, email } = Employee;
const Person = {
  name,
  email,
};
console.log(Person);
