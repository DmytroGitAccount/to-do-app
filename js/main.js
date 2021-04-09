import {
  addBtn,
  addItem,
  itemList,
  removeItem,
  completeItem,
  restoreItems,
  completedItemsList,
} from './modules/index.js';

/// //////////// Restore saved items ////////////////
restoreItems();
/// ////////////////// Add item /////////////////////
addBtn.addEventListener('click', addItem);

/// //////////////// Remove item ////////////////////
itemList.addEventListener('click', removeItem);
completedItemsList.addEventListener('click', removeItem);

/// ////////////// Complete item ////////////////////
itemList.addEventListener('click', completeItem);
completedItemsList.addEventListener('click', completeItem);
