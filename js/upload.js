'use strict';

(function () {
    var URL = 'https://js.dump.academy/code-and-magic';

    window.upload = function (data,onSuccess) {

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load',function () {
            onSuccess(xhr.response);
        });

        xhr.open('POST',URL);
        xhr.send(data);
    };

})();

(function () {
    var URL = 'https://js.dump.academy/code-and-magick/data';

    window.load = function (onSuccess,onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.open('GET',URL);

        xhr.addEventListener('load', function () {
            if (xhr.status === 200){
                onSuccess(xhr.response);
            } else {
                onError('Статус ответа: ' +
                    xhr.status + ' ' + xhr.statusText
                );
            }
        });
        xhr.addEventListener('error',function () {
            onError('Произошло ошибка соединения');
        });
        xhr.addEventListener('timeout', function () {
           onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });
        xhr.send();
    };
})();