// function changedArr(arr){
//     return arr.map((a)=> a +5);
// }
// console.log(changedArr([10, 20, 30, 40, 50] ))
// async function performActions() {
//     for (let i = 0; i <= 100; i += 5) {
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         console.log(`Выполнение действий на шаге ${i}`);
//     }
// }

// performActions();

// function submitForm(){
//     let infoUser = document.querySelector('.input-name').value
//     console.log(`имя:${infoUser}`)
// }
// submitForm()
// function Animal(name){
//     this.name = name;
// }
// Animal.prototype.sayHello = ()=>{
//     console.log(this.name);

// }
// function Dog(name,breed){
//     Animal.call(this,name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.Bark = () =>{
//     console.log('woof я собака');
// }

// const myDog = new Dog('buddy','Labrador')
// myDog.Bark()