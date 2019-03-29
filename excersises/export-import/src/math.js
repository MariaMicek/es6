console.log("how many times do you see that - math.js")   //this will execute once it's added to scripts

//1
export function sum(a, b) {
  return a + b;
};

export function diff(a, b) {
  return a - b;
};

export const value = 9001;

//2
const settings = {
  width: 5000,
  height: 1000
};

export {settings}

//3
const newValue = 9001;

export {newValue as superValue}

//4
export default () => {
  return 'Math lib ver 1.0';
};