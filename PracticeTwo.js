// const numbers = [3, 9, 1, 25, 6, 11, 7];

// console.log(Math.max(...numbers));

// Ques_1

// function findMax(numbers) {
//     // Your code here
//     let max=numbers[0];
//     for(let i=0;i<numbers.length;i++){

//         if(numbers[i]>max){
//           max=numbers[i];
//         }

//     }
//     return max;
// }

//Ques_2
//   const numbers = [3, 9, 1, 25, 6, 11, 7];
//   console.log(findMax(numbers));

// const numbers = [3, 9, 1, 25, 6, 11, 7];

// const calculateSum=()=>{
//     let sum=0;
//     for (let index = 0; index < numbers.length; index++) {
//       sum+=numbers[index];

//     }
//     return sum;

// }

// console.log(calculateSum(numbers));

//Ques_3

// const reverseString=()=>{
//    let myString='';
//    for(let i=inputString.length;i>=0;i--){
//     myString+=inputString[i];
//    }
//    return myString;
// }

// const inputString ="Hello, World!";
// console.log(reverseString(inputString));

//Ques_4
//occurance of number
// const count=(numbers,target)=>{
//     let count=0;
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]==target){
//             count++;
//         }
//     }
//     return count;

// }

// const numbers = [1, 2, 3, 4,3, 2, 2, 5, 6, 2];
// console.log(count(numbers,3));

// Ques_5

// const checkPalindrome = (inputString) => {
//   const reverse = (inputString) => {
//     let myString = "";
//     for (let i = inputString.length - 1; i >= 0; i--) {
//       myString += inputString[i];
//     }
//     return myString;
//   };
//   return inputString === reverse(inputString);
// };
// const inputString="Raavi"
// console.log(checkPalindrome(inputString));

// Ques_6

// const numbers = [1, 2, 1, 2, 3, 4, 4, 5];

// const removeDuplicate=()=>{
//     for(let i=0;i<numbers.length;i++){
//         for(let j=i+1;j<numbers.length;j++){
//         //    myArr= numbers.push(j)
//             if(numbers[i]===numbers[j]){
//                 numbers.splice(j,1)

//             }
//         }

//     }
//     return numbers;
// }
// console.log(removeDuplicate(numbers));

// const Async=async ()=>{

//     try {
//       const result=await fetch('https://randomuser.me/api/')
//       const results=await result.json();
//       return results;
//     } catch (err) {
//       console.log(err,"error");
//       return err;
//     }

//   }
//   Async()
//   .then((res)=>{
//    console.log(res,"hvhgfgh")
//   })
//   .catch((err)=>{
//    console.log(err,"error");
//   });

// async function fetchUserData(){
// try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const result=await response.json();
//    result.forEach((user)=>{
//        console.log(`User ID:${user.id}`);
//     });
//     return result;

// } catch (error) {
//     console.log(error,"error occured");
// }

// }
// fetchUserData()
// .then((res)=>{
//     console.log(res,"resolved");
//    })
//   .catch((err)=>{
// console.log(err);
//   })
// async function fetchUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const result = await response.json();

//     result.forEach((user) => {
//       console.log(`User ID: ${user.id}`);
//       console.log(`Name: ${user.name}`);
//       console.log(`Email: ${user.email}`);
//       console.log("---");
//     });

//     return result; // Returning the result array
//   } catch (error) {
//     console.log(error, "error occurred");
//     throw error; // Re-throw the error if necessary
//   }
// }

// fetchUserData()
//   .then((res) => {
//     console.log(res, "resolved");
//   })
//   .catch((err) => {
//     console.log(err, "rejected");
//   });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterEvenNumbers=numbers.filter((num)=>num%2==0)

// console.log(filterEvenNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterEvenNumbers=()=>{
// return number2.filter((num)=>num%2==0);
// }

// console.log(filterEvenNumbers(numbers));

const number2 = [1, 3, 5, 7, 8, 9, 8, 9, 0, 6, 4, 3, 3, 4, 5, 6, 6, 6];
const removeDuplicate = () => {
  const arr = [];

  for (let i = 0; i < number2.length; i++) {
    isDuplicate = false;
    for (let j = i + 1; j <= number2.length; j++) {
      if (number2[i] === number2[j]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      arr.push(number2[i]);
    }
  }
  console.log(arr);
};
removeDuplicate();
