module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Em vừa mới ngủ dậy nè🥱",event.threadID, () =>process.enter(1))