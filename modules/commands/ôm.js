const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "ôm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Lê Định Mod",
  description: "ôm người Bạn Muốn",
  commandCategory: "Giải trí",
  usages: "@tag",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://genk.mediacdn.vn/2016/04-1483112033497.gif",
"https://i.imgur.com/5dwXUbf.gif",
"https://i.imgur.com/QKOAjyV.gif",
"https://i.imgur.com/9yFRM5f.gif"
             ];
   var callback = () => api.sendMessage({body: `${tag} à ☺, Tớ muốn ôm cậu 💗` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/om.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/om.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/om.gif")).on("close",() => callback());
   };