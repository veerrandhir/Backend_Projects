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

// let array = [
//   12, 5645, 0, 645, 4789, 548, 748, 468488, 5646, 486, 41, 116, 8546, 585, 97,
//   6987, 4655, 654, 464, 84798, 45, 99, 48, 9795, 746, 564653, 53411, 56554,
//   84544, 4112, 564,
// ];
// // we we have to search for 99 wether this exist in the array or not
// let num = 99;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == num) {
//     console.log("your number is found at :", i);
//     i++;
//     break;
//   } else {
//     // console.log("number not found Veer bhai");

//     break;
//   }
// }

// console.log(
//   "your desired number is not available in this number try searching for another number"
// );

// console.log("num is at ", i);

//write an programe to print 1- 100 numbers

// for (let i = 1; i <= 10; i++) {
//   console.log("shivam" , i);
// }

// let number = 25; // You can change this to any number you'd like
// let tableLength = 10; // Length of the multiplication table (e.g., 1 through 10)

// console.log(`Multiplication Table for ${number}:`);
// for (let i = 1; i <= tableLength; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// write a programe to create a table form 10 - 30

// for (let n = 10; n <= 20; n++) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);

//   }
//   }
// Q Array swaping Algo
// let arr = [10,20,30,40,50]
// let i = 0
// let j = arr.length-1
// while(i!=j){

// let temp = arr[i]
// arr[i]= arr[j]
// arr[j]= temp
// i++
// j--

// }
// console.log(arr);
//  Q Swap all 0 in left and 1 in right side
// let arr = [
//   1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0,
// ];
// let i = 0,
//   j = 0;
// while (i <= arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     // temp = arr;
//     j++;
//   }
//   i++;
// }
// console.log(arr);
// Mix of all -ve and +ve elemements group all elemements right to left
// let arr1 = [-1, 3, 4, -2, 9, -3, 6, -5, -6, -9];
// let i = 0,
//   j = 0;

// while (i <= arr1.length) {
//   if (arr1[i] < 0) {
//     let temp = arr1[i];
//     arr1[i] = arr1[j];
//     arr1[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr1, "while loop");

// let arr = [1, 2, 3, -2, -3, -9, 5, 6, -6, 55, -95];
// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] > 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);
//
// QQ print Each charactors of strings in new line
// let s = prompt("Enter any string");
// let temp = "";
// for (let i = s.length - 1; i >= 0; i--) {
//   console.log(s[i]);
//   temp = temp + s[i];
// }
// console.log(temp);
// if ((s = temp)) console.log("paradome");

// let pallindrome = true;
// let s = prompt("enter a string");
// let i = 0,
//   j = s.length - 1;
// while (i < j) {
//   if (s.charAt(i) != s.charAt(j)) {
//     // console.log("Not pallindrome");
//     pallindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// if (pallindrome) console.log("pallindrome");
// else console.log("NO pallindrome");

// Q Toggle each character // ## Note this code is not working Need to check it

// let s = "aaffdeSdeEdeDeDeeFF";
// console.log(s);
// let toggle = "";
// for (let i = 0; i < s.length - 1; i++) {
//   // let ch = charAt(i);
//   // console.log(ch);

//   if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
//     toggle = toggle + String.fromCharCode(s.charCodeAt(i) + 32);
//   } else if (s.charCodeAt(i) >= 97 && charCodeAt(i) <= 122) {
//     toggle = toggle + String.fromCharCode(s.charCodeAt(i) - 32);
//   }
// }

// console.log(toggle);

// console.log(+true);
// console.log(typeof +false);
// // console.dir("Debugging information.");

// for (let i= 0 ; i< 3; i++){
//   setTimeout(()=>console.log(i), 1)
// }

// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

/// case
// let c = { name: "peter" };
// let d;
// d = c;
// console.log(d["name"]);
// c.name = "mark";
// console.warn(c.name);
