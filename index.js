// create variables for Home Score and Guest Score
let homeScoreEl = document.getElementById("homeScore-el")
let guestScoreEl = document.getElementById("guestScore-el")

// Function to update Home Score
function plusHome(x) {
    let userInput = parseInt(x)
    let origTotal = parseInt(homeScoreEl.textContent)
    homeScoreEl.textContent = userInput + origTotal
}

// Function to update Guest Score
function plusGuest(x) {
    let userInput = parseInt(x)
    let origTotal = parseInt(guestScoreEl.textContent)
    guestScoreEl.textContent = userInput + origTotal
}

//Reset the Scores
function resetScore() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}