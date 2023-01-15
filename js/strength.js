const charsList = {
	"lower": "abcdefghijklmnopqrstuvwxyz",
	"upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"numbers": "0123456789",
	"symbols": "!@#$%^&*-",
};

document.getElementById("password").oninput = function() {
	if (this.value.length == 0) {
		document.getElementById("getEntropy").style.display = "none";
	} else {
		document.getElementById("getEntropy").style.display = "block";
		var value = document.getElementById("password").value;
		var entropy = 0;

		var policies = {
			"lower": 0,
			"upper": 0,
			"numbers": 0,
			"symbols": 0,
		};

		for (var i = 0; i < value.length; i++){
			for (var keys in charsList){
				if (charsList[keys].includes(value.charAt(i)) && policies[keys] == 0) {
					policies[keys] = 1;
					entropy += charsList[keys].length;
				}
			}
		}
		document.getElementById("entropy").innerHTML = Math.log2(Math.pow(entropy, value.length));
	}
}

document.getElementById("password").addEventListener('keypress', function inputKeypressHandler(e) {
	var keychar = String.fromCharCode(e.which || e.keyCode);
		var isValid = false;
		for (var keys in charsList){
			if (charsList[keys].includes(keychar)) {
				isValid = true;
				break;
			}
		}
		if (!isValid) e.preventDefault();
});
