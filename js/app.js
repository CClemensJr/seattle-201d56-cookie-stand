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


/*********************
 * STORE CONSTRUCTOR 
 **/
// Replace object literals with a constructor
function Store(locationName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalCookiesSold = 0;
  this.cookiesSoldPerHour = [];

  this.calcCookiesSoldPerHour();
  this.renderSales();

  allStores.push(this);
}


/*********************
 * PROTOTYPE METHODS
 **/
// This method populates the cookiesSoldPerHour array upon instantiation
Store.prototype.calcCookiesSoldPerHour = function() {
  for (let i = 0; i < hoursOfOperation.length; i++)
  {
    let customersPerHour = randomizer(this.minHourlyCustomers, this.maxHourlyCustomers);
    let hourlySales = Math.floor(customersPerHour * this.avgCookiesPerSale)

    this.cookiesSoldPerHour.push(hourlySales);
    this.totalCookiesSold += hourlySales;
  }
}

// This method populates the html table upon instantiation
Store.prototype.renderSales = function() {
  
}


/*********************
 * HELPER FUNCTIONS
 **/
// The randomizer takes a min and max and returns a random integer. Inpired by MDN documentation.
function randomizer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

// This function uses a for loop to instantiate all stores
function createStores() {
  for (let i = 0; i < locations.length; i++)
  {
    new Store(locations[i], minHourlyCustomersPerStore[i], maxHourlyCustomersPerStore[i], avgCookiesPerSalePerStore[i]);
  }
}

function createTable() {
  //I need the following:
  //A thead
  let tHead = document.createElement("thead");
  //A trow 
  let tRow = document.createElement("tr");
  //A bunch of th's with the operating hours
  let tH = document.createElement("th");
  let tHContent = document.createTextNode("Test");
  //A tbody that rows can be appended to
  let tBody = document.createElement("tbody");
  // A tfoot that totals can be attached to
  let tFoot = document.createElement("tfoot");

  tH.appendChild(tHContent);
  tRow.appendChild(tH);
  tHead.appendChild(tRow);
  
  let htmlTable = document.getElementsByTagName("table");
  htmlTable.appendChild(tHead);
}

function initializer() {
  createTable();
  createStores();
}

initializer();