const fs = require("fs");
module.exports.config = {
	name: "lol",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Kh�ng cn du lnh",
	usages: "lol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lol")==0 || (event.body.indexOf("Lol")==0)) {
		var msg = {
				body: "🌚🌚🌚 Fuckyou",
				attachment: fs.createReadStream(__dirname + `/noprefix/lol.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }