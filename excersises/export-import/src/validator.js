import {superValue} from './math';    //mimo że zaimportowany też kilka razy do index.js to jest wywoływany tylko raz

const min = superValue;
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

console.log('test - validator.js')