const clientId = "f054f91e9c6a4debba3ec992ccda0f57"; // Replace with your client ID
const parameters = new URLSearchParams(window.location.search);
const code = parameters.get("code");

export async function runFlow() {
    if (!code) {
        redirectToAuthCodeFlow(clientId);
    } else {
        await getAccessToken(clientId, code);
        const profile = await fetchProfile();
        return profile;
    }
}

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("scope", "user-read-private user-read-email playlist-modify-public");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}


export async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");
    console.log(verifier);
    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: "http://localhost:3000/callback",
        client_id: clientId,
        code_verifier: verifier
      });

    const response = fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })
    .then(response => {
          if (!response.ok) {
            throw new Error('HTTP status ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          localStorage.setItem('access_token', data.access_token);
        })
        .catch(error => {
          console.error('Error:', error);
    });
}

export async function fetchProfile() {
    let accessToken = localStorage.getItem('access_token');
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
        Authorization: 'Bearer ' + accessToken
        }
    });

    return await response.json();
}



export function populateUI(profile) {
    console.log(profile.display_name);
    console.log(profile.id);
    console.log(profile.email);
}