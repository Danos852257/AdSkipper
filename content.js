const button = document.querySelector('.ytSearchboxComponentSearchButton');
const searchBar = document.querySelector('.ytSearchboxComponentInput');



function doNothing(){
    while(true){
        break;
    }
}

function initialCheckForSkipButton() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if (skipButton) {
        skipButton.dispatchEvent(new Event('click', { bubbles: true }));
        console.log("skipButtonWasClicked");
        // Optionally disconnect if you only need to click once per ad
        skipObserver.disconnect();
    } else {
        console.log("skip button not found on initial check");
    }
}


const skipObserver = new MutationObserver(() => {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    
    if(skipButton){
        skipButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        console.log("skipButtonWasClicked");
        skipObserver.disconnect();
        skipButton.addEventListener("click", () => {
            console.log("111111111111111111111");
        });
    }

    else{
        doNothing();
    }
    

})
var clickSkipButton = function(){
    if(skipButton && skipButton.offsetParent !== null){
        skipButton.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
        skipButton.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
        skipButton.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        skipButton.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        skipButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
    console.log("skipButtonWasClicked");
}




var search = function(word){
    if(searchBar){
        searchBar.click();
        searchBar.focus();
        searchBar.value = ""; 

        for (let char of word) {

            searchBar.value += char;
            let eventOptions = { bubbles: true, cancelable: true, key: char, char: char };

            console.log(eventOptions);
            // Simulate real keyboard events
            searchBar.dispatchEvent(new KeyboardEvent("keydown", eventOptions));
            //searchBar.dispatchEvent(new KeyboardEvent("keypress", eventOptions));
            searchBar.dispatchEvent(new KeyboardEvent("keyup", eventOptions));
        }
        //searchBar.value = (word)

        searchBar.dispatchEvent(new Event('input', { bubbles: true }));
        searchBar.dispatchEvent(new Event('change', { bubbles: true }));
        console.log("searcbar works")
    }
}

var searchButton = function(){
    if (button) {
        button.dispatchEvent(new Event('click', { bubbles: true }));
        console.log("asdasddas");
    }
}

// if(true){
//     setTimeout(() => {
//         search("skibidi toilet");
//         setTimeout(searchButton, 490);
//     }, 5000);
// }

button.addEventListener('click', () => {
    console.log("Button was actually clicked!");
    console.log(searchBar.value);
});

initialCheckForSkipButton();
skipObserver.observe(document.body, { childList: true, subtree: true });
setTimeout(() => {
    console.log("Observer disconnected");
    skipObserver.disconnect();
}, 9000);
