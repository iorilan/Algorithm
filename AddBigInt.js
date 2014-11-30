function add(a,b){
var strA = a.toString();
var strB = b.toString();

var len = 0;
var extra = "";
if(strA.length > strB.length){
len= strB.length;
extra = strA.substring(0,strA.length-len);

var ret = addNum(strA.substring(strA.length-len,strA.length),strB);
if(extra.length>0){
return addN(extra,ret[0]) + ret.substring(1,ret.length);
}
else{
return ret;
}

}
else{
len = strA.length;
extra = strB.substring(0,strB.length-len);
var ret = addNum(strB.substring(strB.length-len,strB.length),strA);
if(extra.length>0){
return addN(extra,ret[0]) + ret.substring(1,ret.length);
}
else{
return ret;
}

}

}

function addN(strA,n){
n=parseInt(n);
var ret = ((parseInt(strA[strA.length-1])+n) % 10).toString();
var c = ((parseInt(strA[strA.length-1])+n)/10)|0;

for(var i = strA.length-2;i>=0;i--){
var digA = parseInt(strA[i]);
console.log("digA:"+digA+",c:"+c);
ret = (digA+c)%10 + ret;
c = ((digA+c)/10)|0;
}
return ret;
}

function addNum(strA,strB){

var len = strA.length;

var c = 0;
var ret = "";
for(var i = len-1;i >= 0;i--){
var digA = parseInt(strA[i]);
var digB = parseInt(strB[i]);

var dig = (digA + digB+ c)%10;
ret = dig+ret;
c = ((digA + digB+ c)/10)|0 ;

}

if(c>0){
ret = c+ret;
}
return ret;
}

console.log(add("1122321444","9843259"));