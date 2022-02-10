 const  numbers = [4,5,6,7,6,8,10,20];
//  const output = [];
//  for(i=0 ; i <numbers.length; i++){
//     const  element = numbers[i];
//     const result = element * element;
//     output.push(result);
//  }
//  console.log(output);

//   const result = numbers.map(function(element){
//    return element * element;
//  })

 const result = numbers.map(x => x*x);
 const result2 = numbers.filter( x => x > 5);
 const result2 = numbers.find( x => x > 5);
 console.log(result2);


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


 
 

