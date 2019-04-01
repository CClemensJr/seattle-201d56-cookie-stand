'use strict';

//First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:
//SeaTac Airport
//Seattle Center
//Capitol Hill
//Alki
const hoursOfOperation = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];

let salesByStore = [];

//1st and pike
let firstAndPike = {
  //Stores the min/max hourly customers, and the average cookies per customer, in object properties
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  
  //Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  customersPerHour: randomizer(minHourlyCustomers, maxHourlyCustomers),
  
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  hourlyFigures: function() {
    let salesArray =[];

    for (let i = 0; i < hoursOfOperation.length; i++)
    {
      salesArray.push(this.avgCookiesPerSale * this.customersPerHour);
      console.log(salesArray[i]);
    }

    return salesArray;
  },
  
  dailySales: this.hourlyFigures
}
//Store the results for each location in a separate array... perhaps as a property of the object representing that location
salesByStore.push(firstAndPike.dailySales);

//
function randomizer(min, max) {
  let min = Math.ceil(min);
  let max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

let num = firstAndPike.randomizeCustomersPerHour();

console.log(`min: ${ firstAndPike.minHourlyCustomers }`);
console.log(`max ${ firstAndPike.maxHourlyCustomers }`);
console.log(`avg: ${ firstAndPike.avgCookiesPerSale }`);
console.log(`Randomizer: ${ num }`);
console.log(`1st and Pike: ${ salesByStore.toString() }`);