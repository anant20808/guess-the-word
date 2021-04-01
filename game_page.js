Player1display=localStorage.getItem("player1");
Player2display=localStorage.getItem("player2");
player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=Player1display + " : ";
document.getElementById("player2name").innerHTML=Player2display + " : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question turn : "+ Player1display;
document.getElementById("playeranswer").innerHTML="Answer turn : "+ Player2display;

function send(){

getword=document.getElementById("word").value;
word=getword.toLowerCase();

charAt1=word.charAt(1);


lengthby2= Math.floor(word.length/2);
charAt2=word.charAt(lengthby2);

lengthminus1= word.length - 1;
charAt3=word.charAt(lengthminus1);

console.log(charAt1,charAt2,charAt3);

r1=word.replace(charAt1,"_");
r2=r1.replace(charAt2,"_");
r3=r2.replace(charAt3,"_");

questionword= "<h4 id='word_display'> Q." + r3 + "</h4>";
inputbox= "<br>Ans : <input type='text' id='inputboxcheck'>";
checkbutton= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row= questionword + inputbox + checkbutton;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value="";

}

questionturn="player1";
answerturn="player2";

function check(){

    getanswer=document.getElementById("inputboxcheck").value;
    answer=getanswer.toLowerCase();

    if(answer == word){


 if(answerturn == "player1"){

    player1score= player1score + 1 ;
    document.getElementById("player1score").innerHTML=player1score;

 }
 else{
 player2score= player2score + 1 ;
    document.getElementById("player2score").innerHTML=player2score;
    
 }

    }

   if(questionturn == "player1"){

      questionturn="player2";
      document.getElementById("playerquestion").innerHTML="Question turn : " + Player2display;

   }
   else{

      questionturn="player1";
      document.getElementById("playerquestion").innerHTML="Question turn : " + Player1display;
      
   }

   if(answerturn == "player1"){

      answerturn="player2";
      document.getElementById("playeranswer").innerHTML="Answer turn : " + Player2display;

   }
   else{

      answerturn="player1";
      document.getElementById("playeranswer").innerHTML="Answer turn : " + Player1display;
      
   }
   document.getElementById("output").innerHTML = "";
}

