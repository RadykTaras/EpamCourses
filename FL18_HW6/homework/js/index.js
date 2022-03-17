function visitLink(path) {
	
	let	numPage1Views = localStorage.getItem('Page1') !== null ? Number(localStorage.getItem('Page1')): 0,
			numPage2Views = localStorage.getItem('Page2') !== null ? Number(localStorage.getItem('Page2')): 0,
			numPage3Views = localStorage.getItem('Page3') !== null ? Number(localStorage.getItem('Page3')): 0;
			
	if (path === 'Page1'){
		numPage1Views += 1;
		localStorage.setItem('Page1',numPage1Views.toString());
	} else if (path === 'Page2'){
		numPage2Views += 1;
		localStorage.setItem('Page2',numPage2Views.toString());
	} else {
		numPage3Views += 1;
		localStorage.setItem('Page3',numPage3Views.toString());
	}
}

function viewResults() {
	
  let	i = 0,
		li = '',
		arrList = ['Page3','Page1','Page2'];
	document.querySelector('.js-List') ? document.querySelector('.js-List').remove() : '';
	
	for(i = 0; i < arrList.length; i++){
		let value = localStorage.getItem(arrList[i]) !== null ? localStorage.getItem(arrList[i]): 0;
		li += `<li>You visited ${arrList[i]} ${value} time(s)</li>`;
	}
	
	let countList = '<ul class="js-List">' + li +'</ul>';
	document.querySelector('#content').innerHTML += countList;
	localStorage.clear();
}
