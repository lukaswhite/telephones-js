var phoneUtil = require('google-libphonenumber').phoneUtil
	, PNF = require('google-libphonenumber').PhoneNumberFormat
	, PNT = require('google-libphonenumber').PhoneNumberType;

var tel = phoneUtil.parse('+12024561111');

console.log(phoneUtil.format(tel, PNF.INTERNATIONAL));

console.log(phoneUtil.format(tel, PNF.NATIONAL));

console.log(phoneUtil.format(tel, PNF.E164));

var tel = phoneUtil.parse('2024561111', 'US');

var tel = phoneUtil.parse('202-456-1111', 'US');

var tel = phoneUtil.parse('(202) 456 1111', 'US');

//var tel = phoneUtil.parse('(0) 20 7925 0918', 'GB');
console.log(phoneUtil.format(tel, PNF.INTERNATIONAL));
console.log(phoneUtil.format(tel, PNF.NATIONAL));
console.log(phoneUtil.format(tel, PNF.E164));

console.log(Math.floor(Math.random()*8999+1000));

var type = phoneUtil.getNumberType(tel)

if (type === PNT.MOBILE) {
	console.log("It's a mobile number");
} else if (type === PNT.FIXED_LINE) {
	console.log("It's a fixed line");
}

if (type === PNT.MOBILE) {
	console.log("It's a mobile number");
} else if (type === PNT.FIXED_LINE) {
	console.log("It's a fixed line");
} else if (type === PNT.FIXED_LINE_OR_MOBILE) {
	console.log("Your guess is as good as mine");
}

console.log(phoneUtil.isValidNumber(phoneUtil.parse('+12024561111')));
// => outputs true

console.log(phoneUtil.isValidNumber(phoneUtil.parse('202-456-1111', 'US')));
// => outputs true

console.log(phoneUtil.isValidNumber(phoneUtil.parse('(0) 20 7925 0918', 'GB')));
// => outputs true


console.log(phoneUtil.isValidNumber(phoneUtil.parse('(0) 20 7925 0918')));
// => throws exception "Error: Invalid country calling code"

console.log(phoneUtil.isValidNumber(phoneUtil.parse('2024561111')));
// => throws exception "Error: Invalid country calling code"

console.log(phoneUtil.isValidNumber(phoneUtil.parse('NOT-A-NUMBER', 'US')));
// => throws exception "Error: The string supplied did not seem to be a phone number"

console.log(phoneUtil.isValidNumber(phoneUtil.parse('573 1234 1234', 'US')));
// => outputs false

console.log(phoneUtil.isValidNumber(phoneUtil.parse('555-555-5555', 'US')));
// => outputs false (often used as a demonstration or placeholder, but not a valid number)

console.log(phoneUtil.isValidNumber(phoneUtil.parse('295-123-1234', 'US')));
// => outputs false (there is no 295 area code)

console.log(Math.floor(Math.random()*89999+10000));
