const fs = require("fs");
module.exports.config = {
	name: "spam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "cmm spam ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("spam")==0 || (event.body.indexOf("Spam")==0)) {
		var msg = {
				body: "Chém chết cmm 🙃",
				attachment: fs.createReadStream(__dirname + `/noprefix/spam.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}