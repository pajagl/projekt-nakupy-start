console.log('funguju!');

const renderShoppingList = (items) => {
    const shoppingList = document.querySelector('.shoplist__items');
    shoppingList.innerHTML = items.map((item) => ListItem(item)).join('');
  };
  
  fetch('https://nakupy.kodim.app/api/sampleweek/mon')
    .then((response) => response.json())
    .then((data) => renderShoppingList(data.result.items));
    
  const item1 = {
    product: 'Rohlíky',
    amount: '10',
    unit: 'ks',
    done: true,
  };

  const ListItem = (item) => {
    let tickClass = '';
    if (item.done) {
      tickClass = ' btn-tick--on';
    }
  
    return `
      <div class="list-item">
        <button class="icon-btn btn-tick${tickClass}"></button>
        <div class="list-item__body">
          <div class="list-item__product">${item.product}</div>
          <div class="list-item__amount">${item.amount} ${item.unit}</div>
        </div>
      </div>
    `;
  };