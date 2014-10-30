void reverse(char* str){
  int length = 0;
  while(str[length] != '\0')
    length++;
  int left = 0;
  int right = length - 1;
  while(left < right){
    char temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
}
