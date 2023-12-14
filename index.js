// Write your solution in this file!
//Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';

//Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}

//Write a function that, when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';
}

//Write a new function that changes the bestCustomer variable.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Update the expected value to 'maybe bob'.
}


//Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value. Write a function that attempts to change the constant.
const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
       leastFavoriteCustomer = 'new value';
}
