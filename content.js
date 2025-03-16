const button = document.querySelector('.ytSearchboxComponentSearchButton');
const searchBar = document.querySelector('.ytSearchboxComponentInput');

//does nothing
function doNothing(){
    while(true){
        break;
    }
}

//checks if an element is visible (not used)
function isVisible(element) {
    if (!element) return false;
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden" && element.offsetParent !== null;
}

//injects the script from skipAdScript.js into Youtube's DOM
function injectScript() {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('skipAdScript.js');
    document.documentElement.appendChild(script);
}

//test function from before - technically still works but functionality replaced by popup.js
var search = function(word){
    if(searchBar){
        //clicks on the search bar
        searchBar.click();
        searchBar.focus();
        searchBar.value = ""; 

        //types in each letter one at a time
        for (let char of word) {

            searchBar.value += char;
            let eventOptions = { bubbles: true, cancelable: true, key: char, char: char };

            console.log(eventOptions);
            searchBar.dispatchEvent(new KeyboardEvent("keydown", eventOptions));
            searchBar.dispatchEvent(new KeyboardEvent("keyup", eventOptions));
        }

        //waits until done typing
        searchBar.dispatchEvent(new Event('input', { bubbles: true }));
        searchBar.dispatchEvent(new Event('change', { bubbles: true }));
        console.log("searcbar works")
    }
}


//clicks on the search button (also obsolete)
var searchButton = function(){
    if (button) {
        button.dispatchEvent(new Event('click', { bubbles: true }));
        console.log("asdasddas");
    }
}


//test event listener to see if the skipAdButton was being clicked
button.addEventListener('click', () => {
    console.log("Button was actually clicked!");
    console.log(searchBar.value);
});

//Calls injectScript()
injectScript();