//numero => number, texto=>string,objeto={name:string,age:number}
//Tipos basicos

let isActive:boolean;
isActive=true;
console.log("tipo: ",typeof isActive)

let total:number = 150;
let myName:string= 'Tiago'
console.log("tipo: ",typeof isActive, total, myName)


//inferencia de tipos

let isComplete = false;
let amount =200;
let username = 'John'


console.log(isComplete,amount,username)

let money;
console.log(money)
money=200;

//Arrays e Objetos
let numbers:number[] = [1,2,3]
let stringArray :string[] = ['a','b','c']
console.log(numbers,stringArray)


let user:{name:string,age:number} = {
    name:'TesteName',
    age:50
}

//Tuplas
//[n,n,n]

let rgb: [number,number,number] = [255,0,0]

console.log(rgb)

//Funçoes
function greet(nome:string):string{
    return `Olá, ${nome}`
}

console.log(greet('Tiago'))

//enum 
enum Direction{
    Up,
    Down,
    Left,
    Right,
    Diagonal
}


function getDirectionMessage(direction:Direction):string{
    switch(direction){
        case Direction.Up:
            return "Movendo para cima"
        case Direction.Down:
            return "Movendo para baixo"  
        case Direction.Left:
            return "Movendo para esquerda"    
        case Direction.Right:
            return"Movendo para direita"
        case Direction.Diagonal:
            return"Movendo para diagonal"
        default:
            return"Ficou parado"

        }
}

console.log(getDirectionMessage(Direction.Up))