function getApi()
{
    const lyricsText = document.getElementById("lyricsText").value;
    const apiUrl = `https://api.lyrics.ovh/suggest/${lyricsText}`
    fetch(apiUrl)
   .then(response => response.json())
   .then(data => displayUser(data))
      
}
  function displayUser(data){
      
    for (let i = 0; i < 10; i++) {
        let abbumTitle = data.data[i].title;
        let artistName = data.data[i].artist.name;
        let lyricsApi = `https://api.lyrics.ovh/v1/${artistName}/${abbumTitle}`;
        
        const div = document.createElement("div");
        const lyricsList = document.getElementById("lyricsList");
        div.innerHTML = `<p class="author lead"><strong id="albumTitle">  ${abbumTitle} </strong> Album by<span id="artistName">  ${artistName}  </span> <button class="btn btn-success" onclick = 'getLyrics("${lyricsApi}")'> Get Lyrics</button> </p>`; 
        lyricsList.appendChild(div);      
    }

  }
 function getLyrics(url){
    fetch(url)
    .then(response => response.json())
    .then(data => 
      {
        let getLyrics = document.getElementById("getLyrics");
        getLyrics.innerHTML = data.lyrics;
        console.log(data.lyrics);  
      }
      )
  }
//using map
//    const userNames = data.data.map(data => {
//     let albumTitle = data.title;
//     let artistName = data.artist.name;
//     return `${albumTitle} Album BY ${artistName}`;
//  })
// fetch(lyricsApi)
//         .then(response => response.json())
//         .then(data => {
//             let lyrics = data;
//         })