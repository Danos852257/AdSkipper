const button = document.querySelector('.ytSearchboxComponentSearchButton');
const searchBar = document.querySelector('.ytSearchboxComponentInput');



/*
button.addEventListener("focus", function() {
    console.log("Input field is focused!");
});
*/

function doNothing(){
    while(true){
        break;
    }
}

function isVisible(element) {
    if (!element) return false;
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden" && element.offsetParent !== null;
}


function injectScript() {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('skipAdScript.js'); // Load an external script
    document.documentElement.appendChild(script);
}


function ninja(){
    console.log("99999999999999999999");
    setTimeout(() => {
        console.log("Observer disconnected");
        /*const enterKeyEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true
        });*/
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13,bubbles: true }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13,bubbles: true }));
    }, 9000);
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

button.addEventListener('click', () => {
    console.log("Button was actually clicked!");
    console.log(searchBar.value);
});





injectScript();

ninja();