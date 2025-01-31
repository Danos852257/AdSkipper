const button = document.querySelector('.ytSearchboxComponentSearchButton');
const searchBar = document.querySelector('.ytSearchboxComponentInput');

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

if(true){
    setTimeout(() => {
        search("mr beast");
        setTimeout(searchButton, 490);
    }, 5000);
}

button.addEventListener('click', () => {
    console.log("Button was actually clicked!");
    console.log(searchBar.value);
});

