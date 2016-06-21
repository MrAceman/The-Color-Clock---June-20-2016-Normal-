
window.setInterval(figureTime,1000);

function figureTime() {

  var newDate = new Date;
  var decTime = null;
  var hexTime = null;
  var hexSec = null;
  var hexMin = null;
  var hexHour = null;

  h = newDate.getHours();
  m = newDate.getMinutes();
  s = newDate.getSeconds();

s = checkTens(s);
m = checkTens(m);
h = checkTens(h);

function checkTens(timer) {
    if (timer < 10){
      timer = "0" + timer;

      decTime = (h + "" + m + "" + s);
      hexHour = Number(h);
      hexMin = Number(m);
      hexSec = Number(s);
      hexHour = hexHour.toString(16);
      hexMin = hexMin.toString(16);
      hexSec = hexSec.toString(16);
      hexString = hexHour + "" + hexMin + "" + hexSec;
      var newVar = Date.now();
      var hexNewVar = newVar.toString(16);
      var subHexVar = hexNewVar.substr(5,20);
      document.getElementById( "pageContainer" ).style.backgroundColor= "#" + subHexVar;
  };
      decTime = (h + "" + m + "" + s);
      hexHour = Number(h);
      hexMin = Number(m);
      hexSec = Number(s);
      hexHour = hexHour.toString(16);
      hexMin = hexMin.toString(16);
      hexSec = hexSec.toString(16);
      hexString = hexHour + "" + hexMin + "" + hexSec;
      var newVar = Date.now();
      var hexNewVar = newVar.toString(16);
      var subHexVar = hexNewVar.substr(5,20);
      document.getElementById( "pageContainer" ).style.backgroundColor= "#" + subHexVar;
      return timer;
};
  // document.getElementById("clockField1").innerHTML = h + ":" + m + ":" + s + "<br />" + hexString;
  document.getElementById("clockField1").innerHTML = h + ":" + m + ":" + s;
  // Code to add to previous line to get hex time to print under standard //
  //+ "<br />" + "#" + hexHour + ":" + hexMin + ":" +hexSec;
};
