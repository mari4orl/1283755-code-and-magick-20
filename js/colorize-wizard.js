'use strict';
window.colorizeWizard = (function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name=coat-color]');
  var eyesColorInput = document.querySelector('input[name=eyes-color]');
  var fireballColorInput = document.querySelector('input[name=fireball-color]');
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_WRAP_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
  }
  function changeColor(subject, colorArr, input) {
    subject.addEventListener('click', function () {
      var color = colorArr[getRandomInt(0, colorArr.length)];
      subject.style.fill = color;
      input.value = color;
    });
  }

  fireballWrap.addEventListener('click', function () {
    var color = FIREBALL_WRAP_COLOR[getRandomInt(0, FIREBALL_WRAP_COLOR.length)];
    fireballWrap.style.background = color;
    fireballColorInput.value = color;
  });

  changeColor(wizardCoat, WIZARD_COAT_COLOR, coatColorInput);
  changeColor(wizardEyes, WIZARD_EYES_COLOR, eyesColorInput);
})();
