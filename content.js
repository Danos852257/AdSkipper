//basically stuff that's run on the youtube website or other specific apps

const button = document.querySelector('.ytSearchboxComponentSearchButton');
const searchBar = document.querySelector('.ytSearchboxComponentSearchForm');


button.addEventListener('click', () => {
    console.log("Button was actually clicked!");
});

if(searchBar){
    searchBar.focus();
    searchBar.value = ("f1")
    console.log("searcbar works")
}

if (button) {
    button.dispatchEvent(new Event('click', { bubbles: true }));
    console.log("asdasddas");
}
