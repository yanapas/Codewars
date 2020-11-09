//https://www.codewars.com/kata/57b58827d2a31c57720012e8

function fuelPrice(litres, pricePerLiter) {
    if(litres > 9) return Number((litres * (pricePerLiter - 0.25)).toFixed(2));
    if(litres > 7) return Number((litres * (pricePerLiter - 0.20)).toFixed(2));
    if(litres > 5) return Number((litres * (pricePerLiter - 0.15)).toFixed(2));
    if(litres > 3) return Number((litres * (pricePerLiter - 0.10)).toFixed(2));
    if(litres > 1) return Number((litres * (pricePerLiter - 0.5)).toFixed(2));
    return litres * pricePerLiter;
}