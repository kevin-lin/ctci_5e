function replaceFunction(input){
  var i = 0;
  for(i = 0; i < input.length; i++){
    var currentChar = input.charAt(i);
    if(currentChar == ' '){
      input = input.substring(0, i) + "%20" + input.substring(i+1, input.length);
    }
  }
  return input;
}
