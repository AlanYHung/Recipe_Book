'use strict';

let $leftFridgeDoor = $('#left_fridge_door');
let $rightFridgeDoor = $('#right_fridge_door');
let $leftFridgeDoorOpen = $('#left_fridge_door_open');
let $rightFridgeDoorOpen = $('#right_fridge_door_open');

$leftFridgeDoor.on('click', openFridgeDoor);
$rightFridgeDoor.on('click', openFridgeDoor);
$leftFridgeDoorOpen.on('click', closeFridgeDoor);
$rightFridgeDoorOpen.on('click', closeFridgeDoor);

function openFridgeDoor(){
  $leftFridgeDoor.hide();
  $rightFridgeDoor.hide();
  $('#left_fridge_door_open').show();
  $('#right_fridge_door_open').show();
}

function closeFridgeDoor(){
  $leftFridgeDoor.show();
  $rightFridgeDoor.show();
  $('#left_fridge_door_open').hide();
  $('#right_fridge_door_open').hide();
}
