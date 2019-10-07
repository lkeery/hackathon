(() => {
    // Test
    console.log('Connected!');

    const toggle = document.querySelector('.button');
    const img = document.querySelector('.render');
    let x = 1;

    function toggleMode() {
        if (x == 1) {
            img.src = `images/dark-mode.png`;
            x = 2;
        } else if (x == 2) {
            img.src = `images/light-mode.png`;
            x = 1;
        }
    }

    toggle.addEventListener('click', toggleMode);
})()