'use strict';

// test
const product1 = { name: 'koszula', price: 10 };
const product2 = { name: 'marynarka', price: 20 };
const discount = 10;
let discountEnable = false;

// dodawanie produktów do koszyka

const itemsTableContainer = document.querySelector('#items');
let counter = 1;

function addItem(item) {
  itemsTableContainer.innerHTML += `<tr onmouseover="markBg()" onmouseout="unMarkBg()">

<td>${counter++}</td>
<td>${item.name}</td>
<td>1</td>
<td>${item.price}</td>
</tr>
`;
}

addItem(product1);
addItem(product2);

function markBg() {
  window.event.target.closest('tr').classList.add('marked');
}
function unMarkBg() {
  window.event.target.closest('tr').classList.remove('marked');
}

// cena całkowita

function calculatePrice() {
  const total = Number(product1.price) + Number(product2.price);

  let totalWithDiscount = total;
  if (discountEnable) {
    totalWithDiscount = total - discount;
  }

  document.querySelector('#total-price').innerHTML = totalWithDiscount;
}

// dodawnia znizki przy checkobx,

function addDiscount(e) {
  discountEnable = e.target.checked;

  if (discount > 0) {
    document.querySelector('#discount-amount').innerHTML = -discount;
    document.querySelector('#discount').classList.toggle('hidden');
  }
  calculatePrice();
}

document.querySelector('#add-discount').addEventListener('click', addDiscount);

calculatePrice();
