// Imports
import {
  itemList,
  itemName,
} from './elements.js';

import { save } from './save_item.js';

// Add Item Function //////////////
export function addItem(e) {
  e.preventDefault();

  if (itemName.value.length < 1) return;

  const createLi = document.createElement('li');

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
