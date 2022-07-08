const fs = require("fs");
module.exports.config = {
	name: "haha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "haha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("haha")==0 || (event.body.indexOf("Haha")==0)) {
		var msg = {
				body: "Cười 😂🤣🤣",
				attachment: fs.createReadStream(__dirname + `/noprefix/haha.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }