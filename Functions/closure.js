function values() {
  // Lexical scope
  let a = 10;
  let b = 20;
  function add() {
    let result = a + b;
    console.log(result);
    function add2() {
        let c = 67
      console.log(a + b + c);
      // console.log(c)
    }
    add2();
  }
  add();
}

values();
