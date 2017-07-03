var keys = require("./keys.js");
var consumerKey = keys.twitterKeys.consumer_key;
var consumerSecret = keys.twitterKeys.consumer_secret;
var accessTokenKey = keys.twitterKeys.access_token_key;
var accessTokenSecret = keys.twitterKeys.access_token_secret;

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret
});

var params = {screen_name: 'jessesternmusic'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	tweets.forEach(function(element) {
  		console.log(element.created_at);
  		console.log(element.text);	
  	});
    // console.log(tweets[0].text);
  }
});