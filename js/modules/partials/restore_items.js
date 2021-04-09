export function restoreItems(){
  var restoreItemList = localStorage.getItem('item-list');
  var restoreCompletedList = localStorage.getItem('completed-items');

  if (restoreItemList && restoreCompletedList) {
    itemList.innerHTML = restoreItemList;
    completedItemsList.innerHTML = restoreCompletedList;
  }
}
