'use strict';

var currencyConverter = function currencyConverter() {

    return fetch('https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP&compact=y').then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log('testing conv');
        console.log(data);
    });
};

var getCurrency = function getCurrency() {
    return fetch('https://free.currencyconverterapi.com/api/v5/currencies').then(function (res) {
        return res.json();
    }).then(function (data) {
        var rslt = data.results;
        initializeSelect1(rslt);
        initializeSelect2(rslt);
    });
};

var initializeSelect1 = function initializeSelect1() {
    var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var select1 = document.getElementById('CURR_FR');
    console.log(currency);
    for (var curr in currency) {
        var option = document.createElement('option');
        option.value = curr;
        option.text = curr;
        select1.appendChild(option);
    }
};

var initializeSelect2 = function initializeSelect2() {
    var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var select2 = document.getElementById('CURR_TO');
    console.log(currency);
    for (var curr in currency) {
        var option = document.createElement('option');
        option.value = curr;
        option.text = curr;
        select2.appendChild(option);
    }
};

currencyConverter();
getCurrency();
