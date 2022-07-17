const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "chọc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Anonymous mod",
  description: "chọc người Bạn Muốn",
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
 "https://i.imgur.com/RNcvnpC.gif",
"https://i.imgur.com/49REzu6.gif",
"https://i.imgur.com/IzBYFzO.gif",
"https://i.imgur.com/kM8ZXjG.gif"
             ];
   var callback = () => api.sendMessage({body: `${tag} , Động tý làm gì căng😗` , mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
  attachment: fs.createReadStream(__dirname + "/cache/choc.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/choc.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/choc.gif")).on("close",() => callback());
   };