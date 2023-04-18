// 1-Calculate the sqaure of a Number.
var n=prompt("enter number ");
var a= n*n;
console.log("square of",n,"is",a);



// 2-Calculate the sqaure root of a Number.
var n=prompt("enter number ");
var a= Math.sqrt(n);
console.log("square root of",n,"is",a);



// 3-copy-all-elements-from-an-array-to-another-array.
var arr=[1,4,5,7,2];
var newArr=[];
for(var i=0;i<arr.length;i++){
    newArr+=arr[i];
}
console.log(newArr);



// 4-maximum-and-minimum-between-two-numbers-using-functions, if you have not been proficient so you can do it simply in your own way.
function num(a,b){
    if(a>b){
        console.log(a,"is max");
        console.log(b,"is min");
    }
    else{
        console.log(b,"is max");
        console.log(a,"is min");
    }
}
var num1=prompt("enter 1st number ");
var num2=prompt("enter 2nd number ");
num(num1,num2);



// 5-count-total-number-of-negative-elements-in-an-array
var n=prompt("enter length of array ");
var arr=[n];
for(var i=0;i<n;i++){
    arr[i]=prompt("enter values ");
}
var a=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]<0){
        a++;
    }
}
console.log("Total negative numbers are ",a);



// 6-sum of all even numbers between 1 to n, n is taken from the user.
var n=prompt("enter number ");
var sum=0;
for(var i=1;i<=n;i++){
    if(i%2==0){
        sum+=i;
    }
}
 console.log("sum of even number =",sum);



 // 7-count total number of duplicate elements in an array.
var n;
n=prompt("enter length of array ");
var arr=[n];
for(var i=0;i<n;i++){
    arr[i]=prompt("enter values ");
}
arr=arr.sort();
var count=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
        count++;
    }
}
console.log(count,"elements are duplicated");