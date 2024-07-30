import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";
import { greet } from "./greet.js";
import { yo } from "./yo.js";

figlet('Hello, Ntombi!', function(err, data) {
    if(err) {
        console.log('Something went wrong...');
        console.dir(err)
        return;
    }
    console.log(data);
});

// const cowMessage = cowsay.say({
//     text: "Hello World!"
// });


console.log(chalk.bgBlue.white(cowsay.say({
    text: greet('Ntombi')
})));
// let word = 'Ntombi';
// word = 'Lihle'
// console.log(greet(word));
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);

// console.log(yo('Thabo'));
