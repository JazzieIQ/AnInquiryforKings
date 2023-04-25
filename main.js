// A Bridge Too Far: The Kings Inquiry HTML/Text Based Game.

// Key phrasing

const kinglyAnswer = '"African or European?"';
let count = 0;
let rateCount = 0;
const rateSuccessArray = [];
const win = 1;
const lose = 0;
    
//updateDOM

const updateDOM = (kingsInquiry) => {
    if (kingsInquiry == "African or European?") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "I am King I'm supposed to know these things.") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "a kingly answer") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "five") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "Holy Hand Grenade of Antioch") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "I am Authur, King of the Britains.") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "I am your King.") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "You don't vote for kings.") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "Be quiet!") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "Now, stand aside worthy adversary!") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "On second thought, let's not go to Camelot. 'Tis a silly place.") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }    
    else {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The hour is past and thou art DOOMED!!!!!"
        divEl.appendChild(p);
        alert("THOU HAST FAILED THE KING!");
        rateCount;
        rateSuccessArray.push(lose);
        return;
    }
}

let buttonCount = document.getElementById("replay").replay.onclick = function () {
    count;
    count += 1;
    replay.innerHTML = "Attempt: " + count;
    return count;
};

//update the DOM
const updateDOMArray = (kingsInquiry) => {
        let divEl = document.querySelector('#array')
        let a = document.createElement('a')
    a.textContent = '"' + "The King's answer was: " + "'" + kingsInquiry + "' " + '"; '
    divEl.appendChild(a);
        return;
        }

// Play the game/ attemp again

document.querySelector('#replay').addEventListener('click', () => {
    buttonCount;
    let kingsInquiry = window.prompt("Consider wisley as thou speaks for the King...", "I am King I'm supposed to know these things.");
    let scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
    scribe;
    kinglyAnswer;
    updateDOM(kingsInquiry);

    //div "output" split into array. Array increase with attempt.

    updateDOMArray(kingsInquiry);
    const kingsRecord = (document.getElementById("array")).textContent.split('; ');
    const noNullKingsArray = kingsRecord.filter(element => element !== '');
    console.log(noNullKingsArray);
    noNullKingsArray.push('I told you that you were doomed! Oh but nobody listens to me!');
    
    // calculate success rate
    
    const rateSuccess = (rateCount / count) * 100;
    const ratePercent = math.round(rateSuccess) + "%";
    

    // Give success rate Array with For Loop.
    let i = 0;
    let sumSuccesses = 0;
    let appendDivElRate = "; Success Rates Array: ";
    let appendSuccessArray = "; The scribe has thou averaged plainy: ";
        for (i = 0; i < rateSuccessArray.length; i++) {
        sumSuccesses = sumSuccesses + rateSuccessArray[i];
    };
    console.log(sumSuccesses)
    let rateCounting = sumSuccesses / count;
    const success = rate.innerHTML = "Success: " + ratePercent + appendDivElRate + rateSuccessArray + appendSuccessArray + rateCounting;
    success;
});

//refresh Output div. All code is reset including the array.

document.querySelector('#refresh').addEventListener('click', () => {
    document.getElementById("output").innerHTML = "";
});