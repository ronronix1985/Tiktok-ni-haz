// Functionality to handle video playback on scroll
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".tiktok-video");
    const videoContainer = document.querySelector(".video-container");

    // Observer to see which video is on screen
    const observerOptions = {
        root: videoContainer,
        rootMargin: "0px",
        threshold: 0.7 // Trigger when 70% of video is visible
    };

    const observerResult = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Play current visible video
                entry.target.play();
            } else {
                // Pause video when out of view
                entry.target.pause();
                entry.target.currentTime = 0; // Reset to start
            }
        });
    }, observerOptions);

    videos.forEach(video => {
        observerResult.observe(video);
    });
});

// Like Button Toggle
function toggleLike(element) {
    element.classList.toggle("liked");
    const icon = element.querySelector("i");
    const p = element.querySelector("p");
    
    // Simulate count increase/decrease
    let count = parseFloat(p.innerText);
    if(element.classList.contains("liked")) {
        p.innerText = (count + 0.1).toFixed(1) + "k";
    } else {
        p.innerText = (count - 0.1).toFixed(1) + "k";
    }
}

// Open Comments Mock
function openComments() {
    alert("Comments section opened!");
}

// Share Action Mock
function shareVideo() {
    alert("Share menu opened!");
}
