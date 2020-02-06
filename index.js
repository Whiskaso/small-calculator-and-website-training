function getInputValue() {

    var coursePriceInDollars = document.getElementById('priceInput').value;     // variable with price course 

    var coursePriceInZl = coursePriceInDollars * 3.86;         

    if (coursePriceInZl > 300) {
        document.write('DONT BUY IT !');
    } else {
        alert('You can buy it ;)');
    }
    
}



console.log(coursePriceInZl);

console.log(coursePriceInDollars);

