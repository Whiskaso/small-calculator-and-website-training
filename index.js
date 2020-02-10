function calculatingPrice() {

    var coursePrice = document.getElementById('priceInput').value;     // variable with price course from input 

    var currency = document.getElementById('currency').value;       // variable with currency from select 

    if (currency == 'PLN') {
        currency = 1;
    } else if (currency == 'USD') {
        currency = 3.19;
    } else if (currency == 'GBP') {
        currency = 5.05;
    } else if (currency == 'CHF') {
        currency = 4;
    } else if (currency == 'CZK') {
        currency = 0.17;
    }

    var coursePriceInPln = coursePrice * currency;  
    
    if (coursePriceInPln > 300) {
        document.getElementById('placeForPrice').innerHTML = 'DONT BUY IT ! The price is ' + Math.round(coursePriceInPln) + 'PLN !';
    } else {
        document.getElementById('placeForPrice').innerHTML = 'You can buy it ;) The price is ' + Math.round(coursePriceInPln) + 'PLN !';
    }
}

