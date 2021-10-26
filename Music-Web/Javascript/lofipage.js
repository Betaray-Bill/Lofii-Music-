var playlist_songs = document.getElementById("playlist_songs")
var title = document.getElementById("title")
var audio = document.getElementById("audio")
var play_songs = document.getElementsByClassName("icon_play")
var song_wrapper = document.getElementById("song_wrapper")
var song_sec = document.getElementsByClassName("song_wrapper")
var play_icon = document.querySelector("i")
var progress_bar_grow = document.getElementsByClassName("progress_bar")
var progress_bar = document.getElementById("progress_bar")

var hero_bg_img = document.getElementById("hero_bg_img")
var playlist_title = document.getElementById("playlist_title")

let Songs = JSON.parse(localStorage.getItem("Lofi"))

var Song = Songs[0]
var song_list = Song.lofi_songs

let html = ``
song_list.map((data, e) => {
    html = `
            <div class="song_wrapper" id="song_wrapper" key=${e}>
                <div class="song_section">
                    <div class="song_img">
                        <p>${e+1}</p>
                        <img src="${data.song_img}" alt=${data.song_title}>
                    </div>
                    <div class="song_cont">
                        <p class="song_name">${data.song_title}</p>
                    </div>
                </div>
                <audio src="${data.audio}" id="audio" type="audio/mp3"></audio>
                <div class="progress_bar" id="progress_bar"></div>
                <div class="progress_section">
                    <div class="icon_play" id="icon_play">play</div>

                </div>
            </div>
            `
    playlist_songs.innerHTML += html

})

var names = document.getElementById("name")
names.addEventListener("click", (e) => {
    names.innerHTML = "yoo"
})

hero_bg_img.src = Song.bg
playlist_title.innerHTML = Song.title

function playSong() {
    song_wrapper.classList.add("play")
}

let now_playing_song

for (var i = 0; i <= song_sec.length; i++) {
    var p_song = song_sec[i]

    p_song.addEventListener("click", (e) => {
        var p_btn_clicked = e.target
        var isPlaying = song_wrapper.classList.contains("play")

        if (isPlaying) {
            p_btn_clicked.children[1].pause()
            p_btn_clicked.children[3].children[0].innerHTML = "play"
            song_wrapper.classList.remove("play")
        } else {
            p_btn_clicked.children[1].play()
            song_wrapper.classList.add("play")
            console.log(p_btn_clicked.children[3].children[0].innerText)
            p_btn_clicked.children[3].children[0].innerHTML = "pause"
        }

        // var audio_progress_time = ((p_btn_clicked.children[1].duration) / 60).toString().split('.')
        // var time = audio_progress_time[0] + "." + audio_progress_time[1].toString().slice(0, 2)

        // setInterval(() => {
        //     if (isPlaying) {
        //         time = time - 0.01
        //     }
        // }, time);
        // console.log(time)
    })
}


// var goback = document.getElementById("goback")

function goBack() {
    window.history.go(-1)
}

function goForward() {
    window.history.go(1)
}