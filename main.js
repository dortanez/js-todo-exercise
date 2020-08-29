// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countDown(num) {
    let timer = setInterval(function() {
        if(num <  0) {
            console.log('DONE!');
            clearInterval(timer);
        } else {
            console.log(num)
            num--;
        } 
    },1000)
}

countDown(5);


//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
    let counter = 0;
    let timer = setInterval(function() {
        let num = Math.random().toFixed(2);
        if(num < .75) {
            console.log(num);
            counter++;
        } else {
            counter++;
            clearInterval(timer);
            console.log(num);
            console.log('Number of tries it took to find a number greater than .75:',counter);
        }
    },1000)
    
}

randomGame();