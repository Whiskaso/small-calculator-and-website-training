//function calculating course price

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

// function for comunication with server, getting XML document - AJAX 

function printCoursesList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            generateTable(this);
        }
    };
    xhttp.open('GET', 'courses.xml', true);
    xhttp.send();
}

// generating table with courses from XML doc 

function generateTable(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = '<tr><th>Title</th><th>Author</th><th>Learning Area</th><th>Price</th></tr>';
    var x = xmlDoc.getElementsByTagName('COURSE');
    for (i = 0; i <x.length; i++) { 
        table += '<tr><td>' +
        x[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue +
        '</td><td>' +
        x[i].getElementsByTagName('AUTHOR')[0].childNodes[0].nodeValue +
        '</td><td>' +
        x[i].getElementsByTagName('LEARNINGAREA')[0].childNodes[0].nodeValue +
        '</td><td>' +
        x[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue +
        '</td></tr>';
    }
    document.getElementById('printTable').innerHTML = table; 
}
