// Clear value in the Display input area.
function refresh() {
  var elements = document.getElementsByTagName('input');
  for (var i =0 ; i < elements.length; i++) {
    if (elements[i].type === "text") { 
      elements[i].value = ""; 
    } 
  } 
}

// Display memory textarea
function memory() { 
  var ele = document.getElementById("mem"); 
    if(ele.style.display === "block") { 
      ele.style.display = "none"; 
    } else { 
      ele.style.display = "block"; 
    } 
  } 

// Perform the calculation
function compute(v) { 
  if(document.getElementById("total").value !== "") { 
    refresh() 
  } 
  document.getElementById("cache2").value += v 
  document.getElementById("disp").value += v 
} 

// Perform the squareroot function. 
function squareRoot() {
  var re = /\r?\n|\r/g; 
  var arr = document.getElementById("mem").value.split(re); 
  var sqrt = Math.sqrt(document.getElementById("cache2").value);

  if(document.getElementById("total").value !== "") { 
    refresh() 
  }

  document.getElementById("total").value = sqrt;
  
  // Only ten results are stored in the memory textare; if they 
  // are more than 10, the oldest result is replaced by the latest one.
  if(arr.length <= 10){
    document.getElementById("mem").value += sqrt+"\n";    
  } else {
    arr.shift(); 
    $('#mem').val(arr.join('\n'));
    document.getElementById("mem").value += sqrt+"\n";  
  } 
}

// Perform the equal function. 
function equal(){ 
  var re = /\r?\n|\r/g; 
  var arr = document.getElementById("mem").value.split(re);
  num = document.getElementById("cache2").value;  
  total = eval(num); 
  document.getElementById("total").value = total;

  // Same ten results are allowed logic. 
  if(arr.length <= 10){
    document.getElementById("mem").value += total+'\n'; 
  } else {
    arr.shift(); 
    $('#mem').val(arr.join('\n'));
    document.getElementById("mem").value += total+'\n'; 
  }
}
