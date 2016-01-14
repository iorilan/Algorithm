
var Ann = function a(arr){


if(arr.length == 1){return arr;}


var rr = new Array();
for(var i = 0; i<arr.length;i++){


//get a copy
var ar = new Array();
for(var j = 0; j < arr.length;j++){ar[j] = arr[j];}


//assume i
var current = ar[i];
ar.splice(i,1);


var childRet = a(ar);


for(var k = 0 ;k < childRet.length;k++){
var str = (current + "," + childRet[k]);

if(str.length != 15 || !sameLine(str)){
rr.push(str);
}

}


}


return rr;
}

var ret = Ann(new Array(0,1,2,3,4,5,6,7));


for(var i = 0;i < ret.length;i++){
outRet(ret[i]);
}


var count = 0;

function outRet(r) {
count = count + 1;
console.log("==============" + "," + count.toString());
var a = r.split(',');
for(var i = 0;i < 8; i++){
var aa = new Array();
aa.push(0,0,0,0,0,0,0,0);
aa[a[i]] = 1;
console.log(aa);
}
}



function sameLine(str){
var arr = str.split(',');
for(var i = 0;i < arr.length; i++){
for(var j = 0;j < arr.length; j++){
if(i!=j&&Math.abs(i-j) == Math.abs(arr[i]-arr[j])){return true;}
}


}
return false;


}