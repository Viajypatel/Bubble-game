function makebubble(){
var pannelbtm=document.querySelector(".pannelbtm");
var clutter="";
for(var i=1;i<=140;i++)
{    var ran=Math.floor(Math.random()*10);
     clutter+=` <div class="bubble">${ran}</div>`
}
pannelbtm.innerHTML=clutter;
}
var hit=0;
function hitvaluev(){
     hit=Math.floor(Math.random()*10);
     document.querySelector("#hitval").innerHTML=hit;
}
var time=0;
flagt=1;
var timek;
function runtimer(time){
 timek=setInterval(() => {
     if(time>0)
     {
          time--;
          document.querySelector("#timer").textContent=time;
         
     }
     else
     {
          document.querySelector(".pannelbtm").innerHTML=`Your score is ${score}`;
          document.querySelector(".pannelbtm").style.color="red";
          document.querySelector(".pannelbtm").style.fontSize = "50px"
          document.querySelector(".pannelbtm").style.fontWeight="700";
          btn.style.backgroundColor="rgb(17, 255, 0)";
          btn.style.display="block";
          flag=1;
          document.querySelector("#scor").innerHTML=0;
          document.querySelector("#hitval").innerHTML=0;
          clearInterval(timek);
          setTimeout(function(){
               document.querySelector(".pannelbtm").innerHTML=`Game is Over`;
               btn.style.display="none";

          },2000)
     }
},1000);
}
 var score=0;
function addScore(){
     score+=10;
     document.querySelector("#scor").innerHTML=score;
}

var btn=document.querySelector("#butt");
flag=1;
btn.addEventListener("click",function(){
     score=0;
     if(flag==1)
     {  makebubble();
         time=prompt("enter time in sec")
        runtimer(time);
        btn.style.backgroundColor="red";
        btn.style.display="none";
        flag=0;  
     }

})
document.querySelector(".pannelbtm").addEventListener("click",function(dets){
     var num=Number(dets.target.textContent);
     console.log(dets.target);
     if (num === hit && time > 0) {
          document.querySelector("#scor").style.backgroundColor="rgb(44, 233, 85)";
          setTimeout(function(){
               document.querySelector("#scor").style.backgroundColor="white";
          },1000)
         
          addScore(10);
          makebubble();
          hitvaluev();
      }
      else{
          document.querySelector("#scor").style.backgroundColor="red";
          setTimeout(function(){
               document.querySelector("#scor").style.backgroundColor="white";
          },1000)
      }
  })
  
 
makebubble();
hitvaluev();
