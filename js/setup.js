
'use strict';

var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function(evt){
  if (evt.keyCode === 27){
      closePopup();
  }
};

var openPopup = function(evt){
    setup.classList.remove('hidden');
    document.addEventListener('keydown',onPopupEscPress);
};

var closePopup = function(evt){
    setup.classList.add('hidden');
    document.removeEventListener('keydown',onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
    openPopup();
});
setupOpen.addEventListener('keydown',function (evt) {
    if (evt.keyCode === 13){
        openPopup();
    }
});

setupClose.addEventListener('click', function () {
    closePopup();
});

setupClose.addEventListener('keydown',function (evt) {
    if (evt.keyCode === 13){
        closePopup();
    }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validity.tooShort){
        userNameInput.setCustomValidity("Имя должно состоять минимум из 2-х символов");
    } else if (userNameInput.validity.tooLong){
        userNameInput.setCustomValidity("Имя не должно превышать 25-ти символов");
    } else if (userNameInput.validity.valueMissing){
        userNameInput.setCustomValidity("Обязательное поле");
    }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
    var color = COAT_COLOR[Math.floor(Math.random()*6)];
    wizardCoat.style.fill = color;
    document.querySelector('input[name=coat-color]').setAttribute('value',color);
});

wizardEyes.addEventListener('click', function () {
    var color = EYES_COLOR[Math.floor(Math.random()*5)];
    wizardEyes.style.fill = color;
    document.querySelector('input[name=eyes-color]').setAttribute('value',color);
});

setupFireball.addEventListener('click', function () {
    var color = FIREBALL_COLOR[Math.floor(Math.random()*5)];
    setupFireball.style.backgroundColor = color;
    document.querySelector('input[name=fireball-color]').setAttribute('value',color);
});