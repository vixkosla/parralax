var message = 'Hello World';

var pages = 2;
var counterOfPage = 0; //number of page

var touchsurface = document.querySelector('body'),
swipedir,
startX,
startY,
distX,
distY,
threshold = 150, //required min distance traveled to be considered swipe
restraint = 100, // maximum distance allowed at the same time in perpendicular direction
allowedTime = 300, // maximum time allowed to travel that distance
elapsedTime,
startTime,
// swap event block

touchsurface.addEventListener('touchstart', function(e){
      if (e.target.tagName === 'footer'){
        if (counterOfPage === 0) {
             pageFirstForward();
             counterOfPage = 1
        } else if (counterOfPage === 1) {
             pageSecondForward();
             counterOfPage = 2;
        } return undefined;
        e.preventDefault();
      }

      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface

      e.preventDefault()
  }, false)

touchsurface.addEventListener('touchmove', function(e){
    e.preventDefault() // prevent scrolling when inside DIV
}, false)

touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
    distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    if (elapsedTime <= allowedTime){ // first condition for awipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
            swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
        }
        else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
            swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        }
    }
    swapHandler(swipedir)

    e.preventDefault()
}, false)

// logic block

function swapHandler(swap) {
  if (swap === 'down') {
    if (counterOfPage === 0)
      pageFirstForward ();
    else if (counterOfPage === 1)
      pageSecondForward ();
  } else if (swap === 'up') {
    if (counterOfPage === 1)
      pageFirstBackward ();
    else if (counterOfPage === 2)
      pageSecondBackward ();
  }
}

function pageFirstForward() {
  // change page
  document.querySelector('.parralax').classList.add('first');
  // sidebar indicator
  document.getElementById('point-one-orange').classList.remove('toggle-on');
  document.getElementById('point-two-orange').classList.add('toggle-on');
  // transition of stones and header <h2> simultaneosly
  moveElements('first', 'forward');
  // transition
  counterOfPage = 1;
};

function pageSecondForward() {
  document.querySelector('.parralax').classList.add('second');

  document.getElementById('point-two-orange').classList.remove('toggle-on');
  document.getElementById('point-three-orange').classList.add('toggle-on');

  moveElements('second', 'forward');

  counterOfPage = 2;
};

function pageSecondBackward() {
  document.querySelector('.parralax').classList.remove('second');

  document.getElementById('point-three-orange').classList.remove('toggle-on');
  document.getElementById('point-two-orange').classList.add('toggle-on');

  moveElements('second', 'backward');

  counterOfPage = 1;
};

function pageFirstBackward() {
  document.querySelector('.parralax').classList.remove('first');

  document.getElementById('point-two-orange').classList.remove('toggle-on');
  document.getElementById('point-one-orange').classList.add('toggle-on');

  moveElements('first', 'backward');

  counterOfPage = 0;
};

function moveElements(page, direction) {
  // get four stones
  var chunks = document.querySelectorAll('.chunk');
  // h2 from second page
  var text = document.getElementById('pathogenesis');

  switch (page) {
    case 'first':
    if (direction === "forward") {
      chunks.forEach(function (chunk) {
          chunk.classList.add('drown-first');
      });
      text.classList.add('drown-first');
    } else if (direction === "backward") {
      chunks.forEach(function (chunk) {
          chunk.classList.remove('drown-first');
      });
      text.classList.remove('drown-first')
    }
      break;
    case 'second':
    if (direction === "forward") {
      chunks.forEach(function (chunk) {
          chunk.classList.add('drown-second');
      });
      text.classList.add('drown-second')
    } else if (direction === "backward") {
      chunks.forEach(function (chunk) {
          chunk.classList.remove('drown-second');
      });
      text.classList.remove('drown-second')
    }
      break;
  }
};
