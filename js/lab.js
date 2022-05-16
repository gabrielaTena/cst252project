/**
 * Author:  Stephanie Nava, Jason Matthew, Gabriela Tena
 * Last edited:   05.15.2022
 * License:   Public Domain
 **/

 // Navbar JS
 // Special Thanks to https://www.youtube.com/watch?v=OI44Mt7W8-I
 // Made a few tweaks to it so it can fit our site's theme
 // Create a function for the navbar (hamburger icon)
 $(document).ready(function(){
   // Create a click function
   $(".hamburger-nav i").click(function(){
     // toggle event which shows the elements once it's clicked
     $(".site-nav-menu").toggleClass("hamburger-menu");
   });
 })

// Parralax Image JS

// get element by id
var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene);

// Youtube iFrame API JS
// Special Thanks to https://www.youtube.com/watch?v=QkWOaqGn9Vg
// As well as https://stackoverflow.com/questions/15090782/youtube-autoplay-not-working-on-mobile-devices-with-embedded-html5-player
// https://stackoverflow.com/questions/13043799/handling-multiple-youtube-videos
// Getting multiple iframes to show up ↑

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // create variables for different fashion video players
  var youtubePlayer1;
  var youtubePlayer2;
  var youtubePlayer3;

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
    youtubePlayer1 = new YT.Player('cosplayPlayer',{
      // height: '300',
      // width: '500',
      videoId: '_VEf_yBKZXs',
      // events that allows video api to communicate
      events: {
        // define function that allows autoplay when ready
        'onReady': onPlayerReady,
        // define function to play video again
        'onStateChange': onPlayerStateChange
      }
    });
    youtubePlayer2 = new YT.Player('twoThousandPlayer',{
      // height: '300',
      // width: '500',
      videoId: 's4PqXNCkNgY',
      // events that allows video api to communicate
      events: {
        // define function that allows autoplay when ready
        'onReady': onPlayerReady,
        // define function to play video again
        'onStateChange': onPlayerStateChange
      }
    });
    youtubePlayer3 = new YT.Player('streetwearPlayer',{
      // height: '300',
      // width: '500',
      videoId: 'QjNp19IUifs',
      // events that allows video api to communicate
      events: {
        // define function that allows autoplay when ready
        'onReady': onPlayerReady,
        // define function to play video again
        'onStateChange': onPlayerStateChange
      }
    });
    console.log("YouTube is Ready!!");
  }

  // var player;
  // function playThisVideo(vidid){
  //   if(player){
  //     player.destroy();
  //   }
  //   player = new YT.Player('player', {
  //     height: '300',
  //     width: '500',
  //     videoId: vidid,
  //     // events that allows video api to communicate
  //     events: {
  //       // define function that allows autoplay when ready
  //       'onReady': onPlayerReady,
  //       // define function to play video again
  //       'onStateChange': onPlayerStateChange
  //     }
  //   });
  // }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      event.target.playVideo();
    }
  }

  // var player;
  // function playThisVideo(vidid){
  //   if(player){
  //     player.destroy();
  //   }
  //   player = new YT.Player('player', {
  //     height: '300',
  //     width: '500',
  //     videoId: vidid,
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onStateChange': onPlayerStateChange
  //     }
  //   });
  // }
  //
  // function playAnotherVideo(){
  //   var vidid = document.getElementById("somevidid").value;
  //   // alert("Video: " + vidid);
  //   playThisVideo(vidid);
  // }

// AOS.init();
//
// // special thanks to https://www.youtube.com/watch?v=GUEB9FogoP8
// // grab section title
// const text = document.querySelector(".section-title");
// const strText = text.textContent;
//
// // split strText
// const splitText = strText.split("");
// console.log(splitText);
//
// // hide second section title once span element is added
// text.textContent = "";
//
// // create loop
// for (let i = 0; i < splitText.length; i++){
//   // add span element to section title
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
//
// // create animation style that allows each element to show up
// let char = 0;
// let timer = setInterval(onTick, 100);
//
// // create function for onTick
// function onTick(){
//   const span = text.querySelectorAll('span')[char];
//   // add class to each span element
//   span.classList.add('fade');
//   char++
//   // add if statement to stop loop
//   if(char === splitText.length){
//     complete();
//     return;
//   }
// }
//
// function complete(){
//   // clear timer interval
//   clearInterval(timer);
//   timer = null;
// }

// // create variable that triggers button to show text
// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })
//
// $(".info").click(function(){
//   $(".information").toggle("slow");
//   $(".shawn-info").hide("");
// });
//
// $("#shawn-btn").click(function(){
//   $(".shawn-info").toggle("slow");
//   $(".information").hide("");
// });
//
//
// $(".box1").mouseover(function(){
// // start Video
// $(".box1 video").trigger("play");
// })
//
// $(".box1").mouseout(function(){
// // start Video
// $(".box1 video").trigger("pause");
// })
//
// $(".box1").click(function(){
// // go to link1
// $('html, body').animate({
//  scrollTop: $("#link1").offset().top
// }, 2000);
// })
//
//
// $(".box2").mouseover(function(){
// // start Video
// $(".box2 video").trigger("play");
// })
//
// $(".box2").mouseout(function(){
// // start Video
// $(".box2 video").trigger("pause");
// })
//
// $(".box2").click(function(){
// // go to link1
// $('html, body').animate({
//  scrollTop: $("#link2").offset().top
// }, 2000);
// })
//
//
// $(".box3").mouseover(function(){
// // start Video
// $(".box3 video").trigger("play");
// })
//
// $(".box3").mouseout(function(){
// // start Video
// $(".box3 video").trigger("pause");
// })
//
// $(".box3").click(function(){
// // go to link1
// $('html, body').animate({
//  scrollTop: $("#link2").offset().top
// }, 2000);
// })

//images on Sections
//images
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function myFunctionTwo(imgsTwo) {
  var expandImgTwo = document.getElementById("expandedImgTwo");
  var imgTextTwo = document.getElementById("imgtextTwo");
  expandImgTwo.src = imgsTwo.src;
  imgTextTwo.innerHTML = imgsTwo.alt;
  expandImgTwo.parentElement.style.display = "block";
}

function myFunctionThree(imgsThree) {
  var expandImgThree = document.getElementById("expandedImgThree");
  var imgTextThree = document.getElementById("imgtextThree");
  expandImgThree.src = imgsThree.src;
  expandImgThree.parentElement.style.display = "block";
}
