'use strict';
(function () {

    // var NAMES = ["Иван","Хуан Себастьян","Мария","Кристоф","Виктор","Юлия","Люпита","Вашингтон"];
    // var FAMILIES = ["да Марья","Верон","Мирабелла","Вальц","Онопко","Топольницкая","Нионго","Ирвинг"];
    // var COLORS = [
    //     "rgb(101, 137, 164)",
    //     "rgb(241, 43, 107)",
    //     "rgb(146, 100, 161)",
    //     "rgb(56, 159, 117)",
    //     "rgb(215, 210, 55)",
    //     "rgb(0, 0, 0)"
    // ];
    //
    // var generateWizards = function(count){
    //     var wizards = [];
    //     for (var i = 0; i < count; i++){
    //         wizards[i] = {
    //             wizardName: NAMES[Math.floor(Math.random()*7)] + " " + FAMILIES[Math.floor(Math.random()*7)],
    //             coatColor: COLORS[Math.floor(Math.random()*5)],
    //         };
    //
    //     }
    //     return wizards;
    // };
    //
    // var wizards = generateWizards(4);

    var userDialog = document.querySelector('.setup');
//userDialog.classList.remove('hidden');

    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content.querySelector('.setup-similar-item');

    var renderWizard = function(wizard){
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        return wizardElement;
    };

    var successHandler = function (wizards) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 4; i++){
            fragment.appendChild(renderWizard(wizards[i]));
        }

        similarListElement.appendChild(fragment);

        userDialog.querySelector('.setup-similar').classList.remove('hidden');
    };

    var errorHandler = function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100;margin: 0 auto;text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin',node);
    };

    window.load(successHandler,errorHandler);

    // var fragment = document.createDocumentFragment();
    // for (var i = 0; i < wizards.length; i++){
    //     fragment.appendChild(renderWizard(wizards[i]));
    // }
    //
    // similarListElement.appendChild(fragment);
    //
    // userDialog.querySelector('.setup-similar').classList.remove('hidden');

    var form = userDialog.querySelector('.setup-wizard-form');
    form.addEventListener('submit', function (evt) {
       window.upload(new FormData(form),function (response) {
           userDialog.classList.add('hidden');
       });
       evt.preventDefault();
    });
})();

