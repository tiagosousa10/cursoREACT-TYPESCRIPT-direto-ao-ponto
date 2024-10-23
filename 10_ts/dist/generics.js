//generics
// TS -> tipar
// f-> tipo x
// f-> tipo y ..erro
//f -> tipo G -> x,y
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['Joana', 'Tiago', 'Sousa']);
console.log(numberArray, stringArray);
//restringir tipos
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const resultMerge = merge({ name: "Tiago", sobrenome: "Sousa" }, { job: "Programador", isActive: true, idade: 23 });
console.log(resultMerge);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const meuTodo = {
    title: "teste",
    description: "Alguma coisa",
    completed: true
};
const todoAtualizado = updateTodo(meuTodo, { completed: true, description: "testePartial" });
console.log(todoAtualizado);
// Somente Leitura
const meuSegundoTodo = {
    title: "teste",
    description: "Alguma coisa123213",
    completed: true
};
//meuSegundoTodo.title="teste" -> nao dá para mudar valores pois é readonly
console.log(meuSegundoTodo);
