module.exports.config = {
	name: "woman",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Anonymous",
	description: "Đàn bà 👍",
	commandCategory: "Khác", 
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
"https://i.imgur.com/OglqO7L.mp4"  ];
  var callback = () => api.sendMessage({body:`Woman 🐸`,attachment: fs.createReadStream(__dirname + "/cache/woman.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/woman.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/woman.mp4")).on("close",() => callback());
   };