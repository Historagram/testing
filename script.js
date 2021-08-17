var preloader = document.getElementById('loader');
function myLoader() {
    preloader.style.display = 'none';
}

{
    var date = new Date();
    var hour = date.getHours();
    if (hour >= 0 && hour < 12) {
        document.getElementById("wish").innerHTML = "Good Morning! My Dear Friends;"
    }
    else if (hour == 12) {
        document.getElementById("wish").innerHTML = "Good Noon! My Dear Friends;"
    }
    else if (hour >= 12 && hour <= 17) {
        document.getElementById("wish").innerHTML = "Good Afternoon! My Dear Friends;"
    }
    else {
        document.getElementById("wish").innerHTML = "Good Evening! My Dear Friends;"
    }
}

function balance() {
    var a;
    a = document.getElementById("balance");
    a.innerHTML = "&#xf24e;";
    setTimeout(function () {
        a.innerHTML = "&#xf515;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf516;";
      }, 2000);
  }
balance();
setInterval(balance, 3000);