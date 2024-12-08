//¤¤¤¤ Creating a regular expression ¤¤¤¤¤//

let re1 = new RegExp("/abc");
let re2 = /abc/;


//¤¤¤¤¤ Testing for matches ¤¤¤¤¤//

console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("eeeeabde"));
// → false


//¤¤¤¤¤ Sets of characters ¤¤¤¤¤//

console.log(/[0345678]/.test("in 1992"));
// → true
console.log(/[0-2]/.test("in 1992"));
// → true

let dateTime1 = /\d\d-\d\d-\d\d\d\d\s\d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false

let nonBinary = /[^01]/;
console.log(nonBinary.test("1100100010100110"));
// → false
console.log(nonBinary.test("0111010112101001"));
// → true


//¤¤¤¤¤ International characters ¤¤¤¤¤//

console.log(/\p{L}/u.test("α"));
// → true
console.log(/\p{L}/u.test("!"));
// → false
console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false


//¤¤¤¤¤ Repeating parts of a pattern ¤¤¤¤¤//

console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));
// → true


//¤¤¤¤¤ Grouping subexpressions ¤¤¤¤¤//

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
// → true


//¤¤¤¤¤ Matches and groups ¤¤¤¤¤//

let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]

console.log(/(?:na)+/.exec("banana"));
// → ["nana"]
