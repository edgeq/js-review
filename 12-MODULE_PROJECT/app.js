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
      {id:0, name: 'Steak', calories: 1200},
      {id:1, name: 'Cookie', calories: 400},
      {id:2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // public methods
  return {
    logData: function(){
      return data;
    },
    getItems: function(){
      return data.items;
    }
  }
})();
// UI CONTROLLER
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list'
  }

  // public methods
  return {
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
    }
  }
})();

// APP CONTROLLER
const App = (function(ItemCtrl, UICtrl){


  // public methods
  return {
    init: function(){
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      //populate list with items
      UICtrl.populateItems(items)
    }
  }

})(ItemCtrl, UICtrl);

App.init();
