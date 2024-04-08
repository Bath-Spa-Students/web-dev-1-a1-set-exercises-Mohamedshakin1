//Created a function named calculate()
function calculate() {
    var price_per_litre = document.getElementById('Petrol_Price').value;   // Petrol Price value will be retrieve by user input and will be stored in variable price_per_litre
    var litres = document.getElementById('liters').value;    // liters value will be retrieve by user input and will be stored vin ariable price_per_litre
    var total_price = price_per_litre * litres              // it calculates the total amount of petrol purchased and value will be stored in variable total_price
    document.getElementById('total_Amount').innerHTML = "AED " + total_price;    // value of variable total_price will be inserted to Id selector of 'total_Amount'

}