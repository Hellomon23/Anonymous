const axios = require("axios");
module.exports.config = {
	name: "kiemtra",
	version: "0.0.1-beta",
	hasPermssion: 1,
	credits: "Adonis",
	description: "",
	commandCategory: "Qtv",
	usages: "kiemtra",
	cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    }
};

module.exports.run = async ({ args, api, event, Currencies, client }) => {
   const { threadID, senderID, messageID, type, mentions } = event;
   const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
   if (args.length == 0) return api.sendMessage(` ===  Bạn có thể dùng  === \n--------\n[𝐌𝐋🐸] => kiemtra ndfb => Lọc thành viên bị bay acc khỏi nhóm\n--------\n[𝐌𝐋🐸] => kiemtra del => Lọc thành viên khỏi nhóm theo số tin nhắn\n--------\n[𝐌𝐋🐸] => kiemtra onl => Xem thời gian hoạt động bot onl \n--------\n[𝐌𝐋🐸] => kiemtra tt => Check độ tương tác của bạn\n--------\n[𝐌𝐋🐸] => kiemtra all => kiemtra tất cả độ tương tác các thành viên trong box\n--------\n   === 「${timeNow}」 ===`, event.threadID, event.messageID);
    var arr = [];
    var mention = Object.keys(event.mentions);
    const data = await api.getThreadInfo(event.threadID);
    if (args[0] == "ndfb") {// kick người dùng fb
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());
    if (!find) return api.sendMessage(`[𝐌𝐋🐸] => Bạn và bot cần là quản trị viên!`,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "gender": value.gender});
        for (const user of storage) {
            if (user.gender == undefined) api.removeUserFromGroup(user.id,event.threadID)
        }return;
    }  else if (args[0] == "del") {// lọc thành viên theo số tin nhắn bạn cần
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());
    if (!find) return api.sendMessage(`[𝐌𝐋🐸] => Bạn và bot cần là quản trị viên!`,event.threadID);
    if (!args[1]) return api.sendMessage(`[𝐌𝐋🐸] => HDSD: check del => số tin nhắn cần lọc `,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = (await Currencies.getData(user.id)).exp;
            if (typeof countMess == "undefined") await Currencies.setEXP(mention, parseInt(0))
           // if (countMess ==  undefined) api.removeUserFromGroup(user.id,event.threadID)
            if (countMess <= args[1]) setTimeout(function() { api.removeUserFromGroup(user.id,event.threadID) }, 2000);
        } return;
}
    else if (args[0] == "onl") {
      	let time = process.uptime();
	let hours = Math.floor(time / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
      const timeStart = Date.now();
       return api.sendMessage('《𝐌𝐋🍅》 ➽ 〖Đang kiểm tra kết nối vui lòng chờ〗... !', event.threadID, (err, info) => {
    setTimeout(() => {
      api.sendMessage(`《𝐌𝐋🍎》 ➥ 〘Ping〙: ${(Date.now() - timeStart)}ms \n《𝐌𝐋🍓》 ➦ 〚Thời gian bot hoạt động〛: ${hours}:${minutes}:${seconds}`, event.threadID, event.messageID);
    }, 200);
  }, event.messageID);
} else if (args[0] == "all") {
      let threadInfo = await api.getThreadInfo(event.threadID);
        let number = 0, msg = "", storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            if (user.name != null) exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
        });
         let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        for (const lastData of exp) {
            number++;
            msg += `『${number}』: ${(lastData.name) == null || undefined  ? "Không tên" : lastData.name} với ${lastData.exp} tin nhắn \n`;
        }
        return api.sendMessage(`==「KIỂM TRA TƯƠNG TÁC」==\n\n` + msg +`\n» 💹Tỉ lệ tương tác: ${(exp[rank].exp).toFixed(0)}%\n» 💬 Tổng số tin nhắn: ${threadInfo.messageCount}\n    === 「${timeNow}」 ===`, threadID, messageID);
    }
    
    else if (args[0] == "tt") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`\n» Bạn`+` đứng hạng ${rank} với ${infoUser.exp} tin nhắn\n» 👤Tên: ${infoUser.name}\n» ⬛Hạng: ${rank} \n» 💬Tin nhắn: ${infoUser.exp}\n» 🏆Rank: ${rank + 1}\n» 💹Tỉ lệ tương tác: ${(exp[rank].exp).toFixed(0)}%\n» ⏰Time: ${timeNow}`, event.threadID,event.messageID);
    }
  else if (args[0] == "()") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`\n» Bạn`+` đứng hạng ${rank} với ${infoUser.exp} tin nhắn\n» 👤Tên: ${infoUser.name}\n» ⬛Hạng: ${rank} \n» 💬Tin nhắn: ${infoUser.exp}\n» 🏆Rank: ${rank + 1}\n» 💹Tỉ lệ tương tác: ${(exp[rank].exp).toFixed(0)}%\n» ⏰Time: ${timeNow}`, event.threadID,event.messageID);
  }
}