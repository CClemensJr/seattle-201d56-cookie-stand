'use strict';

const hoursOfOperation = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];
const locations = ["First and Pike", "SeaTac Airport", "Seattle Center", "Capitol Hill", "Alki"];
const minHourlyCustomersPerStore = [23, 3, 11, 20, 2];
const maxHourlyCustomersPerStore = [65, 24, 38, 38, 16];
const avgCookiesPerSalePerStore = [6.3, 1.2, 3.7, 2.3, 4.6];
let allStores = [];
let salesByStore = [];

/*********************
* STORE OBJECTS
**/

// REFACTOR IDEA FROM CLASS
// let store = {
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   avgCookiesPerSale: 6.3,
//   totalCookiesSold: 0,
//   locationName: "Store Name",
//   cookiesSoldPerHour: [],
//   customersPerHour: [],
// }
//   store.calcCustomersPerHour: function () {},
//   store.calcCookiesPerHour: function() {},
//   store.render: function() {}

// Replace object literals with a constructor
function Store(locationName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalCookiesSold = 0;
  this.cookiesSoldPerHour = [];

  this.getCookiesSoldPerHour();
  this.showSales();

  allStores.push(this);
}

Store.prototype.getCookiesSoldPerHour = function() {
  alert("Here be getCookiesSold");
}

Store.prototype.showSales = function() {
  alert("Here be showsales");
}

// This function uses a for loop to instantiate all stores
function createStores() {
  for (let i = 0; i < locations.length; i++)
  {
    new Store(locations[i], minHourlyCustomersPerStore[i], maxHourlyCustomersPerStore[i], avgCookiesPerSalePerStore[i]);
  }
}

//1st and pike
// let firstAndPike = {
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   avgCookiesPerSale: 6.3,
//   totalCookiesSold: 0,
//   cookiesSoldPerHour: [],
  
//   hourlyFigures: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++)
//     {
//       let customersPerHour = randomizer(this.minHourlyCustomers, this.maxHourlyCustomers);
//       let hourlySales = Math.floor(customersPerHour * this.avgCookiesPerSale)

//       this.cookiesSoldPerHour.push(hourlySales);
//       this.totalCookiesSold += hourlySales;
//     }
//   }
// }

//SeaTac Airport
// let seaTacAirport = {
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   avgCookiesPerSale: 1.2,
//   totalCookiesSold: 0,
//   cookiesSoldPerHour: [],

//   hourlyFigures: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++)
//     {
//       let customersPerHour = randomizer(this.minHourlyCustomers, this.maxHourlyCustomers);
//       let hourlySales = Math.floor(customersPerHour * this.avgCookiesPerSale)

//       this.cookiesSoldPerHour.push(hourlySales);
//       this.totalCookiesSold += hourlySales;
//     }
//   }
// }

//Seattle Center
// let seattleCenter = {
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   avgCookiesPerSale: 3.7,
//   totalCookiesSold: 0,
//   cookiesSoldPerHour: [],

//   hourlyFigures: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++)
//     {
//       let customersPerHour = randomizer(this.minHourlyCustomers, this.maxHourlyCustomers);
//       let hourlySales = Math.floor(customersPerHour * this.avgCookiesPerSale)

//       this.cookiesSoldPerHour.push(hourlySales);
//       this.totalCookiesSold += hourlySales;
//     }
//   }
// }

//Capitol Hill
// let capitolHill = {
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   avgCookiesPerSale: 2.3,
//   totalCookiesSold: 0,
//   cookiesSoldPerHour: [],
  
//   hourlyFigures: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++)
//     {
//       let customersPerHour = randomizer(this.minHourlyCustomers, this.maxHourlyCustomers);
//       let hourlySales = Math.floor(customersPerHour * this.avgCookiesPerSale)

//       this.cookiesSoldPerHour.push(hourlySales);
//       this.totalCookiesSold += hourlySales;
//     }
//   }
// }

//Alki
// let alki = {
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   totalCookiesSold: 0,
//   cookiesSoldPerHour: [],

//   hourlyFigures: function() {
//     for (let i = 0; i < hoursOfOperation.length; i++)
//     {
//       let customersPerHour = randomizer(this.minHourlyCustomers, this.maxHourlyCustomers);
//       let hourlySales = Math.floor(customersPerHour * this.avgCookiesPerSale)

//       this.cookiesSoldPerHour.push(hourlySales);
//       this.totalCookiesSold += hourlySales;
//     }
//   }
// }

// The randomizer takes a min and max and returns a random integer. Borrowed from MDN.
function randomizer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

// Main instantiates all of the object literals
// function main() {
//   //Store the results for each location in a separate array... perhaps as a property of the object representing that location
//   firstAndPike.hourlyFigures();
//   salesByStore.push(firstAndPike.cookiesSoldPerHour);
//   allStores.push(firstAndPike);

//   seaTacAirport.hourlyFigures();
//   salesByStore.push(seaTacAirport.cookiesSoldPerHour);
//   allStores.push(seaTacAirport)

//   seattleCenter.hourlyFigures();
//   salesByStore.push(seattleCenter.cookiesSoldPerHour);
//   allStores.push(seattleCenter)

//   capitolHill.hourlyFigures();
//   salesByStore.push(capitolHill.cookiesSoldPerHour);
//   allStores.push(capitolHill)

//   alki.hourlyFigures();
//   salesByStore.push(alki.cookiesSoldPerHour);
//   allStores.push(alki)
// }

function displayData() {
  for (let i = 0; i < locations.length; i++)
  {
    let newHeading = document.createElement("h1");
    let newTitle = document.createTextNode(`${ locations[i] }`);
    
    newHeading.appendChild(newTitle);
    document.body.appendChild(newHeading);
    
    for (let j = 0; j < salesByStore[i].length; j++) {
      let newLI = document.createElement("li");
      let newLIContent = document.createTextNode(`${ hoursOfOperation [j] }: ${ salesByStore[i][j] }`);
      
      newLI.appendChild(newLIContent);
      document.body.appendChild(newLI);
    }

    let newLI = document.createElement("li");
    let newLIContent = document.createTextNode(`Total: ${ allStores[i].totalCookiesSold }`);

    newLI.appendChild(newLIContent);
    document.body.appendChild(newLI);
  }
}

// main();
// displayData();
createStores();