function strPermute(a, b){
  var i = 0;
  var charMap = {};
  for(i = 0; i < a.length; i++){
    var currentChar = a.charAt(i);
    if(charMap[currentChar] == undefined)
      charMap[currentChar] = 1;
    else
      charMap[currentChar]++;
  }
  for(i = 0; i < b.length; i++){
    var currentChar = b.charAt(i);
    if(charMap[currentChar] == undefined)
      return false;
    else
      charMap[currentChar]--;
  }
  for(var key in charMap)
    if(charMap.hasOwnProperty(key))
      if(charMap[key] != 0)
        return false;
  return true;
}
