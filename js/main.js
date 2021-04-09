import {
  addBtn,
  addItem,
  itemList,
  removeItem,
  completeItem,
  restoreItems,
  completedItemsList,
} from './modules/index.js';

function main() {
  restoreItems();
  addBtn.addEventListener('click', addItem);
  itemList.addEventListener('click', removeItem);
  itemList.addEventListener('click', completeItem);
  completedItemsList.addEventListener('click', removeItem);
  completedItemsList.addEventListener('click', completeItem);
}

window.addEventListener('DOMContentLoaded', main);
