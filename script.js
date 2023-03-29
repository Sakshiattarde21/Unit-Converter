function FtoC(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputCelcius").value = (valNum - 32) / 1.8;
}

function FtoK(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputKelvin").value = ((valNum - 32) / 1.8)+273.15;
}

function CtoF(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputFeet").value = (valNum * 0.032808);
}
function CtoM(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputMeter").value = (valNum / 100);
}
function CtoI(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputInch").value = (valNum * 0.39370);
}
function CtoY(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputYard").value = (valNum * 0.010936);
}
function PtoK(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputKg").value = (valNum / 2.2046);
}
function PtoG(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputGram").value = (valNum / 0.0022046);
}
function PtoO(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputOunce").value = (valNum * 16);
}