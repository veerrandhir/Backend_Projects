// Calculate "Simple Interest" From principal(P), Rate(R), and Time(T).

// let P = prompt("Enter the Principal Amount : ");
// let R = prompt("What is Rate? :");
// let T = prompt("Time period in years :");
// let SI = P * R * T;
// console.log("Your SI is ", SI);

// Q Calculate Max of 2 numbers.
// let a = prompt("Enter first number:");
// let b = prompt("Enter second number :");
// if (a < b) {
//   console.log(b, "is Bigger number");
// } else {console.log(a, "is bigger number")};
// Q Calculate Factorial of a number N.
// let num = prompt("Enter the number you want:");
// let i = 1;
// let fact = 1;
// while (i <= num) {
//   fact = fact*i;
//   i++;
// }
// console.log(fact);

// Q Given a person's age, find if they should get a driving licence or not.
// let age = prompt("Enter Your Age:");
// if (age < 18) {
//   console.log("Sorry You are not eligible to apply for Driving licence");
// } else {
//   let name = prompt("Enter your Full name:");
//   let DOB = prompt("Enter your D.O.B:");
//   console.log('"Congrats" You are eligible');
//   console.log(
//     `User details ${age}, ${name},${DOB}\n ${name} You can Apply Now`
//   );
// }
// Q find Character is Uppecase or lower case
// let ch = prompt("ENTER THE CHARACTER YOU WANT TO CHECK");
// if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
//   console.log("Upper Case");
// } else {
//   console.log("Lower Case");
// }
// Q sum of numbers form 1 - n
// let n = 9;
// let i = 1;
// let sum = 0;
// while (i <= n) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);
// Q Sum of all odd number upto n
// let n = 6;
// let sum = 0;
// for (let i = 1; i <= n; i += 2) {
//   sum += i;
//   console.log(i);

// }
// console.log(sum);
// Same problem with while loop use if conditional statement
// let i = 1;
// let oddSum = 0;
// let n = 45;
// while (i <= n) {
//   if (i % 2 != 0) {
//     console.log(i);
//     oddSum += i;
//   }
//   i++;
// }
// console.log("Total sum of above odd no. is :", oddSum);
// Q Check if number is prime or not
// let n = 78;
// let i = 2;
// let isPrime = true;
// while (i*i <= n) { // here we will why we consume more space computing if after a certein factor , factors starts repeating
//     if (n%i == 0) {
//       console.log(n, "is not prime number");
//       isPrime = false
//       break;
//   }
//   i++;
// }
// if(isPrime){
//     console.log(n, "Sure, is a prime number");

// }

// for (let i = 1; i <= 5; i++) {
//   console.log("2");

// }

// var row,
//   col,
//   n = 5;
// var pattern = "";
// for (row = 1; row <= n; row++) {
//   for (col = 1; col <= n - row; col++) {
//     pattern += " ";
//   }
//   for (col = 1; col <= row; col++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// let row = 12;
// for(let i= 1; i<=row; i++){
//     let str = "";
//     for(let j= 0; j<=row-1-i; j++){
//         str+=" "
//     }for(let j= 0; j<i; j++){
//         str+= " * "
//     }
//     console.log(str);
// }

// let unique = ["apple", "banana", "orange", "apple", "banana"];
// console.log([...new Set(unique)]);
// let mySet = new Set();
// mySet = ("mango", "banana", "kela", "papaya");
// console.log(mySet);

// let mySet = new Set();
// mySet.add("apple");
// mySet.add("banana");
// console.log(mySet);
// // Output: Set { 'apple', 'banana' }
// Q how to add object within an array

// let arr = [6,1,5,2,4,3]
// console.log(arr.sort((d,c)=> d-c)) ;
// let srt = "kajDFAWVdgedjopsfdgvfsDrersaVasdfg"
// console.log(srt.sort());

// ------------> Pattern Problems ----------->
// Q1. Draw a square pattern and print all alphabet no.
// let n = 6;
// let pattern = "";
// for (let i = 1; i <= n; i++) {
//   //   pattern += i;
//   for (let j = 0; j < n; j++) {
//     pattern += String.fromCharCode(65 + j), " ";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// Q
// let n = 5;
// let val = "";
// let num = 1;
// pattern = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     val = num;
//     //   console.log(val);
//     num++;
//   }

//   ("\n");
// }

// console.log(pattern);
// Q Left Swapping
//
// let x = 25;
// let y = 7;
// let z = 3;
// console.log((x % y) % z);
// Q rotate Right by 1 position
// let arr = [11, 22, 33, 44, 55, 66];
// let copy = arr[arr.length - 1];
// let count = 0;
// // let arr1 = new Array(); // this is not mendatory
// for (let i = arr.length - 1; i >= 0; i--) {
//   count++;
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr);
// console.log("My loop executed for ", count);
// Q Rotate left by 1 position
// let arr = [11, 22, 33, 44, 55, 66];
// let count = 0;
// let k = 530;
// k = k % arr.length;
// let isCount = 0;
// for (let i = 0; i < k; i++) {
//   let copy = arr[0];
//   isCount++;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//     count++;
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log("OUR NEW ARRAY :",arr);
// console.log("this is the value of % ", k);

// console.log("INNER LOOP RUN FOR ;", count);
// console.log("OUTER LOOP RUN FOR :",isCount);
// console.log("LENGTH OF ARRAY :",arr.length);

// Q
// let arr = [11, 22, 33, 44, 55];
// let k = 4;
// k = k % arr.length;
// // reverse(0, k - 1);
// // reverse(k, arr.length - 1); // (0, 4)
// reverse(0, arr.length - 1);

// console.log(arr);
// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++
//     j--
//   }
// }
// console.log(arr);
