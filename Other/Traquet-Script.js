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

function brightness(PID, CID) {
  document.getElementById(PID).value = 50
  document.getElementById(CID).innerHTML = "BOOP";
}

function doNavBar() {
  fetch('/nav.html')
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Failed to load nav: ${response.status}`);
      }
      return response.text(); // Convert response to text
    })
    .then(navHTML => {
      // Insert the navigation HTML into the placeholder
      document.getElementById('mySidenav').innerHTML = navHTML;
    })
    .catch(error => {
      // Log errors (e.g., if nav.html is missing)
      console.error('Error loading navigation:', error);
    });
}

/* Set the width of the side navigation to 250px */
function openNav() {
  if (document.getElementById("mySidenav").style.width == "100px")/*visible*/ {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("main").style.marginLeft = "100px";
  }
}