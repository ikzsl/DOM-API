const values = [9, 6, 13, 11, 2, 15, 14, 8, 12, 10, 5, 4, 7, 1, 3];

const generatePlayingField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 4; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 4; j += 1) {
      const cell = row.insertCell();
      cell.className = 'p-3';
      if (i === 3 && j === 3) {
        cell.classList.add('table-active');
      } else {
        cell.textContent = values[i + (j * 4)];
      }
    }
  }
  return tableEl;
};

let gemPuzzle = document.body.querySelector('.gem-puzzle');
let playingField = generatePlayingField();
gemPuzzle.append(playingField);
let itemsList = gemPuzzle.querySelectorAll('.p-3');
let active = playingField.querySelector('.table-active');

const replace = (q) => {
  //не тыкать в дырку
  if (q === active) {
    return;
  }

  if (Math.abs(q.cellIndex - active.cellIndex) > 1
    || Math.abs(q.parentNode.rowIndex - active.parentNode.rowIndex) > 1) {
    return;
  }

  if (q.cellIndex - active.cellIndex !== 0 && q.parentNode.rowIndex - active.parentNode.rowIndex !== 0) {
    return;
  }


  let buffer = q;
  q = active;
  q.classList.remove('table-active');
  q.append(buffer.firstChild);
  active = buffer;
  active.classList.add('table-active');
};

itemsList.forEach((el) => {
  el.addEventListener('click', () => replace(el));
});
