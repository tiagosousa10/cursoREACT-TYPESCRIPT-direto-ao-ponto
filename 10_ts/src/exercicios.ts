//ex.1

interface Vehicle{
    make:string,
    model:string,
    year:number
}

function describeVehicle(vehicle:Vehicle):void{
    console.log(`O veiculo é da marca: ${vehicle.make} , o modelo é ${vehicle.model}
e foi fabricado em ${vehicle.year}`)
}

const myCar:Vehicle ={
    make:"Porshe",
    model:"GT3",
    year:2020,
}

describeVehicle(myCar)


//ex. 2

function firstElement<T>(array:T[]):T{
    return array[0]
}

const newNumber = [69,2,3,4]
console.log(firstElement(newNumber))

const fruits = ['banana','maça','pessego']
console.log(firstElement(fruits))

//ex.   3

type Product = {
    id:number,
    name:string,
    price:number
}

function freezeProduct(product:Product):Readonly<Product>{
    return  Object.freeze(product);
}

const bread:Product={id:3,name:"Pão",price:0.77}
const breadFreeze = freezeProduct(bread)

console.log(breadFreeze)

function updateProductPrice(product:Product, newPrice:Partial<Product>):Product{
    return{...product,...newPrice}
}

const updateBread= updateProductPrice(bread,{price: 3.49})

console.log(updateBread)


