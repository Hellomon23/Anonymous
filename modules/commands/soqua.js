const fs = require("fs");
module.exports.config = {
	name: "soqua",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "soqua",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sợ")==0 || (event.body.indexOf("sợ")==0)) {
		var msg = {
				body: "Ui ui sợ quá sợ quá🤮",
				attachment: fs.createReadStream(__dirname + `/noprefix/soqua.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }