
var squeeze = function(str){
  strArray = str.split('');  //split string into array
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i+1]) strArray.splice(i,1);  //splice out the duplicate
  }
  return strArray.join('');  //return array as string
};
