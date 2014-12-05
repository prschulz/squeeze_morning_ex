
var squeeze = function(str){
  var strArray = str.split('');  //split string into array
  var newArray = []; //new array to push in new word
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] !== strArray[i+1]) newArray.push(strArray[i]);  //push non-dups to new array
  }
  return newArray.join('');  //return array as string
};
