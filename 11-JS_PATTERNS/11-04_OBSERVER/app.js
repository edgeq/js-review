/**
 *  OBSERVER PATTERN - subscribe and unsubsscribe from events or functionality...
 *
 *  - used to notify DOM of certain elements to be updated
 *  - Angular uses this pattern.
 *
 *  PRoject: create buttons that allow uys to subscribe and unsubscribe with click.
 */

 function EventObserver() {
   this.observers = [];
 }

 EventObserver.prototype = {
   subscribe: function(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
   },
   unsubscribe: function(fn){
     this.observers = this.observers.filter(function(item){
       if(item !== fn){
        return item;
       }
     });
     console.log(`You are unsubscribedfrom ${fn.name}`);
   },
   fire: function(){
     this.observers.forEach(function(item){
      item.call();
     })
   }
 }

 const click  = new EventObserver();

 // Event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurMilliseconds);
})
document.querySelector('.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurMilliseconds);
})
document.querySelector('.sub-s').addEventListener('click', function(){
  click.subscribe(getCurSeconds);
})
document.querySelector('.unsub-s').addEventListener('click', function(){
  click.unsubscribe(getCurSeconds);
})


document.querySelector('.fire').addEventListener('click', function(){
  click.fire();
})

//CLICK HANDLER SUBSCRIBE FUNCTIONS
const getCurMilliseconds = function(){
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}