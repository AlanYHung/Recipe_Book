'use strict';

/* ======================================================================= */
/* ================== Fridge Animation Event Listener ==================== */
/* ======================================================================= */


let $leftFridgeDoor = $('#left_fridge_door');
let $rightFridgeDoor = $('#right_fridge_door');
let $leftFridgeDoorOpen = $('#left_fridge_door_open');
let $rightFridgeDoorOpen = $('#right_fridge_door_open');
let $clickText = $('#click_me_modal_text');
let $clickModal = $('#click_me_modal');
let $overlayModal = $('#modal_overlay');


$leftFridgeDoor.on('click', openFridgeDoor);
$rightFridgeDoor.on('click', openFridgeDoor);
$leftFridgeDoorOpen.on('click', closeFridgeDoor);
$rightFridgeDoorOpen.on('click', closeFridgeDoor);
$clickText.on('click', openFridgeDoor);
$clickModal.on('click', openFridgeDoor);
$overlayModal.on('click', openFridgeDoor);

function openFridgeDoor(){
  $leftFridgeDoor.hide();
  $rightFridgeDoor.hide();
  $clickModal.hide();
  $clickText.hide();
  $overlayModal.hide();
  $('#left_fridge_door_open').show();
  $('#right_fridge_door_open').show();
}

function closeFridgeDoor(){
  $leftFridgeDoor.show();
  $rightFridgeDoor.show();
  $('#left_fridge_door_open').hide();
  $('#right_fridge_door_open').hide();
  $clickModal.show();
  $clickText.show();
  $overlayModal.show();
}
