document.getElementById('downloadBtn').addEventListener('click', function() {
    const tiktokUrl = document.getElementById('tiktokUrl').value;
    const resultDiv = document.getElementById('result');

    if (!tiktokUrl) {
        resultDiv.innerHTML = '<p class="text-red-500">Please enter a valid TikTok URL.</p>';
        return;
    }

    // Replace with a working TikTok video fetching API or proxy
    const proxyUrl = `https://your-proxy-service.com/api/download?url=${encodeURIComponent(tiktokUrl)}`;

    fetch(proxyUrl)
        .then(response => response.json())
        .then(data => {
            if (data.video_url) {
                resultDiv.innerHTML = `<a href="${data.video_url}" download class="text-green-500">Click here to download your video</a>`;
            } else {
                resultDiv.innerHTML = '<p class="text-red-500">Failed to fetch video. Please check the URL and try again.</p>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = '<p class="text-red-500">An error occurred. Please try again later.</p>';
        });
});
