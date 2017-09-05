var machines = 0;

  function buyMachines() { 
    var machineCost = Math.floor(10 * Math.pow(1.1,,machines));
      if(cookies >= machineCost) {
        machines = machines + 1;
        cookies = cookies - machineCost;
        document.getElementById('machines').innerHTML = machines;
        document.getElementById('cookies').innerHTML = cookies;
      };
    var nextCost = Math.floor(10 * Math.pow(1.1,machines));
    document.getElementById('machineCost').innerHTML = nextCost;
    };

    cooieClick(machines);
