/**
 * Author:  Stephanie Nava, Jason Matthew, Gabriela Tena
 * Last edited:   04.05.2022
 * License:   Public Domain
 **/

// get element by id
var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene);

AOS.init();

// special thanks to https://www.youtube.com/watch?v=GUEB9FogoP8
// grab section title
const text = document.querySelector(".section-title");
const strText = text.textContent;

// split strText
const splitText = strText.split("");
console.log(splitText);

// hide second section title once span element is added
text.textContent = "";

// create loop
for (let i = 0; i < splitText.length; i++){
  // add span element to section title
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// create animation style that allows each element to show up
let char = 0;
let timer = setInterval(onTick, 100);

// create function for onTick
function onTick(){
  const span = text.querySelectorAll('span')[char];
  // add class to each span element
  span.classList.add('fade');
  char++
  // add if statement to stop loop
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  // clear timer interval
  clearInterval(timer);
  timer = null;
}

// create variable that triggers button to show text
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

$(".info").click(function(){
  $(".information").toggle("slow");
  $(".shawn-info").hide("");
});

$("#shawn-btn").click(function(){
  $(".shawn-info").toggle("slow");
  $(".information").hide("");
});


$(".box1").mouseover(function(){
// start Video
$(".box1 video").trigger("play");
})

$(".box1").mouseout(function(){
// start Video
$(".box1 video").trigger("pause");
})

$(".box1").click(function(){
// go to link1
$('html, body').animate({
 scrollTop: $("#link1").offset().top
}, 2000);
})


$(".box2").mouseover(function(){
// start Video
$(".box2 video").trigger("play");
})

$(".box2").mouseout(function(){
// start Video
$(".box2 video").trigger("pause");
})

$(".box2").click(function(){
// go to link1
$('html, body').animate({
 scrollTop: $("#link2").offset().top
}, 2000);
})


$(".box3").mouseover(function(){
// start Video
$(".box3 video").trigger("play");
})

$(".box3").mouseout(function(){
// start Video
$(".box3 video").trigger("pause");
})

$(".box3").click(function(){
// go to link1
$('html, body').animate({
 scrollTop: $("#link2").offset().top
}, 2000);
})
