var iBase = {
        Id: function(name){
            return document.getElementById(name);
        },
        //设置元素透明度,透明度值按IE规则计,即0~100
        SetOpacity: function(ev, v){
            ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
        }
    }
    //淡入效果(含淡入到指定透明度)
function fadeIn(elem, speed, opacity){
        /*
         * 参数说明
         * elem==>需要淡入的元素
         * speed==>淡入速度,正整数(可选)
         * opacity==>淡入到指定的透明度,0~100(可选)
         */
        speed = speed || 20;
        opacity = opacity || 100;
        //显示元素,并将元素值为0透明度(不可见)
        elem.style.display = 'block';
        iBase.SetOpacity(elem, 0);
        //初始化透明度变化值为0
        var val = 0;
        //循环将透明值以5递增,即淡入效果
        (function(){
            iBase.SetOpacity(elem, val);
            val += 5;
            if (val <= opacity) {
                setTimeout(arguments.callee, speed)
            }
        })();
    }
    
    //淡出效果(含淡出到指定透明度)
function fadeOut(elem, speed, opacity){
        /*
         * 参数说明
         * elem==>需要淡入的元素
         * speed==>淡入速度,正整数(可选)
         * opacity==>淡入到指定的透明度,0~100(可选)
         */
        speed = speed || 20;
        opacity = opacity || 0;
        //初始化透明度变化值为0
        var val = 100;
        //循环将透明值以5递减,即淡出效果
        (function(){
            iBase.SetOpacity(elem, val);
            val -= 5;
            if (val >= opacity) {
                setTimeout(arguments.callee, speed);
            }else if (val < 0) {
                //元素透明度为0后隐藏元素
                elem.style.display = 'none';
            }
        })();
}

//demo

// var btns = iBase.Id('demo').getElementsByTagName('input');
    
//     btns[0].onclick = function(){
//         fadeIn(iBase.Id('fadeIn'));
//     }
//     btns[1].onclick = function(){
//         fadeOut(iBase.Id('fadeOut'),40);
//     }
//     btns[2].onclick = function(){
//         fadeOut(iBase.Id('fadeTo'), 20, 10);
//     }

// <div id="demo">
//     <div class="box">
//         <h2><input type="button" value="点击淡入" /></h2>
//         <div id="fadeIn" style="display:none">
//             <p>Name:Mr.Think</p>
//             <p>Blog:http://mrthink.net</p>
//             <p>Date:2011.01.27</p>
//         </div>
//         <p>欲求文明之幸福,不得不经文明之痛苦.</p>
//     </div>
    
//     <div class="box">
//         <h2><input type="button" value="点击淡出" /></h2>
//         <div id="fadeOut">
//             <p>Name:Mr.Think</p>
//             <p>Blog:http://mrthink.net</p>
//             <p>Date:2011.01.27</p>
//         </div>
//         <p>欲求文明之幸福,不得不经文明之痛苦.</p>
//     </div>
    
//     <div class="box">
//         <h2><input type="button" value="点击淡出至指定透明度" /></h2>
//         <div id="fadeTo">
//             <p>Name:Mr.Think</p>
//             <p>Blog:http://mrthink.net</p>
//             <p>Date:2011.01.27</p>
//         </div>
//         <p>欲求文明之幸福,不得不经文明之痛苦.</p>
//     </div>
// </div>