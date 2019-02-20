/**
 * MEDIATORS INTERFACE WITH COLLEAGUES (mediated objects)
 *
 * socket.io uses mediators
 *
 *
 */

 const User = function(name){
   this.name = name
   this.chatroom = null;
 }

 User.prototype = {
   send: function(msg, to){
    this.chatroom.send(msg, this, to);
   },
   receive: function(msg, from){
    console.log(`${from.name} to ${this.name}: ${msg}`);
   }
 }

 const Chatroom = function(){
   let users = {}; //list of users
   return {
     register: function(user){
      users[user.name] = user;
      user.chatroom = this;
     },
     send: function(msg, from, to){
      if(to){
        //single user
        to.receive(msg, from);
      } else {
        //mass message
        for(key in users ) {
          if(users[key] !== from) {
            users[key].receive(msg, from);
          }
        }
      }
     }
   }
 }

 const edge = new User('Edge');
 const dani = new User('Dani');
 const mario = new User('Mario');
 const marvin = new User('Marvin');

 const chatroom = new Chatroom();

 chatroom.register(edge);
 chatroom.register(dani);
 chatroom.register(mario);
 chatroom.register(marvin);

 edge.send('Sup Bae', dani);
 dani.send('Sup Bae 2 you', edge);
 mario.send('Oye Pinches');