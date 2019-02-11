var numSquares= 6;  
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){              //For every things we have created a function seperately
   setUpModeButtons();
   setUpSquares();
   reset();
}
 
 function setUpModeButtons(){
 	//mode butttons eventListeners
  for(var i =0;i< modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent=="Easy"){
    	numSquares=3;
    }
    else if(this.textContent=="Hard"){
    	numSquares=6;
    }
    reset();
   })
   }
 }

 function setUpSquares(){
 	for(var i=0; i<squares.length;i++){	
    squares[i].addEventListener("click",function(){
    	//grab color of clicked square
    	var clickedColor= this.style.backgroundColor;
    	//compare color to pickedColor
    	if(clickedColor==pickedColor){
    		changeColor(clickedColor);
    		resetButton.textContent="Play Again?";
    		messageDisplay.textContent="Correct";
    		h1.style.backgroundColor=clickedColor;
    	}
    	else{
    	   this.style.backgroundColor="#232323";
    	   messageDisplay.textContent = "Try Again";
    	}
    })
  } 
}

function reset(){
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent= pickedColor;
	messageDisplay.textContent="";
	resetButton.textContent="New Colors";
	h1.style.backgroundColor="steelblue";

	//change colors of squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		} else{
			squares[i].style.display="none";
		}
		squares[i].style.backgroundColor=colors[i];
	}
}



function changeColor(color){
	//loop through all color
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
	//change each color to match the given color

}
function pickColor(){
	//Creating a funciton to generate a random color
	//math.random is a function which will create a random number
	//If we want random number below six we'll write  "Math.random() * 6"
	 //If we want a random number above 1 and less than 6 we'll write Math.random *6 +1
    // Math.floor(Math.random()*6) Will generate random number(in whole number without decimal) between 0 and 6
  var random = Math.floor(Math.random() * colors.length );
  return colors[random];
}

function generateRandomColors(num){
	//make an array
  var arr = []
	//add num random colors to array
  for(var i=0;i<num;i++){
  	 arr.push(randomColor());
  	// get random color and put into arr     
  }
	// return that array
	return arr;
}

function randomColor(){
	//generate a red from 0 - 255
  var r= Math.floor(Math.random()*256);
    //generate a green from 0 - 255
  var g = Math.floor(Math.random()*256);
    //generate a blue from 0 - 255
  var b = Math.floor(Math.random()*256);
   return "rgb(" + r + ", " + g + ", "+b+")";  //Add space after the comma to compare the colors

}

resetButton.addEventListener("click",function(){
	reset();
	})

// colorDisplay.textContent=pickedColor;   //change the text content by using function textContent

// easyBtn.addEventListener("click",function(){
//    numSquares=3;
//    colors=generateRandomColors(numSquares);
//    pickedColor=pickColor();
//    colorDisplay.textContent=pickedColor;
//    //we have to make three bottom colors invisibe by style.display="none"
//    for(var i=0;i<squares.length;i++){
//       if(colors[i]){  //If the colors[i] is true means if there is any color which there will be gonna only 3 color in the easy mode
//          squares[i].style.backgroundColor=colors[i];
//       }
//       else{
//       	squares[i].style.display="none";
//       }
//    }
//      //To add class properties we use classList.add
//    easyBtn.classList.add("selected");
//    //since selected class i already there in the hard button so we have to remove it from there
//    hardBtn.classList.remove("selected");      
// })

// hardBtn.addEventListener("click",function(){
//    numSquares=6;
//    colors=generateRandomColors(numSquares);
//    pickedColor=pickColor();
//    colorDisplay.textContent=pickedColor;
//    for(var i=0;i<squares.length;i++){
//    	 squares[i].style.backgroundColor=colors[i];
//    	 squares[i].style.display="block";
//    }
//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");
// })

// squares[i].style.backgroundColor=colors[i];      //Alloting all divs different color by running the loop