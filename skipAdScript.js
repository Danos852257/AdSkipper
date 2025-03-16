(function() {
    console.log('rizzler')
    function clickSkipButton() {
        const skipButton = document.querySelector('.ytp-skip-ad-button');
        if (skipButton) {
            skipButton.focus();
            skipButton.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
            skipButton.click();
            skipButton.dispatchEvent(new PointerEvent('click', { bubbles: true }));
            skipButton.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
            skipButton.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }));
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
            window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
            /*
            const enterKeyEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                which: 13,
                bubbles: true
            });
            window.dispatchEvent(enterKeyEvent);
            console.log("Sigma");*/
        } else {
            console.log("Womp");
        }
    }

    setInterval(clickSkipButton, 1000);
})();