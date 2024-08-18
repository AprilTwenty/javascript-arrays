let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

// Start coding here
let isArray = Array.isArray(orders); 
console.log(isArray);// true
let creditCardTypeOfBlindermann = orders[2].creditCardType; 
console.log(orders[2].creditCardType);//switch
orders[2].creditCardType = "Visa"; 
console.log(orders[2].creditCardType);// visa
let productQuantityOfJoannet = orders[3].productQuantity;
console.log(productQuantityOfJoannet); //96
let totalPurchaseOfDary = orders[1].productPrice * orders[1].productQuantity;
console.log(totalPurchaseOfDary); //934902
orders.shift();
console.log(orders);
