var name = window.prompt("whats your name?");
var guests = window.prompt("How many guests at your table?")

if (name === "Brian") {
  console.log("Hello again, " + name + ".Table for " + guests)
} else {
  console.log("Welcome to our restaurant, " + name + ".Table for " + guests)
}


var starterorders = [];
for(var i = 0; i < guests; i++) {
   starterorders.push(prompt("What starters would you like? We have bread, cheese or butter"))
    }

var bread = 0;
var cheese = 0;
var butter = 0;
var breadcost =2;
var cheesecost =3;
var buttercost =4;
for(var i = 0; i < starterorders.length; ++i){
    if(starterorders[i] === "bread")  {
        bread++; 
} else {
  if (starterorders[i] === "cheese")  {
        cheese++; 
}
  else  {
    if (starterorders[i] === "butter")  {
        butter++; 
  }
  }}}
  
var startercost = (bread * breadcost) + (cheese * cheesecost) + (butter * buttercost);
 

var starters = ["bread", "cheese", "butter"]
var mains =   ["rice", "meat", "veg"]
var desserts = ["icecream", "cake", "chocolate"]
var drinks  = ["water", "wine", "beer"]

var mainorders = [];
for(var i = 0; i < guests; i++) {
   mainorders.push(prompt("What mains would you like? We have rice, meat or veg."))
    }

var rice = 0;
var meat = 0;
var veg = 0;
var ricecost =2;
var meatcost =3;
var vegcost =4;

for(var i = 0; i < mainorders.length; ++i){
    if(mainorders[i] === "rice")  {
        rice++; 
} else {
  if (mainorders[i] === "meat")  {
        meat++; 
}
  else  {
    if (mainorders[i] === "veg")  {
        veg++; 
  }
  }}}
  
var maincost = (rice * ricecost) + (meat * meatcost) + (veg * vegcost);
 



var dessertorders = [];
for(var i = 0; i < guests; i++) {
   dessertorders.push(prompt("What desserts would you like? We have icecream, cake or chocolate"))
    }

var icecream = 0;
var cake = 0;
var chocolate = 0;
var icecreamcost =2;
var cakecost =3;
var chocolatecost =4;

for(var i = 0; i < dessertorders.length; ++i){
    if(dessertorders[i] === "icecream")  {
        icecream++; 
} else {
  if (dessertorders[i] === "cake")  {
        cake++; 
}
  else  {
    if (dessertorders[i] === "chocolate")  {
        chocolate++; 
  }
  }}}
  
var dessertcost = (icecream * icecreamcost) + (cake * cakecost) + (chocolate * chocolatecost);
 


var drinkorders = [];
for(var i = 0; i < guests; i++) {
   drinkorders.push(prompt("What drinks would you like? We have water, wine or beer."))
    }

var water = 0;
var wine = 0;
var beer = 0;
var watercost =0;
var winecost =3;
var beercost =4;

for(var i = 0; i < drinkorders.length; ++i){
    if(drinkorders[i] === "water")  {
        water++; 
} else {
  if (drinkorders[i] === "beer")  {
        beer++; 
}
  else  {
    if (drinkorders[i] === "wine")  {
        wine++; 
  }
  }}}
  
var drinkcost = (water * watercost) + (beer * beercost) + (wine * winecost);


var bill = Math.round((drinkcost+startercost+maincost+dessertcost) * 10) / 10;

var paymentmethod = window.prompt("Your total is $" + bill + ".We have a 10% promotion for card payment. Would you like to pay by cash or card?")

var total;

if(paymentmethod === "card")	{
	total= Math.round(bill*0.9);
	// Math.round( num * 10) / 10
  var total;
  console.log("Your total is $" + total)
}
else	{
	console.log("Your total is $" + bill)
}
