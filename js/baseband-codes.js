function getManchesterLevelEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
    let symbol = "|--|--|";
    if (parseInt(bits[i].value) == 1) symbol = "|__|--|";
    if (
      parseInt(bits[i].value) == 1 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 1
    )
      symbol = "|__|--|";
    if (parseInt(bits[i].value) == 0) symbol = "|--|__|";
    if (
      parseInt(bits[i].value) == 0 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 0
    )
      symbol = "|--|__|";
    result.push(symbol);
  }
  return result;
}

function getNRZ(bits) {
  var result = [];
  for (let i = 0; i < bits.length; i++) {
    let symbol = "|____|";
    if (parseInt(bits[i].value) === 1) symbol = "|----|";
    result.push(symbol);
  }
  return result;
}

function getNRZM(bits) {
  var result = [];
  let symbol = "|____|";

  /*Asadar am sa numar cati 1 am, pentru ca atunci 1 are index par in count, inseamna ca pun symbol |___|
  Altfel |----|
*/
  symbol = "|____|";
  for (let i = 0; i < bits.length; i++) {
    console.log("Aici este " + i);
    if (parseInt(bits[i].value) === 0) {
      result.push(symbol);
    } else if (parseInt(bits[i].value) === 1) {
      if (symbol == "|____|") {
        symbol = "|----|";
        result.push(symbol);
      } else if (symbol == "|----|") {
        symbol = "|____|";
        result.push(symbol);
      }
    }
  }
  return result;
}
function getNRZS(bits) {
  var result = [];
  let symbol = "|____|";

  /*Asadar am sa numar cati 1 am, pentru ca atunci 1 are index par in count, inseamna ca pun symbol |___|
  Altfel |----|
*/
  symbol = "|____|";
  for (let i = 0; i < bits.length; i++) {
    console.log("Aici este " + i);
    if (parseInt(bits[i].value) === 1) {
      result.push(symbol);
    } else if (parseInt(bits[i].value) === 0) {
      if (symbol == "|____|") {
        symbol = "|----|";
        result.push(symbol);
      } else if (symbol == "|----|") {
        symbol = "|____|";
        result.push(symbol);
      }
    }
  }
  return result;
}
function getManchester(bits) {
  var result = [];
  /*Trebuie sa tin cont de vecinul elementului 
  Pentru 1 prima jumatate e sus, a doua e jos
  La 0 e pe dos
  In loc de patru liniute cum era inainte, am luat cate doua, 
  Iar acolo unde is cate doua symboluri similare inseamna ca am avut o combinatie de 0 si 1 sau 1 si 0
  De precizat ar fi ca aceasta codare variaza de la 0.5 la -0.5(nu creste la fel de mult ca inainte)
  */
  symbol1 = "|--|";
  symbol2 = "|__|";
  for (let i = 0; i < bits.length; i++) {
    console.log("Aici este " + i);
    if (parseInt(bits[i].value) === 1) {
      result.push(symbol1);
      result.push(symbol2);
    } else {
      result.push(symbol2);
      result.push(symbol1);
    }
  }
  return result;
}
function getBiphaseMark(bits) {
  /*
  La 0 se observa ca face tranzitie  complet pe cand la 1 merge pe jumatate
  */
  var result = [];
  let symbol1 = "|--|";
  let symbol2 = "|__|";
  let symbol3 = "|----|";
  let symbol4 = "|____|";
  let currentSymbol = symbol2;

  for (let i = 0; i < bits.length; i++) {
    console.log("Aici este " + i);
    if (parseInt(bits[i].value) === 1) {
      if (currentSymbol == symbol1) {
        result.push(symbol2);
        result.push(symbol1);
        currentSymbol = symbol1;
      } else if (currentSymbol == symbol2) {
        result.push(symbol1);
        result.push(symbol2);
        currentSymbol = symbol2;
      }
    } else {
      if (currentSymbol == symbol1) {
        result.push(symbol4);
        currentSymbol = symbol2;
      } else if (currentSymbol == symbol2) {
        result.push(symbol3);
        currentSymbol = symbol1;
      }
    }
  }
  return result;
}
function getBiphaseSpace(bits) {
  /*
  La 1 se observa ca face tranzitie  complet pe cand la 0 merge pe jumatate
  */
  var result = [];
  let symbol1 = "|--|";
  let symbol2 = "|__|";
  let symbol3 = "|----|";
  let symbol4 = "|____|";
  let currentSymbol = symbol2;

  for (let i = 0; i < bits.length; i++) {
    console.log("Aici este " + i);
    if (parseInt(bits[i].value) === 0) {
      if (currentSymbol == symbol1) {
        result.push(symbol2);
        result.push(symbol1);
        currentSymbol = symbol1;
      } else if (currentSymbol == symbol2) {
        result.push(symbol1);
        result.push(symbol2);
        currentSymbol = symbol2;
      }
    } else {
      if (currentSymbol == symbol1) {
        result.push(symbol4);
        currentSymbol = symbol2;
      } else if (currentSymbol == symbol2) {
        result.push(symbol3);
        currentSymbol = symbol1;
      }
    }
  }
  return result;
}

function getRZ(bits) {
  /*
 La 1 se observa ca face tranzitie  pe jumatate, prima data sus, dupa jos si se vede ca se schimba
 La 0 se observa ca face tranzitie completa jos si i pun symbol0
 */
  var result = [];
  let symbol0 = "|0000|";
  let symbol00 = "|00|";
  let symbol1 = "|--|";
  let symbol2 = "|__|";
  let currentSymbol = symbol2;

  for (let i = 0; i < bits.length; i++) {
    console.log("Aici este " + i);
    if (parseInt(bits[i].value) === 1) {
      if (currentSymbol == symbol1) {
        result.push(symbol2);
        result.push(symbol00);
        currentSymbol = symbol2;
      } else {
        result.push(symbol1);
        result.push(symbol00);
        currentSymbol = symbol1;
      }
    } else {
      result.push(symbol0);
    }
  }
  return result;
}
