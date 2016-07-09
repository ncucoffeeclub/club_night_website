

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
    "icon_src":"assets/images/icon_driping_brew.png",
    "name":"Drip coffee",
    "parameter_1":85,
    "parameter_2":13,
    "parameter_3":3,
    "parameter_4":80,
},{
    "icon_src":"assets/images/icon_syphon.png",
    "name":"Syphon",
    "parameter_1":82,
    "parameter_2":15,
    "parameter_3":3.5,
    "parameter_4":50,
},{
    "icon_src":"assets/images/icon_espresso.png",
    "name":"Espresso",
    "parameter_1":89,
    "parameter_2":2,
    "parameter_3":1,
    "parameter_4":23,
},{
    "icon_src":"assets/images/icon_aeropress.png",
    "name":"Aeropress",
    "parameter_1":75,
    "parameter_2":12,
    "parameter_3":2.5,
    "parameter_4":70,
}]

var iterator=0;

 function fadeIn(elementToFade){
            var element = document.getElementById(elementToFade);

            element.style.opacity += 0.1;
            if(element.style.opacity > 1.0) {
                element.style.opacity = 1.0;
            } else {
                setTimeout("fadeIn(\"" + elementToFade + "\")", 100);
            }
        }

function fadeOut(elementToFade)
        {
            var element = document.getElementById(elementToFade);

            element.style.opacity -= 0.1;
            if(element.style.opacity < 0.0) {
                element.style.opacity = 0.0;
            } else {
                setTimeout("fadeOut(\"" + elementToFade + "\")", 100);
            }
        }

function change_parameter(){

    if(iterator < parameter_array.length-1){
        iterator++;
    }else{
        iterator=0;
    }
    var title =document.getElementById('parameter_title');
    document.getElementById("parameter_icon").src = parameter_array[iterator].icon_src;
    // fadeOut('parameter_title');
    title.innerHTML = parameter_array[iterator].name;

    // fadeIn('parameter_title');
    try{
        $('.parameter').waypoint(function(){
            $('.chart1').data('easyPieChart').update(parameter_array[iterator].parameter_1);
            $('.chart2').data('easyPieChart').update((100*parameter_array[iterator].parameter_2/20));
            $('.chart3').data('easyPieChart').update((100*parameter_array[iterator].parameter_3/5));
            $('.chart4').data('easyPieChart').update((100*parameter_array[iterator].parameter_4/120));
        },{offset:'80%'});

        var parameter_1 =document.getElementById('parameter-1_text');
        parameter_1.innerHTML = parameter_array[iterator].parameter_1;

       
        var  parameter_2 =document.getElementById('parameter-2_text');
         parameter_2.innerHTML = parameter_array[iterator].parameter_2;

        var  parameter_3 =document.getElementById('parameter-3_text');
         parameter_3.innerHTML = parameter_array[iterator].parameter_3;


        var  parameter_4 =document.getElementById('parameter-4_text');
         parameter_4.innerHTML = parameter_array[iterator].parameter_4;

        setTimeout('change_parameter()',8000);
     }catch(e){
        setTimeout('pie_chart_init()',500);
        console.log(e);
     }
    
    
}

function pie_chart_init(){

        $('.parameter').waypoint(function(){
            $('.chart1').each(function(){
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

            $('.chart2').each(function(){
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

            $('.chart3').each(function(){
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

            $('.chart4').each(function(){
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
        setTimeout('change_parameter()',500);
}


var coffee_corner_array = [{
    "title":"Espresso and Latte",
    "subtitle":" 2016年7月3日 22:55 ",
    "context":"義式濃縮，它有著很浪漫的名字--Espresso，同時也是最水霧奔騰的沖煮咖啡方式，交由機器萃出最濃郁的精華，使用最洗鍊的方式保留了它最醇厚的面貌，看看那直流而下的濃縮液，可知道它是9大氣壓與無數細粉之下的產物，只為見妳一面，然後我會為妳打上綿密的奶泡，注入一點點的空氣使其柔順溫潤，打奶泡的聲音由宏亮尖銳轉為寂靜低沉，這次的圖形，是我送給妳的祝福，推，意味著我默默支持妳的力量，晃，是我帶開液面排除一切阻礙，我小心翼翼的端到妳面前，怎見妳又在嘆氣，感嘆我拖拉，唉。",
    "photo":"assets/images/coffee_corner_1.jpg",
    "url":"https://www.facebook.com/NCUcafeclub/photos/a.529630230387036.144412.529342827082443/1358826524134065/?type=3&permPage=1"
},{
    "title":"Dripping brew",
    "subtitle":" 2016年7月9日 22:55 ",
    "context":"僅以手沖，吧臺前，我緩緩的傾注，停滯的三分間，流動是唯一的拖延，液體沿著骨幹，剛直與蜿蜒，溶解，萃取，用最簡單、最純粹的方式，讓咖啡豆說出自己的秘密。",
    "photo":"assets/images/coffee_corner_2.jpg",
    "url":"https://www.facebook.com/NCUcafeclub/photos/a.529630230387036.144412.529342827082443/1363160170367367/?type=3&permPage=1"
}]

function add_coffee_corner_nav(counter){
    var pretext =  document.getElementById("coffee_corner_nav").innerHTML;
    document.getElementById("coffee_corner_nav").innerHTML = pretext+"<li><input type=\"button\" value="+(counter+1)+" onclick=\"change_coffee_corner_text(" + counter + ")\" class=\"wow fadeInUp\"></input></li>";
}

$(document).ready(function(){

    $.getScript("assets/js/fade.js", function(){
       // alert("Script loaded");
       var length = coffee_corner_array.length;

       for(var i=0;i<length;i++){
            add_coffee_corner_nav(i);
       }
       var btns = iBase.Id('coffee_corner_nav').getElementsByTagName('input');

       change_coffee_corner_text(length-1);

    });

    
    setTimeout('pie_chart_init()',500);
});


function change_coffee_corner_text(item){
                // fadeOut(iBase.Id('coffee_corner_container'));
    iBase.Id('coffee_corner_title').innerHTML = coffee_corner_array[item].title;
    iBase.Id('coffee_corner_subtitle').innerHTML = coffee_corner_array[item].subtitle;
    iBase.Id('coffee_corner_context').innerHTML = coffee_corner_array[item].context;
    iBase.Id('coffee_corner_img').src = coffee_corner_array[item].photo;
    $(".fb-like").attr('data-href', coffee_corner_array[item].url);
    fadeIn(iBase.Id('coffee_corner_container'));
}