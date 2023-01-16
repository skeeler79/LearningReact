import fruitArr from './foods';
import fruits from './foods';
import {choice, remove} from './helpers';

let fruit = choice(fruitArr);

console.log(`I'd like one ${fruit}, please.`)
console.log(`Here you go: ${fruit}`);



console.log('Delicous, I\'d like another!');

let remaining = remove(fruitArr, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining} fruits left.`)