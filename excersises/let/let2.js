function f() {
  let x;
  if (true) {
    x = 'ok';
  }
  let x = "inner";      //należy usunąć let
  console.log(x);
};
f();

//ponowana deklaracja nie działa (z var działa)