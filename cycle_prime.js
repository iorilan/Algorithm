var MAX = 10;

////setup prime array
var primeArr = new Array();

var Ann = function a(arr){
if(arr.length <= 1){return arr;}

var rr = new Array();
for(var i = 0; i<arr.length;i++){

//get a copy
var ar = new Array();
for(var j = 0; j < arr.length;j++){ar[j] = arr[j];}

var current = ar[i];
ar.splice(i,1);


var childRet = a(ar);


for(var k = 0 ;k < childRet.length;k++){

var str = (current + "," + childRet[k]);
if(str.length < 2 || isPrimeCycle(str)){
rr.push(str);
}

}

}


return rr;
}

////setup prime array
for(var i = 1;i <= MAX; i++){
for(var j = 1;j <= MAX; j++){
if(i!=j && isPrime(i+j)){primeArr[i+j] = 1;}
}
}

////init input array
var a = new Array();
for(var i = 0;i < MAX; i++){
a.push(i+1);
}

////run
var ret = Ann(a);

////print result
for(var i = 0;i < ret.length;i++){
outRet(ret[i]);
}

var count = 0;
function outRet(r) {
count = count + 1;
console.log("==============" + "," + count.toString());
console.log(r);
}


function isPrimeCycle(str){
var arr = str.split(',');
for(var i = 0;i < arr.length-1; i++){

if(primeArr[parseInt(arr[i])+parseInt(arr[i+1])] != 1){return false;}

}

return true;
}

function isPrime(n){
for(var i = 2; i < n; i++){if(n%i == 0){return false;}}
return true;
}