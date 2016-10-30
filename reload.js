var re = /\r?\n|\r/g; 
var mem = localStorage.getItem('mem');

// Run when page reloading
window.onload = function() {

  var arr = mem.split(re); 
  var len = arr.length;

  // If localStorage has value, restore them to the memory textarea
    if (mem !== null){
      $('#mem').val(mem);
    }
  // Only ten results are stored in the memory textarea. 
    if(arr.length > 11){
      arr.shift(); 
      $('#mem').val(arr.join('\n'));
    }
}

// Save the form data to localStorage synchronously. 
window.onbeforeunload = function() {

  localStorage.setItem("mem", $('#mem').val());

}
