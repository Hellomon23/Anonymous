module.exports.config = {
    name: "duyệt",
    version: "1.0.6",
    credits: "CatalizCS mod by Kadeer",
    hasPermssion: 2,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "System",
    usages: "[u] [t] [a]",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`🐉 ${singleIndex} 𝙆𝙝ô𝙣𝙜 𝙥𝙝ả𝙞 𝙡à 𝙢ộ𝙩 𝙘𝙤𝙣 𝙨ố 𝙝ợ𝙥 𝙡ệ 🚫`, threadID, messageID);
        }
        return api.sendMessage(`🐉 Đã 𝙩ừ 𝙘𝙝ố𝙞 𝙩𝙝à𝙣𝙝 𝙘ô𝙣𝙜 🐉`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");       
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`🐉 ${singleIndex} 𝙆𝙝ô𝙣𝙜 𝙥𝙝ả𝙞 𝙡à 𝙢ộ𝙩 𝙘𝙤𝙣 𝙨ố 𝙝ợ𝙥 𝙡ệ 🚫`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            api.changeNickname(`👉 ${global.config.PREFIX} 👈 • ${(!global.config.BOTNAME) ? "Made by ???" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage("", event.threadID, () => api.sendMessage({body:`🔱🪂𝗣𝗵𝗲̂ 𝗗𝘂𝘆𝗲̣̂𝘁 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴✅\n\n❯ 𝑩𝒂̂𝒚 𝑯 𝑩𝒐𝒙 𝑪𝒖̉𝒂 𝑩𝒂̣𝒏 𝑪𝒐́ 𝑻𝒉𝒆̂̉ 𝑺𝒖̛̉ 𝑫𝒖̣𝒏𝒈 𝑩𝒐𝒕\n❯ 𝑺𝒖̛̉ 𝒅𝒖̣𝒏𝒈 /𝙢𝙚𝙣𝙪 𝒉𝒐𝒂̣̆𝒄 /𝙝𝙚𝙡𝙥 đ𝒆̂̉ 𝒃𝒊𝒆̂́𝒕 𝒕𝒐𝒂̀𝒏 𝒃𝒐̣̂ 𝒍𝒆̣̂𝒏𝒉 𝒄𝒐́ 𝒎𝒂̣̆𝒕 𝒕𝒓𝒆̂𝒏 𝒃𝒐𝒕 𝒏𝒂̀𝒚\n『𝐂𝐨𝐧𝐭𝐚𝐜𝐭: fb.me/100073383848952』`, attachment: fs.createReadStream(__dirname + "/noprefix/menu/ax.gif")} ,handleReply.pending[singleIndex - 1].threadID));
            count+=1;
            
        }
        return api.sendMessage(`Đã 𝙥𝙝ê 𝙙𝙪𝙮ệ𝙩  𝙩𝙝à𝙣𝙝 𝙘ô𝙣𝙜 ✉️`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
        if (args.join() == "") {api.sendMessage("🐲 𝐁ạ𝐧 𝐜ó 𝐭𝐡ể 𝐝ù𝐧𝐠 𝐝𝐮𝐲ệ𝐭:\n🐲 𝐃𝐮𝐲ệ𝐭 𝐮𝐬𝐞𝐫: 𝐇à𝐧𝐠 𝐜𝐡ờ 𝐧𝐠ườ𝐢 𝐝ù𝐧𝐠\n🐲 𝐃𝐮𝐲ệ𝐭 𝐭𝐡𝐫𝐞𝐚𝐝: 𝐇à𝐧𝐠 𝐜𝐡ờ 𝐧𝐡ó𝐦\n🐲 𝐃𝐮𝐲ệ𝐭 𝐚𝐥𝐥: 𝐓ấ𝐭 𝐜ả 𝐓𝐡𝐫𝐞𝐚𝐝 & 𝐔𝐬𝐞𝐫 đ𝐚𝐧𝐠 𝐜𝐡ờ 𝐝𝐮𝐲ệ𝐭",event.threadID, event.messageID);
    }
        const content = args.slice(1, args.length);   
     switch (args[0]) {
    case "user":
    case "u":
    case "-u":
    case "User": {
    const permission = ["100073383848952"];
    if (!permission.includes(event.senderID)) return api.sendMessage("𝐌à𝐲 𝐥à𝐦 𝐠ì đấ𝐲 𝐭𝐡ằ𝐧𝐠 𝐥 🐊" , event.threadID, event.messageID);
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("🐲 𝐊𝐡ô𝐧𝐠 𝐭𝐡ể 𝐥ấ𝐲 𝐝𝐚𝐧𝐡 𝐬á𝐜𝐡 đ𝐚𝐧𝐠 𝐜𝐡ờ", threadID, messageID) }

      const list = [...spam, ...pending].filter(group => group.isGroup == false);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`🐲 𝐓ổ𝐧𝐠 𝐬ố 𝐧𝐠ườ𝐢 𝐝ù𝐧𝐠 𝐜ầ𝐧 𝐝𝐮𝐲ệ𝐭: ${list.length} 𝐧𝐠ườ𝐢 𝐝ù𝐧𝐠 \n\n${msg}\n🐲 𝐑𝐞𝐩𝐥𝐲 𝐬ố 𝐭𝐡ứ 𝐭ự 𝐛ê𝐧 𝐝ướ𝐢 để 𝐝𝐮𝐲ệ𝐭`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("🐲 𝐇𝐢ệ𝐧 𝐭ạ𝐢 𝐤𝐡ô𝐧𝐠 𝐜ó 𝐧𝐠ườ𝐢 𝐝ù𝐧𝐠 𝐧à𝐨 𝐭𝐫𝐨𝐧𝐠 𝐡à𝐧𝐠 𝐜𝐡ờ", threadID, messageID);
}
    case "thread":
    case "-t":
    case "t":
    case "Thread": {
   const permission = ["100073383848952"];
    if (!permission.includes(event.senderID)) return api.sendMessage("𝐌à𝐲 𝐥à𝐦 𝐠ì đấ𝐲 𝐭𝐡ằ𝐧𝐠 𝐥 🐊 ", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("🐲 𝐊𝐡ô𝐧𝐠 𝐭𝐡ể 𝐥ấ𝐲 𝐝𝐚𝐧𝐡 𝐬á𝐜𝐡 đ𝐚𝐧𝐠 𝐜𝐡ờ", threadID, messageID) }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`🐲 𝐓ổ𝐧𝐠 𝐬ố 𝐧𝐡ó𝐦 𝐜ầ𝐧 𝐝𝐮𝐲ệ𝐭: ${list.length} 𝐧𝐡ó𝐦 \n${msg}\n🐲 𝐑𝐞𝐩𝐥𝐲 𝐬ố 𝐭𝐡ứ 𝐭ự 𝐛ê𝐧 𝐝ướ𝐢 để 𝐝𝐮𝐲ệ𝐭 🐊`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("🐲 𝐇𝐢ệ𝐧 𝐭ạ𝐢 𝐤𝐡ô𝐧𝐠 𝐜ó 𝐧𝐡ó𝐦 𝐧à𝐨 𝐭𝐫𝐨𝐧𝐠 𝐡à𝐧𝐠 𝐜𝐡ờ", threadID, messageID);
        }
    case "all":
    case "a":
    case "-a":
    case "al": {
    const permission = ["100073383848952"];
    if (!permission.includes(event.senderID)) return api.sendMessage("𝐌à𝐲 𝐥à𝐦 𝐠ì đấ𝐲 𝐭𝐡ằ𝐧𝐠 𝐥 🐊", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("🐲 𝐊𝐡ô𝐧𝐠 𝐭𝐡ể 𝐥ấ𝐲 𝐝𝐚𝐧𝐡 𝐬á𝐜𝐡 đ𝐚𝐧𝐠 𝐜𝐡ờ", threadID, messageID) }

            const listThread = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);
        const listUser = [...spam, ...pending].filter(group => group.isGroup == false)
    const list = [...spam, ...pending].filter(group => group.isSubscribed);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`🐲 𝐓ổ𝐧𝐠 𝐬ố 𝐔𝐬𝐞𝐫 & 𝐓𝐡𝐫𝐞𝐚𝐝 𝐜ầ𝐧 𝐝𝐮𝐲ệ𝐭 : ${list.length} 𝐔𝐬𝐞𝐫 & 𝐓𝐡𝐫𝐞𝐚𝐝 \n${msg}\n🐲 𝐑𝐞𝐩𝐥𝐲 𝐬ố 𝐭𝐡ứ 𝐭ự 𝐛ê𝐧 𝐝ướ𝐢 để 𝐝𝐮𝐲ệ𝐭 📙`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("🐲 𝐇𝐢ệ𝐧 𝐭ạ𝐢 𝐤𝐡ô𝐧𝐠 𝐜ó 𝐔𝐬𝐞𝐫 ; 𝐓𝐡𝐫𝐞𝐚𝐝 𝐧à𝐨 𝐭𝐫𝐨𝐧𝐠 𝐡à𝐧𝐠 𝐜𝐡ờ", threadID, messageID);
        }
    }       
}
