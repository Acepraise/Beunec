document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    let isImg1Visible = true;
    let intervalId;

    function swapImages() {
        img1.style.opacity = '0'; // Fade out the currently visible image

        setTimeout(() => {
            const img1Src = img1.src;
            img1.src = img2.src;
            img2.src = img1Src;
            img1.style.opacity = '1'; // Fade in the new image
            isImg1Visible = !isImg1Visible;
        }, 100); // Delay before swapping images
    }

    function startImageSwap() {
        intervalId = setInterval(swapImages, 4000); // Change images every 4 seconds
    }

    function stopImageSwap() {
        clearInterval(intervalId);
    }

    startImageSwap(); // Start image swapping

    // Pause swapping on hover
    img1.addEventListener('mouseover', stopImageSwap);
    img2.addEventListener('mouseover', stopImageSwap);

    // Resume swapping after hover
    img1.addEventListener('mouseout', startImageSwap);
    img2.addEventListener('mouseout', startImageSwap);

    // Preload images
    const preloadImg1 = new Image();
    const preloadImg2 = new Image();
    preloadImg1.src = img1.src;
    preloadImg2.src = img2.src;
});
