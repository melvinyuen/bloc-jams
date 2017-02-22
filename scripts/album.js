// Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26'},
        { title: 'Green', duration: '3:14'},
        { title: 'Red', duration: '5:01'},
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

// Another Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01'},
        { title: 'Ring, ring, ring', duration: '5:01',},
        { title: 'Fits in your pocket', duration: '3:21',},
        { title: 'Can you hear me now?', duration: '3:14'},
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

// Third Example Album object Assignment 11
var albumMelvin = {
    title: 'Melvin First Album',
    artist: 'Melvin Yuen',
    label: 'Melvin',
    year: '1982',
    albumArtUrl: 'assets/images/album_covers/19.png',
    songs: [
        { title: 'Melvin, Song 1', duration: '1:01'},
        { title: 'Melvin, Song 2', duration: '2:02',},
        { title: 'Melvin, Song 3', duration: '3:03',},
        { title: 'Melvin, Song 4', duration: '4:04'},
        { title: 'Melvin, Song 5', duration: '5:05'}
    ]
};


var createSongRow = function(songNumber, songName, songLength) {
    var template = 
        '<tr class="album-view-song-item">'
    +   ' <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
    +   ' <td class="song-item-title">' + songName + '</td>'
    +   ' <td class="song-item-duration">' + songLength + '</td>'
    +   '</tr>'
    ;
    
    return template;
};

// #1
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];     // set a var to the album cover element  
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];


var setCurrentAlbum = function(album) {
    
    // #2
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.artist + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    // #3
    albumSongList.innerHTML = '';
    
    // #4
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

window.onload = function() { 
    setCurrentAlbum(albumPicasso);

    songListContainer.addEventListener('mouseover',function(event) {
    //#1
        if (event.target.parentElement.className === 'album-view-song-item') {
            // Change the content from the number to the play button's HTML
            event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
        }
    });
    
    for (var i = 0; i < songRows.length; i++) {
        songRows[i].addEventListener('mouseleave', function(event) {
            // Selects first child element, which is the song-item-number element
            this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
        });
    }
}

    var albums = [albumPicasso, albumMarconi, albumMelvin];                 // create an array of album objects
    var index = 1;                                                          /* create a `index` var to track the array index to click: if index === 1, then we'll load index + 1 (or 2) */
                                                                            //element.addEventListener("click", function(){ alert("Hello World!"); });
    albumImage.addEventListener('click',function(event) {                   // create click event listener
        setCurrentAlbum(albums[index]);                                     // inside the listener call setCurrentAlbum with the next album
        index++;
        if (index == albums.length) {                                        // need logic that if the last one they clicked was #2, show #0 [album1, album2, album3]
            index = 0;                                                      
        }
     
    });