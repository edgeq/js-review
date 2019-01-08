/**
 * DATE + TIME
 */

 let val;
 const today = new Date();
 let birthday = new Date('6-27-1986 11:35:00');
 birthday = new Date('June 27, 1986 11:35:00');
 birthday = new Date('6/27/1986 11:35:00');
 
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(13);
birthday.setFullYear(1988);
birthday.setHours(14);
birthday.setMinutes(05);
birthday.setSeconds(58);


  console.log(birthday);
  console.log(typeof birthday);