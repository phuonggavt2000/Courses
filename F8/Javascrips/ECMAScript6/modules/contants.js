var array1 = ["Javascript", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];

var object1 = {
  name: "Javascript",
  title: "Khóa học cho người mới",
  coin: 200,
};
var object2 = {
  price: 1000,
};

var array = ["Javascript", "Ruby", "PHP"];
var array3 = [...array1, ...array2]; // arrray3 = ['Javascript', 'Ruby', "PHP", "ReactJS", "Dart" ]
var object3 = { ...object1, ...object2 }; // object3 = {name: "Javascript", title: "Khóa học cho người mới", coin: 200, price: 1000 }
var object4 = { ...object1, ...object2, title: "mới thì sao" }; //{name: 'Javascript', title: 'mới thì sao', coin: 200, price: 1000}
const logger = (a, b, c) => console.log(a, b, c); // Javascript Ruby PHP
logger(...array);
