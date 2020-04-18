//global varaible
var playing = false;
var score,action;
var timeRemaining;
 var correctAns;

//click start/restart
document.getElementById('startReset').onclick =function functionName() {

     // if playing
     if(playing == true){
       location.reload();
     }
     else {  // if not playing
          score = 0;
          playing = true;
          timeRemaining=60;
          document.getElementById("scoreValue").innerHTML = score;
          document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
          show("timeRemaining");
          hide("gameOver");
          document.getElementById("startReset").innerHTML = "Reset Game";

          //timer countdown
          startCounter();

          //generet qustion
          generetQusAndAns();
     }
}

//click in the option box
for(i=1;i<5;i++){

 document.getElementById("box"+i).onclick = function () {
    //if playing
    if(playing == true){
      if(this.innerHTML == correctAns){ //if correct option
        score++;
        document.getElementById("scoreValue").innerHTML = score;
        hide('wrong');
        show('correct');
        setTimeout(function(){
          hide('correct');
          generetQusAndAns();// new qus
        },1000);
      }
      else{ //if wrong option
         hide('correct');
         show('wrong');
         setTimeout(function(){
           hide('wrong');
         },1000);
      }
    }
  }
}



// start counter
function startCounter() {
  action = setInterval(function(){
   timeRemaining-=1;
   document.getElementById("timeRemainingValue").innerHTML = timeRemaining;
   if(timeRemaining==0){ // game time over
       stopCountDown(action);
       show("gameOver");
       document.getElementById("gameOver").innerHTML= "<p>!! game over !!</p><p>your score is "+score +"</p> ";
       hide("timeRemaining");
       hide("correct");
       hide("wrong");
       playing=false;
       document.getElementById("startReset").innerHTML = "Start Game";
   }
  },1000);
}

// stop the counter
function stopCountDown(){
  clearInterval(action);
}

function hide(Id){
  document.getElementById(Id).style.display= "none";
}

function show(Id){
  document.getElementById(Id).style.display= "block";
}

//generet Qustion And Answer
function generetQusAndAns(){
   //generet value 1-10
   var x =  Math.round(9 * Math.random()) + 1 ;
   var y =  Math.round(9 * Math.random()) + 1 ;
   //answer
   correctAns =  x*y;
   document.getElementById("question").innerHTML= x + " X " +y;

   var corrAnsPos = Math.round(3 * Math.random()) + 1 ; /// fill one box with the correct ans randomply by generating pos
   document.getElementById("box"+corrAnsPos).innerHTML = correctAns;

   // other 3 box
   var option =[correctAns] ;
   for(i=1;i<5 ;i++){
     if(i != corrAnsPos){
       var wrongAns;
       do{ // check all value are diffrent
           wrongAns = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
       }while(option.indexOf(wrongAns)>-1);
       option.push(wrongAns);
      document.getElementById("box"+i).innerHTML = wrongAns;
     }
   }
}
