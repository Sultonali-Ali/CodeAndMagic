'use strict';

var NAMES = ["Иван","Хуан Себастьян","Мария","Кристоф","Виктор","Юлия","Люпита","Вашингтон"];
var FAMILIES = ["да Марья","Верон","Мирабелла","Вальц","Онопко","Топольницкая","Нионго","Ирвинг"];
var COLORS = [
"rgb(101, 137, 164)",
    "rgb(241, 43, 107)",
    "rgb(146, 100, 161)",
    "rgb(56, 159, 117)",
    "rgb(215, 210, 55)",
    "rgb(0, 0, 0)"
];

var generateWizards = function(count){
    var wizards = [];
    for (var i = 0; i < count; i++){
        wizards[i] = {
            wizardName: NAMES[Math.floor(Math.random()*7)] + " " + FAMILIES[Math.floor(Math.random()*7)],
            coatColor: COLORS[Math.floor(Math.random()*5)],
        };

    }
    return wizards;
};

var wizards = generateWizards(4);

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var renderWizard = function(wizard){
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.wizardName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++){
    fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

