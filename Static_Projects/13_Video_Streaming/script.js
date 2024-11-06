document.querySelectorAll('.video-list li').forEach(item => {
    item.addEventListener('click', function() {
        const videoPlayer = document.getElementById('videoPlayer');
        const videoSource = document.getElementById('videoSource');
        
        // Get the video source from the clicked list item
        const newVideo = this.getAttribute('data-video');
        
        // Change the video source
        videoSource.src = newVideo;
        videoPlayer.load(); // Load the new video
        videoPlayer.play();  // Automatically play the new video
    });
});
