var names = ['amanada', 'pharrell', 'duke', 'lewis', 'janet']
var searchArr= []
var found_names = [];
function searchText(argument) {
  for (var i = 0; i < names.length; i++) {
    indices = findIndices(argument[0], names[i]);
    for (var a = 0; a < indices.length; a++) {
      mini_string = names[i].substring(indices[a],indices[a]+argument.length);
      if ((mini_string.length >= argument.length) && (fuzzyMatch(argument, mini_string))){
        if(!inArray(found_names,names[i])){
          found_names.push(names[i]);
        }
      }
    }
  }
  return found_names;
}

function fuzzyMatch(argument, mini_string){
  var tolerance = 2;
  var bad_matches = 0;
  for (var i = 0; i < argument.length; i++) {
    if(argument[i] != mini_string[i]){
      bad_matches ++;
    }
  }
  if (bad_matches > tolerance) {
    return false;
  } else {
    return true;
  }
}

function inArray(array,item){
  return array.indexOf(item) != -1;
}


function findIndices(firstLetter, name){
  var arr=[]
  for (var i = 0; i < name.length; i++) {
    if(name[i] === firstLetter)
    arr.push(i);
  }
  return arr;
}

console.log(searchText('harry'));
