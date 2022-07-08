  const so_lan_spam = 5; // số lần spam, vượt quá sẽ bị ban
  const thoi_gian_spam = 60000; // 60000 millisecond (1 phút)
  const unbanAfter = 600000; // 600000 millisecond (10 phút) 
 module.exports.config = {
	name: "autobanuser",
	version: "1.0.0",
	hasPermssion: 0, 
	credits: "NTKhang",
	description: "tự động cấm người dùng nếu spam bot (random image)",
	commandCategory: "system",
	usages: "x",
	cooldowns: 5
};

module.exports. run = ({api, event}) => {
  return api.sendMessage("hehe mày spam bot thử tao xem", event.threadID, event.messageID);
};

module.exports.handleEvent = async ({ Users, api, event}) => {
	const fs = require("fs-extra");
	const moment = require("moment-timezone");
	
  let { senderID, messageID, threadID } = event;
  const folderRandomImage = __dirname + "/noprefix/menu";
  const allImage = fs.readdirSync(folderRandomImage);
  if (!global.client.autoban) global.client.autoban = {};
  if (!global.client.autoban[senderID]) {
    global.client.autoban[senderID] = {
      timeStart: Date.now(),
      number: 0
    }
  };
  
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = threadSetting.PREFIX || global.config.PREFIX;
	if (!event.body || event.body.indexOf(prefix) != 0) return;
	
	let dataUser = await Users.getData(senderID) || {};
	let data = dataUser.data || {};
	
	if ((global.client.autoban[senderID].timeStart + thoi_gian_spam) <= Date.now()) {
	  global.client.autoban[senderID] = {
	    timeStart: Date.now(),
	    number: 0
	  }
	}
	else {
	  global.client.autoban[senderID].number++;
	  if (global.client.autoban[senderID].number >= so_lan_spam) {
	    const time = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
			if (data && data.banned == true) return;
			data.banned = true;
			data.reason = `spam bot ${so_lan_spam} lần/${thoi_gian_spam/60000}phút`;
			data.autoban = {
			  timeStart: Date.now(),
			  unbanAfter
			};
			data.dateAdded = time;
			await Users.setData(senderID, { data });
			global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
			global.client.autoban[senderID] = {
	      timeStart: Date.now(),
	      number: 0
	    };
  		api.sendMessage({
  		  body: `🍄 Người dùng đã bị ban 🍄\n\n🍳Tên: ` + dataUser.name +`\n📩ID: ` + senderID +`\n🆙Lý do: Spambot 5 lần/phút\n💌Đã thông báo tới ad (kèm uid)\n\n😏Auto unban sau ${Math.floor(unbanAfter/60000)}phút`,
  		  attachment: fs.createReadStream(`${folderRandomImage}/${allImage[Math.floor(Math.random()*allImage.length)]}`)}, threadID, () => {
  		    setTimeout(async function() {
  		      delete data.autoban;
      	    data.banned = false;
      			data.reason = null;
      			data.dateAdded = null;
      			await Users.setData(senderID, { data });
      			global.data.userBanned.delete(senderID);
      			console.log("Unban người dùng")
  		    }, unbanAfter);
  		  });
        for (let idAdmin of global.config.ADMINBOT) {
  		  api.sendMessage("» Spam Ban «\n\n🆙ID box: " + threadID + `\n🤷‍♀️Người vi phạm: ` + dataUser.name +`\n📩ID: ` + senderID +`\n🤔Lý do: spam bot 5 lần/phút\n\n⏰Time: `+ time, idAdmin);
		  };
	  }
	}
};

//gửi all admin
// FIX ERROR