var msgDisplay=document.querySelector("#message");
var noOfSquare=6;
var colors=generateRandomColor(noOfSquare);
var colorDisplay=document.querySelector("#colorCode");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeBtns=document.querySelectorAll(".mode");


var ans=pickColor();
colorDisplay.textContent=ans;

var sqrList=document.querySelectorAll(".square");

for(var i=0;i<sqrList.length;i++)
{
	  sqrList[i].style.backgroundColor=colors[i];
    sqrList[i].addEventListener("click", function(){
      //will enable tile tap reset,better UX ;-)
      if(msgDisplay.textContent==="Correct!"){
        reset();
      }
      else{
        if(this.style.backgroundColor===ans)
        {			
          msgDisplay.textContent="Correct!";
          changeColors(this.style.backgroundColor);
          h1.style.backgroundColor=this.style.backgroundColor;
          resetButton.textContent="Play Again?";
        }	
		    else{
          //alert("wrong!");
          this.style.backgroundColor="#232323";
          this.style.boxShadow="none";
          msgDisplay.textContent="Try Again!";
        } 
      }
    });
}


for (var i =0; i <2; i++) {
	modeBtns[i].addEventListener("click",function(){
			if(this.textContent==="Easy")
				noOfSquare=3;
			else
				noOfSquare=6;
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			reset();

	});
}


function changeColors(colorString){

	for(var i=0;i<sqrList.length;i++)
  {
    sqrList[i].style.backgroundColor=colorString;
    sqrList[i].style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)";
  }

}

function pickColor(){

	var index=Math.floor(Math.random()*colors.length);
	return colors[index];
}

function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}

resetButton.addEventListener("click",reset);
	

function reset()
{
	colors=generateRandomColor(noOfSquare);
	ans=pickColor();
	colorDisplay.textContent=ans;
	for(var i=0;i<sqrList.length;i++)
	{
		sqrList[i].style.display="block";
		if(colors[i])
			sqrList[i].style.backgroundColor=colors[i];
		else 
			sqrList[i].style.display="none";
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New Color";
	msgDisplay.textContent="";
}