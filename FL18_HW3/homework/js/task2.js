function casino(){
  casinoNumber = Math.floor(Math.random()*poket+1);

  for (i=1;i<=3;i++){
    let choose = prompt(`Choose a roulette pocket number from 0 to ${poket}\nAttempts left: ${attemts}\n
    Total prize: ${prize}$\nPossible prize on current attempt: ${currentAttempt}$`),
      chooseNumb = Number(choose);
      
    attemts -=1;
    
    if (chooseNumb === casinoNumber && i === 1){
      prize += currentAttempt;
      let countinue = confirm(`Congratulation, you won!\nYour prize is: ${prize}$.\nDo you want to continue?`);
      
      if (countinue){
        currentAttempt = 100;
        lvl += 1;
        currentAttempt *= lvl;
        attemts = 3;
        poket += 4;
        casino();
      } else {
        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        let playAgain = confirm('Do you want to play again?');
        
        if (playAgain){
          prize = 0,
          attemts = 3,
          currentAttempt = 100, 
          poket = 8,
          lvl = 1;
          casino();
        } else {
          i = 10;
        }
      }
    } else if(chooseNumb === casinoNumber && i === 2){
      prize += currentAttempt;
      let countinue = confirm(`Congratulation, you won!\nYour prize is: ${prize}$.\nDo you want to continue?`);
      if (countinue){
        currentAttempt = 100;
        lvl += 1;
        currentAttempt *= lvl;
        attemts = 3;
        poket += 4;
        casino();
      } else {
        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        let playAgain = confirm('Do you want to play again?');
        if (playAgain){
          prize = 0,
          attemts = 3,
          currentAttempt = 100, 
          poket = 8,
          lvl = 1;
          casino();
        } else {
          i = 10;
        }
      }
    } else if(chooseNumb === casinoNumber && i === 3){
      prize += currentAttempt;
      let countinue = confirm(`Congratulation, you won!\nYour prize is: ${prize}$.\nDo you want to continue?`);
      if (countinue){
        currentAttempt = 100;
        lvl += 1;
        currentAttempt *= lvl;
        attemts = 3;
        poket += 4;
        casino();
      } else {
        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        let playAgain = confirm('Do you want to play again?');
        if (playAgain){
          prize = 0,
          attemts = 3,
          currentAttempt = 100, 
          poket = 8,
          lvl = 1;
          casino();
        } else {
          i = 10;
        }
      }
    } else if(i===3){
      alert(`Thank you for your participation. Your prize is: ${prize}$`);
      let playAgain = confirm('Do you want to play again?');
      if (playAgain){
        prize = 0,
        attemts = 3,
        currentAttempt = 100, 
        poket = 8,
        lvl = 1;
        casino();
      } else {
        i = 10;
      }
    } else { 
      currentAttempt = currentAttempt/2;
    }
  }
}



let submitOfgame = confirm('Do you want to play a game?'),
  prize = 0,
  attemts = 3,
  currentAttempt = 100, 
  lvl = 1,
  i = 0,
  casinoNumber = 0,
  poket = 8;

if(submitOfgame){
  casino(); 
} else {
  alert('You did not become a billionaire, but can.');
}


