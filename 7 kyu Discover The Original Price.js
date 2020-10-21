//https://www.codewars.com/kata/552564a82142d701f5001228

function discoverOriginalPrice(discountedPrice, salePercentage){
    let originalPrice = discountedPrice / (1 - (salePercentage / 100));
    return Number(originalPrice.toFixed(2));
}