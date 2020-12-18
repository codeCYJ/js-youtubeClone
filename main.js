const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});


var count = 0;
var like = document.getElementById("like");
var hate = document.getElementById("hate");
like.addEventListener("click", click1);
hate.addEventListener("click", click2);

function click1(){
  if(count == 0){
    like.style.color = "#045fd4";
    hate.style.color = "#909090";
    count = 1;
  } else{
    like.style.color = "#909090";
    count = 0;
  }
}
function click2(){
  if(count == 0){
    hate.style.color = "#045fd4";
    like.style.color = "#909090";
    count = 1;
  } else{
    hate.style.color = "#909090";
    count = 0;
  }
}

var moreBtn1 = document.getElementById("moreBtn1");
var moreBtn2 = document.getElementById("moreBtn2");
var moreBtn3 = document.getElementById("moreBtn3");
var moreBtn4 = document.getElementById("moreBtn4");
var moreBtn5 = document.getElementById("moreBtn5");
var moreBtn6 = document.getElementById("moreBtn6");

function changeOpacityOn1(){
  moreBtn1.style.opacity="0.6";
}
function changeOpacityOut1(){
  moreBtn1.style.opacity="0";
}

function changeOpacityOn2(){
  moreBtn2.style.opacity="0.6";
}
function changeOpacityOut2(){
  moreBtn2.style.opacity="0";
}

function changeOpacityOn3(){
  moreBtn3.style.opacity="0.6";
}
function changeOpacityOut3(){
  moreBtn3.style.opacity="0";
}
function changeOpacityOn4(){
  moreBtn4.style.opacity="0.6";
}
function changeOpacityOut4(){
  moreBtn4.style.opacity="0";
}

function changeOpacityOn5(){
  moreBtn5.style.opacity="0.6";
}
function changeOpacityOut5(){
  moreBtn5.style.opacity="0";
}

function changeOpacityOn6(){
  moreBtn6.style.opacity="0.6";
}
function changeOpacityOut6(){
  moreBtn6.style.opacity="0";
}

