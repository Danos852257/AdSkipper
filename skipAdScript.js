//The script that is injected into Youtube's Document Object Model (DOM)
(function() {
    //print statements for debugging
    console.log('rizzler')

    function clickSkipButton() {
        const skipButton = document.querySelector('.ytp-skip-ad-button');
        if (skipButton) { //check if button exists
            //select the button. Pressing enter now skips the ad
            skipButton.focus();

            //Try to press enter (doesn't work)
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
            window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
            console.log("sigma");
        } 
        /*
        else {
            console.log("Womp");
        }
        */
    }
    //do every second
    setInterval(clickSkipButton, 1000);
})();