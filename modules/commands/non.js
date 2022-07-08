const fs = require("fs");
module.exports.config = {
	name: "non",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Noprefix",
	usages: "non",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("non")==0 || (event.body.indexOf("Non")==0)) {
		var msg = {
				body: "Mày quá non😼😼",
				attachment: fs.createReadStream(__dirname + `/noprefix/non.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
