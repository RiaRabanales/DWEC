/*
Prototipus
Tots els objectes hereden del seu prototipus.
El prototipus d’un objecte és accessible a través de la propietat prototype .
Puc afegir propietats i mètodes a un prototip, i tots els objectes que he creat amb el
constructor d’aquell objecte heredaran les propietats i els mètodes del prototip.
*/


// Constructor function for Person objects
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }

  
  // Create a Person object
var trump = new Person("Donald", "Trump", 74);
var biden = new Person("Joe", "Biden", 78);


//Afegir una propietat al prototip
Person.prototype.country = "US";

//Afegir un mètode al prototip
Person.prototype.getFullName = function() { return `${this.firstName} ${this.lastName}`}

console.log( ` ${ trump.getFullName( )} is from ${ trump.country }`);


/*
THIS:
1. En el context global d’un script, this fa referència a l’objecte global [object Window], per exemple en:
this.getElementById(“id”)
2. A dins d’una funció , this fa referència a l’objecte global. Si empram strict mode , dins una funció this no estaria definit!
3. En el context del mètode d’un objecte , this fa referència a l’’objecte
4. En una funció que sigui l’event handler d’un Event , this es refereix a l’element sobre el qual ha actuat l’event
○ Excepció: si empram arrow functions com event handlers → convé no emprar arrow functions en aquest context, per evitar confusions.
*/