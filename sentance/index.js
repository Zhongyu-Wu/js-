//if语句
var n = 10;
var str;
if(n >10){
    str = "n>10";
}else if(n < 10){
    str = "n<=10";
}else{
    str = "n=10";
}
console.log(str);

/*
成绩是100 显式满分
成绩大于等于90 显式优秀
成绩大于等于70 显式良好
成绩大于等于60 显式及格
不及格
*/
//多条件分支语句
var myscore = 95;
var str;
var n = parseInt(myscore/10);

switch(n){
    case 10:
        str = "manfen";
        break;
    case 9:
        str = "youxiu";
        break;
    case 8:
    case 7:
        str = "lianghao";
        break;
    case 6:
        str = "jige";
        break;
    default :
        str = "bujige";
        break;

}
console.log(str);

//循环控制语句
//1+2+3+...100=5050
var i;
var sum = 0;
for(i = 0; i<=100; i++){
    sum = sum + i;
}
console.log(sum);

var i;
var sum = 0;
for(;i<=100; i++){
    if(i %2 == 0){
        continue;
    }
    if(sum>=1000){
        break;
    }
    sum = sum + i;
}
console.log(sum);

var i= 0;
var sum = 0;
while(i <= 100){
    sum = sum + i;
    i++
}
console.log(sum);

var i=0;
var sum = 0;
do{
    sum=sum+i;
    i++;
}while(i<=100);
console.log(sum);