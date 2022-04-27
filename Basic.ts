//primitive       :number,string,boolean
//more complextype:Array,Objects
//function type   :parameter

let names:string;     //primitive
  names='Henry';
  console.log(names,"name")

let age:number;
  age=23;
  console.log(age,"age")

let male:boolean;
    male=true;
    console.log(male,"male")

let likes:string[];   //complex type.Array
    likes =['Songs','Plays','Sleep'];
    console.log(likes)

let person:{     //Objects
  name:string;
  age:number;
};
     person={
      name:'Henry',
      age:23
    }
    console.log(person)

let emp:string|number;   //Type inference
     emp='Henry',10;
     console.log(emp,"emp")

type car={    //Aliases
    name:string;
    speed:Number;
};
let cars:car;
   cars={
       name:'BMW',
       speed:350
   }
console.log(cars,"cars")