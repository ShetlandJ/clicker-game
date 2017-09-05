var cookies = 0;

function cookieClick(number) {
  cookies = cookies + number;
  document.getElementById("cookies").innerHTML = cookies;
};

var grannies = 0;

function buyGranny() { 
  var grannyCost = Math.floor(10 * Math.pow(1.1,grannies));
    if(cookies >= grannyCost) {
      grannies = grannies + 1;
      cookies = cookies - grannyCost;
      document.getElementById('grannies').innerHTML = grannies;
      document.getElementById('cookies').innerHTML = cookies;
    };
  var nextCost = Math.floor(10 * Math.pow(1.1,grannies));
  document.getElementById('grannyCost').innerHTML = nextCost;
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

  cookieClick(machines);


window.setInterval(function(){
  cookieClick(grannies);
  cookieClick(machines);
}, 1000);
