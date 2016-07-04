
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
var counter=50;

var parameter_array = [{
    "name":"Drip_coffee",
    "parameter_1":85,
    "parameter_2":13,
    "parameter_3":3,
    "parameter_4":80,
},{
    "name":"Syphon",
    "parameter_1":82,
    "parameter_2":15,
    "parameter_3":3.5,
    "parameter_4":50,
},{
    "name":"Espresso",
    "parameter_1":82,
    "parameter_2":15,
    "parameter_3":3.5,
    "parameter_4":50,
}]

var iterator=0;

function change_parameter(){

    if(iterator < parameter_array.length-1){
        iterator++;
    }else{
        iterator=0;
    }
    var title =document.getElementById('parameter_title');
    title.innerHTML = parameter_array[iterator].name;
    $('.parameter').waypoint(function(){
        $('.chart1').data('easyPieChart').update(parameter_array[iterator].parameter_1);
    },{offset:'80%'});
    $('.parameter').waypoint(function(){
        $('.chart2').data('easyPieChart').update(parameter_array[iterator].parameter_2);
    },{offset:'80%'});
    $('.parameter').waypoint(function(){
        $('.chart3').data('easyPieChart').update(parameter_array[iterator].parameter_3);
    },{offset:'80%'});
    $('.parameter').waypoint(function(){
        $('.chart4').data('easyPieChart').update(parameter_array[iterator].parameter_4);
    },{offset:'80%'});

    setTimeout('change_parameter()',1000);
}


$(document).ready(function(){
    setTimeout('change_parameter()',1000);
});