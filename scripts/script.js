var charList = getCharList();
var message = document.getElementById("message");

function contains(array, obj) {
    for(var i=0; i<array.length; i++) {
        if (array[i] == obj) return true;
    }
    return false;
}

function getCharList(){
	var ascii91_96 = [91,92,93,94,95,96];
	var resultList = [];
	for(var i=65; i<=122; i++){
		if(!contains(ascii91_96, i)){
			resultList.push(i);
		}
	}
	return resultList;
}

function showAlert(element) {
	element.textContent = "Please press only the character keys (A-Z)";
	element.style.color = "#ee4";
}

function resetKey(key, messageElement) {
	
	var element = document.getElementById(key);

	if(element.classList.contains("letter-box-enhanced")) {
		element.classList.remove("letter-box-enhanced");
	}

	messageElement.textContent = "";
}

function triggerKey(key) {
	
	var element = document.getElementById(key);
	var audio = new Audio('sounds/'+key.toUpperCase()+'.wav');

	if(!element.classList.contains("letter-box-enhanced")) {

		element.classList.add("letter-box-enhanced");
		audio.play();

	}
}

function keyDownEvent() {
	document.body.addEventListener("keydown", function(keyEvent){
		if(contains(charList, keyEvent.keyCode)) {

			var key = keyEvent.key.toString().toLowerCase();
			triggerKey(key);

		} else {

			showAlert(message);

		}
	});
}

function keyUpEvent() {
	document.body.addEventListener("keyup", function(keyEvent) {

		if(contains(charList, keyEvent.keyCode)) {

			var key = keyEvent.key.toString().toLowerCase();
			resetKey(key, message);

		}	
	});
}

function executeEvents() {

	keyUpEvent();

	keyDownEvent();

}

executeEvents();