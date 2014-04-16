(function(){
  'use strict';

  $(document).ready(init);

  var clockTime;
  var timer;
  var pictures;

  function init(){
    initializePictures();
    $('#animate').click(animate);
    $('#startButton').click(start);
  }

  function animate(){
    $('.flipper').toggleClass('faceUp');
  }

  function start(){
    clockTime = 3;
    $('#clock').text(clockTime);
    timer = setInterval(updateClock, 1000);

    $('.flipper').removeClass('faceUp');
    shuffle();

    $('#gameGrid tbody').on('click', '.back', animate);
  }

  function initializePictures(){
    var pictureDir = '../../media/panels/';
    var pictureNames = ['bb-1.png',
                        'bb-2.png',
                        'bb-3.png',
                        'bb-4.png',
                        'bb-5.png',
                        'bb-6.png',
                        'bb-7.png',
                        'bb-8.png',
                        'bb-9.png',
                        'bb-10.png'
                        ];
    pictures = [];
    for(var i = 0; i < pictureNames.length; i++){
      pictures.push(pictureDir + pictureNames[i]);
    }
    pictures = pictures.concat(pictures);  //adds the array pictures to the array pictures (pictures*2)
  }

  function shuffle(){
    // var randomizedPics = [];
    var orderedPics = [].concat(pictures);

    for (var i = orderedPics.length; i > 0; i--){
      var index = Math.floor(Math.random() * i);
      $('#panel' + (i-1) + ' .front').attr('src', orderedPics[index]);        //#id .back
      // randomizedPics.push(orderedPics);
      orderedPics.splice(index, 1);      //starts at position index and then removes 1 element
    }
  }

  function updateClock(){
    clockTime--;
    $('#clock').text(clockTime);
    if(clockTime <= 0){
    clearInterval(timer);
    }
  }








})();
