export async function fetchSearch(searchValue) {
    let accessToken = localStorage.getItem('access_token');
    const endpoint = "https://api.spotify.com/v1/search" + "?q=" + searchValue + "&type=track";
    try {
        const response = await fetch(endpoint, {
            headers: {
            Authorization: 'Bearer ' + accessToken
            }
        });
        console.log(await response.json());
    } catch(error) {
        console.log(error);
    }
}