// https://developer.spotify.com/documentation/web-playback-sdk/quick-statr/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/"
const clientId ="9afbc7de2572471c80a21ba25b1b706b"

const scopes = [ 
 "user-read-currently-playing",
 "user-read-recently-played",
 "user-read-playback-state",
 "user-top-read",
 "user-modify-playback-state",];

 export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}`;
