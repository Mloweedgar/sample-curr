let currencyConverter =  () => {

        return fetch('https://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP&compact=y')
            .then(res => res.json())
            .then(data => {
                console.log('testing conv');
                console.log(data);
            });
}

let getCurrency = () => {
   return fetch('https://free.currencyconverterapi.com/api/v5/currencies')
       .then(res => res.json())
       .then(data => {
           let rslt = data.results;
           initializeSelect1(rslt);
           initializeSelect2(rslt);
       });
};


let initializeSelect1 = (currency = {}) => {
    let select1 = document.getElementById('CURR_FR');
    console.log(currency);
    for (let curr in currency) {
        let option = document.createElement('option');
        option.value = curr;
        option.text = curr;
        select1.appendChild(option);
    }

}

let initializeSelect2 = (currency = {}) => {
    let select2 = document.getElementById('CURR_TO');
    console.log(currency);
    for (let curr in currency) {
        let option = document.createElement('option');
        option.value = curr;
        option.text = curr;
        select2.appendChild(option);
    }

}

currencyConverter();
getCurrency();