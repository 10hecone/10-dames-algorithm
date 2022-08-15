let dame = [[0, 0]];
let listPosXY = [];

function findIndexDameX(valeur) {
  for(let e = 0; e <= dame.length; e++) {
    if(dame[e][0] == valeur) return false;
    if(dame[e][0] != valeur) return true;
  };
};

for(let e = 1; e < 10; e++) {
dame[e] = [0, e];
 if(findIndexDameX(e)) {
    if((((e - dame[e][0]) + ((e + 1) - dame[e][0]))) <= 9) {
    dame[e] = [(((e - dame[e][0]) + ((e + 1) - dame[e][0]))), e] 
    } else {
    };
  };
};

console.log(dame)
