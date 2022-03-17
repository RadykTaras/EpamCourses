const head = document.getElementsByTagName('head');
linkToIcon = document.createElement('link');
linkToIcon.rel = 'stylesheet';
linkToIcon.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(linkToIcon);

const appRoot = document.getElementById('app-root');
appRoot.style.textAlign = 'center';
appRoot.innerHTML = `
<header>
  <h1>Countries Search</h1>
</header> 
<main>
  <form>
    <div style="display:flex; justify-content:center; align-items:center">
      <p>Please choose the type of search:</p>
      <div id="chekbox" style="text-align:left; padding-left:10px" >
        <input type="radio" id="ByRegion" name="typeOfSurch" class="typeOfSurch" onclick="getDropdownValue()"> 
        <label for="typeOfSurch">By Region</label><br>
        <input type="radio" id="ByLanguage" name="typeOfSurch" class="typeOfSurch" onclick="getDropdownValue()">
        <label for="typeOfSurch">By Language</label>
      </div>
    </div>
    <div id="selector">
      <label for="selector">Please choose search query:</label>
      <select name="selector" id="selectorList" style="width:150px">
        <option value="selectValue">Select value</option>
      </select>
    </div>
  </form>
  <div id="tableBlock" style="display:flex; justify-content:center; align-items:center">
  </div>
</main>`;

const applicationForm = document.getElementById('applicationForm'),
  radioBtn = document.getElementsByName('typeOfSurch'),
  tableBlock = document.getElementById('tableBlock'),
  selectorBlock = document.getElementById('selector');
  
function getDropdownValue(){
  const selectorList = document.getElementById('selectorList');
  
  while (tableBlock.firstChild) {
    tableBlock.removeChild(tableBlock.firstChild);
  }
  
  let selectArr = [];
  for (let i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].type === 'radio' && radioBtn[i].checked && radioBtn[i].id ==='ByLanguage') {
      selectArr = externalService.getLanguagesList();
    } else {
      selectArr = externalService.getRegionsList();
    }
  }
  
  for(let i=1;i<=selectorList.length;i++){
    selectorList.remove(i);
  }
  if(!document.getElementById('selectorList').getAttribute('onclick')){
    document.getElementById('selectorList').setAttribute('onclick','createTableBySelect(value)');
  }
  createSelectorByArr(selectArr);
}

function createSelectorByArr(selectArr){
  const selectorList = document.getElementById('selectorList');
  
  textChooseQuery = document.createElement('p');
  textChooseQuery.innerText = 'No items, please choose search query';
  tableBlock.appendChild(textChooseQuery);
 
  for(let i=1;i<=selectArr.length;i++){
    selectorList.remove(i);
  }
  
  for (let i=1;i<=selectArr.length;i++){
    selectorList.options[i]= new Option(selectArr[i-1],selectArr[i-1],true);
  }
}

function createTableBySelect(query){
  const toReplays = tableBlock.children[0];
  
  if(query!=='selectValue'){
    let tableHeader = ['Country name','Capital','World region','Languages','Area','Flag'];
    
    table = document.createElement('table');
    table.style.width = '1000px';
    table.style.align = 'center';
    table.style.border = '1px solid black';
    table.style.marginTop = '20px';
    table.style.borderCollapse = 'collapse';
    
    
    for (let i = 0; i < radioBtn.length; i++) {
      if (radioBtn[i].type === 'radio' && radioBtn[i].checked && radioBtn[i].id ==='ByLanguage') {
        tableContent = externalService.getCountryListByLanguage(query);
      } else {
        tableContent = externalService.getCountryListByRegion(query);
      }
    }
    
    for (let i = -1; i < tableContent.length; i++) {
      const tr = table.insertRow();
      
      for (let j = 0; j < tableHeader.length; j++) {
        const td = tr.insertCell();
        
        if(i===-1){ 
          td.appendChild(document.createTextNode(tableHeader[j]));
          td.style.backgroundColor = '#53ad56';
          td.style.height = '35px';
          td.style.color = 'white';
          td.style.fontWeight = '500';
          
          if(j===0){
            let arrow = document.createElement('i');
            arrow.classList.add('fa','fa-long-arrow-up');
            arrow.style.fontSize = '15px';
            arrow.style.cursor = 'pointer'
            arrow.style.color = 'yellow';
            arrow.id = 'sortByName';
            arrow.setAttribute('onclick','sortTableByName()');
            td.append(arrow);
            
          } else if(j===4){
            
            let arrow = document.createElement('i');
            arrow.classList.add('fa','fa-arrows-v');
            arrow.style.fontSize = '15px';
            arrow.style.cursor = 'pointer'
            arrow.style.color = 'yellow';
            arrow.id = 'sortByArea';
            arrow.setAttribute('onclick','sortTableByArea()');
            td.append(arrow);
          }
          
        } else {
          let objRow = tableContent[i];
          if(j===0){
            td.appendChild(document.createTextNode(objRow.name));
          } else if(j===1){
            td.appendChild(document.createTextNode(objRow.capital));
          } else if(j===2){
            td.appendChild(document.createTextNode(objRow.region));
          } else if(j===3){
            td.appendChild(document.createTextNode(Object.values(objRow.languages).join(', ')));
          } else if(j===4){
            td.appendChild(document.createTextNode(objRow.area));
          } else if(j===5){
            let img = document.createElement('img');
            img.src = objRow.flagURL;
            td.appendChild(img);
          }
          td.style.height = '50px';
        }
        td.style.border = '1px solid black';
      }
    }
    
    tableBlock.replaceChild(table, toReplays);
    sortTableByName('firstTime');
    
  } else{
    textChooseQuery = document.createElement('p');
    textChooseQuery.innerText = 'No items, please choose search query';
    tableBlock.replaceChild(textChooseQuery, toReplays);
  }
}

function sortTableByName(value){
  const nameArrow = document.getElementById('sortByName');
  const areaArrow = document.getElementById('sortByArea');
  areaArrow.className = 'fa ';
  areaArrow.className += 'fa-arrows-v';
  
  if (value==='firstTime'){
    let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
    createRowsColor(sortedRows);
    
  } else if(nameArrow.className === 'fa fa-long-arrow-up'){
    nameArrow.className = 'fa ';
    nameArrow.className += 'fa-long-arrow-down';
    let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML < rowB.cells[0].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
    createRowsColor(sortedRows);
    
  } else if(nameArrow.className === 'fa fa-long-arrow-down' || nameArrow.className === 'fa fa-arrows-v'){
    nameArrow.className = 'fa ';
    nameArrow.className += 'fa-long-arrow-up';
    let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
    createRowsColor(sortedRows);
  }
}

function sortTableByArea(){
  const nameArrow = document.getElementById('sortByName');
  const areaArrow = document.getElementById('sortByArea');
  nameArrow.className = 'fa ';
  nameArrow.className += 'fa-arrows-v';
  
  if(areaArrow.className === 'fa fa-arrows-v' || areaArrow.className === 'fa fa-long-arrow-down'){
    areaArrow.className = 'fa ';
    areaArrow.className += 'fa-long-arrow-up';
    let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => Number(rowA.cells[4].innerHTML) > Number(rowB.cells[4].innerHTML) ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
    createRowsColor(sortedRows);
    
  } else if(areaArrow.className === 'fa fa-long-arrow-up'){
    areaArrow.className = 'fa ';
    areaArrow.className += 'fa-long-arrow-down';
    let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => Number(rowA.cells[4].innerHTML) < Number(rowB.cells[4].innerHTML) ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
    createRowsColor(sortedRows);
  }
}

function createRowsColor(sortedRows){
  for(let i=0; i<sortedRows.length; i++){
    sortedRows[i].addEventListener('mousemove', function() {
      sortedRows[i].style.backgroundColor = 'lightgray';
    });
    sortedRows[i].addEventListener('mouseout', function() {
      if(i%2===0){
        sortedRows[i].style.backgroundColor = '#ededed';
      } else{
        sortedRows[i].style.backgroundColor = 'white';
      }
    });
    if(i%2===0){
      sortedRows[i].style.backgroundColor = '#ededed';
    } else{
      sortedRows[i].style.backgroundColor = 'white';
    }
  }
}

