function compressString(input){
  if(input.length == 0)
    return input;
  var ans = input.charAt(0);
  var count = 1;
  var i = 0;
  for(i = 0; i < input.length; i++){
    var currentChar = input.charAt(i);
    if(currentChar == ans.charAt(ans.length - 1))
      count++;
    else{
      ans += count.toString() + currentChar;
      count = 1;
    }
  }
  ans += count.toString();
  return ans;
}
