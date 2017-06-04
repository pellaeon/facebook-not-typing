chrome.webRequest.onBeforeRequest.addListener(
		function(info) {
			console.log("Cat intercepted: " + info.url);
			return { cancel: true };
		},
		// filters
		{
			urls: [
				"https://www.facebook.com/ajax/typeahead/*",
				"https://www.facebook.com/typeahead/*",
				"https://www.facebook.com/ufi/typing/*",
				"https://pixel.facebook.com/ajax/chat/opentab_tracking.php",
				"https://pixel.facebook.com/ajax/log_ticker_render.php",
				"https://www.facebook.com/ajax/messaging/typ.php*",
				"https://www.facebook.com/ai.php*",
				"https://*.fna.fbcdn.net/v*"
			],
			types: ["xmlhttprequest", "sub_frame"]
		},
		// extraInfoSpec
		["blocking"]
);
