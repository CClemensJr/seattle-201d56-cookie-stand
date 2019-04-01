'use strict';

//First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:
//SeaTac Airport
//Seattle Center
//Capitol Hill
//Alki
const hoursOfOperation = ["6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm"];

//1st and pike
let firstAndPike = {
  //Stores the min/max hourly customers, and the average cookies per customer, in object properties
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  
  //Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  randomizeCustomersPerHour: () => Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers,
  
  //Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  hourlyFigures: function() {
    let salesArray =[];

    for
  }
  
  //Store the results for each location in a separate array... perhaps as a property of the object representing that location
}


//Display the values of each array as unordered lists in the browser

//Calculating the sum of these hourly totals; your output for each location should look like this:

// 1st and Pike

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// 8pm: 29 cookies
// Total: 657 cookies