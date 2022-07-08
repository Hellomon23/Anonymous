module.exports.config = {
	name: "hentai",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Xem ảnh hentai có trong bot",
	commandCategory: "Ảnh", 
	usages: "", 
	cooldowns: 0,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

    var tle = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/lCwlvQk.mp4"  ];
  var callback = () => api.sendMessage({body:` Không có đâu thằng dâm tặc 🌚🌚`,attachment: fs.createReadStream(__dirname + "/cache/hentaifake.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/hentaifake.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/hentaifake.mp4")).on("close",() => callback());
   };