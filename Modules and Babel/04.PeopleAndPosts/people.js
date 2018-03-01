 class Person{
     constructor(name, age){
         this.name = name;
         this.age = age;

     }
     addToSelector(selector){
         let personDiv = $('<div>').addClass(`person ${this.name}`);
         let nameParagraph = $('<p>').addClass(`name`).text(`${this.name}`);
         let ageParagraph = $('<p>').addClass(`age`).text(`${this.age}`);
         let postDiv =  $('<div>').addClass(`posts ${this.name}`);
         personDiv
             .append(nameParagraph)
             .append(ageParagraph)
             .append(postDiv);
         $(selector).append(personDiv);
     }
 }
 module.exports = Person;