//If this qualifies...its what I ended up with:

var names = ["mike", "dave", "jack", "marry", "jim", "jill", "june", "grey", "greg", "mark", "derrek", "richard", "bmw"]


function search(criteria, arrayToSearch, fuzzyOrNo, tolerance) {
  var filtered = [];
  arrayToSearch.forEach(function (name) {
    var matchCount = 0;
    var nameLength = name.length;
    if (fuzzyOrNo === true) {
      for (var i = 0; i < criteria.length; i++) {
        if(name.toLowerCase().match(criteria[i].toLowerCase())){
          matchCount++;
          name.slice(name.indexOf(criteria[i]),1);
        }
      }
      if (Math.abs(matchCount - nameLength) <=tolerance && Math.abs(criteria.length - nameLength) <=tolerance) {
        filtered.push(name);
      }
    }
    else if (name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
      filtered.push(name);
    }
  });
  console.log(filtered);
  return filtered;
}
search('Marcos', names, true, 1);
search('Marcos', names, true, 3);
