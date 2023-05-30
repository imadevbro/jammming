export async function createPlaylist(playlistName, id, playlistUris) {
    console.log(id);
    let accessToken = localStorage.getItem('access_token');
    const endpoint = "https://api.spotify.com/v1/users/" + id + "/playlists";
    console.log(endpoint);
    try {
       const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
            Authorization: 'Bearer ' + accessToken,
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({name: playlistName})
        });

        if (!response.ok) {
            throw new Error('Failed to create playlist');
        }

        const playlist = await response.json();
        const playlistId = playlist.id;

        // Perform the second API call to add songs to the newly created playlist
        const addSongsEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

        const addSongsResponse = await fetch(addSongsEndpoint, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + accessToken,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ uris: playlistUris })
        });

        if (!addSongsResponse.ok) {
            throw new Error('Failed to add songs to the playlist');
        }

        return playlistId;
    } catch(error) {
        console.log(error);
    }
}