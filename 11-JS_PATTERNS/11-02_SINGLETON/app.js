/**
 *  SINGELTON PATTERN: Like a module pattern, it is an
 *  immediate anonymous function
 *
 *  Can only return one instance of an object at a time.
 *
 *  Repeated calls to the constructor will return the same instance of an object.
 *
 *  Pattern maintains a private reference...
 *
 *  Doesn't maintain encaspulation
 *  Harder to debug...
 *
 */

 const Singleton = (function(){
   let instance;

   function createInstance(){
     const object = new Object({name: 'Edge', status: 'awesome'});
     return object;
   }

   return {
     getInstance: function(){
       if(!instance) {
         instance = createInstance();
       }
       return instance;
     }
   }

 })();

 const instanceA = Singleton.getInstance();
 const instanceB = Singleton.getInstance();

 console.log(instanceA === instanceB);
 console.log(instanceA);