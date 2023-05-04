// A Bridge Too Far: The Kings Inquiry HTML/Text Based Game.

//creating an Object

const kingsKeep = {
    
    // Key phrasing
    
    kinglyAnswer: '"African or European?"',
    scribeDom: "The King's answer be: ",
    count: 0,
    rateCount: 0,
    rateSuccessArray: [],
    win: 1,
    lose: 0,
    result: '',
    winTxt: "Tally!",
    loseTxt: "Oh Peril! the King's man hath lost his footing off the bridge of death!",
    userTxt: document.getElementById("inputTxt"),
    gameData: [],

    //updateDOM

    updateDOM: (kingsInquiry) => {
        if (kingsInquiry == "african or european" || kingsInquiry == "i am king i'm supposed to know these things" || kingsInquiry == "a kingly answer" || kingsInquiry == "five" || kingsInquiry == "holy hand grenade of antioch" || kingsInquiry == "ni" || kingsInquiry == "I am authur, king of the britains" || kingsInquiry == "i am your king" || kingsInquiry == "you don't vote for kings" || kingsInquiry == "be quiet!" || kingsInquiry == "now, stand aside worthy adversary!" || kingsInquiry == "on second thought, let's not go to camelot. 'tis a silly place") {
            let divEl = document.querySelector('#output')
            let p = document.createElement('p')
            p.textContent = kingsKeep.scribeDom + kingsKeep.kinglyAnswer
            divEl.appendChild(p);
            kingsKeep.rateCount;
            kingsKeep.rateCount += 1;
            kingsKeep.rateSuccessArray.push(kingsKeep.win);
            console.log(kingsKeep.winTxt);
            return;
        }
        else {
            let divEl = document.querySelector('#output')
            let p = document.createElement('p')
            p.textContent = "The hour is past and thou art DOOMED!!!!!"
            divEl.appendChild(p);
            alert("Thou has been cast into the Gorge of Eternal Peril!");
            kingsKeep.rateCount;
            kingsKeep.rateSuccessArray.push(kingsKeep.lose);
            console.log(kingsKeep.loseTxt);
            return;
        }
    },
    buttonCount: document.getElementById("replay").addEventListener('click', () => {
        kingsKeep.count;
        kingsKeep.count += 1;
        replay.innerHTML = "Attempt: " + kingsKeep.count;
        return kingsKeep.count;
    }),

    //update the DOM

    updateDOMArray: (kingsInquiry) => {
        let divEl = document.querySelector('#array')
        let a = document.createElement('a')
        a.textContent = '"' + "The King's answer was: " + "'" + kingsInquiry + "' " + '"; '
        divEl.appendChild(a);
        return;
    }
};

//formValidation
 

// Play the game/ attemp again


document.getElementById("inputTxt").addEventListener('Enter', (e) => {
    e.preventDefault()
    console.log('default prevented')
})

document.querySelector('#replay').addEventListener('click', () => {
    kingsKeep.buttonCount;
    let swerian = kingsKeep.userTxt.value;
    let kingsInquiry = swerian.toLowerCase();//.replace; (/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/, '');
    let scribe = console.log("They transcribed " + '"' + kingsInquiry + '"');
    scribe;
    kingsKeep.updateDOM(kingsInquiry);

    //div "output" split into array. Array increase with attempt

    kingsKeep.updateDOMArray(kingsInquiry);
    const kingsRecord = (document.getElementById("array")).textContent.split('; ');
    const noNullKingsArray = kingsRecord.filter(element => element !== '');
    console.log(noNullKingsArray);
    noNullKingsArray.push('I told you that you were doomed! Oh but nobody listens to me!');
    
    // calculate success rate
    
    const rateSuccess = (kingsKeep.rateCount / kingsKeep.count) * 100;
    const ratePercent = Math.round(rateSuccess) + "%";
    
    // Give success rate Array with For Loop.

    let i = 0
    let sumSuccesses = 0;
    let appendDivElRate = "; Success Rates Array: ";
    let appendSuccessArray = "; The scribe has thou averaged plainy: ";
    while (i < kingsKeep.rateSuccessArray.length) {
        sumSuccesses = sumSuccesses + kingsKeep.rateSuccessArray[i];
        i++
    }
    let rateCounting = sumSuccesses / kingsKeep.count;
    const success = rate.innerHTML = "Success: " + ratePercent + appendDivElRate + kingsKeep.rateSuccessArray + appendSuccessArray + rateCounting;
    success;

    // clear form
    
    document.getElementById("input").reset();

    // New Objects for table creation

    
    
    kingsKeep.gameData.push(
        kingsKeep.scribeDom,
        kingsInquiry,
        ratePercent,
        kingsKeep.rateCount,
        kingsKeep.count,
        rateCounting,
    );

    console.log(kingsKeep.gameData);
    return {
        scribeDom: kingsKeep.scribeDom,
        kingsInquiry: kingsKeep.kingsInquiry,
        ratePercent: ratePercent,
        rateCount: kingsKeep.rateCount,
        count: kingsKeep.count,
        rateCounting: rateCounting,
    };
});

//refresh Output div. All code is reset including the array.

document.querySelector('#refresh').addEventListener('click', () => {
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").reset()
});


// unused code

/*

    winToWin: () => {     
        if (rateSuccessArray[i] = win) {
            let gameResult = kingsKeep.result.replace('', 'Win');
            gameResult;
            return result;
        }
        else {
            let gameResult = kingsKeep.result.replace('', 'Lose');
            gameResult;
            return result;
        }
    }

const submit = {
const enterKeyPress = document.getElementById("inputTxt").addEventListener("keyPress", function (event) {
    while (event.keyCode === 'Enter') {
        event.preventDefault();
        submit.submitButton.click();
    }
    enterKeyPress;
});
    submitButton: 
};

*/
