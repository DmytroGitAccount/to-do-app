import { save } from './save_item.js';

export function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    e.target.parentElement.parentElement.removeChild(li);

    save();
  }
}
