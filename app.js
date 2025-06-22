document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('video-player');
    const videoList = document.getElementById('video-list');
    const currentVideoTitle = document.getElementById('current-video-title');
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const statusSelect = document.getElementById('status-select');
    const notesInput = document.getElementById('notes-input');

    let videoData = typeof videos !== 'undefined' ? videos : [];
    let currentVideo = null;

    const loadProgress = () => {
        const progress = localStorage.getItem('videoProgress');
        return progress ? JSON.parse(progress) : {};
    };

    const saveProgress = (progress) => {
        localStorage.setItem('videoProgress', JSON.stringify(progress));
    };

    let progress = loadProgress();

    const renderPlaylist = () => {
        if (!videoData.length) {
            videoList.innerHTML = '<p>No videos found. Please run the `scanner.py` script.</p>';
            return;
        }

        const groupedVideos = videoData.reduce((acc, video) => {
            const group = video.course;
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push(video);
            return acc;
        }, {});

        videoList.innerHTML = '';
        for (const groupName in groupedVideos) {
            const groupContainer = document.createElement('div');
            groupContainer.className = 'course-group';

            const title = document.createElement('h3');
            title.className = 'course-title';
            title.textContent = groupName;
            groupContainer.appendChild(title);

            const videoItemsContainer = document.createElement('div');
            videoItemsContainer.className = 'video-items';
            groupedVideos[groupName].forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.className = 'video-item';
                videoItem.textContent = video.title;
                videoItem.dataset.path = video.path;

                const videoProgress = progress[video.path] || {};
                const status = videoProgress.status || 'To Watch';

                const statusSpan = document.createElement('span');
                statusSpan.className = `status ${status.replace(' ', '-')}`;
                statusSpan.textContent = status;
                videoItem.appendChild(statusSpan);

                videoItem.addEventListener('click', () => {
                    playVideo(video);
                });
                videoItemsContainer.appendChild(videoItem);
            });
            groupContainer.appendChild(videoItemsContainer);
            videoList.appendChild(groupContainer);
        }
    };

    const playVideo = (video) => {
        currentVideo = video;
        videoPlayer.src = video.path;
        currentVideoTitle.textContent = video.title;

        document.querySelectorAll('.video-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.path === video.path) {
                item.classList.add('active');
            }
        });

        const videoProgress = progress[video.path] || {};
        videoPlayer.currentTime = videoProgress.timestamp || 0;
        statusSelect.value = videoProgress.status || 'To Watch';
        notesInput.value = videoProgress.notes || '';

        videoPlayer.play();
    };

    const updateProgress = () => {
        if (!currentVideo) return;
        const path = currentVideo.path;
        if (!progress[path]) {
            progress[path] = {};
        }
        progress[path].status = statusSelect.value;
        progress[path].notes = notesInput.value;
        progress[path].timestamp = videoPlayer.currentTime;
        saveProgress(progress);
        renderPlaylist(); // Re-render to update status colors
    };

    bookmarkBtn.addEventListener('click', () => {
        if (currentVideo) {
            updateProgress();
            alert(`Bookmark saved at ${new Date(videoPlayer.currentTime * 1000).toISOString().substr(11, 8)}`);
        }
    });

    statusSelect.addEventListener('change', updateProgress);
    notesInput.addEventListener('blur', updateProgress);
    videoPlayer.addEventListener('timeupdate', () => {
        if (currentVideo && videoPlayer.currentTime > (progress[currentVideo.path]?.timestamp || 0) + 5) {
             // Auto-save every few seconds of playback
            updateProgress();
        }
    });

    renderPlaylist();
});
