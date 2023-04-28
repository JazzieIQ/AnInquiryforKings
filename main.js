// A Bridge Too Far: The Kings Inquiry HTML/Text Based Game.

// Key phrasing

const kinglyAnswer = '"African or European?"';
let count = 0;
let rateCount = 0;
const rateSuccessArray = [];
const win = 1;
const lose = 0;
const winTxt = "Tally!";
const loseTxt = "Oh Peril! the King's man hath lost his footing off the bridge of death!";
const userTxt = document.getElementById("inputTxt");
 
//updateDOM

const updateDOM = (kingsInquiry) => {
    if (kingsInquiry == "african or european" || kingsInquiry ==  "i am king i'm supposed to know these things" || kingsInquiry == "a kingly answer" || kingsInquiry ==  "five" || kingsInquiry ==  "holy hand grenade of antioch" || kingsInquiry == "ni" || kingsInquiry == "I am authur, king of the britains" ||kingsInquiry == "i am your king" || kingsInquiry == "you don't vote for kings" || kingsInquiry == "be quiet!" || kingsInquiry == "now, stand aside worthy adversary!" || kingsInquiry == "on second thought, let's not go to camelot. 'tis a silly place") {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The King's answer be: " + kinglyAnswer
        divEl.appendChild(p);
        rateCount;
        rateCount += 1;
        rateSuccessArray.push(win);
        console.log(winTxt);
        return;
    }
    else {
        let divEl = document.querySelector('#output')
        let p = document.createElement('p')
        p.textContent = "The hour is past and thou art DOOMED!!!!!"
        divEl.appendChild(p);
        alert("Thou has been cast into the Gorge of Eternal Peril!");
        rateCount;
        rateSuccessArray.push(lose);
        console.log(loseTxt);
        return;
    }
}

let buttonCount = document.getElementById("replay")
replay.onclick = function () {
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
    let swerian = document.getElementById("inputTxt").value;
    let kingsInquiry = swerian.toLowerCase();
    let scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
    scribe;
    updateDOM(kingsInquiry);

    //div "output" split into array. Array increase with attempt.

    updateDOMArray(kingsInquiry);
    const kingsRecord = (document.getElementById("array")).textContent.split('; ');
    const noNullKingsArray = kingsRecord.filter(element => element !== '');
    console.log(noNullKingsArray);
    noNullKingsArray.push('I told you that you were doomed! Oh but nobody listens to me!');
    
    // calculate success rate
    
    const rateSuccess = (rateCount / count) * 100;
    const ratePercent = Math.round(rateSuccess) + "%";
    
    // Give success rate Array with For Loop.

    let i = 0
    let sumSuccesses = 0;
    let appendDivElRate = "; Success Rates Array: ";
    let appendSuccessArray = "; The scribe has thou averaged plainy: ";
    while (i < rateSuccessArray.length) {
        sumSuccesses = sumSuccesses + rateSuccessArray[i];
        i++
    }
    let rateCounting = sumSuccesses / count;
    const success = rate.innerHTML = "Success: " + ratePercent + appendDivElRate + rateSuccessArray + appendSuccessArray + rateCounting;
    success;
    ;
});

//refresh Output div. All code is reset including the array.

document.querySelector('#refresh').addEventListener('click', () => {
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").reset()
    });