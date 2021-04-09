var main = document.querySelector('#main');
var addBtn = document.querySelector('#add');
var itemList = document.querySelector('#item-list');
var itemName = document.querySelector('#item-name');
var completedItemsList = document.querySelector('#completed-items');

///////////////////// Add item /////////////////////
addBtn.addEventListener('click', addItem);

function addItem(e) {
	e.preventDefault();
	if (itemName.value.length < 1) return;

	var createLi = document.createElement('li');

	createLi.className = 'item';
	createLi.innerHTML = `
    
    <label>
        <img src="./img/Tick.svg" class="checkbox"></img>
        <h4>${itemName.value}</h4>
    </label>
    <img src="./img/Delete.svg" class="delete" />
    
    `;

	itemList.appendChild(createLi);

	itemName.value = '';

	save();
}
/////////////////// Remove item ////////////////////
itemList.addEventListener('click', removeItem);
completedItemsList.addEventListener('click', removeItem);

function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		var li = e.target.parentElement;
		e.target.parentElement.parentElement.removeChild(li);

		save();
	}
}
///////////////// Complete item ////////////////////
itemList.addEventListener('click', completeItem);
completedItemsList.addEventListener('click', completeItem);

function completeItem(e) {
	if (e.target.classList.contains('checkbox')) {
		var item = e.target.parentElement.parentElement;
		var beforeLi = itemList.firstElementChild;
		var beforeCmLi = completedItemsList.firstElementChild;

		if (item.classList.contains('completed')) {
			itemList.insertBefore(item, beforeLi);
			item.classList.remove('completed');
			e.target.setAttribute('src', './img/Tick.svg');
			save();
		} else {
			e.target.setAttribute('src', './img/Complited Tick.svg');
			item.classList.add('completed');
			completedItemsList.insertBefore(item, beforeCmLi);
			save();
		}
	}
}
///////////////////// Save item //////////////////////
function save() {
	localStorage.setItem('completed-items', completedItemsList.innerHTML);
	localStorage.setItem('item-list', itemList.innerHTML);
}
/////////////// Restor saved items //////////////////
var restoreItemList = localStorage.getItem('item-list');
var restoreCompletedList = localStorage.getItem('completed-items');

if (restoreItemList && restoreCompletedList) {
	itemList.innerHTML = restoreItemList;
	completedItemsList.innerHTML = restoreCompletedList;
}
