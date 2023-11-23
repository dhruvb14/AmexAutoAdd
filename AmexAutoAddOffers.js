function openSwitcher() {
    var toggleCard = document.querySelectorAll('button.account-switcher-toggler');
    toggleCard[0].click();
}

function selectGoldCard() {
    openSwitcher()
    var goldmenu = document.querySelector('button[aria-label^="American Express Gold Card"]');
    goldmenu.click();
}

function selectPlatinumCard() {
    openSwitcher()
    var platmenu = document.querySelector('button[aria-label^="Platinum Card"]');
    platmenu.click();
}

async function addCurrentlyVisibleOffersToCard() {

    await navigateToOffers();
    (function (i) {
        console.log("Waiting for offers to load");
        setTimeout(function () {
            console.log("Lets look for and all all visible offers");
            var buttons = document.querySelectorAll('button.offer-cta:not([href])');
            var offersRemainingToAdd = 0;
            for (var i = 0; i < buttons.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        buttons[i].click();
                        console.log("Successfully added offer " + i+1)
                        offersRemainingToAdd++;
                    }, i * randomTimeBetweenClicks());
                })(i);
            }
            while(buttons.length !== offersRemainingToAdd){
                console.log(`Offers remaining to add ${buttons.length + 1 - offersRemainingToAdd}`)
            }
            console.log(`Adding ${buttons.length} offers, `);
        }, 10000);
    })(i);


}

function randomTimeBetweenClicks() {
    const val = Math.floor(1000 + Math.random() * 5000);
    return val;
}
function howManyOffersFound() {
    var eligible = document.getElementById("ELIGIBLE");
    var innerText = eligible.innerHTML;
    var count = innerText.match(/\d+/)[0];
    console.log(`${count} remaining offers found on this page`)
    return count;
}
function howManyRemainingOffers() {
    var eligible = document.getElementById("ELIGIBLE");
    var innerText = eligible.innerHTML;
    var count = innerText.match(/\d+/)[0];
    console.log(`There are ${count} remaining offers`)
    return count;
}
function refreshOffers() {
    selectGoldCard();
    selectPlatinumCard();
}

async function navigateToOffers() {
    var viewMoreOffers = document.getElementById("view-more-header");
    viewMoreOffers.click();
}

function styleButtons(button) {
    button.classList.add("btn", "btn-icon", "btn-sm", "icon-hover", "aa-chat-pill");
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.left = "20px";
    button.style.width = "200px";
}

function addButtons() {
    var button = document.createElement("button");
    button.classList.add("btn", "btn-icon", "btn-sm", "icon-hover", "aa-chat-pill");
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.left = "20px";
    button.style.width = "200px";
    button.innerHTML = "Add All Offers";
    button.onclick = addCurrentlyVisibleOffersToCard;
    document.body.appendChild(button);

    button = document.createElement("button");
    button.classList.add("btn", "btn-icon", "btn-sm", "icon-hover", "aa-chat-pill");
    button.style.position = "fixed";
    button.style.bottom = "60px";
    button.style.left = "20px";
    button.style.width = "200px";
    button.innerHTML = "Refresh All Offers";
    button.onclick = refreshOffers;
    document.body.appendChild(button);

    button = document.createElement("button");
    button.classList.add("btn", "btn-icon", "btn-sm", "icon-hover", "aa-chat-pill");
    button.style.position = "fixed";
    button.style.bottom = "100px";
    button.style.left = "20px";
    button.style.width = "200px";
    button.innerHTML = "Select Gold Card";
    button.onclick = selectGoldCard;
    document.body.appendChild(button);

    button = document.createElement("button");
    button.classList.add("btn", "btn-icon", "btn-sm", "icon-hover", "aa-chat-pill");
    button.style.position = "fixed";
    button.style.bottom = "140px";
    button.style.left = "20px";
    button.style.width = "200px";
    button.innerHTML = "Select Platinum Card";
    button.onclick = selectPlatinumCard;
    document.body.appendChild(button);
}
addButtons();