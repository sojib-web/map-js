const students = [
  {id:  11, name: 'sojib'},
  {id:  12, name: 'kutta'},
  {id:  13, name: 'bilai'},
  {id:  14, name: 'bandor'},
];

const name = students.map(s => s.name);
const id = students.map( i => i.id);
const bigger = students.filter(i => i.id < 11);
console.log(bigger);