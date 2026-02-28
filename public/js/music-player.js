// Playlist data
const playlist = [
    {
    title: 'Heartbreak Feels So Good',
    artist: 'Fall Out Boy',
    url: 'https://deskomy.com/en-us/link/fRAhPFkFSj9isLJa9dSt4dZY9OdFJuTpSXwNs4MC8MduvPfpz5yEYhhx68kSU8zp?download=1',
    coverUrl: 'https://resources.tidal.com/images/50721dbc/9019/49fa/b199/0ee195f1b872/1280x1280.jpg',
    },
    {
    title: 'Out For Blood',
    artist: 'Sum 41',
    url: 'https://deskomy.com/en-us/link/PVq8rcDeTWxqpdiYRiUnuKFBNNtgcTf1XPU1b7BmUXUEj5FaAEzEwT29Tegjszm3?download=1',
    coverUrl: 'https://resources.tidal.com/images/f369cd97/bac6/44e0/9351/76aad5aeaed6/1280x1280.jpg',
    },
    {
    title: 'DESTROY!! (Rock Cover)',
    artist: 'Ferry, Andy in Steps',
    url: 'https://deskomy.com/en-us/link/J7tbXnF7Fz5QP8Pm0YGgQsAvBQFoIIKzNktSP7buBVQ4KvzcyxuBfMsDkqAO7XXP?download=1',
    coverUrl: 'https://resources.tidal.com/images/cc463333/6749/4fc6/9f7e/7c35c7b05224/1280x1280.jpg',
    }
];

// State
let currentIndex = 0, isPlaying = false, shuffleMode = false, repeatMode = false, isMinimized = false;
let audioElement;

// Utility functions
const formatTime = s => s && !isNaN(s) && s !== Infinity ? `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}` : '0:00';
const updateAlbumCover = url => {
    $('#albumArt, #compactAlbumArt').css('background-image', `url('${url}')`);
};

const updateVolumeUI = (val, isCompact = false) => {
    if (!isCompact) {
    $('#volumeFill').css('width', val + '%');
    const $icon = $('#volumeIcon');
    $icon.removeClass('fa-volume-up fa-volume-down fa-volume-mute')
        .addClass(val == 0 ? 'fa-volume-mute' : val < 50 ? 'fa-volume-down' : 'fa-volume-up');
    } else {
    $('#compactVolumeFill').css('width', val + '%');
    const $icon = $('#compactVolumeIcon');
    $icon.removeClass('fa-volume-up fa-volume-down fa-volume-mute')
        .addClass(val == 0 ? 'fa-volume-mute' : val < 50 ? 'fa-volume-down' : 'fa-volume-up');
    }
};

// Update play/pause button visibility
const updatePlayPauseButtons = () => {
    if (isPlaying) {
    $('#playBtn, #compactPlayBtn').hide();
    $('#pauseBtn, #compactPauseBtn').show();
    } else {
    $('#playBtn, #compactPlayBtn').show();
    $('#pauseBtn, #compactPauseBtn').hide();
    }
};

// Update all time displays
const updateTimeDisplays = () => {
    const current = formatTime(audioElement.currentTime);
    const duration = formatTime(audioElement.duration);
    $('#currentTime, #compactCurrentTime').text(current);
    $('#duration, #compactDuration').text(duration);
};

// Update progress bars
const updateProgressBars = () => {
    if (!audioElement.duration) return;
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    $('#progressFill, #compactProgressFill').css('width', percent + '%');
    updateTimeDisplays();
};

// Render playlist
const renderPlaylist = () => {
    const html = playlist.map((track, i) => `
    <div class="playlist-item d-flex align-items-center gap-3 p-2 rounded ${i === currentIndex ? 'active' : ''}" data-index="${i}">
        <span class="small text-secondary" style="width: 24px;">${i + 1}</span>
        <div class="flex-grow-1 min-w-0">
        <div class="text-white small fw-medium text-truncate track-title">${track.title}</div>
        <div class="small text-secondary text-truncate">${track.artist}</div>
        </div>
        <span class="small text-secondary item-duration">${track.durationFormatted || '0:00'}</span>
    </div>
    `).join('');
    $('#playlistItems').html(html);
};

// Update UI
const updateTrackInfo = () => {
    const track = playlist[currentIndex];
    $('#currentTrackLabel, #compactTrackLabel').text(track.title);
    $('#trackArtist, #compactTrackArtist').text(track.artist);
    $('#playlistCount').text(`${playlist.length} tracks`);
    updateAlbumCover(track.coverUrl);
    $('.playlist-item').removeClass('active').filter(`[data-index="${currentIndex}"]`).addClass('active');
    updatePlayPauseButtons();
};

// Load and play track
const loadAndPlayTrack = (index, shouldPlay = isPlaying) => {
    if (index < 0) index = playlist.length - 1;
    if (index >= playlist.length) index = 0;

    currentIndex = index;
    const track = playlist[currentIndex];
    audioElement.src = track.url;
    audioElement.load();
    updateTrackInfo();

    if (shouldPlay) {
    audioElement.play()
        .then(() => {
        isPlaying = true;
        updatePlayPauseButtons();
        })
        .catch(() => {
        isPlaying = false;
        updatePlayPauseButtons();
        });
    }
};

// Event handlers
const playCurrent = () => {
    if (audioElement.src) {
    audioElement.play()
        .then(() => {
        isPlaying = true;
        updatePlayPauseButtons();
        })
        .catch(error => console.log('Playback failed:', error));
    } else {
    loadAndPlayTrack(0, true);
    }
};

const pauseCurrent = () => {
    audioElement.pause();
    isPlaying = false;
    updatePlayPauseButtons();
};

const nextTrack = () => {
    const newIndex = shuffleMode
    ? (() => {
        let i;
        do i = Math.floor(Math.random() * playlist.length);
        while (playlist.length > 1 && i === currentIndex);
        return i;
        })()
    : currentIndex + 1;
    loadAndPlayTrack(newIndex, isPlaying);
};

const prevTrack = () => {
    const newIndex = shuffleMode
    ? (() => {
        let i;
        do i = Math.floor(Math.random() * playlist.length);
        while (playlist.length > 1 && i === currentIndex);
        return i;
        })()
    : currentIndex - 1;
    loadAndPlayTrack(newIndex, isPlaying);
};

const handleVolumeChange = (e, isCompact = false) => {
    const v = e.target.value;
    audioElement.volume = v / 100;
    updateVolumeUI(v, isCompact);

    // Sync both volume sliders
    if (!isCompact) {
    $('#compactVolumeRange').val(v);
    updateVolumeUI(v, true);
    } else {
    $('#volumeRange').val(v);
    updateVolumeUI(v, false);
    }
};

const toggleShuffle = () => {
    shuffleMode = !shuffleMode;
    $('#shuffleBtn i').css('color', shuffleMode ? 'var(--spotify-green)' : '');
};

const toggleRepeat = () => {
    repeatMode = !repeatMode;
    $('#repeatBtn i').css('color', repeatMode ? 'var(--spotify-green)' : '');
};

// Progress bar click
const handleProgressClick = (e, isCompact = false) => {
    if (!audioElement.duration) return;
    const $bar = isCompact ? $('#compactProgressBar') : $('#progressBar');
    const percent = (e.pageX - $bar.offset().left) / $bar.width();
    audioElement.currentTime = Math.max(0, Math.min(1, percent)) * audioElement.duration;
};

// Handle metadata
const handleMetadata = () => {
    const d = audioElement.duration;
    $('#duration, #compactDuration').text(formatTime(d));
    playlist[currentIndex].durationFormatted = formatTime(d);
    renderPlaylist();
    updateTrackInfo();
};

// Toggle minimize/restore
const toggleMinimize = () => {
    isMinimized = !isMinimized;
    if (isMinimized) {
    $('#playerCard').addClass('compact');
    $('.full-only').hide();
    $('.compact-only').show();
    $('#minimizeBtn').hide();
    $('#restoreBtn').show();
    } else {
    $('#playerCard').removeClass('compact');
    $('.full-only').show();
    $('.compact-only').hide();
    $('#minimizeBtn').show();
    $('#restoreBtn').hide();
    }
};

// Hide/show player
const hidePlayer = () => {
    $('#playerCard').css('opacity', '0');
    setTimeout(() => {
        $('#playerCard').hide();
        $('#showPlayerBtn').css('opacity', '1').show();
    }, 350); // match transition duration
};

const showPlayer = () => {
    $('#showPlayerBtn').css('opacity', '0');
    setTimeout(() => {
        $('#showPlayerBtn').hide();
        $('#playerCard').css('opacity', '1').show();
    }, 350);
};

// Handle chevron rotation and gradient fade
const handleCollapseShow = () => {
    $('#chevronIcon').removeClass('collapsed');
    $('#playlistItems').removeClass('collapsed');
    $('#playlistWrapper').removeClass('collapsed-fade');
};

const handleCollapseHide = () => {
    $('#chevronIcon').addClass('collapsed');
    $('#playlistItems').addClass('collapsed');
    $('#playlistWrapper').addClass('collapsed-fade');
};

// Initialize
$(document).ready(function () {
    audioElement = $('#audioElement')[0];
    audioElement.volume = 0.03;

    renderPlaylist();
    updateTrackInfo();
    updateVolumeUI(3);
    updateVolumeUI(3, true);

    // Set initial collapsed state
    $('#chevronIcon').addClass('collapsed');
    $('#playlistItems').addClass('collapsed');
    $('#playlistWrapper').addClass('collapsed-fade');
    $('#pauseBtn, #compactPauseBtn').hide();

    // Start in compact mode
    toggleMinimize();

    // Control buttons
    $('#minimizeBtn, #restoreBtn').on('click', toggleMinimize);
    $('#hideBtn').on('click', hidePlayer);
    $('#showPlayerBtn').on('click', showPlayer);

    // Full mode controls
    $('#playBtn').on('click', playCurrent);
    $('#pauseBtn').on('click', pauseCurrent);
    $('#nextBtn').on('click', nextTrack);
    $('#prevBtn').on('click', prevTrack);
    $('#shuffleBtn').on('click', toggleShuffle);
    $('#repeatBtn').on('click', toggleRepeat);
    $('#volumeRange').on('input', e => handleVolumeChange(e, false));
    $('#progressBar').on('click', e => handleProgressClick(e, false));

    // Compact mode controls
    $('#compactPlayBtn').on('click', playCurrent);
    $('#compactPauseBtn').on('click', pauseCurrent);
    $('#compactNextBtn').on('click', nextTrack);
    $('#compactPrevBtn').on('click', prevTrack);
    $('#compactVolumeRange').on('input', e => handleVolumeChange(e, true));
    $('#compactProgressBar').on('click', e => handleProgressClick(e, true));

    // Playlist item clicks
    $(document).on('click', '.playlist-item', function () {
    const i = $(this).data('index');
    if (i !== currentIndex) {
        loadAndPlayTrack(i, isPlaying);
    } else if (!isPlaying) {
        playCurrent();
    }
    });

    // Bootstrap collapse events
    $('#playlistCollapse').on('show.bs.collapse', handleCollapseShow)
    .on('hide.bs.collapse', handleCollapseHide);

    // Audio events
    $(audioElement).on('timeupdate', updateProgressBars)
    .on('loadedmetadata', handleMetadata)
    .on('ended', () => {
        if (repeatMode) {
        audioElement.currentTime = 0;
        audioElement.play();
        } else {
        nextTrack();
        }
    })
    .on('play', () => {
        isPlaying = true;
        updatePlayPauseButtons();
    })
    .on('pause', () => {
        isPlaying = false;
        updatePlayPauseButtons();
    });

    // Preload first track
    audioElement.src = playlist[0].url;
    audioElement.load();
});