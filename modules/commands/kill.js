const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "kill",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Anonymous mod",
  description: "Kill người Bạn Muốn",
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
 "https://i.imgur.com/Plb6a1t.gif",
"https://i.imgur.com/NXuI4jo.gif",
"https://i.imgur.com/g915yEC.gif",
"https://i.imgur.com/KHwCSYf.gif",
"https://i.imgur.com/KAiCfpV.gif"
             ];
   var callback = () => api.sendMessage({body: `${tag} , Aisss đồ chết tiệt ☠️` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/kill.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kill.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/kill.gif")).on("close",() => callback());
   };