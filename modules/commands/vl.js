const fs = require("fs");
module.exports.config = {
	name: "vl",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "vl",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vl")==0 || (event.body.indexOf("Vl")==0)) {
		var msg = {
				body: "Cute quá vậy💓",
				attachment: fs.createReadStream(__dirname + `/noprefix/vl.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }