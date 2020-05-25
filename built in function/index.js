var str ="520134199906061224";
console.log(str.substr(0,3));//(起始位置，长度)
console.log(str.substring(0,3));//算前不算后 (起始位置，结束位置)
var n = parseInt(str.charAt(16));
if(n % 2==0){
    console.log("nv");
}else{
    console.log("nan");
}
console.log(str.length);
console.log(str.indexOf(1));//1第一次出现的位置
console.log(str.indexOf(1,4));//在从4位置往后开始找1第一次出现的位置

var str = "aa,ttt,121,gg,kk,aa,bb";
var arr = str.split(",");
console.log(arr[0]);
console.log(str.concat("55","77","00"));
console.log(arr.concat("55","77","00"));

console.log(str.replace("aa","imooc"));//replace函数的用法，只替换第一个符合要求的字符串

var d1 = new Date();
var d2 = new Date("2020-5-22 11:00:58");
console.log(d2.getDate());
console.log(d2.getMonth()+1);//从0开始的,所以加1
console.log(d2.getFullYear());

console.log(d1.getDate());
console.log(d1.getMonth()+1);//从0开始的,所以加1
console.log(d1.getFullYear());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
var n = d2.getTime() - d2.getTime();
console.log(parseInt(n/(24*3600*1000)));

//2020-1-1 15:58 日期格式化
function fun_FmtDate(){
    var d1 = new Date();
    var yyyy,mm,dd,hh,mi,ss;
    var time;
    yyyy = d1.getFullYear();
    mm =d1.getMonth()+1;
    dd =d1.getDate();
    hh =d1.getHours();
    mi =d1.getMinutes();
    ss =d1.getSeconds();
    time = yyyy+"-"+mm+"-"+dd+"-"+hh+"-"+mi+"-"+ss;
    return time;
}
console.log(fun_FmtDate());

var n = 16.654789;
console.log(Math.round(n));
console.log(n.toFixed(2));//保留小数位数
console.log(Math.min(2,6,8,1));
console.log(Math.max(2,6,81,1));
console.log(Math.abs(-3));
