
//A Function with 3 arguments
const func1 = function(a, b, c){
	const val = (a + b) * c;
	return val;
};

//A function that takes no arguments and return something
const noArgument = function() {

	return "Ku-ku";
};

//A function that takes arguments, does something but does not return anything 
const noReturn = function(number1, number2){
	const add = number1 + number2;

};
  
console.log(noReturn())

//A function called fullName that takes as argument first name and last name and returns the full name of the person
const name = function(){
 return 'Taron';
};

const surname = function(){
	return 'Nersisyan';
}

const fullName = function(fname, lname){
 return fname + ' ' + lname;
};

//A function that takes three strings and returns the string that is the longest

const longestString = function(string1, string2, string 3){
 if (string1.length > string2.length && string1.length > string3.length) {
 	return string1;
 } else if (string2.length > string3.length && string2.length > string1.length) {
 	return string2;
 } else if (string3.length > string1.length && string3.length > string2.length) {
 	return string3;
 } else if (string1.length === string2.length === string3.length){
 	return 'Strings have same length' ;
 }
};
  
//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger 
const func = function(a, b){
	if (a === b) {
		return 0;
	} else {
		return 1;
	};
};


//A function that takes three inputs and returns the first truethy value

const isTruethy = function(val1, val2, val3 ){
 return val1 || val2 || val3 ; 
};







