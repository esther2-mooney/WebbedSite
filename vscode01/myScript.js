function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}


function button1(PID, CID) {
  if (document.getElementById(PID).value < 100) {
    document.getElementById(PID).value = document.getElementById(PID).value + 10;
  }
  if (document.getElementById(PID).value >= 99) {
    document.getElementById(CID).innerHTML = "Well done!";
  }
}

function button2(PID, CID) {
  document.getElementById(PID).value = 0
  document.getElementById(CID).innerHTML = " ";
}

function brightness(PID, CID) 
{ 
  document.getElementById(PID).value = 50
  document.getElementById(CID).innerHTML = "BOOP"; 
}