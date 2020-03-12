(function() {
  var bMult, bakerCost, bakers, cookies, fMult, factories, factoryCost, gMult, grannies, grannyCost, grannyParty, root;
  var moon = {};

  moon.saveFile = function() {
    var file = {
      cookies: cookies,
      grannies: grannies,
      bakers: bakers,
      factories: factories,
      grannyCost: grannyCost,
      bakerCost: bakerCost,
      factoryCost: factoryCost,
      gMult: gMult,
      bMult: bMult,
      fMult: fMult,
    };
    localStorage.setItem('saveFile', JSON.stringify(file));
  };

  moon.loadFile = function() {
    var file = JSON.parse(localStorage.getItem('saveFile'));
    cookies = file.cookies;
    grannies = file.grannies;
    bakers = file.bakers;
    factories = file.factories;
    grannyCost = file.grannyCost;
    bakerCost = file.bakerCost;
    factoryCost = file.factoryCost;
    gMult = file.gMult;
    bMult = file.bMult;
    fMult = file.fMult;
  };




  root = typeof exports !== "undefined" && exports !== null ? exports : this;
  cookies = parseInt(localStorage.getItem('cookies')) || 0;
  grannies = parseInt(localStorage.getItem('grannies')) || 0;
  bakers = parseInt(localStorage.getItem('bakers')) || 0;
  factories = parseInt(localStorage.getItem('factories')) || 0;
  grannyCost = parseInt(localStorage.getItem('grannyCost')) || 40;
  bakerCost = parseInt(localStorage.getItem('bakerCost')) || 120;
  factoryCost = parseInt(localStorage.getItem('factoryCost')) || 360;
  gMult = parseInt(localStorage.getItem('gMult')) || 1;
  bMult = parseInt(localStorage.getItem('bMult')) || 5;
  fMult = parseInt(localStorage.getItem('fMult')) || 15;
  grannyParty = false;



  root.clickyBud = function() {
    cookies++;

    return updateNumbers();
  };

  root.buyGranny = function() {
    if (cookies >= grannyCost) {
      cookies -= grannyCost;
      grannies += 1;
      grannyCost *= 1.6;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Not enough cookies to buy that spaceman! ";
    }
    return updateNumbers();
  };
  root.buyBaker = function() {
    if (cookies >= bakerCost) {
      cookies -= bakerCost;
      bakers += 1;
      bakerCost *= 1.6;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Not enough cookies to buy that spacecraft! ";
    }
    return updateNumbers();
  };
  root.buyFactory = function() {
    if (cookies >= factoryCost) {
      cookies -= factoryCost;
      factories += 1;
      factoryCost *= 1.6;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Not enough cookies to buy that rocketship! ";
    }
    return updateNumbers();
  };
  root.useCheats = function() {
    if (cookies >= 0) {
      cookies = 6969696969;
    } else {
      document.querySelector('#alerts')
        .innerHTML = "Unable to do that... ";
    }
    return updateNumbers();
  };
  root.updateNumbers = function() {
    var rate;
    rate = grannies * gMult + bakers * bMult + factories * fMult;

    checkAchievements();
    document.querySelector('.grannies')
      .innerHTML = "Number of Astronaut: " + grannies.toFixed(0);
    document.querySelector('.bakers')
      .innerHTML = "Number of Spacecrafts: " + bakers.toFixed(0);
    document.querySelector('.factories')
      .innerHTML = "Number of Rocketships: " + factories.toFixed(0);
    document.querySelector('.cookies')
      .innerHTML = "$" + cookies.toFixed(0);
    document.querySelector('.cookierate')
      .innerHTML = "$" + rate.toFixed(2) + " per second";
    document.querySelector('.granny')
      .innerHTML = "👦🏼 Astronaut 👦🏼 <br>$" + grannyCost.toFixed(2);
    document.querySelector('.baker')
      .innerHTML = "🚘 Spacecraft 🚘 <br>$" + bakerCost.toFixed(2);
    return document.querySelector('.factory')
      .innerHTML = "🚀 Rocketship 🚀 <br>$" + factoryCost.toFixed(2);
  };
  root.silentProduction = function() {
    var rate;
    rate = grannies * gMult + bakers * bMult + factories * fMult;
    cookies += rate;
    return root.updateNumbers();
  };
  root.checkAchievements = function() {
    if (grannyParty === false && grannies >= 5) {
      document.querySelector('#alerts')
        .innerHTML = "Congrats! You now have " + grannies + " workers. As a result, your workers now work 1.5x harder.";
      gMult *= 1.5;
      return grannyParty = true;
    }
  };
  root.alertClear = function() {
    return document.querySelector('#alerts')

      .innerHTML = "Did you know that you could change your factory name by pressing \"Moon Clicker\"?";
  };

  root.saveProgress = function() {
    localStorage.setItem('cookies', cookies);
    localStorage.setItem('grannies', grannies);
    localStorage.setItem('bakers', bakers);
    localStorage.setItem('factories', factories);
    localStorage.setItem('grannyCost', grannyCost);
    localStorage.setItem('bakerCost', bakerCost);
    localStorage.setItem('factoryCost', factoryCost);
    localStorage.setItem('gMult', gMult);
    localStorage.setItem('bMult', bMult);
    localStorage.setItem('fMult', fMult);
  };
  root.setInterval(saveProgress, 1);
  root.setInterval(silentProduction, 1000);
  root.setInterval(alertClear, 5000);
  updateNumbers();
})
.call(this);
