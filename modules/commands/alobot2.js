const fs = require("fs");
module.exports.config = {
	name: "Alobot2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "Gọi Bot Version 2",
	commandCategory: "System",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu bot")==0 || (event.body.indexOf("Yêu bot")==0)) {
		var msg = {
				body: "cảm ơn cậu hihi😘, bot cũng yêu bot và yêu cậu😘",
			}
			api.sendMessage(msg, threadID, messageID);
}
	if (event.body.indexOf("ghét bot")==0 || (event.body.indexOf("Ghét bot")==0)) {
		var msg = {
				body: "😢Sao lại ghét,Bot cũng biết buồn đó😭😭",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }