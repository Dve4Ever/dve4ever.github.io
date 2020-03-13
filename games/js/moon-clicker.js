g(function() {
  var sMult, spacecraftCost, workers, workerCost, wMult, spacecraft, mCash, fMult, rocketships, factories, rMult, factoryCost, aMult, astronauts, astroCost, astroParty, rocketCost, root;
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
      factoryCost: factoryCost,
      wMult: wMult,
      aMult: aMult,
      sMult: sMult,
      rMult: rMult,
      fMult: fMult,
    };
    localStorage.setItem('saveFile', JSON.stringify(file));
  };

  moon.loadFile = function() {
    var file = JSON.parse(localStorage.getItem('saveFile'));
    mCash = file.mCash;
    workers = file.workers
    astronauts = file.astronauts;
    spacecraft = file.spacecraft;
    rocketships = file.rocketships
    factories = file.factories;
    workerCost = file.workerCost
    astroCost = file.astroCost;
    spacecraftCost = file.spacecraftCost;
    rocketCost = file.rocketCost;
    factoryCost = file.factoryCost;
    wMult = file.wMult;
    aMult = file.aMult;
    sMult = file.sMult;
    rMult = file.rMult;
  };




  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  mCash = parseInt(localStorage.getItem('mCash')) || 0;
  workers = parseInt(localStorage.getItem('workers')) || 0;
  astronauts = parseInt(localStorage.getItem('astronauts')) || 0;
  spacecraft = parseInt(localStorage.getItem('spacecraft')) || 0;
  rocketships = parseInt(localStorage.getItem('rocketships')) || 0;
  factories = parseInt(localStorage.getItem('factories')) || 0;
  workerCost = parseInt(localStorage.getItem('workerCost')) || 15;
  astroCost = parseInt(localStorage.getItem('astroCost')) || 100;
  spacecraftCost = parseInt(localStorage.getItem('spacecraftCost')) || 1100;
  rocketCost = parseInt(localStorage.getItem('factoryCost')) || 12000;
  factoryCost = parseInt(localStorage.getItem('factoryCost')) || 0;
  wMult = parseInt(localStorage.getItem('wMult')) || 0.10;
  aMult = parseInt(localStorage.getItem('aMult')) || 1;
  sMult = parseInt(localStorage.getItem('sMult')) || 8;
  rMult = parseInt(localStorage.getItem('rMult')) || 15;
  fMult = parseInt(localStorage.getItem('fMult')) || 0;
  astroParty = false;



  root.clickyBud = function() {
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
    factories = 0;
    workerCost = 15;
    astroCost = 100;
    spacecraftCost = 1100;
    rocketCost = 12000
    factoryCost = 0;
    wMult = 0.10;
    aMult = 1;
    sMult = 8;
    rMult = 15;

    return updateNumbers();
  };
  root.buyWorker = function() {
    if (mCash >= workerCost) {
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
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Unable to do that... ";
    }
    return updateNumbers();
  };
  root.updateNumbers = function() {
    var rate;
    rate = workers * wMult + astronauts * aMult + spacecraft * sMult + rocketships * rMult;

    checkAchievements();
    document.querySelector('.workersC')
      .innerHTML = "Number of Workers: " + workers.toFixed(0);
    document.querySelector('.astronautsC')
      .innerHTML = "Number of Astronaut: " + astronauts.toFixed(0);
    document.querySelector('.spacecraftC')
      .innerHTML = "Number of Spacecrafts: " + spacecraft.toFixed(0);
    document.querySelector('.rocketshipC')
      .innerHTML = "Number of Rocketships: " + rocketships.toFixed(0);
    document.querySelector('.mCash')
      .innerHTML = "$" + mCash.toFixed(0);
    document.querySelector('.cookierate')
      .innerHTML = "$" + rate.toFixed(2) + " per second";
    document.querySelector('.worker')
      .innerHTML = "🧑🏻 Worker 🧑🏻 <br>$" + workerCost.toFixed(2);
    document.querySelector('.astronauts')
      .innerHTML = "👦🏼 Astronaut 👦🏼 <br>$" + astroCost.toFixed(2);
    document.querySelector('.spacecraft')
      .innerHTML = "🚘 Spacecraft 🚘 <br>$" + spacecraftCost.toFixed(2);
    return document.querySelector('.rocketships')
      .innerHTML = "🚀 Rocketship 🚀 <br>$" + rocketCost.toFixed(2);
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
        .innerHTML = "Congrats! You now have " + astronauts + " workers. As a result, your workers now work 1.5x harder.";
      aMult *= 1.5;
      return astroParty = true;
    }
  };
  root.alertClear = function() {
    return document.querySelector('#alerts')

      .innerHTML = "Did you know that you could change your factory name by pressing \"Moon Clicker\"?";
  };

  root.saveProgress = function() {
    localStorage.setItem('mCash', mCash);
    localStorage.setItem('workers', workers);
    localStorage.setItem('astronauts', astronauts);
    localStorage.setItem('spacecraft', spacecraft);
   	localStorage.setItem('rocketships', rocketships);
    localStorage.setItem('factories', factories);
    localStorage.setItem('astroCost', astroCost);
    localStorage.setItem('spacecraftCost', spacecraftCost);
    localStorage.setItem('rocketCost', rocketCost);
    localStorage.setItem('factoryCost', factoryCost);
    localStorage.setItem('aMult', aMult);
    localStorage.setItem('sMult', sMult);
    localStorage.setItem('rMult', rMult);
    localStorage.setItem('fMult', fMult);
  };
  root.setInterval(saveProgress, 10);
  root.setInterval(silentProduction, 900);
  root.setInterval(alertClear, 5000);
  updateNumbers();
})
.call(this);
