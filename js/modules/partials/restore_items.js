import {
  itemList,
  completedItemsList,
} from './elements.js';

export function restoreItems() {
  const restoreItemList = localStorage.getItem('item-list');
  const restoreCompletedList = localStorage.getItem('completed-items');

  if (restoreItemList && restoreCompletedList) {
    itemList.innerHTML = restoreItemList;
    completedItemsList.innerHTML = restoreCompletedList;
  }
}
