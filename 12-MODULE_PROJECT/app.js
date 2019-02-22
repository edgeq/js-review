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
    listItems: 'li'
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
const App = (function(ItemCtrl, UICtrl){
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

    // clear fields
    UICtrl.clearEditState();
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

})(ItemCtrl, UICtrl);

App.init();
