const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "cắn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Anonymous mod",
  description: "Cắn người Bạn Muốn",
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
 "https://i.imgur.com/PDiuC0p.gif",
"https://i.imgur.com/mXFzj0F.gif",
"https://i.imgur.com/nDiBxlS.gif",
"https://i.imgur.com/upjqJG4.gif"
             ];
   var callback = () => api.sendMessage({body: `${tag} , Cho cắn miếng💕` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/cannguoi.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/cannguoi.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/cannguoi.gif")).on("close",() => callback());
   };