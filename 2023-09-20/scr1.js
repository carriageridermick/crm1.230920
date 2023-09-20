//Kintamieji
let int1 = 20;
let int2 = 5;
let string1 = "Hi";
let string2 = "There";
let boolean = true;
let other = null;
let other2 = undefined;
let object1 = {
    age: 23,
    occupation: "clinic"   
};
let object2 = {
    name: "Beck",
    license: "Second"
};
let objects = {};
let arrayofnumbers = [1,0,9,3,4,3];
let arrayofstrings = ["Jim", "Stanley", "Pete"];

//Sujungimai
let numbers = int1 - int2;                                  console.log(numbers);
let stringconcat = string1 + string2;                       console.log(stringconcat);
Object.assign(objects, object2, object1);                   console.log(objects);
let arrayconcat = [...arrayofnumbers, ...arrayofstrings];   console.log(arrayconcat);
