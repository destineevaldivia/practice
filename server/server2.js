//Practice using Jest to test your funciton 

function  clothingRecommendation(temp, weather){

    let clothing = "";

    if((temp <= 0 && weather === "Snowy")) {
        clothing = "Wear a heavy coat and gloves.";
    } else if(temp <= 10 && weather === "Rainy") {
        clothing = "Wear a raincoat and boots.";
    }  else if(temp > 10 && temp < 20 && weather === "Sunny") {
        clothing = "Wear a light jacket.";
    } else if(temp >= 20 && weather === "Sunny"){
        clothing = "Wear shorts and a t-shirt."
    } else {
        clothing = "Wear regular clothes.";
    }
    return clothing;
}

module.exports = clothingRecommendation;
