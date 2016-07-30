

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
    "name":"Driping brew",
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
        // pie_chart_init();
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
    "subtitle":" 2016年7月2日 22:36 ",
    "context":"義式濃縮，它有著很浪漫的名字--Espresso，同時也是最水霧奔騰的沖煮咖啡方式，交由機器萃出最濃郁的精華，使用最洗鍊的方式保留了它最醇厚的面貌，看看那直流而下的濃縮液，可知道它是9大氣壓與無數細粉之下的產物，只為見妳一面，然後我會為妳打上綿密的奶泡，注入一點點的空氣使其柔順溫潤，打奶泡的聲音由宏亮尖銳轉為寂靜低沉，這次的圖形，是我送給妳的祝福，推，意味著我默默支持妳的力量，晃，是我帶開液面排除一切阻礙，我小心翼翼的端到妳面前，怎見妳又在嘆氣，感嘆我拖拉，唉。",
    "photo":"assets/images/coffee_corner_1.jpg",
    "page":"horizontal",
    "url":"https://www.facebook.com/NCUcafeclub/photos/a.529630230387036.144412.529342827082443/1358826524134065/?type=3&permPage=1",
    "icon":"assets/images/icon_espresso_gray.png"
},{
    "title":"Dripping brew",
    "subtitle":" 2016年7月9日 22:35 ",
    "context":"僅以手沖，吧臺前，我緩緩的傾注，停滯的三分間，流動是唯一的拖延，液體沿著骨幹，剛直與蜿蜒，溶解，萃取，用最簡單、最純粹的方式，讓咖啡豆說出自己的秘密。",
    "photo":"assets/images/coffee_corner_2.jpg",
    "page":"vertical",
    "url":"https://www.facebook.com/NCUcafeclub/photos/a.529630230387036.144412.529342827082443/1363160170367367/?type=3&permPage=1",
    "icon":"assets/images/icon_driping_brew_gray.png"
},{
    "title":"Syphon",
    "subtitle":" 2016年7月16日 22:35 ",
    "context":"賽風是一種利用加熱水蒸氣加壓，把水從下面的玻璃壺衝上去的沖煮方法，因著100 °C的水變成100 °C的水蒸氣可膨脹1600倍以上，水便會逆著地心引力向上，之後我們會加入咖啡粉並攪拌，最後移開火源，咖啡便會因為壓力不足而下落，水的沸騰為了讓自身向上進行焠鍊，在經過一切完整地準備，一杯精華便順流而下，香氣四溢，我也曾為此深深疑惑卻著迷，想著賽風何以運作，何以成咖啡，直到進入社團，慢慢聽，慢慢學，如今我仍為了咖啡新知而興奮，這是不會改變的，也是我希望大家感受到的",
    "photo":"assets/images/coffee_corner_3.jpg",
    "page":"horizontal",
    "url":"https://www.facebook.com/NCUcafeclub/photos/a.529630230387036.144412.529342827082443/1368472279836156/?type=3&theater",
    "icon":"assets/images/icon_syphon_gray.png"
},{
    "title":"AeroPress",
    "subtitle":" 2016年7月23日 22:35 ",
    "context":"愛樂壓，這是以方便快速為訴求的沖煮方式，用空氣產生壓力萃取咖啡，恐怕是我聽過最荒唐的方法了，曾經，滿是好奇的看著黑色針筒般的愛樂壓，從小到大，人們總說壓力會帶來成長，那麼，愛樂壓是否會是一種體現?下粉，注水，攪拌，再注水，攪拌，倒置擠壓，當懸浮的咖啡粉經過攪拌碰撞，遇上水的奮不顧身，壓縮，一杯愛樂壓咖啡便會現身，於是於是你可以平心靜氣的享受咖啡的美好，或者更進一步的瞭解，沖煮者或烘焙者想要藉由咖啡表達的事情，無論沖煮工具或是手法，我們有很多種的沖煮方式，但都只有一個目的:更好，我們都不斷努力著讓咖啡變得更好喝。",
    "photo":"assets/images/coffee_corner_4.jpg",
    "page":"horizontal",
    "url":"https://www.facebook.com/NCUcafeclub/photos/a.529630230387036.144412.529342827082443/1373846952632022/?type=3&theater",
    "icon":"assets/images/icon_aeropress_gray.png"
},{
    "title":"Coffee beans",
    "subtitle":" 2016年7月30日 22:35 ",
    "context":"咖啡可能伴你挑燈夜戰無數個夜晚，可能提高了約會的情調，但你喝的咖啡到底是什麼?曾好奇在乎過嗎?如我之前提到的阿拉比卡還有羅布斯塔等豆種，以下稍作簡單介紹：阿拉比卡，被認為是最優良品種，只能生長在600米以上、土地肥沃、排水良好之地，具明顯的香氣，且有獨特的味道，羅布斯塔，其耐病能力與產果率更高，可種於阿拉比卡無法生長之濕熱地帶，常作為即溶咖啡，喝起來常帶苦帶澀帶鹹，有橡膠味，咖啡喝起來應該是愉悅的，而不是提心吊膽的害怕睡不著又或是身體不舒服，我們在做的事情很簡單，我們在推廣好的咖啡，如果各位很重視自己吃了甚麼、衛不衛生，那，咖啡又怎該是被馬虎的一項呢?",
    "photo":"assets/images/coffee_corner_5.jpg",
    "page":"horizontal",
    "url":"https://www.facebook.com/NCUcafeclub/photos/a.529630230387036.144412.529342827082443/1379260985423952/?type=3&theater",
    "icon":"assets/images/icon_coffee_beans.png"
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
    iBase.Id('coffee_corner_title').innerHTML = "<a href=\""+coffee_corner_array[item].url+"\">"+coffee_corner_array[item].title+"</a>";
    iBase.Id('coffee_corner_subtitle').innerHTML = coffee_corner_array[item].subtitle;
    iBase.Id('coffee_corner_context').innerHTML = coffee_corner_array[item].context;
    iBase.Id('coffee_corner_img').src = coffee_corner_array[item].photo;
    iBase.Id('coffee_corner_icon').src = coffee_corner_array[item].icon;
    if(coffee_corner_array[item].page == 'horizontal'){
        $("#activity-page").addClass('col-md-8').removeClass('col-md-6');
        $("#activity-page").addClass('col-md-offset-2').removeClass('col-md-offset-3');
    }else if(coffee_corner_array[item].page == 'vertical'){
        $("#activity-page").addClass('col-md-6').removeClass('col-md-8');
        $("#activity-page").addClass('col-md-offset-3').removeClass('col-md-offset-2');
    }
    
    fadeIn(iBase.Id('coffee_corner_container'));
}


function reward_listener(){
    var startDate = new Date('2016/7/15 00:00');
    var endDate = new Date('2016/7/16 00:00');
    var now = new Date();

    var start_spantime = (startDate - now)/1000;
    var end_spantime = (endDate - now)/1000;

    var d = Math.floor(start_spantime / (24 * 3600));
    var h = Math.floor((start_spantime % (24*3600))/3600);
    var m = Math.floor((start_spantime % 3600)/(60));
    var s = Math.floor(start_spantime%60);
    
    if(start_spantime >0){
        alert("不是不到 時候未到 \n還有 " + d + "天 " + h + "小時 " + m + "分 "+ s +"秒 ");
    }else if(start_spantime <0 && end_spantime>0){
        window.location.assign("https://ncucoffeeclub.github.io/coffee_corner_report/");
    }else{
        alert("活動已結束");
    }
}