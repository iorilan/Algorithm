Array.prototype.select = function (f){
var arr = new Array();
for(var i = 0;i < this.length;i++){
arr.push(f(this[i]));
}
return arr;
};

var op = [{k:'+',w:1},{k:'-',w:1},{k:'*',w:2},{k:'/',w:2},{k:'(',w:0.5},{k:')'}]

var opIndex = function(c){
for(var j = 0; j < op.length; j++){
if(op[j].k == c){return j;}
}
return -1;
}

var isNum = function(c){
return parseInt(c) == c;
}

function p(str){

var retArr = new Array();
var numStr = "";
for(var i = 0;i < str.length;i++){
if(str[i] == ' '){continue;}
else if(isNum(str[i])){
numStr += str[i];
if(i == str.length - 1){
retArr.push(numStr);
break;
}
}
else if(opIndex(str[i]) > -1 ){

if(numStr != ""){
retArr.push(numStr);
}
retArr.push(str[i]);
numStr = "";

}
else{
console.log("error : unexpected char " + str[i] + ", only [0-9] and [+-*/()] is supported");
return null;
}

}

return retArr;
}


function c(arr){
var ret = new Array();
var opArr = new Array();

var calc = function(){
var num1 = ret.pop();
var num2 = ret.pop();
var opr = opArr.pop();
ret.push(eval('('+num2+')'+opr.k+'('+num1+')'));
}

for(var i = 0;i < arr.length; i++){
if(isNum(arr[i])){
ret.push(arr[i]);
continue;
}
if(arr[i] == '('){
opArr.push({k:'(',w:0.5});
continue;
}
if(arr[i] == ')'){
console.log(ret);
for(;opArr[opArr.length-1].k!='(';){
calc();
}
opArr.pop();
//console.log("wa,"+opArr.select(function(e){return e.k;}).join(','));
//console.log(ret);
continue;
}

var index = opIndex(arr[i]);
var weight = op[index].w;

console.log(opArr[opArr.length-1]);
console.log("and weight:"+weight);
if(opArr.length == 0 || opArr[opArr.length-1].w < weight){
opArr.push({k:arr[i],w:weight});
//console.log(opArr.select(function(e){return e.k;}).join(','));
}
else{
console.log("before : " + opArr.select(function(e){return e.k;}).join(','));
for(;opArr.length > 0 && opArr[opArr.length-1].w >= weight;){
calc();
}
opArr.push({k:arr[i],w:weight});
console.log("after : " + opArr.select(function(e){return e.k;}).join(','));
}

}

//console.log(opArr.select(function(e){return e.k;}).join(','));
//console.log(ret);

for(;opArr.length > 0;){
calc();
}

return ret;
}

var arr = p("4-5*(8+96)+10");
console.log(c(arr));