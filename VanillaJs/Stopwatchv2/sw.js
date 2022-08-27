var sum = 0;
var ggg;
var sec =0;
var min =0;
var hr =0;
var alpha = false;
function h() {
    ggg = setInterval(my,1000);
    
}
function my(){
    sum = sum + 1000;
    sec = Math.floor(sum/1000);
    min = Math.floor(sec/60);
    sec = sec%60;
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }
    document.getElementById("button1").innerHTML ="Resume"
    document.getElementById("helo").innerHTML ="00 : "+min+" : "+sec;
    
}
function reset(){
   sum = 0;
   document.getElementById("helo").innerHTML ="00 : 00 : 00"
   clearInterval(ggg);
   document.getElementById("button1").innerHTML ="Start"
}
function brea(){ 
   clearInterval(ggg);
   
   alpha = true;
}