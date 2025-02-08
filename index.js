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

// let array = [33, 43, 90, 35, 96, 26, 48];
// console.log("Starting time my array was:", array);

// // Function to add an element at the last of the array manually
// function addLast(array, element) {
//   // Increase the size of the array (without using push)
//   let newSize = array.length + 1;
//   array[newSize - 1] = element; // Place the new element at the last position
// }

// // Function to add an element at the first of the array manually
// function addFirst(array, element) {
//   let newSize = array.length + 1;

//   // Shift all elements to the right by one position
//   for (let i = newSize - 2; i >= 0; i--) {
//     array[i + 1] = array[i];
//   }

//   // Insert the new element at index 0
//   array[0] = element;
// }

// // Add 0 at the beginning of the array
// addFirst(array, 0);

// // Add 100 at the end of the array
// addLast(array, 100);

// console.log("My updated array is:", array);
// find the min and max value form the array
// let array = [ 15465, 47486, 98789, 15456,14889,13569,47879,15489,15698,16397,15489]
// let minVal = array[0];
// for (let i = 0; i < array.length; i++) {
//   if(array[i]> minVal ){
//     minVal = array[i];
//     // i++
//   }

// }
// console.log("min value is :", minVal);
//  another ?? way to find min

// class MinHeap {
//   constructor() {
//       this.heap = [];
//   }

//   insert(val) {
//       this.heap.push(val);
//       this._heapifyUp();
//   }

//   _heapifyUp() {
//       let index = this.heap.length - 1;
//       while (index > 0) {
//           let parentIndex = Math.floor((index - 1) / 2);
//           if (this.heap[parentIndex] <= this.heap[index]) break;
//           [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
//           index = parentIndex;
//       }
//   }

//   getMin() {
//       return this.heap[0];
//   }
// }

// let heap = new MinHeap();
// let array = [15465, 47486, 98789, 15456, 14889, 13569, 47879, 15489, 15698, 16397, 15489];

// for (let num of array) {
//   heap.insert(num);
// }

// console.log("min value is:", heap.getMin());

let array = [
  12, 5645, 0, 645, 4789, 548, 748, 468488, 5646, 486, 41, 116, 8546, 585, 97,
  6987, 4655, 654, 464, 84798, 45, 99, 48, 9795, 746, 564653, 53411, 56554,
  84544, 4112, 564,
];
// we we have to search for 99 wether this exist in the array or not
let num = 99;
for (let i = 0; i < array.length; i++) {
  if (array[i] == num) {
    console.log("your number is found at :", i);
    i++
    break
  }else{
    console.log("number not found Veer bhai");
    
    break;
  }
  }
  

// console.log(
//   "your desired number is not available in this number try searching for another number"
// );

// console.log("num is at ", i);
