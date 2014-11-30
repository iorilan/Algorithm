Array.prototype.topMax = function(n){
n = n == undefined ? 1 : n;
var arr = new Array();


for(var j = 0;j < this.length; j++){
arr.sort(function(a,b){return b-a;});{if(!arr[n-1]||arr[n-1] < this[j]){arr[n-1] = this[j];}}

}

return arr.sort(function(a,b){return b-a;});
}

console.log(new Array(3,5,1,2,8,-1,9,10,20,-2,-5,15).topMax(6));