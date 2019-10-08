(() => {
    // Test
    console.log('Connected!');

    const toggle = document.querySelector('.button');
    const imgModel = document.querySelector('.render');
    const imgMockup = document.querySelector('.mockup');

    let x = 1;

    function toggleMode() {
        if (x == 1) {
            imgModel.src = `images/dark-mode.png`;
            imgMockup.src = `images/mockup-dark.png`;
            x = 2;
        } else if (x == 2) {
            imgModel.src = `images/light-mode.png`;
            imgMockup.src = `images/mockup-light.png`;
            x = 1;
        }
    }

    toggle.addEventListener('click', toggleMode);
})()