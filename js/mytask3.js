
'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
    setup.classList.remove('hidden');
});

setupClose.addEventListener('click', function () {
    setup.classList.add('hidden');
});