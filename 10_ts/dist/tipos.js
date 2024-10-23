//numero => number, texto=>string,objeto={name:string,age:number}
//Tipos basicos
let isActive;
isActive = true;
console.log("tipo: ", typeof isActive);
let total = 150;
let myName = 'Tiago';
console.log("tipo: ", typeof isActive, total, myName);
//inferencia de tipos
let isComplete = false;
let amount = 200;
let username = 'John';
console.log(isComplete, amount, username);
let money;
console.log(money);
money = 200;
//Arrays e Objetos
let numbers = [1, 2, 3];
let stringArray = ['a', 'b', 'c'];
console.log(numbers, stringArray);
let user = {
    name: 'TesteName',
    age: 50
};
//Tuplas
//[n,n,n]
let rgb = [255, 0, 0];
console.log(rgb);
//Funçoes
function greet(nome) {
    return `Olá, ${nome}`;
}
console.log(greet('Tiago'));
//enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Diagonal"] = 4] = "Diagonal";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        case Direction.Diagonal:
            return "Movendo para diagonal";
        default:
            return "Ficou parado";
    }
}
console.log(getDirectionMessage(Direction.Up));
