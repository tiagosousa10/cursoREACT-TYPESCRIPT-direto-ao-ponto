//definindo interfaces
//tabelas => entidades: Utilizador -> nome,email,senha
//back-end => frond-end
//Interfaces => mapear todos os campos
//utilizando interface
const myUser = {
    id: 1,
    name: "tiago",
    isActive: false
};
console.log(myUser);
//Classes
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = this.isActive;
    }
    greet(isNew) {
        console.log(`Metodo dentro da classe Person     -teste+ nome= ${this.name}`);
        if (isNew) {
            console.log('Sou novo por aqui!');
        }
        else {
            console.log('NAO sou novo.');
        }
    }
}
const personData = new Person(1, "teste", true);
console.log(personData);
personData.greet(false);
