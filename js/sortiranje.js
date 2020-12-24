
var input = [2,3,8,1,4,5,9,7,6];
var output = [];
var inserted;

document.getElementById("sort0").innerHTML = ("<b>JavaScript -<mark> SORTIRANJE </mark><b>");

for (var i = 0, ii = input.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}

document.getElementById("sort1").innerHTML = ("Ne sortirani niz je: " + input);
document.getElementById("sort2").innerHTML = ("Sortirani niz je: " + output);
