// this section is for single video 
// Get elements
const modal = document.getElementById('singleVideoModal');
const closeBtn = document.getElementById('closeModalBtn');
const singleVideoBtn = document.querySelectorAll('.custom-button .title')[0].parentNode; // First container
const ytInput = document.getElementById('youtubeURL');
const downloadBtn = document.querySelector('.video-download-btn');
// Show modal when "Single Video" is clicked
singleVideoBtn.onclick = function () {
    modal.style.display = "flex";
}
// Hide modal on close
closeBtn.onclick = function () {
    modal.style.display = "none";
    ytInput.value = '';
    downloadBtn.disabled = true;
}
// Hide modal when clicking outside the modal-content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        ytInput.value = '';
        downloadBtn.disabled = true;
    }
}
// Enable download button only when URL is entered
ytInput.oninput = function () {
    downloadBtn.disabled = ytInput.value.trim() === "";
}

const audioRadio = document.getElementById('audioOnly');
const videoRadio = document.getElementById('videoOnly');
const qualityGroup = document.getElementById('qualityGroup');

audioRadio.onclick = function() {
  qualityGroup.style.display = 'none';
};
videoRadio.onclick = function() {
  qualityGroup.style.display = 'block';
};

// this section is for playlist video
const another_modal = document.getElementById('PlaylistVideoModal');
const another_closeBtn = document.getElementById('closeModalBtn2');
const playlistvideoBtn = document.querySelectorAll('.custom-button2 .title2')[0].parentNode;
const UInput = document.getElementById('youtubeURL2');
const another_downloadBtn = document.querySelector('.playlist-download-btn');

playlistvideoBtn.onclick = function () {
    another_modal.style.display = "flex";
}

another_closeBtn.onclick = function () {
    another_modal.style.display = 'none';
    UInput.value = '';
    another_downloadBtn.disabled = true;
}

window.onclick = function (event) {
    if (event.target == another_modal){
        another_modal.style.display = "none";
        UInput.value = '';
        another_downloadBtn.disabled = true;
    }
}

UInput.oninput = function () {
    another_downloadBtn.disabled = UInput.value.trim() === "";
}

// const another_qualityGroup = document.getElementById('qualityGroup2');