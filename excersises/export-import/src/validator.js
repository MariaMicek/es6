const min = 10;
const max = 100;
export { min, max };
export default class Validator {
  constructor(value) {
    this.value = value;
  }
  isValid() {
    return this.value > min && this.value < max;
  }
};