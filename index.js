// Write a progeram to add a element at last of the array

// let array = [33, 43, 90, 35, 96, 26, 48];
// for (let i = array.length - 1; i >= 0; i--) {
//   if (i == array.length-1) {
//     console.log(i);
//     array[i+1] = 100
//   }
// }
// console.log(array.length);
// Now add two element one at first and another at last of the array

// console.log("Starting time my array was :", array);

// for(let i= array.length-1 ;i>= 0; i--){
//    if(i>= 0){
//       array[i+1]=array[i]
//       if(i==0 ){
//          array[i]=0
//       }
//    }
// }

// for(let i= array.length-1 ;i>= 0; i--){
//    if (i == array.length-1){
//       array[i+1]= 100
//    }
// }
// console.log("Dekhi is array ko ",array)
// console.log("my updated array is :", array)

let array = [33, 43, 90, 35, 96, 26, 48];
console.log("Starting time my array was:", array);

// Function to add an element at the last of the array manually
function addLast(array, element) {
  // Increase the size of the array (without using push)
  let newSize = array.length + 1;
  array[newSize - 1] = element; // Place the new element at the last position
}

// Function to add an element at the first of the array manually
function addFirst(array, element) {
  let newSize = array.length + 1;
  
  // Shift all elements to the right by one position
  for (let i = newSize - 2; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  
  // Insert the new element at index 0
  array[0] = element;
}

// Add 0 at the beginning of the array
addFirst(array, 0);

// Add 100 at the end of the array
addLast(array, 100);

console.log("My updated array is:", array);

 