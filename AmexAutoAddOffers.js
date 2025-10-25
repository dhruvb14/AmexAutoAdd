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

async function navigateToOffers() {
    var viewMoreOffers = document.getElementById("view-more-header");
    viewMoreOffers.click();
}
async function navigateToHomepage() {
    var homepage = document.querySelector('a[title="Home"]');
    homepage.click();
    console.log("Waiting for 10 seconds for homepage to load");
    await new Promise(r => setTimeout(r, 10000));
}

async function addCurrentlyVisibleOffersToCard() {
    (function (i) {
        console.log("Waiting for 5 seconds for offers to load");
        setTimeout(function () {
            console.log("Lets look for and all all visible offers");
            var buttons = document.querySelectorAll('button[title="add to list card"]');
            
            var offersRemainingToAdd = 1;
            for (var i = 0; i < buttons.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        buttons[i].click();
                        console.log(`Successfully added offer ${i+1} of ${buttons.length}\n\n${buttons.length - offersRemainingToAdd} offer remaining to add`)
                        offersRemainingToAdd++;
                    }, i * 2000);
                })(i);
            }
            console.log(`Adding ${buttons.length} offers`);
        }, 5000);
    })(i);


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
}
addButtons();