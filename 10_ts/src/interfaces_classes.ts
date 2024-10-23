//definindo interfaces
//tabelas => entidades: Utilizador -> nome,email,senha
//back-end => frond-end
//Interfaces => mapear todos os campos

interface User{
    id:number;
    name:string;
    isActive:boolean;
}

//utilizando interface

const myUser:User ={
    id:1,
    name:"tiago",
    isActive:false
}

console.log(myUser)

//Classes

class Person implements User{
    id:number;
    name:string;
    isActive: boolean;

    constructor(id:number,name:string, isActive:boolean) {
        this.id=id;
        this.name=name;
        this.isActive=this.isActive;
    }

    greet(isNew:boolean){
        console.log(`Metodo dentro da classe Person     -teste+ nome= ${this.name}`)
        if(isNew){
            console.log('Sou novo por aqui!')
        }else{
            console.log('NAO sou novo.')
        }
    }

    

}

const personData = new Person(1,"teste",true)
console.log(personData)
personData.greet(false)