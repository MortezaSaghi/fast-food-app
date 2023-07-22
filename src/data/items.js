const foodList=[
  {id: 1,name: "Pizza Peperoni",pic: "pics/pizza5.jpg",price: 12,quantity: 1,},
  {id: 2,name: "Pizza Salami",pic: "pics/pizza2.jpg",price: 10,quantity: 1,},
  {id: 3,name: "Pizza Margarita",pic: "pics/pizza1.jpg",price: 7,quantity: 1,},
  { id: 4, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, quantity: 1 },
  { id: 5, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, quantity: 1 },
  { id: 6, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, quantity: 1 },
  { id: 7, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, quantity: 1 },
  { id: 8, name: "Pizza Brot", pic: "pics/pizza4.jpg", price: 6, quantity: 1 },
  { id: 9, name: "Pizza Venezia", pic: "pics/pizza4.jpg", price: 6, quantity: 1 }
];

function getFoodData(id){
    let foodData=foodList.find(food=>food.id===id);
    return foodData;
}

export {foodList,getFoodData}
