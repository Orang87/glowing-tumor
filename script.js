const letterToNumber = (letter) => letter.toLowerCase().charCodeAt(0) - 97 + 1; //letter to number
const numberToLetter = (number) => String.fromCharCode(97 + number).toUpperCase(); //number to letter


document.addEventListener("click", sweepClick);
var bombs = [];
let isAlive = true;
function sweepClick() {
    var lastClicked = event.srcElement.id;
    if (isAlive) {
        for (let i = 0; i < bombs.length; i++) {

            if (lastClicked == bombs[i]) {
                
                const image = document.getElementById("lil-fella");
                image.src = "sad.png";
                isAlive = false;
            }
        } 
        var lastClickedMineCount = 0;
        //console.log(lastClicked.split(""));
       var clickRow = lastClicked.split("")[0];
        var clickCol = lastClicked.split("")[1];
        for (let i = 0; i < bombs.length; i++) {
            if (Number(letterToNumber(clickRow) + clickCol) - 11 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
            if (Number(letterToNumber(clickRow) + clickCol) - 10 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
            if (Number(letterToNumber(clickRow) + clickCol) - 9 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
            if (Number(letterToNumber(clickRow) + clickCol) - 1 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
            if (Number(letterToNumber(clickRow) + clickCol) + 1 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
            if (Number(letterToNumber(clickRow) + clickCol) + 9 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
            if (Number(letterToNumber(clickRow) + clickCol) + 10 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
            if (Number(letterToNumber(clickRow) + clickCol) + 11 == letterToNumber(bombs[i].split("")[0]) + bombs[i].split("")[1]) lastClickedMineCount++;
        }
        console.log(lastClickedMineCount);

        document.getElementById(lastClicked).innerHTML = lastClickedMineCount;
          
        




    }
    
    
    
}
var mineCount = 10;
function placeBombs() {
    
    var firstChar;
    var secondChar;
    var buttonId;
    while (mineCount > 0) {

        firstChar = Math.floor(Math.random() * 9);
        firstChar = numberToLetter(firstChar);
       
        
        secondChar = Math.floor(Math.random() * 9)+1;
        
        buttonId = firstChar + secondChar;
        
        const notEquals = (currentValue) => currentValue != buttonId;
        if (bombs.every(notEquals)) {
            bombs.push(buttonId);
            mineCount--;
        } 
        
    }

    
}
function cheat() {
    for (let i = 0; i < bombs.length; i++) {
        document.getElementById(bombs[i]).innerHTML = "bomb";
        
    }
}


window.addEventListener("load", placeBombs);


