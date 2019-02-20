/**
 *  FACTORY METHOD:
 *  - Way of creating an interface for creating objects.
 *  - subclasses can define which classes to instantiate
 *  - used for managing and maintining and manipulating different collections of objects
 *  - Users with different roles/permissions for example...
 *
 */

 // CREATE A 'member' factory that takes a 'member type' and creates a new object based on input.

 function MemberFactory(){
   this.createMember = function(name, type){
    let member;

    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }
    member.type = type;

    member.define = function(){
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
   }

 }

 const SimpleMembership = function(name) {
   this.name = name;
   this.cost = '$5';
 }
 const StandardMembership = function(name) {
   this.name = name;
   this.cost = '$15';
 }
 const SuperMembership = function(name) {
   this.name = name;
   this.cost = '$25';
 }

 const members = [];
 const factory = new MemberFactory();

 members.push(factory.createMember('Edge Q', 'simple'));
 members.push(factory.createMember('Dani Q', 'super'));
 members.push(factory.createMember('Mario M', 'standard'));
 members.push(factory.createMember('Jose Q', 'simple'));

 console.log(members);

 members.forEach(member => member.define());