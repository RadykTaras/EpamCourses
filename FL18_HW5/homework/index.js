function isEquals(firstElement,secondElement){
  let equal = firstElement === secondElement;
  return equal;
}

function isBigger(firstElement,secondElement){
  let greater = firstElement > secondElement;
  return greater;
}

function storeNames(...rest){
  return rest;
}

function getDifference(firstElement,secondElement){
  let numDifference = firstElement - secondElement,
    cofForNegative = -1;
  if (numDifference < 0){
    return numDifference * cofForNegative;
  } else {
    return numDifference;
  }
}

function negativeCount(...array){
  let numOfnegative = 0,
    i = 0,
    newArray = [];
  newArray = array[0];
  for (i=0;i<newArray.length;i++){
    if (Number(newArray[i])<0){
      numOfnegative += 1;
      array[i];
    }
  }
  return numOfnegative;
}

function letterCount(word,letter){
  word += ''; 
  letter += ''; 
  if (letter.length <= 0) { 
    return word.length + 1; 
  } 
  let countNum = 0, 
    coincidence = 0, 
    step = letter.length; 

  for (;;) { 
    coincidence = word.indexOf(letter, coincidence); 
    if (coincidence >= 0) { 
        ++countNum; 
        coincidence += step; 
    } else {
      break; 
    } 
  } 
  return countNum;
}

function countPoints(...array){
  let newArray = array[0],
    i = 0,
    teamScore = 0,
    winnerPoins = 3,
    drawPoints = 1,
    points = 0;
  for (i=0;i<newArray.length;i++){
    teamScore = newArray[i].split(':');
    if(Number(teamScore[0])>Number(teamScore[1])){
      points += winnerPoins;
    } else if(Number(teamScore[0])===Number(teamScore[1])){
      points += drawPoints;
    }
  }
  return points;
}
