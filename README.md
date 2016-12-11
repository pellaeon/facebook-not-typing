# Facebook Not Typing

This Chrome extension started originally to block Facebook from knowing that you're typing a comment or message, though later I further include blocking more things:

- Block Facebook from knowing when you open a chat dialog with someone (`https://pixel.facebook.com/ajax/chat/opentab_tracking.php`)
- From my observation, Facebook preloads the initial frames of videos, this extension also blocks that.

Note that with this extension, tagging someone in a post will break.

## Install

Download ZIP file, decompress, follow [Google's guide to install unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked), point the file chooser to the directory you just decompressed.

## Extra features

This extension was separated into [facebook-micromanage](https://github.com/pellaeon/facebook-micromanage). Users who only want to block type tracking only need this simple extension. facebook-micromanage contains extra features such as breaking the [Facebook filter bubble](https://en.wikipedia.org/wiki/Filter_bubble) and many more. (I hope this would strike Facebook angry and respect its users ;-) )

## Donate

If you'd like to buy me a coffee, please send Bitcoin to `17sei77Rt29wQ7cx4hqznQ2esMA49Fj9KQ`

## License
AGPLv3
