const charsList = {
	"lower": "abcdefghijklmnopqrstuvwxyz",
	"upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"numbers": "0123456789",
	"symbols": "!@#$%^&*-",
};

function generatePassword(){
	var length = document.getElementById("pwrdLength").innerHTML;
	var result = ""
	var chars = "";
	for (var key in charsList){
		if (document.getElementById(key).checked){
			chars += charsList[key];
		}
	}

	for (var i = 0; i < length; i++){
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	document.getElementById("pwrd").innerHTML = result;
	document.getElementById("entropy").innerHTML = Math.log2(Math.pow(chars.length, length));
}

document.getElementById("pwrdLength").innerHTML = document.getElementById("pwrdSlider").value;
document.getElementById("pwrdSlider").oninput = function() {
	document.getElementById("pwrdLength").innerHTML = this.value;
}

function onGenerateClick(){
	if (document.getElementById("lower").checked || document.getElementById("upper").checked
	|| document.getElementById("numbers").checked || document.getElementById("symbols").checked){
		document.getElementById("pwrd").style.display = "block";
		document.getElementById("getEntropy").style.display = "block";
		document.getElementById("clipboardbtn").style.display = "";
		generatePassword();
	}
}

function copyToClipboard(){				
	navigator.clipboard.writeText(document.getElementById("pwrd").innerHTML);
}