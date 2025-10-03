// Problem 9: Music Playlist Manager

    // Sample playlist data
    let playlist = [
        { title: "Song A", artist: "Artist 1", genre: "Pop", duration: 210 }, // seconds
        { title: "Song B", artist: "Artist 2", genre: "Rock", duration: 180 },
        { title: "Song C", artist: "Artist 3", genre: "Pop", duration: 240 },
        { title: "Song D", artist: "Artist 4", genre: "Jazz", duration: 300 },
        { title: "Song E", artist: "Artist 5", genre: "Rock", duration: 150 }
    ];
    
    // 1. Calculate total duration of the playlist
    function getTotalDuration(playlist) {
        return playlist.reduce((total, song) => total + song.duration, 0);
    }
    
    // 2. Filter songs by genre
    function filterByGenre(playlist, genre) {
        return playlist.filter(song => song.genre.toLowerCase() === genre.toLowerCase());
    }
    
    // 3. Find the longest song
    function getLongestSong(playlist) {
        return playlist.reduce((longest, song) =>
            song.duration > longest.duration ? song : longest
        );
    }
    
    // 4. Group songs by artist
    function groupByArtist(playlist) {
        return playlist.reduce((groups, song) => {
            if (!groups[song.artist]) {
                groups[song.artist] = [];
            }
            groups[song.artist].push(song);
            return groups;
        }, {});
    }
    
    // 5. Simulate fetching new songs asynchronously and adding them to playlist
    async function fetchNewSongs() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { title: "Song F", artist: "Artist 6", genre: "Pop", duration: 200 },
                    { title: "Song G", artist: "Artist 7", genre: "Rock", duration: 260 }
                ]);
            }, 2000); // simulate 2 seconds delay
        });
    }
    
    async function updatePlaylist() {
        console.log("Fetching new songs...");
        let newSongs = await fetchNewSongs();
        playlist = [...playlist, ...newSongs];
        console.log("Updated Playlist:", playlist);
    }
    
    // ===============================
    // Test functions
    // ===============================
    
    console.log("Total Duration (seconds):", getTotalDuration(playlist));
    console.log("Pop Songs:", filterByGenre(playlist, "Pop"));
    console.log("Longest Song:", getLongestSong(playlist));
    console.log("Grouped by Artist:", groupByArtist(playlist));
    
    // Update playlist with new songs (asynchronous)
    updatePlaylist();