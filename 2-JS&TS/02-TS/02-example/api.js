"use strict";
exports.__esModule = true;
exports.myPromise = void 0;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/nikolaslopes');
xhr.send(null);
var myPromise = function () {
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    console.log("The request code is ".concat(xhr.status));
                }
                else {
                    reject('Failed');
                }
            }
        };
    });
};
exports.myPromise = myPromise;
