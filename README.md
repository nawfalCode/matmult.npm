#Matrices Multiplication Package

How to Install 
------------
```
npm install matmult
```

How to Use
----------
in Node.js:
```
var mm = require('matmult');
```
then
 ```
 var c = mm.multiply(a,b,mode);
 ```
 where: 
 - a and b can be either: 
    - Square Matrix
    - Vector
    - Number
 - mode (optional) can be either:
    - 'cr': a is coloumn vector and b is row vector
    - 'rc': a is row vector and b is coloumn vector 
 
  
Examples of Matrix Products:
---------
1. Square matrices

  ```
  var a=[[1,2],[3,4]];
  var b=[[3,4],[4,5]];
  var c=mm.multiply(a,b);
   ```

2. Row vector and column vector

 ```
 var a=[1,2];
 var b=[3,4];
 var c=mm.multiply(a,b,'rc');
  ```
  
3. Column vector and Row vector
   ```
 var a=[1,2];
 var b=[3,4];
 var c=mm.multiply(a,b,'cr');
  ```
4. Square Matrix and a Number

  ```
  var a=[[1,2],[3,4]];
  var b=6;
  var c=mm.multiply(a,b);
   ```

License
-------
This package is licensed under MIT license.


