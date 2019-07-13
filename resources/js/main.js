
var messageMain = 'Hello World';

// add swipe interaction with touchscreen

var pages = 2;
var counterOfPage = 0; //number of page

// document.body.addEventListener('touchmove', eventHandler);

    //if touchstart.target.tagName === 'footer' {
    // if (currentOfPage === 0)
    //      pageFirstForward();
    //      currentOfPage = 1
    // if (currentOfPage === 1)
    //      pageSecondForward();
//   // check distance move and add condition for low distance touches
     // check horizontal offset, instead locate horizontal switch
    //      currentOfPage = 2
//   // also neccesary turn off mouseevent interactions via preventDefault()
    //   function process_touchmove(ev) {
    //     ev.preventDefault();
    //   }
    //
// document.querySelector('footer').addEventListener('touchstart', functionActionDown(event));


// condition (swtch)
function switchHandler(switch) {
  if (switch === 'down') {
    if (currentOfPage === 1)
      pageFirstForward ()
    if (currentOfPage === 2)
      pageSecondForward ()
  } else if (switch === 'up') {
    if (currentOfPage === 0)
      pageFirstForward ();
    if (currentOfPage === 1)
      pageSecondForward ();
  }
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
      nav.classList.add('first-sections');
    } else if (direction === "backward") {
      chunks.forEach(function (chunk) {
          chunk.classList.remove('drown-first');
      });
      text.classList.remove('drown-first')
      nav.classList.remove('first-sections');
    }
      break;
    case 'second':
    if (direction === "forward") {
      chunks.forEach(function (chunk) {
          chunk.classList.add('drown-second');
      });
      text.classList.add('drown-second');
      nav.classList.add('second-sections');
    } else if (direction === "backward") {
      chunks.forEach(function (chunk) {
          chunk.classList.remove('drown-second');
      });
      text.classList.remove('drown-second');
      nav.classList.remove('second-sections');
    }
      break;
  }
};



function pageFirstForward() {
  debugger
  // change page
  document.querySelector('.parralax').classList.add('first');
  // sidebar indicator
  document.getElementById('point-one-orange').classList.remove('toggle-on');
  document.getElementById('point-two-orange').classList.add('toggle-on');
  // transition of stones simultaneosly
  moveElements('first', 'forward');
  // transition
  // counterOfPage = 1;

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
