module.exports.config = {
    name: "checktt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Check tương tác các thành viên trong 1 nhóm",
    commandCategory: "Dành cho người dùng",
    usages: "[tag/reply/all/all number/all box]",
    cooldowns: 5
};
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const pathA = require('path');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if (!existsSync(path)) {
        const obj = []
        writeFileSync(path, JSON.stringify(obj, null, 4));
    }
}
module.exports.handleEvent = async({ event, Users }) => {
    const { threadID, senderID, body } = event;
    const fs = require("fs");
    const pathA = require('path');
    const thread = require('./cache/checktt.json');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if(event.isGroup == false) return;
    if (thread.some(i => i.threadID == threadID) == false) {
        const data = [];
        for (let user of event.participantIDs) {
            var name = (await Users.getData(user)).name;
            var id = user;
            var exp = 0;
            if(name !== undefined && name != 'Người dùng Facebook') {
                data.push({ name, id , exp })
            }
        }
        thread.push({ threadID, data: data });
        fs.writeFileSync(path, JSON.stringify(thread, null, 2));
    }
    else {
        var threadData = thread.find(i => i.threadID == threadID && i.threadID !== undefined)
        if (threadData.data.some(i => i.id == senderID) == false) {
            var name = (await Users.getData(senderID)).name;
            var id = senderID;
            var exp = 0;
            threadData.data.push({ name, id, exp });
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
        else {
            var userData = threadData.data.find(i => i.id == senderID);
            userData.exp = userData.exp + 1;
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
    }
}
module.exports.run = async function ({ args, api, event }) {
    const { threadID, senderID, messageID, type, mentions } = event;
    var mention = Object.keys(mentions);
    const thread = require('./cache/checktt.json');
    const data = thread.find(i => i.threadID == threadID)
    if (args[0] == "all") {
        var msg = "", exp = [], i = 1, count = 0
        for(const user of data.data) {
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        var limit = args[2] || 20;
        var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var msg = "[====KIỂM TRA TƯƠNG TÁC===]\n\n";
            var numPage = Math.ceil(exp.length/limit);
            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let dataInfo = exp[i];
                msg += `[${i+1}]: ${dataInfo.name}: ${dataInfo.exp} tin nhắn\n`
            }
            msg += `\n--Trang ${page}/${numPage}--\nDùng ${global.config.PREFIX}checktt số trang`
            return api.sendMessage(msg, threadID, messageID);
    }
    else 
        if(type == "message_reply") { mention[0] = event.messageReply.senderID }
        if (mention[0]) {
          
            var exp = [], count = 0
            for(const user of data.data) {
                count += user.exp
                exp.push({ name: user.name, exp: user.exp, id: user.id });
       
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(i => i.id == mention[0])
           
           return api.sendMessage(`👤Tên: ${exp[rank].name}\n🏆Top tương tác: ${rank + 1}\n💬Tin nhắn: ${exp[rank].exp}\n💹Tỉ lệ tương tác: ${(exp[rank].exp/count*100).toFixed(0)}%`, threadID, messageID);
        }
        }
    else {
        var exp = [], count = 0
        for(const user of data.data) {
            count += user.exp
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        const rank = exp.findIndex(i => i.id == senderID);
        if(exp[rank].exp > 0  &&exp[rank].exp < 50){
          var text = "CHƯA XẾP HẠNG"
        } 
        else if(exp[rank].exp < 200){
          var text = "ĐỒNG III"
        } 
        else if (exp[rank].exp < 400){
          var text = "ĐỒNG II"
        }
          else if (exp[rank].exp < 600){
          var text = "ĐỒNG I"
        }
        else if (exp[rank].exp < 800){
          var text = "BẠC III"
        }
        else if (exp[rank].exp < 1000){
          var text = "BẠC II"
        }
        else if (exp[rank].exp < 1200){
          var text = "BẠC I"
        }
        else if (exp[rank].exp < 1400){
          var text = "VÀNG IV"
        }
        else if (exp[rank].exp < 1600){
          var text = "VÀNG III"
        }
         else if (exp[rank].exp < 1800){
          var text = "VÀNG III"
        }
        else if (exp[rank].exp < 2000){
          var text = "VÀNG I"
        }
        else if (exp[rank].exp < 2200){
          var text = "BẠCH KIM V"
        }
        else if (exp[rank].exp < 2400){
          var text = "BẠCH KIM IV"
        }
        else if (exp[rank].exp < 2600){
          var text = "BẠCH KIM III"
        }
        else if (exp[rank].exp < 2800){
          var text = "BẠCH KIM II"
        }
        else if (exp[rank].exp < 3000){
          var text = "BẠCH KIM I"
        }
        else if (exp[rank].exp < 3200){
          var text = "KIM CƯƠNG V"
        }
        else if (exp[rank].exp < 3400){
          var text = "KIM CƯƠNG IV"
        }
        else if (exp[rank].exp < 3600){
          var text = "KIM CƯƠNG III"
        } 
        else if (exp[rank].exp < 3800){
          var text = "KIM CƯƠNG II"
        }
        else if (exp[rank].exp < 4000){
          var text = "KIM CƯƠNG I"
        }
        else if (exp[rank].exp < 4200){
          var text = "TINH ANH V"
        }
        else if (exp[rank].exp < 4400){
          var text = "TINH ANH IV"
        }
        else if (exp[rank].exp < 4600){
          var text = "TINH ANH III"
        }
        else if (exp[rank].exp < 4800){
          var text = "TINH ANH II"
        }
        else if (exp[rank].exp < 5000){
          var text = "TINH ANH I"
        }
        else if (exp[rank].exp < 5200){
          var text = "CAO THỦ 1⭐"
        }
        else if (exp[rank].exp < 5400){
          var text = "CAO THỦ 11⭐"
        }
        else if (exp[rank].exp < 5600){
          var text = "CAO THỦ 21⭐"
        }
        else if (exp[rank].exp < 5800){
          var text = "CAO THỦ 31⭐"
        }
        else if (exp[rank].exp < 6000){
          var text = "CAO THỦ 41⭐"
        }
        else if (exp[rank].exp < 6200){
          var text = "CHIẾN TƯỚNG 51⭐"
        } 
        else if (exp[rank].exp < 7000){
          var text = "👑THÁCH ĐẤU👑"
        }          
               else {
         var text = "chưa có xếp hạng trình độ"
        }
        return api.sendMessage(`👤Tên: ${exp[rank].name}\n🏆Top tương tác: ${rank + 1}\n💬Tin nhắn: ${exp[rank].exp}\n💹Tỉ lệ tương tác: ${(exp[rank].exp/count*100).toFixed(0)}%\n🌟Rank: ${text} `, threadID, messageID);
    }
}