function reverseNumber(num) {
  if (num > 0){
    numString = String(num);
    reverseString = '';
    for (let i = numString.length - 1; i >= 0; i--){
    reverseString += numString[i];
    }
    reverseNum = Number(reverseString);
  } else {
    num = num * -1;
    numString = String(num);
    reverseString = '';
    for (let i = numString.length - 1; i >= 0; i--){
    reverseString += numString[i];
    }
    reverseNum = Number('-' + reverseString);
  }
  return reverseNum;
}

function forEach(arr, func) {
  for(i=0;i<arr.length;i++){
    func(arr[i]);
  }
}

function map(arr, func) {
  for(i=0;i<arr.length;i++){
    arr[i] = func(arr[i]);
  }
  return arr;
}

function filter(arr, func) {
  filteredArr = [];
  for(i=0;i<arr.length;i++){
    if (func(arr[i])){
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

function getAdultAppleLovers(data) {
  dataAgeFilter = filter(data, function(el) { 
    return el.age > 18 && el.favoriteFruit === 'apple'
  });
  personName = map(dataAgeFilter, function(el) { 
    return el.name 
  });
  return personName;
}

function getKeys(obj) {
  arrKeys = [];
  for(var key in obj){
    arrKeys.push(key)
  }
  return arrKeys;
}

function getValues(obj) {
  arrValues = [];
  for(var item in obj){
    arrValues.push(obj[item])
  }
  return arrValues;
}

function showFormattedDate(dateObj) {
  let month= [];
  month[0]="Jan";
  month[1]="Feb";
  month[2]="Mar";
  month[3]="Apr";
  month[4]="May";
  month[5]="Jun";
  month[6]="Jul";
  month[7]="Aug";
  month[8]="Sep";
  month[9]="Oct";
  month[10]="Nov";
  month[11]="Dec";
  return "It is "+dateObj.getDate()+" of "+month[dateObj.getMonth()]+", "+dateObj.getFullYear();
}
