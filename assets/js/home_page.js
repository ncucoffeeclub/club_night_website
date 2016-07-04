
function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i;
}
function startTime(){
    var endDate = new Date('2016/9/10 18:00');
    var startDate = new Date();
    var spantime = (endDate - startDate)/1000;
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
    setTimeout('startTime()',500);
}

$(document).ready(function(){
    setTimeout('startTime()',500);
});

function change_parameter(){
     $('.parameter').waypoint(function(){
        $('.chart').each(function(){
            $(this).easyPieChart({
                    size:140,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#FF5252',
                    trackColor: 'transparent',
                    lineWidth: 10
                });
            });
    },{offset:'80%'});
}


$(document).ready(function(){
    setTimeout('change_parameter()',1000);
});