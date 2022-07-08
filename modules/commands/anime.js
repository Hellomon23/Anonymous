module.exports.config = {
    name: "anime",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",//tổng hợp api của JRT, ManhG,...
    description: "Xem tất cả các ảnh trên bot",
    commandCategory: "Ảnh",
    usages: "ảnh",
    cooldowns: 0,
    envConfig: {
      cooldownTime: 1200000
    }
  };
  module.exports.onLoad = async function () {
        console.log("===========» ANIME «===========");
  }
  module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs");
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["Ganyu", "Loli", "Wallpaper",  "Kurumi", "Lucy", "Sagiri", "Chitanda", "Rem", "Anime", "Wibu", "Anime Hot"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var numPage = Math.ceil(b / limit);
    var msg = `[⚜️] RANDOM ANIME [⚜️]\n\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += `[⚜️] ${i+1} [⚜️] → ${name[i]}\n\n`;
    }
    msg += `[⚜️] Trang (${page}/${numPage})\n[⚜️] Dùng ${global.config.PREFIX}${this.config.name} <số trang>\n\n[⚜️] Xin mời ${name1} reply tin nhắn theo số thứ tự để chọn ảnh!!!`;
    return api.sendMessage(msg, event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    
             if(event.body == "1"){
         var url = "https://jrt-api.jrt-official.repl.co/ganyu"
}
         else if(event.body == "2"){
          var url = "https://jrt-api.jrt-official.repl.co/loli"
}
         else if(event.body == "3"){
         var url = "https://jrt-api.jrt-official.repl.co/wallpaper"
}
        else if(event.body == "4"){
          var url = "https://ApiMyJRT.jrt-official.repl.co/kurumi.php"
}
       else if(event.body == "5"){
          var url = "https://ApiMyJRT.jrt-official.repl.co/lucy.php"
}
       else if(event.body == "6"){
          var url = "https://ApiMyJRT.jrt-official.repl.co/sagiri.php"
}
       else if(event.body == "7"){
          var url = "https://ApiMyJRT.jrt-official.repl.co/chitanda.php"
}
       else if(event.body == "8"){
           var url = "https://ApiMyJRT.jrt-official.repl.co/rem.php"
}
       else if(event.body == "9"){
         var  url = "https://ApiMyJRT.jrt-official.repl.co/loli.php"
}
       else if(event.body == "10"){
           var url = "https://wibu.demngayyeu.repl.co/"
}
        else if(event.body == "11"){
        var url = "https://jrt-api.jrt-official.repl.co/anime"
}
    switch(handleReply.type){
    case "choose":{
    api.unsendMessage(handleReply.messageID);
    const res = await axios.get(url);
    const fs = require ("fs");
    let name = await Users.getNameUser(event.senderID)
    const data = res.data.data;
    const download = (await axios.get(data, {
        responseType: "stream"
    })).data;
    return api.sendMessage({body: `[⚜️] Success [⚜️]\n[❤️] Ảnh của ${name} đây!!!`, attachment : download}, event.threadID)
}
    }
}
