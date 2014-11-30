function f(n) {
if(n==1 || n == 2){return 1;}

if(n%2 == 0){
var k = n/2;
return f(k)*(2*f(k+1) - f(k));
}
else{
var k = (n-1)/2;
return f(k+1) * f(k+1) + f(k) * f(k);
}

}


console.log(f(1000));