
const toggleSwitch = document.getElementById("toggleSwitch");


let brainrot = [
    'sigma', 'skibidi', 'gyatt', 'ohio', 'rizz',
    /*'the rizzler', 'king darius', 'sigma boy', 'skibidi toilet', 'low taper fade still massive',
    'blue tie kid', 'tiktok rizz party', 'low taper fade', 'elon musk salute', 'baby gronk',
    'livvy dunne', 'daddy daddy dance japanese guy', 'fetty wap jbl speaker', 'dababy car', 'lavar ball',
    'swerve at the corner woaah', 'stephen A smith', 'edgar cut', 'skibidi', 'shrek is love shrek is life',
    'packet yo', 'brittany griner', 'lebron james', 'fanum tax', 'kai cenat',
    'i like my cheese drippy bruh', 'hypebeast pope','I have played these games before','bop house',
    'darius stim'*/
  ];
  

var viral = function(brainrotWord){
    chrome.tabs.create({ url: `https://www.youtube.com/results?search_query=${brainrotWord}`});
}

var win = function(brainrotWord){
    window.open({ url:`https://www.youtube.com/results?search_query=${brainrotWord}`}, "_blank", "height=400,width=300");
}


toggleSwitch.addEventListener('change', (event) => {
    if(event.target.checked){
        console.log("on");

        for (let i = 0; i < brainrot.length; i++) {
            win(brainrot[i])
        }
        
    }
    else{
        console.log("off")
    }
});