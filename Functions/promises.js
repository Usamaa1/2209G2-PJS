// promises
function msg1(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("message 1");
      resolve();
    }, 3000);
  });
}
function msg2(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("message 2");
      resolve();
    }, 2000);
  });
}
function msg3(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   console.log("message 3");
    //   reject('message 3 failed');
    throw new Error("message 3 failed");
    }, 4000);
  });
}
function msg4(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("message 4");
      resolve();
    }, 1000);
  });
}
function msg5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("message 5");
      resolve();
    }, 2000);
  });
}

msg1().then(msg2).then(msg3).then(msg4).then(msg5).catch(err=>console.log('jfdksjfkjsdkjfkjsd'))





// function divide(a, b) {
//   return new Promise((resolve, reject) => {
//     if (b === 0) reject("divide by zero should not allowed");

//     resolve(a / b);
//   });
// }

// console.log(divide(10, 3).catch((err) => console.log("jfdksjf")));
