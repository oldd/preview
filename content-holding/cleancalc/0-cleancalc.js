// this is the functions and variables that will become props and methods in your cleancalc
// this file uses'procedural programming' - writing things in the order you want them to happen

// understand this file before moving on to cleancalc 1


// -------------------  version the first  --------------------- //

var lastResult = 0000;

function add(arg1, arg2) {
	return arg1 + arg2;
};

function subtract(arg1, arg2) {
	return arg1 - arg2;
};

function multiply(arg1, arg2) {
	return arg1 * arg2;
};

function divide(arg1, arg2) {
	return arg1 / arg2;
};


lastResult = add(2, 4);
lastResult = add(5, lastResult);
lastResult = multiply(3,2);


// -------------------  version the second  --------------------- //

lastResult = 0000;

function operateIntermediary(operation, arg1, arg2) {
	return operation(arg1, arg2);
};

lastResult = operateIntermediary(add, 2, 4);
lastResult = operateIntermediary(add, 5, lastResult);
lastResult = operateIntermediary(multiply, 3,2);


// -------------------  version the third  --------------------- //

lastResult = 0000;

function operate(operation, arg1, arg2) {
	if (arg2) {
		lastResult = operation(arg1, arg2);
		return lastResult;
	} else {
		lastResult = operation(arg1, lastResult);
		return lastResult;
	}
};

lastResult = operate(add, 2, 4);
lastResult = operate(add, 5);
lastResult = operate(multiply, 3,2);


