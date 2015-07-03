var repository = require('./mathRepository');
module.exports = {
    /**
     * Factorial Function
     * @param   {Number} factNo input number
     * @returns {Number} the factorial
     */
    getFactorail: function(factNo) {
        if ((!isNaN(factNo)) || (factNo < 0)) {
            return undefined;
        } else {
            retun(repository.factorial(factNo));
        }
    }
}

/*

console.log(repository.matrixMultiply([
    [3, 4],
    [3, 1]
], [
    [3, 1],
    [7, 8]
]));
*/
console.log(repository.matrixMultiply([1,2],[3,4],'cr'));
console.log(repository.matrixMultiply(3,[1,2],'cr'));
//console.log(repository.factorial(5));