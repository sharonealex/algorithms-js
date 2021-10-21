var timeEl = document.querySelector("#countdown");
var mainEl = document.querySelector("#main");


var readMessage = 'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';

var readWords = readMessage.split(' ');

var intialTime = 5;

var countDown = function(){
    var countDownTimer = setInterval(function(){
        intialTime --;
       timeEl.textContent = intialTime;
        if(intialTime === 0){
            clearInterval(countDownTimer);
            displayMessage();
        }
    },1000)
    
}


function displayMessage(){
    timeEl.textContent=" ";
    var words = readWords.length;
    var index = 0;
    var wordTimer = setInterval(function(){
       mainEl.textContent = readWords[index];
       index ++;
       if(index === readWords.length){
           clearInterval(wordTimer);
       }
    }, 1000);
  

}

countDown();