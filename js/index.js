// Loop 
const num = parseInt(prompt('Enter Fibinachi number - " Exemple with loop"'));

const result = fibLop(num);
alert(result);

function fibLop(num){
let first = 0;
let second = 1;

      for( let i = 0; i < num; i++){
        
          let next = first;
          first = second;
          second = next + second;
        
 }
      return first;
}          







// Lections work
//  for (let i = 9; i >= 1; i--) {
//      if (i % 2 === 1) {
//       console.log(i) + "*";
//      }
//  }


// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     ++i;
// }

// let i = 200;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100)

// let num = parseFloat(prompt('Enter a number'));
// while( Number.isNaN(num) ) {
//     alert('Please enter a number');
//     num = parseFloat(prompt('Enter a number'));
// }

// let productNames = [];
// productNames.push('Tesla X');
// productNames.push('Chevrolet Corvette');
// productNames.push('LC Prado');
// console.log(productNames[0]);
// productNames[0] = 'Tesla S';
// console.log(productNames[0]);
// productNames[3] = 'ZAZ Lanos';
// console.log('length: ' + productNames.length);

// // console.log('Printing all');

// // for (let i = 0; i < productNames.length; i++) {
// //     console.log(productNames[i]);
// // }

// productNames[10] = 'Hummer';
// console.log('length: ' + productNames.length);

// console.log('Printing all again');

// for (let i = 0; i < productNames.length; i++) {
//     console.log(productNames[i]);
// }

// productNames.forEach(function (element, idx) {
//     if (idx % 2 === 0) {
//         console.log(idx, element);
//     }
// });

// productNames.forEach( (element, idx) => {
//     if (idx % 2 === 0) {
//          console.log(idx, element);
//     }
// });

//          0    1   2   3   4   5
//let arr = [100, 42, 37, 98, 56, 99];

// function sumOddEls(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 1) {
//             total += arr[i];
//         }
//     }
//     return total;   
// }

// function modernSumOddEls(arr) {
//     return arr.filter( (el, idx ) => idx % 2 )
//       .reduce(  (acc, el) => acc + el, 0);
// }

// console.log(sumOddEls(arr));
// console.log(modernSumOddEls(arr));
// let arrAy = [100, 42, 37, 98, 56, 99];
// function sumOddEls(arrAy){
//         return arrAy.filter ( (el, ind) => 
//     ind % 2 === 1);
//     }

// console.log(sumOddEls(arrAy));

// function padIt(str,n){
//   let star = str;
//   for (let i = 0; i < n; n++){ 
//         if(n % 2 === 1) {
//             star = "*" + str 
//         } 
//         return star;
// }

// // }
// function padIt(str,n){
//   let star;
//      for (let i = 0; i < n; n++){ 
//           star = str + "*" 
//          } 
//          return star;
 
// }

// console.log(padIt("a", 3));
// console.log(padIt("a", 4));
// console.log(padIt("a", 5));

