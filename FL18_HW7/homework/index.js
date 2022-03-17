function getAge(birthDate){
  let todayDate = new Date(),
  age = 0;
  
  if(birthDate.getMonth() < todayDate.getMonth() || birthDate.getMonth() === todayDate.getMonth() 
  && birthDate.getDate() <= todayDate.getDate()){
    age = todayDate.getFullYear() - birthDate.getFullYear();
  } else {
    age = todayDate.getFullYear() - birthDate.getFullYear() -1;
  }
  return age;
}

function getWeekDay(date){
  const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let weekdate = new Date(date);
  let day = weekday[weekdate.getDay()];
  return day;
}

function getAmountDaysToNewYear(){
  let date = new Date(),
    nextYear = date.getFullYear()+1,
    nextNY = new Date(nextYear,0,1),
    msPerDay = 24*60*60*1000,
    daysToNY = 0;
    
  daysToNY = Math.round((nextNY.getTime() - date.getTime())/msPerDay);
  return daysToNY;
}

function getProgrammersDay(year){
  let programerDay = year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0 ? 12 : 13,
    programerDate = new Date(year,8,programerDay),
    shortMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekday = getWeekDay(programerDate);
  return `${programerDay} ${shortMonth[programerDate.getMonth()]}, ${year} (${weekday})`;
}

function howFarIs(weekDay){
  const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let today = new Date(),
    countDays = 0,
    daysToNext = 0,
    i = 0;
  
  for (i=0; i<weekdays.length; i++){
    if (weekdays[i].toLowerCase() === weekDay.toLowerCase()){
      if(today.getDay() === i){
        daysToNext = `Hey, today is ${weekdays[i]} =)`;
      } else if (today.getDay() < i){
        countDays = i - today.getDay();
        daysToNext = `It's ${countDays} day(s) left till ${weekdays[i]}.`;
      } else {
        countDays = weekdays.length - today.getDay() + i;
        daysToNext = `It's ${countDays} day(s) left till ${weekdays[i]}.`;
      }
    }
  }
  return daysToNext;
}

function isValidIdentifier(checkText){
  const regExp = new RegExp('^([a-zA-Z_$][a-zA-Z\\d_$]*)$'); 
  return regExp.test(checkText);
}

function capitalize(testStr){
  let capitalizedStirng = testStr.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => {
    letter = letter.toUpperCase();
    return letter;
  })
  return capitalizedStirng;
}

function isValidAudioFile(fileName){
  const regExp = new RegExp('^([a-zA-Z][a-zA-Z]*).(?:flac|alac|aac|mp3)$');
  let validatedNameOfFIle = regExp.test(fileName);
  return validatedNameOfFIle;
}

function getHexadecimalColors(color){
  let HexArr = [],
    hexColor = color.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})(\s|;|\.)/g);
  if (hexColor){
    for (let i=0; i<hexColor.length; i++){
      console.log(hexColor[i]);
      HexArr[i]=hexColor[i].replace(/.$/,'');
    }
  }
  return HexArr;
}

function isValidPassword(pass){
  let regExpPass = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$');
  return regExpPass.test(pass);
}

function addThousandsSeparators(number){
  let separatedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return separatedNumber;
}

function getAllUrlsFromText(text){
  let urlsArr = [],
    getUrls = text.match(/(https?:\/\/)?([\da-z.-]+)(\.)([a-z.]{2,6})([/\w.-]*)*\/?/g),
    urlsFromText = getUrls;
    
  if (getUrls === null){
    urlsFromText = urlsArr;
  }
  return urlsFromText;
}



