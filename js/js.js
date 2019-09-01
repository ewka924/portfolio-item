

const table = document.querySelectorAll(".itemContainer");
const buttons = document.querySelectorAll('input[type = "button"]');
const arrFromTable = [...table];

console.log(arrFromTable);


function displayNone(){

	for(var i=0; i<arrFromTable.length; i++){
			arrFromTable[i].style.display = "none";
			arrFromTable[i].style.animation = "anim 1s";
			
		}
}
function sortItems(){
	
	let flag = false;
	
	if(this.value === "ALL"){
		for(var i=0; i<arrFromTable.length; i++){
			arrFromTable[i].style.display = "block";
			arrFromTable[i].style.animation = "anim 1s";
			flag = !flag;
		}
	}else{
		for(var i=0; i<arrFromTable.length; i++){
			
			if(arrFromTable[i].dataset.category === this.value){
				
				
				arrFromTable[i].style.display = "block";
				arrFromTable[i].style.animation = "anim 1s";
				flag = !flag;
			}else{
				arrFromTable[i].style.animation = "anim2 0.3s";
				arrFromTable[i].style.display = "none";
				flag = !flag;
				
			}
		}
	}
	
}















buttons.forEach(button => button.addEventListener('click' , displayNone));
buttons.forEach(button => button.addEventListener('click' , sortItems));




function showData(){
	const category = this.dataset.category;
	console.log(category);
}


table.forEach(item => item.addEventListener('click' , showData));


