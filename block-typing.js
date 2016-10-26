chrome.webRequest.onBeforeRequest.addListener(
		function(info) {
			console.log("Cat intercepted: " + info.url);
			return { cancel: true };
		},
		// filters
		{
			urls: [
				"https://www.facebook.com/ajax/typeahead/*",
				"https://www.facebook.com/ufi/typing/*",
				"https://pixel.facebook.com/ajax/chat/opentab_tracking.php*",
				"https://www.facebook.com/ajax/messaging/typ.php*",
				"https://www.facebook.com/ai.php*"
			],
			types: ["xmlhttprequest", "sub_frame"]
		},
		// extraInfoSpec
		["blocking"]
);
