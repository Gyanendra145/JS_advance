const shoppingCart =[
    {
        item: "Js course",
        price: 2999
    },
    {
        item: "py course",
        price: 999
    },
    {
        item: "Mobile dev course",
        price: 6999
    },
    {
        item: "Data science course",
        price: 10999
    }
]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price ,0)

console.log(priceToPay);