import { moment } from 'moment/moment';
import {superValue} from './math';
import {sum, value, settings as dimensions} from './math';
import math from './math'                                       //defaul bez klamerek z dowolną nazwą, defaultowych exportów w pliku może być tylko jeden
import validator, {min, max} from './validator'

console.log('Super value is ' + superValue + ' - index.js')

if (dimensions.width > 1000) {
    console.log('This is huge - index.js')
}

