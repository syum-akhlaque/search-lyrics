function getApi()
{
    const lyricsText = document.getElementById("lyricsText").value;
    const apiUrl = `https://api.lyrics.ovh/suggest/${lyricsText}`
    fetch(apiUrl)
   .then(response => response.json())
   .then(data => displaySuggestion(data))
      
}
// show search result 
  function displaySuggestion(data){
    document.getElementById("lyricsList").innerText = "";
    for (let i = 0; i < 10; i++) {
        let lyricsTitle = data.data[i].title;
        let artistName = data.data[i].artist.name;
        let artistPicture = data.data[i].artist.picture_small;
        let albumTitle = data.data[i].album.title;
        let albumCover = data.data[i].album.cover_small;

        let lyricsApi = `https://api.lyrics.ovh/v1/${artistName}/${lyricsTitle}`;
        const div = document.createElement("div");
        const lyricsList = document.getElementById("lyricsList");
        document.getElementById("lyricsList").style.display = "block";     
        div.innerHTML = `<div class="single-result row align-items-center my-3 p-3">
              <div class="col-md-5">
                  <h3 class="lyrics-name">${lyricsTitle}</h3>
                  <p class="author lead">Album by <span>${artistName}</span></p>
              </div>
              <div class="col-md-4 lyrics-photo">
                <img src="${artistPicture}" alt="Cover photo">
                <img src="${albumCover}" alt="photo">
              </div>

              <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success" onclick = 'getLyrics("${lyricsApi}"," ${albumTitle}")' >Get Lyrics</button>
              </div>
          </div>`
        lyricsList.appendChild(div);      
    }
  }

  //get lyrics 
 function getLyrics(url,albumTitle){
    fetch(url)
    .then(response => response.json())
    .then(data => 
      {
        let getLyrics = document.getElementById("getLyrics");
        getLyrics.innerHTML = data.lyrics;
        document.getElementById("lyricsList").style.display = "none";
        document.getElementById("songTitle").style.display = "block";
        document.getElementById("songTitle").innerText = albumTitle;
      }
      )
  }
