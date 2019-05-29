function showTax(){
	var inputVal = document.getElementById('inputVal').value;
  //alert(inputVal); 
  var netVal = inputVal * 100 / 118;
  var gstVal = inputVal * 9 / 118;
  document.getElementById('netVal').innerHTML = netVal;
  document.getElementById('gstVal').innerHTML = gstVal;
}

function resetAll(){
  var inputVal = document.getElementById('inputVal').value;
  inputVal = '';
  document.getElementById('netVal').innerHTML = "0";
  document.getElementById('gstVal').innerHTML = "0";
}