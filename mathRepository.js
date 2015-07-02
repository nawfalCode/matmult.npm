/**
 * Factorial Function
 * @param   {Number} factNo input number
 * @returns {Number} the factorial
 */
function factorial(factNo) {
    try {

        var result = 1;
        for (var i = 1; i <= factNo; i++) {
            result *= i;
        }
        return ({
            result: result,
            msg: 'successfull'
        });
    } catch (err) {
        return {
            result: undefined,
            msg: err
        };
    }
}

/**
 * [[Description]]
 * @param {[[Type]]} a [[Description]]
 * @param {[[Type]]} b [[Description]]
 */
function matrixMultiply(a, b, vMode) {
    if ((a.constructor === Array) && (b.constructor === Array)) { // Both of them are arrays
        if (a[0].length > 0) { // a is 2d
            if (b[0].length > 0) { //b is also 2d
                return (multiply2dx2d(a, b));
                console.log('Multiply 2d X 2d');
            } else { // b is 1d
                return (multiply2dx2d(a, b));
                console.log('multiply 2d X 1d');
            }
        } else {
            if (b[0].length > 0) { //b is 2d
                console.log('nultiple 1d X 2d');
                return({result:undefined,msg:'Undefined'});
            } else {
                console.log(vMode);
                return ((vMode === undefined) ? {
                    result: undefined,
                    msg: 'Mode is required'
                } : multiply1dx1d(a, b, vMode));

                console.log('multiply 1d X 1d');
            }
        }
    } else { // one of them is not an array
        if (a.constructor === Array) { // a is array and b is a number
            return (multiplyArrayxNumber(a, b));
            console.log('multiply Array by number');
        } else if (b.constructor === Array) { // a is a number and b is an array
            return (multiplyArrayxNumber(b, a));
            console.log('multiply number X Array');
        } else { // both of them are numbers
            return {
                result: (a * b),
                msg: 'successfull'
            };
        }
    }
}

function multiplyArrayxNumber(a, b) {
    var m = a.length;
    var n = (a[0].length === undefined) ? -1 : a[0].length;
    if (n > 0) {
        var c = [];
        for (var i = 0; i < m; i++) {
            c.push([]);
            for (var j = 0; j < n; j++) {
                c[i].push(a[i] * b);
            }
        }
        return ({
            result: c,
            msg: 'successfull'
        });
    } else {
        var c = [];
        for (var i = 0; i < m; i++) {
            c.push(a[i] * b);
        }
        return ({
            result: c,
            msg: 'successfull'
        });


    }


}

function multiply1dx1d(a, b, vMode) {
    if (vMode === 'rc') { // raw vector, coloumn vector
        return multiplyrc(a, b);
    } else if (vMode === 'cr') { // coloumn vector , raw vector
        return (multiplycr(a, b));
    } else {

        return ({
            result: undefined,
            msg: 'unknow mode'
        });
    }
}

function multiplyrc(a, b) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return ({
        result: sum,
        msg: 'successfull'
    });
}

function multiplycr(a, b) {
    var c = [];
    var n = a.length; // number of rows in a
    var m = 1;
    var x = b.length;
    console.log('m:' + m);
    console.log('n:' + n);
    console.log('x:' + x);
    for (var i = 0; i < n; i++) {
        c.push([]);
        for (var j = 0; j < x; j++) {
            c[i].push(a[i] * b[j]);
        }
    }
    return ({
        result: c,
        msg: 'successfull'
    });
}

//********************************************************************
function multiply2dx2d(a, b) {
    if (a[0].length !== b.length) {
        return ({
            result: undefined,
            msg: 'Matrices Sizes issues'
        }); // check if both arrays have the save size
    } else {
        var c = [];

        var n = a.length; // number of rows in a
        var m = a[0].length;
        var x = b[0].length;
        for (var i = 0; i < n; i++) {
            c.push([]);
            for (var j = 0; j < x; j++) {
                sum = 0;
                for (var k = 0; k < m; k++) {
                    sum += a[i][k] * b[k][j];
                }
                c[i].push(sum);
            }
        }
        return ({
            result: c,
            msg: 'successfull'
        });

    }
}




module.exports.factorial = factorial;
module.exports.matrixMultiply = matrixMultiply;