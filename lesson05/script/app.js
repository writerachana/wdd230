// Decalres function
function addButton(){
	function addChapter(){
        // Declares variables with object element. 
		const list = document.querySelector('.list'); 
		const input = document.querySelector('#favchap');
		const button = document.createElement('button'); 
		const item = document.createElement('li');
		
		// Creates a list when user input something to li
		item.innerText = input.value; 
		
		// Creates an X button for deletion
		button.innerText = '❌'; 
		
		// Deletes an element from the parent list
		button.addEventListener('click', x => {button.parentElement.remove()});
		
		// Adds what the user input to the list
		item.appendChild(button); 
		
		// Adds what the user input to the list with an X button
		list.appendChild(item); 
		
		// Makes sure the input is empty 
		input.value = ''; 
	
		// Sets the element as the active element in the current document
		input.focus(); 
	}
	
	// Retuns the element within the document for button and links with a click
	document.querySelector('button').addEventListener('click',addChapter)
}

// Initiates the function addButton();
function init(){
    addButton();
}
// Registers the argument of the content
window.addEventListener('DOMContentLoaded', init);


//Last modified
let today1 = new Date();
document.querySelector("#currentyear").textContent=today1.getFullYear()
document.querySelector("#lastmodified").textContent=document.lastModified



// const list = document.querySelector('.list'); 
// const input = document.querySelector('#favchap');
// const button = document.createElement('button');

// button.addEventListener('click', ()=>{

// 	if (input.value ==''){
// 		input.focus()
// 		return
// 	}
// 	let listitem = document.createElement('li');
// 	let deletebutton = document.createElement("button");
// 	listitem.textContent = input.value
// 	deletebutton.textContent = '❌'
// 	listitem.appendChild(deletebutton)
// 	list.appendChild(listitem)
// 	deletebutton.addEventListener('click', ()=>{
// 		listitem.remove()
// 	})
// 	input.focus()
// 	input.value = ''


	
// } )