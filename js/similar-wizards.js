'use strict';
window.similarWizards = (function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardNumber = 4;

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
  }

  function generateWizard(amount) {
    var wizards = [];
    for (var i = 0; i < amount; i++) {
      var wizard = {
        name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length)],
        coatColor: WIZARD_COAT_COLOR[getRandomInt(0, WIZARD_COAT_COLOR.length)],
        eyesColor: WIZARD_EYES_COLOR[getRandomInt(0, WIZARD_EYES_COLOR.length)]
      };
      wizards[i] = wizard;
    }
    return wizards;
  }

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }

  function renderWizards(wizardsArray, destination) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < wizardsArray.length; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    destination.appendChild(fragment);
  }
  var wizards = generateWizard(wizardNumber);
  // userDialog.classList.remove('hidden');
  renderWizards(wizards, similarListElement);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
