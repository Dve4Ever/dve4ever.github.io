      function soundClick() {
        var audio = document.getElementById("click");
        audio.play();
      }
      
            function soundBuy() {
        var audio = document.getElementById("buy");
        audio.play();
      }
      
      
function nFormatter(num, digits) {
  var si = [{
      value: 1,
      symbol: ""
    },
    {
      value: 1E3,
      symbol: "k"
    },
    {
      value: 1E6,
      symbol: "m"
    },
    {
      value: 1E9,
      symbol: "b"
    },
    {
      value: 1E12,
      symbol: "t"
    },
    {
      value: 1E15,
      symbol: "qa"
    },
    {
      value: 1E18,
      symbol: "qu"
    },
    {
      value: 1E21,
      symbol: "u"
    },
    {
      value: 1E23,
      symbol: "de"
    },
    {
      value: 1E26,
      symbol: " $devooooyt's"
    }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(2) + si[i].symbol;
}
(function() {
  var sMult, spacecraftCost, workers, workerCost, wMult, spacecraft, mCash, rocketships, rMult, aMult, astronauts, astroCost, astroParty, rocketCost, root;
  var moon = {};


  moon.saveFile = function() {
    var file = {
      mCash: mCash,
      workers: workers,
      astronauts: astronauts,
      spacecraft: spacecraft,
      rocketships: rocketships,
      workerCost: workerCost,
      astroCost: astroCost,
      spacecraftCost: spacecraftCost,
      rocketCost: rocketCost,
      wMult: wMult,
      aMult: aMult,
      sMult: sMult,
      rMult: rMult,
    };
    var ftName = document.getElementById("factoryName").value;
    localStorage.setItem("factoryName", ftName);
    localStorage.setItem('saveFile', JSON.stringify(file));
  };

  moon.loadFile = function() {
    var file = JSON.parse(localStorage.getItem('saveFile'));
    mCash = file.mCash;
    workers = file.workers;
    astronauts = file.astronauts;
    spacecraft = file.spacecraft;
    rocketships = file.rocketships;
    workerCost = file.workerCost;
    astroCost = file.astroCost;
    spacecraftCost = file.spacecraftCost;
    rocketCost = file.rocketCost;
    wMult = file.wMult;
    aMult = file.aMult;
    sMult = file.sMult;
    rMult = file.rMult;
    if (localStorage["factoryName"]) {
      var fName = localStorage["factoryName"];
      document.getElementById("factoryName").value = fName;
    } else {
      document.getElementById("factoryName");
    }
  };



  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  mCash = parseInt(localStorage.getItem('mCash')) || 0;
  workers = parseInt(localStorage.getItem('workers')) || 0;
  astronauts = parseInt(localStorage.getItem('astronauts')) || 0;
  spacecraft = parseInt(localStorage.getItem('spacecraft')) || 0;
  rocketships = parseInt(localStorage.getItem('rocketships')) || 0;
  workerCost = parseInt(localStorage.getItem('workerCost')) || 15;
  astroCost = parseInt(localStorage.getItem('astroCost')) || 100;
  spacecraftCost = parseInt(localStorage.getItem('spacecraftCost')) || 1100;
  rocketCost = parseInt(localStorage.getItem('rocketCost')) || 12000;
  wMult = parseInt(localStorage.getItem('wMult')) || 0.10;
  aMult = parseInt(localStorage.getItem('aMult')) || 1;
  sMult = parseInt(localStorage.getItem('sMult')) || 8;
  rMult = parseInt(localStorage.getItem('rMult')) || 15;
  astroParty = false;


  root.clickyBud = function() {
    soundClick();

mCash++;
    return updateNumbers();
  };
  root.popupReset = function() {
    var txt;
    if (confirm("Are you sure you want to reset your progress?")) {
      reset();
    } else {}
  }
  root.reset = function() {

    mCash = 0;
    workers = 0;
    astronauts = 0;
    spacecraft = 0;
    rocketships = 0;
    workerCost = 15;
    astroCost = 100;
    spacecraftCost = 1100;
    rocketCost = 12000
    wMult = 0.10;
    aMult = 1;
    sMult = 8;
    rMult = 15;

    return updateNumbers();
  };
  root.buyWorker = function() {
    if (mCash >= workerCost) {
    soundBuy();
      mCash -= workerCost;
      workers += 1;
      workerCost *= 1.2;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Not enough Moon Cash to buy that worker! ";
    }
    return updateNumbers();
  };
  root.buyAstronaut = function() {
    if (mCash >= astroCost) {
    soundBuy();
      mCash -= astroCost;
      astronauts += 1;
      astroCost *= 1.15;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Not enough Moon Cash to buy that astronaut! ";
    }
    return updateNumbers();
  };
  root.buySpacecraft = function() {
    if (mCash >= spacecraftCost) {
    soundBuy();
      mCash -= spacecraftCost;
      spacecraft += 1;
      spacecraftCost *= 1.3;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Not enough Moon Cash to buy that spacecraft! ";
    }
    return updateNumbers();
  };
  root.buyRocket = function() {
    if (mCash >= rocketCost) {
    soundBuy();
      mCash -= rocketCost;
      rocketships += 1;
      rocketCost *= 1.3;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Not enough Moon Cash to buy that rocketship! ";
    }
    return updateNumbers();
  };
  root.useCheats = function() {
    if (mCash >= 0) {
      mCash = mCash + 69696969696969;
      soundBuy();
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Unable to do that... ";
    }
    return updateNumbers();
  };
  root.updateNumbers = function() {
    var rate;
    rate = workers * wMult + astronauts * aMult + spacecraft * sMult + rocketships * rMult;
    document.title = "$" + nFormatter(mCash) + " • Moon Clicker v4.16 • Devoooo";
    checkAchievements();
    document.querySelector('.workersC')
      .innerHTML = "" + workers.toFixed(0);
    document.querySelector('.astronautsC')
      .innerHTML = "" + astronauts.toFixed(0);
    document.querySelector('.spacecraftC')
      .innerHTML = "" + spacecraft.toFixed(0);
    document.querySelector('.rocketshipC')
      .innerHTML = "" + rocketships.toFixed(0);
    document.querySelector('.mCash')
      .innerHTML = "$" + nFormatter(mCash.toFixed(0));
    document.querySelector('.cookierate')
      .innerHTML = "$" + nFormatter(rate.toFixed(2)) + " per second";
    document.querySelector('.worker')
      .innerHTML = "🧑🏻 Worker 🧑🏻 <br>$" + nFormatter(workerCost.toFixed(2));
    document.querySelector('.astronauts')
      .innerHTML = "👦🏼 Astronaut 👦🏼 <br>$" + nFormatter(astroCost.toFixed(2));
    document.querySelector('.spacecraft')
      .innerHTML = "🚘 Spacecraft 🚘 <br>$" + nFormatter(spacecraftCost.toFixed(2));
    return document.querySelector('.rocketships')
      .innerHTML = "🚀 Rocketship 🚀 <br>$" + nFormatter(rocketCost.toFixed(2));
  };
  root.silentProduction = function() {
    var rate;
    rate = workers * wMult + astronauts * aMult + spacecraft * sMult + rocketships * rMult;
    mCash += rate;
    return root.updateNumbers();
  };
  root.checkAchievements = function() {
    if (astroParty === false && astronauts >= 5) {
      document.querySelector('#alerts')
        .innerHTML = "Congrats! You now have " + astronauts + " astronauts. As a result, your workers now work 1.5x harder.";
      aMult *= 1.5;
      return astroParty = true;
    }
  };
  root.alertClear = function() {
    return document.querySelector('#alerts')

      .innerHTML = "<div style=\"styleAlert\"><center>Did you know that you could change your factory name by pressing \"Moon Clicker\"?</center></div>";
  };

  root.saveProgress = function() {
    localStorage.setItem('mCash', mCash);
    localStorage.setItem('workers', workers);
    localStorage.setItem('astronauts', astronauts);
    localStorage.setItem('spacecraft', spacecraft);
    localStorage.setItem('rocketships', rocketships);
    localStorage.setItem('workerCost', workerCost);
    localStorage.setItem('astroCost', astroCost);
    localStorage.setItem('spacecraftCost', spacecraftCost);
    localStorage.setItem('rocketCost', rocketCost);
    localStorage.setItem('wMult', wMult);
    localStorage.setItem('aMult', aMult);
    localStorage.setItem('sMult', sMult);
    localStorage.setItem('rMult', rMult);
  };
  root.setInterval(saveProgress, 10);
  root.setInterval(silentProduction, 900);
  root.setInterval(alertClear, 5000);
  updateNumbers();
})
.call(this);
