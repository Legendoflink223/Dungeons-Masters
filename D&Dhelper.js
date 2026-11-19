let playersHelped = Number(localStorage.getItem("playersHelped")) || 0;

const playersCounter = document.getElementById("playersHelped");

if (playersCounter) {
    playersCounter.textContent = "New Players Helped: " + playersHelped;
}
const quotes = [
 "The dice giveth, and the dice taketh away.",
    "A good DM plans the adventure. A great DM plans for the players.",
    "Never split the party... unless the story demands it.",
    "The greatest treasure is the friends you made along the way.",
    "A natural 20 cannot fix everything... but it certainly helps.",
    "Behind every great adventurer is a suspiciously prepared DM.",
    "If the players ask whether they can do something, the answer is usually yes. Roll for it.",
    "The best stories are the ones nobody planned."
];
const quoteButton = document.querySelector("#quoteButton");
const quote = document.querySelector("#quote");

quoteButton.addEventListener("click", function() {
    const random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random];
});
const customCursor = document.querySelector("#customCursor");
const cursorImage = document.querySelector("#cursorImage");

if (customCursor && cursorImage) {
    document.addEventListener("mousemove", function(event) {
        customCursor.style.left = event.clientX + "px";
        customCursor.style.top = event.clientY + "px";
    });
}
const answerA =
document.querySelector("#answerA");
const answerB =
document.querySelector("#answerB");
const result =
document.querySelector("#result");
// CORRECT ANSWER
if (answerA && result) {
    answerA.addEventListener("click", function() {
        result.textContent = "Correct!";
    });
}


// INCORRECT ANSWER
if (answerB) {
    answerB.addEventListener("click", function() {
        playersHelped++;
        localStorage.setItem("playersHelped", playersHelped);
        if (playersCounter) {
            playersCounter.textContent = "New Players Helped: " + playersHelped;
        }
        window.location.href = "WhatisD&D.html";
    });
}