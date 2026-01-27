const product = [
    {name: 'Camisa', price:10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price:49.99, category: 'Eletro'},
    {name: 'Fogão', price:400, category: 'Eletro'},
    {name: 'Calça Jeans', price:50.99, category: 'Roupas'}
];

product.map((products) => {
    if(products.category === 'Roupas'){
        products.onSales = true;
    } 
});

console.log(product)