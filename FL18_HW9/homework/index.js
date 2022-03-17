/* START TASK 1: Your code goes here */
const table = document.getElementById('table');

table.addEventListener('click', function(element) {
  
  if(element.target.cellIndex === 0){
    for(let i=0; i<element.target.parentElement.cells.length; i++){
      if(element.target.parentElement.cells[i].style.backgroundColor === ''){
      element.target.parentElement.cells[i].style.backgroundColor = 'blue';
      }
    }
  } else if(element.target.innerText === 'Special Cell'){
      this.style.backgroundColor = 'green';
  } else if(element.target !== table){
    element.target.style.backgroundColor = 'yellow';
  }
})
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const validationText = document.getElementById('validationText'),
  input = document.getElementById('inputPhoneNumber'),
  btn = document.getElementById('inputBtn');
  
input.addEventListener('input', checkValidation);

function checkValidation(){
  let inputedText = this.value;
  let regExpForPhoneNumber = new RegExp('^\\+380(\\d{9})$');
  if(!regExpForPhoneNumber.test(inputedText)){
    validationText.style.backgroundColor = 'lightcoral';
    validationText.style.height = '70px';
    validationText.style.display = 'flex';
    validationText.style.alignItems = 'center';
    validationText.innerHTML = '<p>The number does not follow format<br>+380*********</p>';
    btn.disabled = true;
    input.style.border = '3px solid red';
  } else {
    validationText.style.display = 'none';
    input.style.border = '1px solid black';
    btn.disabled = false;
  }
}

btn.addEventListener('click', sendPhoneNumber)

function sendPhoneNumber(){
  validationText.innerHTML = 'Data was successfully sent';
  validationText.style.backgroundColor = 'green';
  validationText.style.height = '50px';
  validationText.style.display = 'flex';
  validationText.style.alignItems = 'center';
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const court = document.getElementById('court');
court.addEventListener('click',moveBall)

const ball = document.getElementById('ball');

function moveBall(event){
  let x = String(event.clientX-20) + 'px',
    y = String(event.clientY-10) + 'px';
  
  ball.style.left = x;
  ball.style.top = y;
}

const map = document.getElementById('hoop');
map.addEventListener('click',goal)

function goal(ele){
  
  const scoreAteam = document.getElementById('teamAScore'),
    scoreBteam = document.getElementById('teamBScore'),
    goalMassegeTxt = document.getElementById('goalMassege');
  console.log(goalMassegeTxt.style.display)
  
  if(goalMassegeTxt.style.display === 'block'){
    clearTimeout(setTimeout);
  } else {
    setTimeout(score, 3000);
  }
  
  let x = String(ele.clientX-20) + 'px',
    y = String(ele.clientY-10) + 'px';
  
  ball.style.left = x;
  ball.style.top = y;
  
 if(ele.srcElement.alt === 'teamBhoop'){
    let getScore = Number(scoreBteam.innerHTML);
    scoreBteam.innerHTML = String(getScore+1);
    goalMassegeTxt.style.display = 'block';
    goalMassegeTxt.style.color = 'blue';
    goalMassegeTxt.innerHTML = 'Team A score!'
    
 } else {
    let getScore = Number(scoreAteam.innerHTML);
    scoreAteam.innerHTML = String(getScore+1);
    goalMassegeTxt.style.display = 'block';
    goalMassegeTxt.style.color = 'red';
    goalMassegeTxt.innerHTML = 'Team B score!'
 }
}

function score(){
  const goalMassegeTxt = document.getElementById('goalMassege');
  goalMassegeTxt.style.display = 'none';
}

/* END TASK 3 */
