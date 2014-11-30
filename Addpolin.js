Array.prototype.existKey = function(propVal){
var i = 0;
for(var i = 0;i < this.length; i++){
if(this[i].k == propVal){return i;}
}
return -1;
}

function polinAdd(a,b){
//1. parse out each exp
var strA = a[0] == '-' ? a : '+' + a;
var strB = b[0] == '-' ? b : '+' + b;
var aNb = strA + strB ;
console.log("aNb:"+aNb);

var op = aNb[0];
var s = "";
var arr = new Array();
for(var i = 1;i < aNb.length; i++){
if(i == aNb.length-1){arr.push(op+s+aNb[i]);break;}
if(aNb[i] == '+' || aNb[i]=='-'){
arr.push(op + s);
op = aNb[i];
s="";
}
else{
s+=aNb[i];
}

}

//2. parse out parameter & key for each exp & save into arr
var expArr = new Array();
for(var i = 0;i < arr.length; i++){
var index = arr[i].indexOf('X');
var key = arr[i].substr(index,arr[i].length);
var val = index == 1 ? arr[i][0]+"1" : arr[i].substr(0,index);

var existIndex = expArr.existKey(key);
if(existIndex != -1){
var r = eval(expArr[existIndex].v + val);
expArr[existIndex].v = r>0 ? '+' + r : r;
}
else{
expArr.push({k:key,v:val});
}

}

//3. output result
var resultStr = "";
for(var i = 0;i < expArr.length;i++){
var v = expArr[i].v == "+1" ? '+' : expArr[i].v == "-1" ? '-' : expArr[i].v;
resultStr +=v +expArr[i].k;
}
if(resultStr[0] == '+'){resultStr = resultStr.replace('+','');}

return resultStr;
}

console.log(polinAdd("-8X2+3X3-9X5","4X5+7X2-9X8"));
