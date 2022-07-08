const fs = require("fs");
module.exports.config = {
	name: "mew",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Mew",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mew")==0 || (event.body.indexOf("Mew")==0)) {
		var msg = {
				body: "Mèo yêu Đảng 🤟🤟",
				attachment: fs.createReadStream(__dirname + `/noprefix/meo.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }