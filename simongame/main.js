var randomList = [];
var count=0 ;
var userInputList = [];
var systemList = [];
for(var i = 1; i<= 20; i++ ) {
  randomList.push(Math.floor(Math.random()*(4)+1));
}
console.log(randomList);

function soundcheck(j) {
  var audioElement = document.querySelector(`audio[data-key="${randomList[j]}"]`);
  console.log(audioElement);
  audioElement.currentTime = 0;
  audioElement.play();
}
function removeTransition(e) {
  // console.log(e);
  if(e.propertyName !== 'transform')
    return;
  this.classList.remove('playing');
}
function playingMusic() {
  for(var j = 0; j <= count; j++) {
    var buttonElement = document.querySelector(`.button[data-key="${randomList[j]}"]`);
    buttonElement.classList.add('playing');
    setTimeout(function(y){ soundcheck(y) },j * 1000, j);
    systemList.push(randomList[j]);
  }
  document.querySelectorAll('.button').forEach(btn =>
    btn.addEventListener('transitionend', removeTransition)
  );
  console.log('running playingmusic function'+ count);
  userTurn(0);
}

function userTurn(a) {
  if(count >= 5) {
    count = 0;
    alert('You Win');
    return null;
  } else {
    console.log(a);
    var userCount = a;
    var elements = document.querySelectorAll('.button');

    NodeList.prototype.addEventListener = function(event, func) {
      this.forEach(function(content, item) {
         content.addEventListener(event, func);
      });
    }

    elements.addEventListener('click', function startPlaying(e) {
      console.log(e);
       var aKey = this.getAttribute("data-key");
       var useraudioElement;
       useraudioElement = document.querySelector(`audio[data-key="${aKey}"]`);
      //  console.log(useraudioElement);
       useraudioElement.currentTime = 0;
       useraudioElement.play();
       this.classList.add('playing');
       console.log(aKey);
       console.log(randomList[userCount]);
       if(Number(aKey) === randomList[userCount]) {
         userCount++;
         if(userCount <= count) {
           userTurn(userCount);
         }
         else {
           count++;
          //  console.log(count);
           setTimeout(function() { playingMusic() }, 2000);
         }
       } else {
         setTimeout(function(){ playingMusic() }, 2000);
       }
    });
  }
document.querySelector('.result').innerHTML = count;
}
var start = document.querySelector('.start');
start.addEventListener("click", function abc() {
  playingMusic();
});

// var elements = document.querySelectorAll(".button");
//
// NodeList.prototype.addEventListener = function(event, func) {
//   this.forEach(function(content, item) {
//      content.addEventListener(event, func);
//   });
// }

//or
// elements.addEventListener("click", function() {
//   console.log(this, "  awas clicked");
// });
