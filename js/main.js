$(document).ready(function(){
	var onScreen = "";
	var numberOfOperator = 0;
	var currentOperation;
	var num1;
	var num2;
	var result;

	$("#button-container").click(function(e){
		var tgt = e.target;
		if(tgt.id === "cancel"){
			onScreen = "";
			$("#screen").text(onScreen);
			numberOfOperator = 0;
		}else if(tgt.classList[0] === "operator"){
			numberOfOperator++;
			if(onScreen.length === 0){
				alert("Invalid!");
			}else if(numberOfOperator >1 && tgt.id !== "calc"){
				alert("Invalid!");
			}else if(tgt.id === "calc"){
				if(currentOperation === "*"){
					num2 = parseInt(onScreen.split("x")[1]);
				}
				else if(currentOperation === "/"){
					num2 = parseInt(onScreen.split("\367")[1]);
				}else{
					num2 = parseInt(onScreen.split(currentOperation)[1]);
				}
				result = eval(num1+currentOperation+num2);
				$("#screen").text(result);
				
			}else if($(tgt).text() === "\367"){
					onScreen += "\367";
					$("#screen").text(onScreen);
					currentOperation = "/";
			}else if($(tgt).text() === "x"){
					currentOperation = "*";
					num1 = parseInt(onScreen.split("x")[0]);
					onScreen += "x";
					$("#screen").text(onScreen);
			}else{
					currentOperation = tgt.innerText;
					onScreen += currentOperation;
					$("#screen").text(onScreen);}
					num1 = parseInt(onScreen.split(currentOperation)[0]);
				}
		else{
			onScreen += tgt.innerText;
			$("#screen").text(onScreen);
		}
		
	});
});