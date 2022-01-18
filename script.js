let wrd = '';
let rowNum = 0

function showWord(word) {
    const wrdArray = word.split("");
    
    let i = 0;
    let activeRow = $(".game-container .row").eq(rowNum).find(".square");
    let activeLetter = $(activeRow).first();

    for (const letter of wrdArray) {
        $(activeLetter).text(letter);
        activeLetter = $(activeLetter).next();
        i++;
    }
    
    while (i<5) {
        $(activeLetter).text("");
        activeLetter = $(activeLetter).next();
        i++;
    }
}

$(document).ready(function () {
    if (wrds.includes("cigar")) {
        console.log("yahboi")
    }

    $(".game-container .row").eq(rowNum).css("background-color", "lightgray");

    $("body").keydown(function (e) {
        if (e.which >= 65 && e.which <= 90 && wrd.length < 5) {
            wrd = wrd + String.fromCharCode(e.which);
        } else if (e.which == 8) {
            wrd = wrd.slice(0, -1)
        } else if (e.which == 13 && rowNum < 6) {
            if (wrd.length < 5) {
                $(".game-container").animate({left: '+=1em'}, "fast");
                $(".game-container").animate({left: '-=2em'}, "fast");
                $(".game-container").animate({left: '+=2em'}, "fast");
                $(".game-container").animate({left: '-=1em'}, "fast");
            } else {
                $(".game-container .row").eq(rowNum).css("background-color", "white");
                rowNum++;
                wrd = ""
                $(".game-container .row").eq(rowNum).css("background-color", "lightgray");
            }
        }
        showWord(wrd)
    });
});