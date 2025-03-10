(function() {
    console.log('rizzler')
    function clickSkipButton() {
        const skipButton = document.querySelector('.ytp-skip-ad-button');
        if (skipButton) {
            skipButton.focus();
            skipButton.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
            skipButton.click();
            skipButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            console.log("Sigma");
        } else {
            console.log("Womp");
        }
    }

    setInterval(clickSkipButton, 1000);
})();