var cookies = 0;

function cookieClick(number) {
  cookies = cookies + number;
  document.getElementById("cookies").innerHTML = cookies;
};

var grannies = 0;

function buyGranny() { 
  var grannyCost = Math.floor(10 * Math.pow(1.1,grannies)); //works out the cost of the item
    if(cookies >= grannyCost) { //checks that the player can afford the upgrade
      grannies = grannies + 1; //adds one cursor
      cookies = cookies - grannyCost; //deducts the cost of item from your total
      document.getElementById('grannies').innerHTML = grannies; //updates the number of items shown to you
      document.getElementById('cookies').innerHTML = cookies; //updates your cookie total
    };
  var nextCost = Math.floor(10 * Math.pow(1.1,grannies)); //calculation that works out the cost of the next item
  document.getElementById('grannyCost').innerHTML = nextCost; //updates the cost of the item, as displayed to the user.
  };

  var machines = 0;

function buyMachines() { 
  var machineCost = Math.floor(100 * Math.pow(1.1,machines));
    if(cookies >= machineCost) {
      machines = machines + 10;
      cookies = cookies - machineCost;
      document.getElementById('machines').innerHTML = machines;
      document.getElementById('cookies').innerHTML = cookies;
    };
  var nextCost = Math.floor(100 * Math.pow(1.1,machines));
  document.getElementById('machineCost').innerHTML = nextCost;
  };


window.setInterval(function(){
  cookieClick(grannies);
  cookieClick(machines);
}, 1000);
