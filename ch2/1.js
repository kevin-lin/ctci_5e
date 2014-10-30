function removeDup(head){
  var currentNode = head;
  var valueMap = {};
  while(currentNode != undefined){
    var currentValue = currentNode.value;
    if (valueMap[value] === true)
      return false;
    else
      valueMap[value] = true;
    currentNode = currentNode.next();
  }
}

function removeDupB(head){
  var nodeA = head;
  while(nodeA != undefined){
    var nodeB = nodeA.next();
    while(nodeB != undefined){
      if(nodeA.value === nodeB.value)
        return false;
      nodeB = nodeB.next();
    }
    nodeA = nodeA.next();
  }
  return true;
}
