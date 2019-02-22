// STORAGE CONTROLLER

// ITEM CONTROLLER
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id:0, name: 'Steak', calories: 1200},
      // {id:1, name: 'Cookie', calories: 400},
      // {id:2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // public methods for ItemCtrl
  return {
    logData: function(){
      return data;
    },
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // create id
      if(data.items.length > 0) {
        ID = data.items[data.items.length -1].id + 1;
      } else {
        ID = 0;
      }
      //calories to number
      calories = parseInt(calories);

      // create new item
      newItem = new Item(ID, name, calories);
      // add to Items Array
      data.items.push(newItem);

      return newItem;

    }
  }
})();
// UI CONTROLLER
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }

  // public methods for UICtrl
  return {
    getSelectors: function() {
      return UISelectors;
    },
    populateItems: function(items){
      let html = '';
      items.forEach(function(item){
        html += `
        <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
        `;
      });
      // INSERT LIST ITEMS
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item){
      // show list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // create li element
      const li = document.createElement('li');
      // add class
      li.className = 'collection-item';
      // add id
      li.id = `item-${item.id}`;
      // add html
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      // insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '',
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    }
  }
})();

// APP CONTROLLER
const App = (function(ItemCtrl, UICtrl){
  //Load Event Listeners
  const loadEventListeners = function(){
    //Get UISelectors
  const UISelectors = UICtrl.getSelectors();
  // Add item event
  document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);


  }
  // Add item submit
  const itemAddSubmit = function(e){
    e.preventDefault();
    // Get Form Input from UICtrl
    const input = UICtrl.getItemInput();
    // Check for name and calorie input
    if(input.name !== '' && input.calories !== '' ) {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add Item to UI list
      UICtrl.addListItem(newItem);

      // clear fields
      UICtrl.clearInput();
    }

  }

  // public methods for App
  return {
    init: function(){
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      // CHECK IT ANY ITEMS
      if(items.length === 0 ){
        UICtrl.hideList();
      } else {
        //populate list with items
        UICtrl.populateItems(items);
      }

      // Load Event Listenters
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);

App.init();
