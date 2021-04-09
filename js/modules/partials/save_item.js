import {
  itemList,
  completedItemsList
} from './elements.js'

export function save() {
	localStorage.setItem('completed-items', completedItemsList.innerHTML);
	localStorage.setItem('item-list', itemList.innerHTML);
}