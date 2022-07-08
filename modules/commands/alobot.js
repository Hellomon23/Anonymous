module.exports.config = {
    name: "alobot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot Version 1",
    commandCategory: "System",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
};

module.exports.handleReply = async function({ api, args, Users, event, handleReply }) {
    var name = await Users.getNameUser(event.senderID);
    switch (handleReply.type) {
        case "reply":
            {
                var idad = global.config.ADMINBOT;
                for (let ad of idad) {
                    api.sendMessage({
                        body: "Tin nhắn từ ❤" + name + ":\n" + event.body,
                        mentions: [{
                            id: event.senderID,
                            tag: name
                        }]
                    }, ad, (e, data) => global.client.handleReply.push({
                        name: this.config.name,
                        messageID: data.messageID,
                        messID: event.messageID,
                        author: event.senderID,
                        id: event.threadID,
                        type: "goibot"
                    }))
                }
                break;
            }
        case "goibot":
            {
                api.sendMessage({ body: `${event.body}`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    author: event.senderID,
                    messageID: data.messageID,
                    type: "reply"
                }), handleReply.messID);
                break;
            }
    }
};


module.exports.handleEvent = async({ event, api, Users, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    if (senderID == global.data.botID) return;

    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    let name = await Users.getNameUser(event.senderID);
    var idbox = event.threadID;
    let uidUser = event.senderID;
    let dataThread = await Threads.getData(event.threadID);
    let threadInfo = dataThread.threadInfo;
    const listAdmin = global.config.ADMINBOT;

    var tl = [
        "Yêu bạn <3", "Hi, chào bạn:3", "Bạn gọi mình có việc gì không?",
        "Dạ,Mình đây, yêu mình không mà gọi <3. hmm...",
        `${name}` + ", sử dụng /ad để hiển thị thông tin admin!",
        `${name}` + ", gọi mình có việc gì thế",
        `${name}` + ", yêu mình ko mà gọi😢",
        `${name}` + ", tôi yêu bạn nhiều lắm ❤",
        `${name}` + ", bạn có yêu tôi không dạ ❤",
        `${name}` + ", dạ mình đây:3",
        `${name}` + ", yêu admin bot đi rồi hãy gọi",
      `${name}` + ", đánh nhau với bé k 🥺",
      `${name}` + ", yêu cậu nhiều ❤️",
        `${name}` + ", yêu bạn nè ❤",
      `${name}` + ",dỗi rồi k chơi với bạn nữa huhu 🥺",
        `${name}` + ", hmmmmm gọi em có việc gì không dạ?",
      `${name}` + ", bot yêu bạn quá hihi",
      `${name}` + ", em muốn được đi chơi 🥺",
      `${name}` + ", tương tác đi gọi em làm gì dạ? Có ý đồ gì đúm khum khai mau",
`${name}` + ", Em nghe nè ^^",
`${name}` + ", không bé ơi 😇",
        `${name}` + ", Bé nghe nè ❤️"
    ];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    // Gọi bot
    var arr = ["bot ơi","bot"];
    arr.forEach(value => {
        let str = value[0].toUpperCase() + value.slice(1);
    if (body === value.toUpperCase() | body === value | str === body) {
            let nameT = threadInfo.threadName;
            modules = "------ Gọi bot ------\n";
            console.log(modules, value + "|", nameT);
            api.sendMessage(rand, threadID, () => {
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(`=== Bot Notification ===\n\n👥Box Name: ${nameT}\n🔰ID box: ${idbox}\n💖Name User: ${name} \n💕ID User: ${uidUser}\n🕒Time: ${time}\n😊♥️Gọi bot: ${value}`,
                        idad, (error, info) =>
                        global.client.handleReply.push({
                            name: this.config.name,
                            author: senderID,
                            messageID: info.messageID,
                            messID: messageID,
                            id: idbox,
                            type: "goibot"
                        })
                    );
                }
            });
        }
    });
}

module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)\n( •_•)\n// >🧠\nĐưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", event.threadID)
                  }