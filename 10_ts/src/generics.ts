//generics
// TS -> tipar
// f-> tipo x
// f-> tipo y ..erro
//f -> tipo G -> x,y

function getArray<T>(items:T[]):T[]{
    return new Array<T>().concat(items)
}

let numberArray =getArray([1,2,3,4]);
let stringArray = getArray(['Joana','Tiago','Sousa'])

console.log(numberArray,stringArray)


//restringir tipos
function merge<T extends object,U extends object>(obj1:T,obj2:U){
    return {...obj1,...obj2}
}

const resultMerge = merge({name:"Tiago",sobrenome:"Sousa"},{job:"Programador",isActive:true, idade:23})
console.log(resultMerge)


// Utilitarios de tipo

type Todo = {
    title:string;
    description:string;
    completed:boolean;
}

function updateTodo(todo:Todo,fieldsToUpdate:Partial<Todo>){
    return{...todo,...fieldsToUpdate}
}

const meuTodo:Todo= {
    title:"teste",
    description:"Alguma coisa",
    completed:true
}

const todoAtualizado= updateTodo(meuTodo,{completed:true,description:"testePartial"})
console.log(todoAtualizado)

// Somente Leitura

const meuSegundoTodo:Readonly<Todo>= {
    title:"teste",
    description:"Alguma coisa123213",
    completed:true
}

//meuSegundoTodo.title="teste" -> nao dá para mudar valores pois é readonly
console.log(meuSegundoTodo)