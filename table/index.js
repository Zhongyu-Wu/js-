//表单的作用是在哭护短接收用户的信息，然后将数据递交给后台的程序来操控这些数据
function show1(){
    //alert("123456");
    //document.getElementById("userName").value="imooc";
    var xb = document.getElementsByName("xb");
    var xbText;
    if(xb[0].checked){
      xbText=xb[0].value;
    }else{
        xbText=xb[1].value;
    }
    alert(xbText);
}