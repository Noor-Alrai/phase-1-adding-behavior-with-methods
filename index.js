// Your code here
class Cat{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak () {
        return `${this.name} says meow!`
     }
}
let myCat = new Cat("rose" , "female");
console.log(myCat.speak())
class Dog{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
       speak(){
        return `${this.name} says woof!`
 }
}
class Bird{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(sex){
        if(this.sex === "male"){
            return `It's me! ${this.name}, the parrot!`
        }
        else{ return `${this.name} says squawk!`}
       
     }


}
let bird2= new Bird ("Mable", "female");
console.log(bird2.speak())