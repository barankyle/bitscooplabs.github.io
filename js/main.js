var categoryList = {
	"datasets": "purple",
	"development": "blue",
	"social": "green",
	"entertainment": "pink",
	"productivity": "red",
	"other": "yellow",
	"utilites": "orange"
};

var providerList = [
	{
		"name": "Create a Map",
		"category": "development",
		"icon": "fa-plus",
		"link": "https://developer.bitscoop.com/learn/providers"
	},
	{
		"name": "500px",
		"category": "productivity",
		"icon": "fa-plug",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/500px"
	},
	{
		"name": "Amazon",
		"category": "development",
		"icon": "fa-amazon",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/amazon"
	},
	{
		"name": "Apigee",
		"category": "development",
		"icon": "fa-database",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/apigee"
	},
	{
		"name": "APIMatic",
		"category": "development",
		"icon": "fa-exchange",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/apimatic"
	},
	{
		"name": "Bitly",
		"category": "utilites",
		"icon": "fa-link",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/bitly"
	},
	{
		"name": "Blogger",
		"category": "social",
		"icon": "fa-rss-square",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Constant Contact",
		"category": "utilites",
		"icon": "fa-envelope",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/constant_contact"
	},
	{
		"name": "Context.IO",
		"category": "utilites",
		"icon": "fa-envelope-o",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/context_io"
	},
	{
		"name": "Delicious",
		"category": "social",
		"icon": "fa-delicious",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/delicious"
	},
	{
		"name": "Desk.com",
		"category": "productivity",
		"icon": "fa-plug",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/desk_com"
	},
	{
		"name": "Donors Choose.org",
		"category": "other",
		"icon": "fa-graduation-cap",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/donors_choose"
	},
	{
		"name": "Dropbox",
		"category": "productivity",
		"icon": "fa-dropbox",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/dropbox"
	},
	{
		"name": "Etsy",
		"category": "social",
		"icon": "fa-etsy",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/etsy"
	},
	{
		"name": "Eventbrite",
		"category": "social",
		"icon": "fa-calendar",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/eventbrite"
	},
	{
		"name": "Facebook",
		"category": "social",
		"icon": "fa-facebook-official",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/facebook"
	},
	{
		"name": "Factual",
		"category": "datasets",
		"icon": "fa-location-arrow",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/factual"
	},
	{
		"name": "Fitbit",
		"category": "social",
		"icon": "fa-heart",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/fitbit"
	},
	{
		"name": "Flickr",
		"category": "social",
		"icon": "fa-flickr",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/flickr"
	},
	{
		"name": "Foursquare",
		"category": "social",
		"icon": "fa-foursquare",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/foursquare"
	},
	{
		"name": "Getty Images",
		"category": "productivity",
		"icon": "fa-picture-o",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/getty_images"
	},
	{
		"name": "GitHub",
		"category": "development",
		"icon": "fa-github",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/github"
	},
	{
		"name": "Google AdSense",
		"category": "development",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Analytics",
		"category": "development",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Books",
		"category": "entertainment",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Calendar",
		"category": "productivity",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Drive",
		"category": "productivity",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Mail",
		"category": "productivity",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Cloud Platform",
		"category": "development",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Firebase",
		"category": "development",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google PageSpeed",
		"category": "utilites",
		"icon": "fa-file-text-o",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Google Tasks",
		"category": "productivity",
		"icon": "fa-google",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	},
	{
		"name": "Groupon",
		"category": "social",
		"icon": "fa-users",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/groupon"
	},
	{
		"name": "Heroku",
		"category": "development",
		"icon": "fa-code",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/heroku"
	},
	{
		"name": "Instagram",
		"category": "social",
		"icon": "fa-instagram",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/instagram"
	},
	{
		"name": "JSON Placeholder API",
		"category": "development",
		"icon": "fa-terminal",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/jsonplaceholder"
	},
	{
		"name": "LAFORGE SocialFlo",
		"category": "social",
		"icon": "fa-eye",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/laforge"
	},
	{
		"name": "LinkedIn",
		"category": "social",
		"icon": "fa-linkedin",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/linkedin"
	},
	{
		"name": "MailChimp",
		"category": "productivity",
		"icon": "fa-envelope-o",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/mailchimp"
	},
	{
		"name": "Meetup",
		"category": "social",
		"icon": "fa-meetup",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/meetup"
	},
	{
		"name": "Microsoft Azure",
		"category": "development",
		"icon": "fa-windows",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/microsoft"
	},
	{
		"name": "Microsoft Bing",
		"category": "datasets",
		"icon": "fa-search",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/microsoft"
	},
	{
		"name": "Microsoft Office",
		"category": "productivity",
		"icon": "fa-windows",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/microsoft"
	},
	{
		"name": "Napster",
		"category": "entertainment",
		"icon": "fa-volume-up",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/napster"
	},
	{
		"name": "New York Times",
		"category": "entertainment",
		"icon": "fa-newspaper-o",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/new_york_times"
	},
	{
		"name": "Next Caller",
		"category": "productivity",
		"icon": "fa-phone",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/next_caller"
	},
	{
		"name": "PayPal",
		"category": "other",
		"icon": "fa-paypal",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/paypal"
	},
	{
		"name": "Pinboard",
		"category": "productivity",
		"icon": "fa-thumb-tack",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/pinboard"
	},
	{
		"name": "Pinterest",
		"category": "social",
		"icon": "fa-pinterest",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/pinterest"
	},
	{
		"name": "Postman",
		"category": "development",
		"icon": "fa-rocket",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/postman"
	},
	{
		"name": "Postmark",
		"category": "productivity",
		"icon": "fa-envelope-o",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/postmark"
	},
	{
		"name": "Reddit",
		"category": "social",
		"icon": "fa-reddit-alien",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/reddit"
	},
	{
		"name": "Ruby Gems",
		"category": "development",
		"icon": "fa-diamond",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/ruby_gems"
	},
	{
		"name": "Salesforce Chatter",
		"category": "productivity",
		"icon": "fa-cloud",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/salesforce"
	},
	{
		"name": "Salesforce Force.com",
		"category": "productivity",
		"icon": "fa-cloud",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/salesforce"
	},
	{
		"name": "Salesforce Sandbox",
		"category": "productivity",
		"icon": "fa-cloud",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/salesforce"
	},
	{
		"name": "SendGrid",
		"category": "utilites",
		"icon": "fa-envelope-o",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/sendgrid"
	},
	{
		"name": "Slack",
		"category": "productivity",
		"icon": "fa-slack",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/slack"
	},
	{
		"name": "Slice",
		"category": "other",
		"icon": "fa-shopping-cart",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/slice"
	},
	{
		"name": "SoundCloud",
		"category": "entertainment",
		"icon": "fa-soundcloud",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/soundcloud"
	},
	{
		"name": "Spotify",
		"category": "entertainment",
		"icon": "fa-spotify",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/spotify"
	},
	{
		"name": "Stack Exchange",
		"category": "development",
		"icon": "fa-stack-exchange",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/stack_exchange"
	},
	{
		"name": "Steam",
		"category": "entertainment",
		"icon": "fa-steam",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/steam"
	},
	{
		"name": "Strava",
		"category": "social",
		"icon": "fa-bicycle",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/strava"
	},
	{
		"name": "Tumblr",
		"category": "social",
		"icon": "fa-tumblr",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/tumblr"
	},
	{
		"name": "Twilio",
		"category": "utilites",
		"icon": "fa-commenting",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/twilio"
	},
	{
		"name": "Twitter",
		"category": "social",
		"icon": "fa-twitter",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/twitter"
	},
	{
		"name": "Uber",
		"category": "other",
		"icon": "fa-car",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/uber"
	},
	{
		"name": "Urban Airship",
		"category": "entertainment",
		"icon": "fa-plug",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/urban_airship"
	},
	{
		"name": "Weather Underground",
		"category": "datasets",
		"icon": "fa-bolt",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/weatherunderground"
	},
	{
		"name": "World of Warcraft",
		"category": "entertainment",
		"icon": "fa-gamepad",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/blizzard"
	},
	{
		"name": "Wolfram Alpha",
		"category": "datasets",
		"icon": "fa-search",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/wolfram_alpha"
	},
	{
		"name": "Yahoo",
		"category": "datasets",
		"icon": "fa-yahoo",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/yahoo"
	},
	{
		"name": "Yellow Pages",
		"category": "datasets",
		"icon": "fa-book",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/yellow_pages"
	},
	{
		"name": "YouTube",
		"category": "entertainment",
		"icon": "fa-youtube",
		"link": "https://github.com/bitscooplabs/provider-maps/tree/master/google"
	}
];

var $container = $('#map-container');

providerList.forEach(function(element) {
	$container.append(
		"<div class=\"mix " +
		element.category + " " +
		categoryList[element.category] +
		"\" data-link=\"" + element.link + "\"><div class=\"content\"><i class=\"fa " +
		element.icon +
		" fa-3x\"></i><span>" +
		element.name +
		"</span></div></div>")
});

$(".mix").click(
	function() {
		window.location = $(this).attr("data-link");
	});

	var mixer = mixitup($container, {
		"animation": {
			"duration": 250,
			"nudge": true,
			"effects": "fade scale(0.68)"
		},
	callbacks: {
			onMixClick: function(state, originalEvent) {
					 mixer.filter($(originalEvent.target).data("toggle"));
			}
	}
	});
