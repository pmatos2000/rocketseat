"use strict";

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4; //Visivel somente no escorpo

    console.log(_y);
  }

  console.log(y);
}

var x = 6; // x = 2; //Vai dar erro

teste(x);
