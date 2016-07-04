
function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i;
}
var spantime;
var startDate;
function startTime(){
    spantime --;
    var d = Math.floor(spantime / (24 * 3600));
    var h = Math.floor((spantime % (24*3600))/3600);
    var m = Math.floor((spantime % 3600)/(60));
    var s = Math.floor(spantime%60);
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    if(spantime>0){
        $('#day').text(d);
        $("#hour").text(h);
        $("#min").text(m);
        $("#sec").text(s);
    }else{ // 避免倒數變成負的
        $('#day').text(0);
        $("#hour").text(0);
        $("#min").text(0);
        $("#sec").text(0);
    }
    setTimeout('startTime()',1000);
}

$(document).ready(function(){
    startDate = new Date();
    var endDate = new Date('2016/9/10 18:00');
    spantime = (endDate - startDate)/1000;
    setTimeout('startTime()',1000);
});