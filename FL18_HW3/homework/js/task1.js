let a = prompt('Input initial amount',''),
  b = prompt('Input number of years',''),
  c = prompt('Input percentage of a year',''),
  initialAmount = parseFloat(a),
  numberOfYears = parseInt(b),
  percentageOfYear = parseFloat(c),
  totalAmount = initialAmount,
  totalProfit = 0,
  i = 0,
  minAmount = 1000,
  maxPercentage = 100,
  flatSymbols = 2,
  Profit = 0;
    
if(isNaN(initialAmount) || isNaN(numberOfYears) || isNaN(percentageOfYear) || initialAmount < minAmount || 
numberOfYears < 1 || percentageOfYear > maxPercentage || numberOfYears % 1 !== 0){
  alert('Invalid input data');
} else {
  for(i=1;i<=numberOfYears;i++){
    console.log(i);
    Profit = totalAmount / maxPercentage * percentageOfYear;
    totalProfit = totalAmount / maxPercentage * percentageOfYear + totalProfit;
    totalAmount += Profit; 
  }

  alert(`Initial amount: ${initialAmount}\nNumber of years: ${numberOfYears}\n
  Percentage of year: ${percentageOfYear}\n\nTotal profit: ${totalProfit.toFixed(flatSymbols)}\n
  Total amount: ${totalAmount.toFixed(flatSymbols)}`) 
}