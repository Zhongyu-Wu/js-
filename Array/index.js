//声明或创建一个不指定长度的数组，又称实例化创建
var arrayObj = new Array();
//声明或创建一个指定长度的数组
var arrayObj = new Array(5);
//声明或创建一个带有默认值的数组
var arrayObj = new Array(2,4,"a","y",8);
//创建一个数组并赋值
var arrayObj =[2,4,"a","y",8];
//数组赋值，字符下标，数组遍历
console.log(arrayObj[0]);
for(var i in arrayObj){
    console.log(arrayObj[i]);
}

var i = 0;
var n = arrayObj.length;
for(i; i<n; i++){
    console.log(arrayObj[i]);
}