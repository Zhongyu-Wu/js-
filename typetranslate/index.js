/*var str="123";
console.log(parseInt(str*1+1));
console.log(parseInt(str)+1);*/

/*var str1="abc";
if(!isNaN(str1)){

 console.log(isNaN(str1));

}else{
    console.log("is error");
    str1 = 0;
}
console.log((str1));*/

//如果是数字，isNaN返回false
//如果不是数字，返回true

var str ="123";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));//优先使用

var str ="abv";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));

var str ="123.654";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));

var str =null;
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));

//str里有内容就是true，null和空引号和0就是false
var str= "";
console.log(Boolean(str));

