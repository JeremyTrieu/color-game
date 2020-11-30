function createRandomColors() {
    var array = [];
    var random2;
    var num1 = (Math.floor(Math.random() * 256)).toString();
    var num2 = (Math.floor(Math.random() * 256)).toString();
    var num3 = (Math.floor(Math.random() * 256)).toString();
    var random ="rgb(" +  num1 + ", " + num2 + ", " + num3 + ")";
    array.push(random);
    if (Math.max(parseInt(num1), parseInt(num2), parseInt(num3)) == parseInt(num1)) {
      var newNum2 = parseInt(num2) + 15;
      var newNum3 = parseInt(num3) + 10;
      random2 = "rgb(" +  num1 + ", " + newNum2.toString() + ", " + newNum3.toString() + ")";
      array.push(random2);
    }
    if (Math.max(parseInt(num1), parseInt(num2), parseInt(num3)) == parseInt(num2)) {
      var newNum1 = parseInt(num1) + 10;
      var newNum3 = parseInt(num3) + 10;
      random2 = "rgb(" +  newNum1.toString() + ", " + num2 + ", " + newNum3.toString() + ")";
      array.push(random2);
    }
    if (Math.max(parseInt(num1), parseInt(num2), parseInt(num3)) == parseInt(num3)) {
      var newNum1 = parseInt(num1) + 15;
      var newNum2 = parseInt(num2) + 10;
      random2 = "rgb(" +  newNum1.toString() + ", " + newNum2.toString() + ", " + num3 + ")";
      array.push(random2);
    }
    return array;
}


function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function checkUpgradeLevel(level, container) {
  if (level == 10) {
    increasedLevel10 = true;
    for (var i =0; i < 5; i++) {
      var newCircle10 = document.createElement("div");
      newCircle10.className = "circle";
      container.appendChild(newCircle10);
    }
    var temp = document.querySelectorAll(".circle");
    reformatCircle(temp);
  }
  else if (level == 20) {
    increasedLevel20 = true;
    for (var i =0; i < 7; i++) {
      var newCircle10 = document.createElement("div");
      newCircle10.className = "circle";
      container.appendChild(newCircle10);
    }
    var temp = document.querySelectorAll(".circle");
    reformatCircle(temp);
  }
  circles = document.querySelectorAll(".circle");
  return circles;
  /*if (num >= 20) {
    for (var i =0; i < 7; i++) {
      var newCircle20 = document.createElement("div");
      newCircle20.className = "circle";
      circles.push(newCircle20);
    }
  }*/
}

function reformatCircle(circleArray) {
  if (circleArray.length == 9) {
    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].style.width = "30%";
      circleArray[i].style.paddingBottom = "30%";
      /*width: 48%;
      background: orange;
      padding-bottom: 48%;
      float: left;
      margin: 0.5%;
      border-radius: 50%;*/
    }
  }
  else if (circleArray.length == 16) {
    for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].style.width = "24%";
      circleArray[i].style.paddingBottom = "24%";
      /*width: 48%;
      background: orange;
      padding-bottom: 48%;
      float: left;
      margin: 0.5%;
      border-radius: 50%;*/
    }
  }
}
function doWhenUserRight(circleArray) {
  levelNumber.textContent = (parseInt(levelNumber.textContent) + 1).toString();
  circleArray = checkUpgradeLevel(parseInt(levelNumber.textContent), container);
  colors = createRandomColors();
  keyColor = colors[1];
  keySquare = circleArray[getRandomIndex(circleArray.length)];
  for (var i = 0; i < circleArray.length; i++) {
    if (circleArray[i] != keySquare) {
      circleArray[i].style.backgroundColor = colors[0];
    }
    else circleArray[i].style.backgroundColor = keyColor;
  }
  return circleArray;

}

function functionA(e, circleArray) {
  if (e.target != keySquare) {

    timeCountDown.textContent = (parseInt(timeCountDown.textContent) - 1).toString();
  }
  else {
    console.log("hello");
    circleArray = doWhenUserRight(circleArray);
    if (increasedLevel10 == true) {
      increasedLevel10 = false;
      mainPlayground(circleArray, doWhenUserRight);
    }
    if (increasedLevel20 == true) {
      increasedLevel20 = false;
      mainPlayground(circleArray, doWhenUserRight);
    }
  }
}

function mainPlayground(circleArray, doWhenUserRight) {
  for (var i =0; i < circleArray.length; i++) {
    circleArray[i].removeEventListener("click", functionA);
    circleArray[i].addEventListener("click", functionA);
  }
}

var colors = createRandomColors();
var keyColor = colors[1];
var circles = document.querySelectorAll(".circle");
/*var arrayCircle = [];
arrayCircle.push(document.querySelector("#circle1"));
arrayCircle.push(document.querySelector("#circle2"));
arrayCircle.push(document.querySelector("#circle3"));
arrayCircle.push(document.querySelector("#circle4"));*/

var keySquare = circles[getRandomIndex(circles.length)];
var levelNumber = document.querySelector("#level");
var timeCountDown = document.querySelector("#time-countdown");
var startButton = document.querySelector("#start-button");
var pauseButton = document.querySelector("#pause-button");
var container = document.querySelector("#container");
var timer
var tempCount = timeCountDown.textContent;
var isPaused = false;
var increasedLevel10 = false;
var increasedLevel20 = false;

//keySquare.style.backgroundColor = keyColor;
for (var i = 0; i < circles.length; i++) {
  if (circles[i] != keySquare) {
    circles[i].style.backgroundColor = colors[0];
  }
  else circles[i].style.backgroundColor = keyColor;

}




/*for (var i =0; i < circles.length; i++) {
  circles[i].addEventListener("click", function myFunction(e) {
    if (e.target != keySquare) {
      timeCountDown.textContent = (parseInt(timeCountDown.textContent) - 1).toString();
    }
    else {
      levelNumber.textContent = (parseInt(levelNumber.textContent) + 1).toString();
      checkUpgradeLevel(parseInt(levelNumber.textContent), container);
      colors = createRandomColors();
      keyColor = colors[1];
      circles = document.querySelectorAll(".circle");
      keySquare = circles[getRandomIndex(circles.length)];
      for (var i = 0; i < circles.length; i++) {
        if (circles[i] != keySquare) {
          circles[i].style.backgroundColor = colors[0];
        }
        else circles[i].style.backgroundColor = keyColor;
      }

    }

  });
}*/

startButton.addEventListener("click", function() {
    timeCountDown.textContent = 60;
    levelNumber.textContent = 1;
    clearInterval(timer);
    timer = setInterval(function() {
    if (parseInt(timeCountDown.textContent) <= 0) {
      //Annoucement of gameover
      var newDiv = document.createElement("div");
      newDiv.style.position = "absolute";
      newDiv.style.backgroundColor = "white";
      newDiv.style.padding = "20%";
      newDiv.style.maxWidth = "400px";
      newDiv.style.textAlign = "center";
      newDiv.style.right = "26%";
      newDiv.style.top = "20%";
      newDiv.style.height = "10px";
      //newDiv.style.width = "50%";
      newDiv.style.zIndex = "100";
      var newContent = document.createTextNode("GAME OVER");
      var newButton = document.createElement("BUTTON");
      newButton.addEventListener("click", function() {
        window.location = 'interface.html';
      });
      newButton.innerHTML = "REPLAY";
      levelNumber.style.fontSize = "120px";
      newDiv.appendChild(levelNumber);
      newDiv.appendChild(newContent);
      newDiv.appendChild(newButton);
      levelNumber.style.float = "top";
      //newContent.style.fontSize = "large";
      //newContent.style.textAlign = "center";
      //newButton.style.fontSize = "large";
      document.body.appendChild(newDiv);
    }
    else {
      timeCountDown.textContent = (parseInt(timeCountDown.textContent) - 1).toString();

      }

  }, 900);

  pauseButton.addEventListener("click", function() {
    //timeCountDown.textContent = tempCount;
    if (isPaused != true) {
      clearInterval(timer);
      pauseButton.textContent = "RESUME";
      isPaused = true;
      tempCount = timeCountDown.textContent;

    }
    else {
      pauseButton.textContent = "PAUSE";
      timeCountDown.textContent = tempCount;
      isPaused = false;
      timer = setInterval(function() {
      if (parseInt(timeCountDown.textContent) <= 0) {
        //Annoucement of gameover
      }
      else {
        timeCountDown.textContent = (parseInt(timeCountDown.textContent) - 1).toString();
        if (parseInt(timeCountDown.textContent) <= 0) {
          //Annoucement of gameover
          var newDiv = document.createElement("div");
          newDiv.style.position = "absolute";
          newDiv.style.backgroundColor = "white";
          newDiv.style.padding = "20%";
          newDiv.style.maxWidth = "400px";
          newDiv.style.textAlign = "center";
          newDiv.style.right = "26%";
          newDiv.style.top = "20%";
          newDiv.style.height = "10px";
          //newDiv.style.width = "50%";
          newDiv.style.zIndex = "100";
          var newContent = document.createTextNode("GAME OVER");
          var newButton = document.createElement("BUTTON");
          newButton.addEventListener("click", function() {
            window.location = 'interface.html';
          });
          newButton.innerHTML = "REPLAY";
          levelNumber.style.fontSize = "120px";
          newDiv.appendChild(levelNumber);
          newDiv.appendChild(newContent);
          newDiv.appendChild(newButton);
          levelNumber.style.float = "top";
          //newContent.style.fontSize = "large";
          //newContent.style.textAlign = "center";
          //newButton.style.fontSize = "large";
          document.body.appendChild(newDiv);
        }
        }

    }, 900);
    }
  });

mainPlayground(circles, doWhenUserRight);




   /*for (var i =0; i < circles.length; i++) {
    circles[i].addEventListener("click", function() {
      if (circles[i] != keySquare) {
        timeCountDown.textContent = (parseInt(timeCountDown.textContent) - 1).toString();
      }
      else {
        colors = createRandomColors();
        keyColor = colors[1];
        circles = document.querySelectorAll(".circle");
        keySquare = circles[getRandomIndex(4)];
        timeCountDown.textContent = 60;
      }
    });


  }*/


});
