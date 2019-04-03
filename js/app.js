'use strict';

/*********************
 * GLOBAL VARIABLES 
 **/
const hoursOfOperation = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];
const locations = ["First and Pike", "SeaTac Airport", "Seattle Center", "Capitol Hill", "Alki"];
const minHourlyCustomersPerStore = [23, 3, 11, 20, 2];
const maxHourlyCustomersPerStore = [65, 24, 38, 38, 16];
const avgCookiesPerSalePerStore = [6.3, 1.2, 3.7, 2.3, 4.6];
let allStores = [];
let hourlyTotalSales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/*********************
 * DOM VARIABLES 
 **/
let tTable = document.getElementById("table");

let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let tFoot = document.createElement("tfoot");

let tRow = document.createElement("tr");
let tH = document.createElement("th");
let tD = document.createElement("td");

let textContent = document.createTextNode("");

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

    hourlyTotalSales[i] += hourlySales;

    if (i === hoursOfOperation.length - 1)
    {
      hourlyTotalSales[i + 1] += this.totalCookiesSold;
    }
  }
}

// This method populates the html table upon instantiation
Store.prototype.renderSales = function() {
  let tRow = document.createElement("tr");
  let tH = document.createElement("th");
  let tD;
  let tHContent = document.createTextNode(this.locationName);
  let tDContent;

  tH.appendChild(tHContent);
  tRow.appendChild(tH);

  for (let i = 0; i < hoursOfOperation.length; i++) {
    tD = document.createElement("td");

    tDContent = document.createTextNode(this.cookiesSoldPerHour[i]);

    tD.appendChild(tDContent);
    tRow.appendChild(tD);
  }

  tD = document.createElement("td");
  tDContent = document.createTextNode(this.totalCookiesSold);
  

  tD.appendChild(tDContent);
  tRow.appendChild(tD);
  tBody.appendChild(tRow);
  tTable.appendChild(tBody);
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

// This function creates the basic table
function renderTable() {
  renderColumnNames();
  renderHourlyTotals();
}

function renderColumnNames() {
  // let tHead = document.createElement("thead");
  let tRow = document.createElement("tr");
  let tH = document.createElement("th");
  let tHContent = document.createTextNode("");

  tH.appendChild(tHContent);
  tRow.appendChild(tH);

  for (let i = 0; i < hoursOfOperation.length; i++)
  {
    tH = document.createElement("th");

    tHContent = document.createTextNode(`${ hoursOfOperation[i] }`);

    tH.appendChild(tHContent);
    tRow.appendChild(tH);
  }

  tH = document.createElement("th");
  tHContent = document.createTextNode("Total Sales");

  tH.appendChild(tHContent);
  tRow.appendChild(tH);

  tHead.appendChild(tRow);
  tTable.appendChild(tHead);

  document.body.appendChild(tTable);
}

// THis function renders the last row of the table
function renderHourlyTotals() {
  // let tFoot = document.createElement("tfoot");
  let tRow = document.createElement("tr");
  let tH = document.createElement("th");
  let tHContent = document.createTextNode("");
  let tD = document.createElement("td");
  let tDContent = document.createTextNode("");

  tH.appendChild(tHContent);
  tRow.appendChild(tH);

  for (let i = 0; i < hourlyTotalSales.length; i++) {
    tD = document.createElement("td");

    tDContent = document.createTextNode(hourlyTotalSales[i]);

    tD.appendChild(tDContent);
    tRow.appendChild(tD);
  }

  tFoot.appendChild(tRow);
  tTable.appendChild(tFoot);
}

// This function creates all stores and renders the table
function initializer() {
  createStores();
  renderTable();
}

initializer();

/*********************
 * EVENT HANDLING
 **/
const formElement = document.getElementById("form");

formElement.addEventListener("submit", function(event) {
  event.preventDefault();

  new Store(event.target.locationName.value, 
            event.target.minCustomers.value, 
            event.target.maxCustomers.value, 
            event.target.avgSale.value);

  tFoot.innerHTML = "";

  renderHourlyTotals();
});

