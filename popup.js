
const toggleSwitch = document.getElementById("toggleSwitch");
const shrekton = document.getElementById("shrekky");

let brainrot = [
    '50LvhtVHvTE', 'TimKU5bAEDQ', '8Pc0AEbfnBM', 'tbNJRhI4PFI', 'gw7xLqpieRc', 'Uv8ElEJGIkE', '0lP-0BaaPIw',
    '8HhzRd9taEU', 'EILDVyFFzVQ', 'vvAY0Q-cAAQ', 'Tmv0Fz_7O6s', '_LCsak7IBvw', 'UqFORtFuyN0'
    /*'sigma', 'skibidi', 'gyatt', 'ohio', 'rizz',
    'the rizzler', 'king darius', 'sigma boy', 'skibidi toilet', 'low taper fade still massive',
    'blue tie kid', 'tiktok rizz party', 'low taper fade', 'elon musk salute', 'baby gronk',
    'livvy dunne', 'daddy daddy dance japanese guy', 'fetty wap jbl speaker', 'dababy car', 'lavar ball',
    'swerve at the corner woaah', 'stephen A smith', 'edgar cut', 'skibidi', 'shrek is love shrek is life',
    'packet yo', 'brittany griner', 'lebron james', 'fanum tax', 'kai cenat',
    'i like my cheese drippy bruh', 'hypebeast pope','I have played these games before','bop house',
    'darius stim', 'hawk tuah', 'talk tuah'*/
  ];

  //array
  
var viral = function(brainrotWord){
    chrome.tabs.create({ url: `https://www.youtube.com/results?search_query=${brainrotWord}`});
}

//tab creation function (didn't work out in the end for the purposes)

var win = function(brainrotWord){
    let dwig = window.open(`https://www.youtube.com/results?search_query=${brainrotWord}`, "_blank", "height=400,width=300");   
    return dwig; 
}

//window creation function

shrekton.addEventListener('click', function() {

    let img = document.getElementById("katon");
    img.src = img.src.includes("https://media1.tenor.com/m/mtiOW6O-k8YAAAAd/shrek-shrek-rizz.gif") ? "https://media1.tenor.com/m/YXb8V1U9pcgAAAAC/daddy-nishiyama.gif" : "https://media1.tenor.com/m/mtiOW6O-k8YAAAAd/shrek-shrek-rizz.gif";
    //changes between images per button click
    for (let i = 0; i < brainrot.length; i++) {
        let greenFn = win(brainrot[i]);
        
        greenFn.opener = null;  // Break the reference
        greenFn.location = "about:blank";  // Redirect before closing
        greenFn.close();
       
        /*
        if(greenFn){
            setTimeout(() => {
            greenFn.close();
            console.log("pls work", greenFn.closed); 
            },1);
            if (!greenFn.closed) {
                console.warn("Force closing the window...");
                greenFn.opener = null;  // Break the reference
                greenFn.location = "about:blank";  // Redirect before closing
                greenFn.close();
            }else{
            console.warn("Popup blocked! Allow pop-ups for this site.");
            }
        }
        */
    }
})


toggleSwitch.addEventListener('change', (event) => {
    if(event.target.checked){
        for (let i = 0; i < brainrot.length; i++) {
            
        } 
        let windin = window.open("https://www.youtube.com/results?search_query=desperation", "_blank", "height=400,width=300");
        setTimeout(() => {
            if(windin){
                windin.close();
                console.log("pls work");
            }
        },1000);
        
    }
    else{
        console.log("off")
    }
});

