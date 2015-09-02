//create search logic
function deDupe(arr) {
var i,
    len=arr.length,
    out=[],
    obj={};

for (i=0;i<len;i++) {
  obj[arr[i]]=0;
}
for (i in obj) {
  out.push(i);
}
return out;
}

var namesArray = ["mike", "dave", "jack", "marry", "jim", "jill", "june", "grey", "greg", "mark", "derrek", "richard", "bmw"]

var searchFunc = function (input,term) {
  var matches = 0;
  var matchingNames = [];
  var fuzzyMatch = {};
  var search = term.toLowerCase();

  for (var i = 0; i < input.length; i++) {
    fuzzyMatch[input[i]] = [];
    if(input[i] === search){
      matches += 1;
      matchingNames.push(input[i] + " Exact match")
    } else {
      for (var j = 0; j < input[i].length; j++) {
        if(input[i][0] === search[0]){
          if(input[i][j] === search[j]){
            fuzzyMatch[input[i]].push(search[j]);
          }
        }
      }
    }
    for (key in fuzzyMatch) {
      var nameLength = key.length;
      var matchedLength = fuzzyMatch[key].length;

      if(nameLength <= 3){
       if(fuzzyMatch[key].length >= 2){
         matchingNames.push(key + " Fuzzy match")
       }
      } else {
        if(fuzzyMatch[key].length >= 3){
          matchingNames.push(key + " Fuzzy match")
        }
      }
    }
  }

  return {searchName: term, matchingNames: deDupe(matchingNames)}
}

//console.log(searchFunc(namesArray,"mike"));
console.log(searchFunc(namesArray,"dirrek"));
console.log(searchFunc(namesArray,"Darrek"));
console.log(searchFunc(namesArray,"DaRRek"));
console.log(searchFunc(namesArray,"kerred"));
console.log(searchFunc(namesArray,"darr"));
console.log(searchFunc(namesArray,"mar"));
console.log(searchFunc(namesArray,"gray"));
console.log(searchFunc(namesArray,"ji"));
console.log(searchFunc(namesArray,"BMV"));
console.log(searchFunc(namesArray,"mike"));
