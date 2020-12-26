'use strict';

let $leftFridgeDoor = $('#left_fridge_door');
let $rightFridgeDoor = $('#right_fridge_door');

// Stretch Goal get Fridge doors to close

// let $leftFridgeDoorOpen = $('#left_fridge_door_open');
// let $rightFridgeDoorOpen = $('#right_fridge_door_open');

$leftFridgeDoor.on('click', openLeftFridgeDoor);
$rightFridgeDoor.on('click', openRightFridgeDoor);
// $leftFridgeDoorOpen.on('click', closeLeftFridgeDoor);
// $rightFridgeDoorOpen.on('click', closeRightFridgeDoor);

function openLeftFridgeDoor(openEvent){
  openEvent.target.style.transform = 'rotateY(-90deg)';
  $('#left_fridge_door_open').show();
}

function openRightFridgeDoor(openEvent){
  openEvent.target.style.transform = 'rotateY(90deg)';
  $('#right_fridge_door_open').show();
}

// function closeLeftFridgeDoor(closeEvent){
//   closeEvent.target.style.transform = 'rotateY(-180deg)';
//   $('#left_fridge_door_open').hide();
// }

// function closeRightFridgeDoor(closeEvent){
//   closeEvent.target.style.transform = 'rotateY(-90deg)';
//   $('#right_fridge_door_open').hide();
// }
