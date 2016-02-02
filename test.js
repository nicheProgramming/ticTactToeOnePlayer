var turnSwitch = false;

function fScan() {
	var funcArray = [];
    for(i=1;i<10;i++) {
        var bName = document.getElementById("box" + i).className;
        if(bName == 'square') {
            funcArray.push("box" + i);
        } 
    }
	return funcArray;
}

function winCheck() {
    var b1class = document.getElementById("box1").className;
    var b2class = document.getElementById("box2").className;
    var b3class = document.getElementById("box3").className;
    var b4class = document.getElementById("box4").className;
    var b5class = document.getElementById("box5").className;
    var b6class = document.getElementById("box6").className;
    var b7class = document.getElementById("box7").className;
    var b8class = document.getElementById("box8").className;
    var b9class = document.getElementById("box9").className;
	if(b1class == "pUsed" && b2class == "pUsed" && b3class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b1class == "pUsed" && b4class == "pUsed" && b7class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b1class == "pUsed" && b5class == "pUsed" && b9class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b2class == "pUsed" && b5class == "pUsed" && b8class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b4class == "pUsed" && b5class == "pUsed" && b6class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b3class == "pUsed" && b6class == "pUsed" && b9class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b3class == "pUsed" && b5class == "pUsed" && b7class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b7class == "pUsed" && b8class == "pUsed" && b9class == "pUsed") {
		alert("You won! Refresh to play again!");
		turnSwitch = true;
	}
	else if(b1class == "cUsed" && b2class == "cUsed" && b3class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	}
	else if(b1class == "cUsed" && b4class == "cUsed" && b7class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	}
	else if(b1class == "cUsed" && b5class == "cUsed" && b9class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	}
	else if(b2class == "cUsed" && b5class == "cUsed" && b8class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	}
	else if(b4class == "cUsed" && b5class == "cUsed" && b6class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	}
	else if(b3class == "cUsed" && b6class == "cUsed" && b9class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	}
	else if(b3class == "cUsed" && b5class == "cUsed" && b7class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	}
	else if(b7class == "cUsed" && b8class == "cUsed" && b9class == "cUsed") {
		alert("You lost. Refresh to play again!");
		turnSwitch = true;
	} 
	else if(fScan().length == 0) {
		alert("Everyone loses! Refresh to play again!");
		turnSwitch = true;
	}
	else {
		return false;
	}
}

function NPC() {
	if (winCheck() == false) {
		var randy = fScan()[Math.floor(Math.random() * fScan().length)];
		console.log(randy);
		document.getElementById(randy).style.backgroundImage = "url('i.jpeg')";
		document.getElementById(randy).className = "cUsed";
		winCheck();
	}
	else {
		return;
	}
}

function turn(divID, divClass) {
	if(turnSwitch == false) {
		if(divClass == "square") {
			document.getElementById(divID).style.backgroundImage = "url('x.jpeg')";
			document.getElementById(divID).className = "pUsed";
			NPC();
			console.log(fScan());
		} 
		else if(divClass == "pUsed" || divClass == "cUsed") {
			alert('Error, space already used.');
		}
	}
	else {
		alert("The game is over, refresh to restart.");
	}
}