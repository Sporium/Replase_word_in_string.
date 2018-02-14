
function myReplace(str, before, after) {
 
  if (before.charAt(0).toUpperCase() == before.charAt(0)) {
  return str.replace(before,after.charAt(0).toUpperCase() + after.substr(1));
    
  }
  else{
  return str.replace(before,after.charAt(0).toLowerCase() + after.substr(1));   
  }
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
