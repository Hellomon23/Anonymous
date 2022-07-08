module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Thông tin admin",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/faQ32U0.mp4",
  ];
  var callback = () => api.sendMessage({body:`[admin]
  👀 Tên: Tuân Phạm
💮 Biệt danh: Anonymous
❎ Tuổi: 19
👤 Giới tính: Nam
💫 Chiều cao : 1m7x
💘 Mối quan hệ:  .....♥️
🌎 Quê quán: Hà Nội
👫 Gu: Sao cũng được
🌸 Tính cách: Tuỳ lúc ;-;
🌀 Sở thích: Chơi game,nghe nhạc
💻Contact💻
☎ SĐT: 039xxx2321
🌐 Facebook:https://www.facebook.com/by.hahax
✉️ Email: tuanpham150223@gmail.com
✔ Mọi thắc mắc cứ liên hệ với mình😁
`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };