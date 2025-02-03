
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener('change', (event) => {
    if(event.target.checked){
        console.log("on");

    }
    else{
        console.log("off")
    }
});