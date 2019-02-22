// STORAGE CONTROLLER
const StorageCtrl = (function(){
  return {
    storeItem: function(item){
      let items;
      // check for items in LS
      if(localStorage.getItem('items') === null){
        items = [];
        //push new item into items[]
        items.push(item);
        // set LS
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        //push new item into items[]
        items.push(item);
        //reset local storage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemFromStorage: function(){
      if(localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function(updatedItem){
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index){
        if(updatedItem.id === item.id){
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));

    },
    deleteItemFromStorage: function(id) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index){
        if(id === item.id){
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function() {
      localStorage.removeItem('items');
    }
  }
})();
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
    // items: [
    //   // {id:0, name: 'Steak', calories: 1200},
    //   // {id:1, name: 'Cookie', calories: 400},
    //   // {id:2, name: 'Eggs', calories: 300}
    // ],
    items: StorageCtrl.getItemFromStorage(),
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

    },
    getTotalCalories: function(){
      let total = 0;
      // loop through items and add calories
      data.items.forEach(function(item){
        total += item.calories;
      });
      // set total calories in data structure
      data.totalCalories = total;

      return data.totalCalories;
    },
    getItemById: function(id) {
      let found = null;
      //Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      //calories to number
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      // get ids
      ids = data.items.map(function(item){
        return item.id;
      });

      //get index
      const index = ids.indexOf(id);

      //remove item
      data.items.splice(index, 1);

    },
    clearAllItems: function(){
      data.items = [];
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    }
  }
})();
// UI CONTROLLER
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: ".total-calories",
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    editList: '.secondary-content',
    listItems: 'li',
    clearBtn: '.clear-btn'
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
    updateListItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //turn node list into array
      listItems = Array.from(listItems);
      listItems.forEach(function(listItem){
        const itemID = listItem.getAttribute('id');
        if(itemID === `item-${item.id}`){
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        `;
        }
      })
    },
    deleteListItem: function(id){
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    removeItems: function(){
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // Turn node list into array
      listItems = Array.from(listItems);
      listItems.forEach(function(item){
        item.remove();
      })
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '',
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name,
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();

    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    }
  }
})();

// APP CONTROLLER
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
  //Load Event Listeners
  const loadEventListeners = function(){
    //Get UISelectors
  const UISelectors = UICtrl.getSelectors();
  // Add item event
  document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  // disable submit on enter
  document.addEventListener('keypress', function(e){
    if(e.keyCode === 13 || e.which === 13){
      e.preventDefault()
      return false;
    }
  })
  // Edit icon click event
  document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
  // update item event
  document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
  // Back Button Event
  document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
  // Delete Button Event
  document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
  // Clear Button Event
  document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);



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

      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total calories toUI
      UICtrl.showTotalCalories(totalCalories);
      //Store in localStorage
      StorageCtrl.storeItem(newItem);
      // clear fields
      UICtrl.clearInput();
    }

  }

  // update item edit click
  const itemEditClick = function(e) {
    e.preventDefault();
    if (e.target.classList.contains('edit-item')){
      // Get list item id
      const listId = e.target.parentNode.parentNode.id;
      const listIdArr = listId.split('-'); // split the string into an array
      const itemId = parseInt(listIdArr[1]); //get the actual id #
      const itemToEdit = ItemCtrl.getItemById(itemId);

      //set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // add item to form
      UICtrl.addItemToForm();
    }
  }

  const itemUpdateSubmit = function(e) {
    e.preventDefault();
    // Get item input
    const input = UICtrl.getItemInput();
    //update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    // Update UI
    UICtrl.updateListItem(updatedItem);
    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories toUI
    UICtrl.showTotalCalories(totalCalories);
    // Update Local Storage
    StorageCtrl.updateItemStorage(updatedItem);

    // clear fields
    UICtrl.clearEditState();
  }

  const itemDeleteSubmit = function(e){
    e.preventDefault();
    // Get Current Item
    const currentItem = ItemCtrl.getCurrentItem();
    //delete from data structure
    ItemCtrl.deleteItem(currentItem.id);
    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);
    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories toUI
    UICtrl.showTotalCalories(totalCalories);
    //delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    // clear fields
    UICtrl.clearEditState();
  }

  const clearAllItemsClick = function(){
    //Delete all items from ItemCtrl
    ItemCtrl.clearAllItems();
    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total calories toUI
    UICtrl.showTotalCalories(totalCalories);
    // clear from local storage
    StorageCtrl.clearItemsFromStorage();
    // Remove from UI
    UICtrl.hideList();

  }

  // public methods for App
  return {
    init: function(){
      // Set initial state
      UICtrl.clearEditState();
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      // CHECK IT ANY ITEMS
      if(items.length === 0 ){
        UICtrl.hideList();
      } else {
        //populate list with items
        UICtrl.populateItems(items);
      }
           // get total calories
           const totalCalories = ItemCtrl.getTotalCalories();
           // add total calories toUI
           UICtrl.showTotalCalories(totalCalories);

      // Load Event Listenters
      loadEventListeners();
    }
  }

})(ItemCtrl, StorageCtrl, UICtrl);

App.init();
