// A Bridge Too Far: The Kings Inquiry HTML/Text Based Game.

// Key phrasing

const kinglyAnswer = '"African or European?"';
var count = 0;
var rateCount = 0;
const rateSuccessArray = [];
const win = 1;
const lose = 0;
    
//updateDOM

const updateDOM = (kingsInquiry) => {
    if (kingsInquiry == "African or European?") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        //console.log(rateCount);
        return;
    }
    else if (kingsInquiry == "I am King I'm supposed to know these things.") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        //console.log(rateCount);
        return;
    }
    else if (kingsInquiry == "a kingly answer") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "five") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "Holy Hand Grenade of Antioch") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "I am Authur, King of the Britains.") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "I am your King.") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "You don't vote for kings.") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "Be quiet!") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "Now, stand aside worthy adversary!") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }
    else if (kingsInquiry == "On second thought, let's not go to Camelot. 'Tis a silly place.") {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        return;
    }    
    else {
        var divEl = document.querySelector('#output')
        var p = document.createElement('p')
        p.textContent = "The hour is past and thou art DOOMED!!!!!"
        divEl.appendChild(p);
        alert("THOU HAST FAILED THE KING!");
        rateCount;
        rateSuccessArray.push(lose);
        return;
    }
}

var buttonCount = document.getElementById("replay"),
  count;
replay.onclick = function() {
  count += 1;
    replay.innerHTML = "Attempt: " + count;
    return count;
};

//update the DOM
const updateDOMArray = (kingsInquiry) => {
        var divEl = document.querySelector('#array')
        var a = document.createElement('a')
    a.textContent = '"' + "The King's answer was: " + "'" + kingsInquiry + "' " + '"; '
    divEl.appendChild(a);
        return;
        }

// Play the game/ attemp again

document.querySelector('#replay').addEventListener('click', () => {
    buttonCount;
    var kingsInquiry = window.prompt("Consider wisley as thou speaks for the King...", "I am King I'm supposed to know these things.");
    var scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
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
    const ratePercent = rateSuccess + "%";
    

    // Give success rate Array with For Loop.
    let i = 0;
    let sumSuccesses = 0;
    let appendDivElRate = "; Success Rates Array: ";
    let appendSuccessArray = "; This is the Your average via for Loop: ";
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