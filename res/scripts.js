$(document).ready(function() {
  var initial = 9999;
  var count = initial;
  var counter; //10 will  run it every 100th of a second

  function timer() {
    if (count <= 0) {
      clearInterval(counter);
      document.getElementById("timer").innerHTML = "00.00";
      return;
    }
    count--;
    displayCount(count);
  }

  function displayCount(count) {
    var res = count / 100;
    if (res <= 10){
      document.getElementById("timer").innerHTML = "0" + res.toPrecision(count.toString().length)
    } else {
      document.getElementById("timer").innerHTML = res.toPrecision(count.toString().length)
    }

  }

  $('#start').on('click', function() {
    counter = setInterval(timer, 10);
  });

  $('#stop').on('click', function() {
    clearInterval(counter);
  });

  $('#reset').on('click', function() {
    clearInterval(counter);
    count = initial;
    displayCount(count);
  });

  displayCount(initial);
});
