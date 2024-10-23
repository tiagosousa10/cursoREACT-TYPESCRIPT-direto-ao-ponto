//ex.1
function describeVehicle(vehicle) {
    console.log(`O veiculo é da marca: ${vehicle.make} , o modelo é ${vehicle.model}
e foi fabricado em ${vehicle.year}`);
}
const myCar = {
    make: "Porshe",
    model: "GT3",
    year: 2020,
};
describeVehicle(myCar);
//ex. 2
function firstElement(array) {
    return array[0];
}
const newNumber = [69, 2, 3, 4];
console.log(firstElement(newNumber));
const fruits = ['banana', 'maça', 'pessego'];
console.log(firstElement(fruits));
function freezeProduct(product) {
    return Object.freeze(product);
}
const bread = { id: 3, name: "Pão", price: 0.77 };
const breadFreeze = freezeProduct(bread);
console.log(breadFreeze);
function updateProductPrice(product, newPrice) {
    return Object.assign(Object.assign({}, product), newPrice);
}
const updateBread = updateProductPrice(bread, { price: 3.49 });
console.log(updateBread);
