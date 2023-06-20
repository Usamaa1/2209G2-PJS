// // promises
// function msg1(cb) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("message 1");
//         resolve();
//       }, 3000);
//     });
//   }
//   function msg2(cb) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("message 2");
//         resolve();
//       }, 2000);
//     });
//   }
//   function msg3(cb) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//       //   console.log("message 3");
//         reject('message 3 failed');
//     //   throw new Error("message 3 failed");
//       }, 4000);
//     });
//   }
//   function msg4(cb) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("message 4");
//         resolve();
//       }, 1000);
//     });
//   }
//   function msg5() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("message 5");
//         resolve();
//       }, 2000);
//     });
//   }




//  async function valid(){

//     try {
//         await msg1();
//         await msg2();
//         console.log('fjdksfjkds')
//         await msg3();
//         await msg4();
//         await msg5();
//     } catch (error) {
//         console.warn(error);
//     }
   

//   }


//   valid();






let array = [[2,3,5,67],[0,43,2,1,34]]


console.table(array)









