let progress = document.getElementById("progress"); 
let song = document.getElementById("song"); 
let ctrlIcon = document.getElementById("ctrlIcon"); 

// Setting up the progress bar maximum value and initial value based on the song duration
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Function to play or pause the song and update the control icon accordingly
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause(); 
        ctrlIcon.classList.remove("fa-pause"); 
        ctrlIcon.classList.add("fa-play"); 
    }
    else {
        song.play(); 
        ctrlIcon.classList.add("fa-pause"); 
        ctrlIcon.classList.remove("fa-play"); 
    }
}

// Event listener to update the progress bar as the song plays
song.ontimeupdate = function() {
    progress.value = song.currentTime;
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause"); 
    ctrlIcon.classList.remove("fa-play"); 
}