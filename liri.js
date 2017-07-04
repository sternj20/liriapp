var keys = require("./keys.js");

//Twitter Keys
var twitterConsumerKey = keys.twitterKeys.consumer_key;
var twitterConsumerSecret = keys.twitterKeys.consumer_secret;
var twitterAccessTokenKey = keys.twitterKeys.access_token_key;
var twitterAccessTokenSecret = keys.twitterKeys.access_token_secret;

//Command input given by user in terminal
var command = process.argv[2];


//Twitter
var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: twitterConsumerKey,
	consumer_secret: twitterConsumerSecret,
	access_token_key: twitterAccessTokenKey,
	access_token_secret: twitterAccessTokenSecret
});

var params = {screen_name: 'jessesternmusic'};



//Spotify

var Spotify = require('node-spotify-api');

var spotifyClientId = keys.spotifyKeys.client_id;
var spotifyClientSecret = keys.spotifyKeys.client_secret;


//Functions
function showTweets(){
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			tweets.forEach(function(element, index) {
				index = index + 1;
				if (index <= 20){
					console.log(index);
					console.log(element.created_at);
					console.log(element.text);	
				}
			});
		}
	});
}

function showSpotifySong(){

	var songToFind = process.argv[3];
	var spotify = new Spotify({
		id: spotifyClientId,
		secret: spotifyClientSecret
	});


	spotify.search({ type: 'track', query: songToFind}, function(err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}
			console.log(data.tracks.items[0].album.artists[0].name);
			console.log(data.tracks.items[0].name);
			console.log(data.tracks.items[0].preview_url);
			console.log(data.tracks.items[0].album.name);
	});
}


if(command === 'my-tweets'){
	showTweets();
} else if (command === 'spotify-this-song'){
	showSpotifySong();
} else if (command === 'movie-this'){

} else if (command === 'do-what-it-says'){

}