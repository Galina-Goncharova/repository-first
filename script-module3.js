// /задача 14/ 
// function countProps(object) {
  
//   let propCount = 0;
//  const keys = Object.keys(object);
//   for (const key of keys) {
//   propCount += 1;
//   }
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }))
// console.log(countProps({}))


// задача 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
// hexColors.push(color.hex);
// rgbColors.push(color.rgb);
// }
// console.log(hexColors)
// console.log(rgbColors)
// console.log(123)

// задача 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for(const product of products) {
// if(product.name === productName){
//   return product.price;}
// }
//   return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"))


// задача 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const nameProp = [];
//   for (const product of products) {
//     if (product[propName]) {
//       nameProp.push(product[propName]);
//     }
//   }
//     return nameProp;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"))


// задача 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let totalPrice = 0;
//   for (const product of products) {
//     if(product.name === productName) {
//      totalPrice = product.price * product.quantity;
//     }
//   }

// return totalPrice;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Radar"))

// задача 31
// Change code below this line
// function add(...args) {
//   let totalSum = 0;
//   for(const arg of args) {
//     totalSum += arg;
//     }
//     return totalSum;
//   // Change code above this line
// }
// console.log(add(15, 27))

// задача 33
// Change code below this line
// function findMatches(array,...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   for (const arr of array){
//     if(arg === arr) {
//     matches.push(arg);
//     }
//   }
// }
//   // Change code above this line
//   return matches;
// }

// задача 41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
  for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
  }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
          const potion = this.potions[i];
            if (potion.name === potionName) {
                this.potions.splice(i, 1)
            }
        }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
     for (const potion of this.potions) {
            if (potion.name === oldName) {
                return potion.name = newName;
            }
        }
         return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
// console.log(atTheOldToad.getPotions())
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))