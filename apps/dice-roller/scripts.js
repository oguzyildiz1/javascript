// we need two div elements
// create a function
// get the value of the amount of dice rolls
// we need a random number between 1 and 6
// then we print the dice images according to that random number
function rollDices() {
    const numOfDice = document.getElementById("dice-quantity").value;
    console.log(numOfDice)
    const rollDiv = document.getElementById("dice-rolls");
    const imgDiv = document.getElementById("images");

    const diceResArr = [] // zar sonuçlarını tutacak array
    const imgArr = []
    // kaç tane zar atılacaksa o kadar sonuç dönderecek
    for (x = 0; x < numOfDice; x++) {
        const diceRes = Math.floor(Math.random() * 6) + 1;
        diceResArr.push(diceRes);
        // result div elementine sonuçları yazdırmak:
        imgArr.push(`<img src="images/${diceRes}.png">`);
    }

    //dice result divine imgArr içindekileri yazdırmak
    //join metodu kullanılıyor
    rollDiv.textContent = `Results: ${diceResArr.join(", ")}`;

    imgDiv.innerHTML = imgArr.join("");
}
