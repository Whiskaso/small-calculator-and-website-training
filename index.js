function getInputsValues() {

    var coursePriceInDollars = document.getElementById('priceInput').value;     // variable with price course from first input 

    var currencyToPln = document.getElementById('currencyInput').value;         //variable with currency calculated to PLN from second input

    var coursePriceInZl = coursePriceInDollars * currencyToPln;         
    
    if (coursePriceInZl > 300) {
        document.getElementById('placeForPrice').innerHTML = 'DONT BUY IT ! The price is ' + coursePriceInZl + 'zł !';
    } else {
        document.getElementById('placeForPrice').innerHTML = 'You can buy it ;) The price is ' + coursePriceInZl + 'zł !';
    }
}

