const button = document.querySelector('.ytSearchboxComponentSearchButton');
const searchBar = document.querySelector('.ytSearchboxComponentInput');


const skipObserver = MutationObserver(() => {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if(skipButton){
        skipButton.dispatchEvent(new Event('click', {bubbles: true}));
        console.log("skipButtonWasClicked");
        skipObserver.disconnect();
    }
    

})
var clickSkipButton = function(){
    if(skipButton){
        skipButton.dispatchEvent(new Event('click', {bubbles: true}));
    }
    console.log("skipButtonWasClicked");
}


var search = function(word){
    if(searchBar){
        searchBar.click();
        searchBar.focus();
        searchBar.value = ""; 

        // Simulate typing each character
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


skipObserver.observe(document.body, { childList: true, subtree: true });
