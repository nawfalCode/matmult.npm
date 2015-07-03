/**
 * Main Function
 * @param {Object} a can be a matrix,a vector, a number
 * @param {Object} b can be a matrix, a vector, a number
 */
function matrixMultiply(a, b, vMode) {
    if ((a.constructor === Array) && (b.constructor === Array)) { // Both of them are arrays
        if (a[0].length > 0) { // a is 2d
            if (b[0].length > 0) { //b is also 2d
                return (multiply2dx2d(a, b));
            } else { // b is 1d
                return (multiply2dx2d(a, b));
            }
        } else {
            if (b[0].length > 0) { //b is 2d
                return ('Undefined');
            } else {
                return ((vMode === undefined) ? 'Mode is Required' : multiply1dx1d(a, b, vMode));
            }
        }
    } else { // one of them is not an array
        if (a.constructor === Array) { // a is array and b is a number
            return (multiplyArrayxNumber(a, b));
        } else if (b.constructor === Array) { // a is a number and b is an array
            return (multiplyArrayxNumber(b, a));
        } else { // both of them are numbers
            return (a * b);
        }
    }
}

/**
 * Multiply Two arrays 
 * @param   {Object} a First Array
 * @param   {Array}  b Seccond array
 * @returns {Object} c=a X b
 */
function multiplyArrayxNumber(a, b) {
    var m = a.length;
    var n = (a[0].length === undefined) ? -1 : a[0].length;
    if (n > 0) {
        var c = []; // add new row
        for (var i = 0; i < m; i++) {
            c.push([]); // add new coloumn
            for (var j = 0; j < n; j++) {
                c[i].push(a[i] * b);
            }
        }
        return (c);
    } else {
        var c = [];
        for (var i = 0; i < m; i++) {
            c.push(a[i] * b);
        }
        return (c);
    }
}

/**
 * Multiply two vectores
 * @param   {Object} a     fist vector
 * @param   {Object} b     second vector
 * @param   {String} vMode rc= row coloumn , cr=column row 
 * @returns {Object} c=a X b
 */
function multiply1dx1d(a, b, vMode) {
    if (vMode === 'rc') { // raw vector, coloumn vector
        return multiplyrc(a, b);
    } else if (vMode === 'cr') { // coloumn vector , raw vector
        return (multiplycr(a, b));
    } else {

        return ('Unknow Vector Mode');
    }
}

/**
 * multiply two vectors in rc mode
 * @param   {Object} a first vector
 * @param   {Object} b second vector
 * @returns {Object} c=a X b
 */
function multiplyrc(a, b) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return (sum);
}

/**
 * multiply two vectors in cr mode
 * @param   {Object} a frist vector
 * @param   {Object} b second vector
 * @returns {Object} c= a X b
 */
function multiplycr(a, b) {
    var c = [];
    var n = a.length; // number of rows in a
    var m = 1;
    var x = b.length;
    for (var i = 0; i < n; i++) {
        c.push([]);
        for (var j = 0; j < x; j++) {
            c[i].push(a[i] * b[j]);
        }
    }
    return (c);
}

//********************************************************************
/**
 * muylti two 2d arrays
 * @param   {Object} a first array
 * @param   {Object} b second array
 * @returns {Object} c=a X b
 */
function multiply2dx2d(a, b) {
    if (a[0].length !== b.length) {
        return ({
            result: undefined,
            msg: 'Matrix Size issue'
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
        return (c);

    }
}

module.exports.matrixMultiply = matrixMultiply;