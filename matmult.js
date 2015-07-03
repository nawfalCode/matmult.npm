
var repository = require('./mathRepository');
module.exports = {
    multiply:function(a,b,mode){
    return (repository.matrixMultiply(a,b,mode));
}
};
