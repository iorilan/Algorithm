////背包算法练习--求小于某数字的数组最大和：

var bestS = {val:0,str:""};
var LIMIT ;

Array.prototype.sum = function(){
var s = 0;
for(var i = 0;i < this.length;i++){
s+= this[i];
}
return s;
}


function f(bagArr){
var arrS = bagArr.sum();
if(arrS < LIMIT){
bestS = arrS > bestS.val ? {val:arrS,str:bagArr.join(',')} : bestS; 
return;
}

for(var i = 0;i<bagArr.length;i++){

var copyArr = new Array();
for(var j = 0;j < bagArr.length;j++){
copyArr.push(bagArr[j]);
}
copyArr.splice(i,1);

f(copyArr);

}

}

LIMIT = 197;
f(new Array(49,28,119,50,78,48,29,49,52));
console.log(bestS);