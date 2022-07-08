const fs = require("fs");
module.exports.config = {
	name: "ỏ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Ỏooooooooo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ỏ")==0 || (event.body.indexOf("Ỏ")==0)) {
		var msg = {
				body: "Hôm nay trời đẹp thế nhờ, Ỏhhhhhhhhhhh😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/ỏ.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }