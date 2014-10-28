function uniqueCharString(input){
  var charMap = {};
  var i = 0;
  for(i = 0; i < input.length; i++){
    var currentChar = input.charAt(i).toLowerCase();
    if(charMap[currentChar] === true)
      return false;
    charMap[currentChar] = true;
  }
  return true;
}

// using no additional data structures
function uniqueCharStringB(input){
  var i = 0;
  for(i = 0; i < input.length; i++){
    var j = i;
    for(j = i; i < input.length; j++){
      if(input.charAt(i) == input.charAt(j))
        return false;
    }
  }
}
