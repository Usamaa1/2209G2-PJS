function msg1(cb) {
  setTimeout(() => {
    console.log("message 1");
    // console.log(typeof cb);
    cb();
  }, 3000);
}
function msg2(cb) {
  setTimeout(() => {
    console.log("message 2");
    // console.log(typeof cb);
    cb();
  }, 6000);
}
function msg3(cb) {
  setTimeout(() => {
    console.log("message 3");
    // console.log(typeof cb);
    cb();
  }, 4000);
}
function msg4(cb) {
  setTimeout(() => {
    console.log("message 4");
    // console.log(typeof cb);
    cb();
  }, 1000);
}
function msg5() {
  setTimeout(() => {
    console.log("message 5");
  }, 2000);
}

msg1(() => {
  msg2(() => {
    msg3(() => {
      msg4(function () {
        msg5();
      });
    });
  });
});



// let a = 1.0;

// let b = 'jfksdjfkdjs'
// let c = []

// console.log(typeof a)
