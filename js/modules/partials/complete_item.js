import {
  itemList,
  completedItemsList,
} from './elements.js';

import { save } from './save_item.js';

export function completeItem(e) {
  if (e.target.classList.contains('checkbox')) {
    const item = e.target.parentElement.parentElement;
    const beforeLi = itemList.firstElementChild;
    const beforeCmLi = completedItemsList.firstElementChild;

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
