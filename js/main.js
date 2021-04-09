import {
  addBtn,
	addItem,
  itemList,
	removeItem,
	completeItem,
  completedItemsList,
} from './modules/index.js'

///////////////////// Add item /////////////////////
addBtn.addEventListener('click', addItem);

/////////////////// Remove item ////////////////////
itemList.addEventListener('click', removeItem);
completedItemsList.addEventListener('click', removeItem);

///////////////// Complete item ////////////////////
itemList.addEventListener('click', completeItem);
completedItemsList.addEventListener('click', completeItem);


