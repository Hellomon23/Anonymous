module.exports.config = {
  name: "trai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Ảnh trai",
  commandCategory: "Ảnh",
  usages: "trai",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.imgur.com/tzAKvPJ.jpg",
 "https://i.imgur.com/cXsxQYc.jpg",
 "https://i.imgur.com/P7JHTnv.jpg", 
 "https://i.imgur.com/FMjhZKI.jpg",
 "https://i.imgur.com/nqCeEb4.jpg",
 "https://i.imgur.com/c6T9nue.jpg",
 "https://i.imgur.com/bJtE3Zj.jpg", 
 "https://i.imgur.com/L3hAezZ.jpg",
 "https://i.imgur.com/f2wX7A1.jpg",
 "https://i.imgur.com/BNYzlaW.jpg",
 "https://i.imgur.com/pUDcBwG.jpg",
 "https://i.imgur.com/UhKTsFB.jpg",
 "https://i.imgur.com/nTa6O5l.jpg", 
 "https://i.imgur.com/mcCSLLG.jpg",
 "https://i.imgur.com/IY4wm2i.jpg",
 "https://i.imgur.com/00yI5em.jpg", 
 "https://i.imgur.com/6CO9Gk9.jpg", 
 "https://i.imgur.com/YkbpW9J.jpg",
 "https://i.imgur.com/2CVlMwy.jpg",
 "https://i.imgur.com/SHpqE7B.jpg",
 "https://i.imgur.com/H0offGZ.jpg",
 "https://i.imgur.com/glRCCkx.jpg",
 "https://i.imgur.com/EWrUkO2.jpg",
 "https://i.imgur.com/vnM9l6M.jpg",
 "https://i.imgur.com/gQ1olkZ.jpg",
 "https://i.imgur.com/mYbf3Wb.jpg",
 "https://i.imgur.com/TiVO8V3.jpg",
 "https://i.imgur.com/3lo7RQA.jpg",
 "https://i.imgur.com/VgeH3OG.jpg",
 "https://i.imgur.com/n7nLFRH.jpg",
 "https://i.imgur.com/Xw6mlS1.jpg", 
 "https://i.imgur.com/yXFqSDV.jpg",
  "https://i.imgur.com/GXrIaBX.jpg",
  "https://i.imgur.com/q3vjSnN.jpg",
  "https://i.imgur.com/eNhZaSK.jpg",
  "https://i.imgur.com/3idZUF7.jpg",
  "https://i.imgur.com/c0kHLUV.jpg",
  "https://i.imgur.com/rrIF7Cq.jpg",
  "https://i.imgur.com/CFop6TN.jpg",
  "https://i.imgur.com/QdP6eAh.jpg",
  "https://i.imgur.com/16maM1i.jpg",
  "https://i.imgur.com/M23Jc4A.jpg",
  "https://i.imgur.com/xEQSGod.jpg",
  "https://i.imgur.com/zJTlek6.jpg",
  "https://i.imgur.com/IOucChy.jpg",
  "https://i.imgur.com/XH4wq01.jpg",
  "https://i.imgur.com/ODPSZh7.jpg",
  "https://i.imgur.com/nXgOYSy.jpg",
  "https://i.imgur.com/lmh2fQ6.jpg", 
  "https://i.imgur.com/fYngP4X.jpg",
  "https://i.imgur.com/BWNkCmE.jpg",
  "https://i.imgur.com/fzSB6o8.jpg",
  "https://i.imgur.com/B7mQlAo.jpg",
  "https://i.imgur.com/Opwrgzn.jpg",
  "https://i.imgur.com/lNj8qS6.jpg",
  "https://i.imgur.com/xYQWFFH.jpg",
  "https://i.imgur.com/bR5qbRX.jpg",
  "https://i.imgur.com/Z4SIWwJ.jpg",
  "https://i.imgur.com/ChkKczL.jpg",
  "https://i.imgur.com/wvWT6eR.jpg",
  "https://i.imgur.com/iRUJdLP.jpg",
  "https://i.imgur.com/jqcGFTH.jpg",
  "https://i.imgur.com/fJbF65X.jpg",
  "https://i.imgur.com/5wcteZF.jpg",
  "https://i.imgur.com/iWpZUIT.jpg", 
  "https://i.imgur.com/M6NjPgk.jpg",
  "https://i.imgur.com/JrKshwy.jpg",
  "https://i.imgur.com/x36uUpV.jpg",
  "https://i.imgur.com/FZDuXVr.jpg",
  "https://i.imgur.com/pimOUQe.jpg",
  "https://i.imgur.com/GY9xEDE.jpg",
  "https://i.imgur.com/A9uwSpy.jpg",
  "https://i.imgur.com/SGvMmAs.jpg",
  "https://i.imgur.com/do6Xiul.jpg",
  "https://i.imgur.com/yusM2eD.jpg",
  "https://i.imgur.com/Jz1zbp6.jpg",
  "https://i.imgur.com/f6qVTT4.jpg",
  "https://i.imgur.com/GpBFCOl.jpg",
  "https://i.imgur.com/QUOONoc.jpg",
  "https://i.imgur.com/FMMuB54.jpg",
  "https://i.imgur.com/u1wJaDJ.jpg",
  "https://i.imgur.com/KU9vcAV.jpg",
  "https://i.imgur.com/wkMiQAZ.jpg",
  "https://i.imgur.com/qvtdUrB.jpg",
  "https://i.imgur.com/eOopsXb.jpg",
  "https://i.imgur.com/WII7MS3.jpg",
  "https://i.imgur.com/UpNBAbL.jpg",
  "https://i.imgur.com/MMUE0W1.jpg",
  "https://i.imgur.com/IVeuRbn.jpg",
  "https://i.imgur.com/98XX5wc.jpg",
  "https://i.imgur.com/wnAY5ck.jpg",
  "https://i.imgur.com/vE2kqE7.jpg",
  "https://i.imgur.com/xAs3NFc.jpg",
  "https://i.imgur.com/aZC8UAm.jpg",
  "https://i.imgur.com/jwGcJUK.jpg",
  "https://i.imgur.com/1yOtDLo.jpg",
  "https://i.imgur.com/hwolf2B.jpg",
  "https://i.imgur.com/N0FDHAF.jpg",
  "https://i.imgur.com/U8Ij11a.jpg",
  "https://i.imgur.com/KtfvNl6.jpg",
  "https://i.imgur.com/HlM95CS.jpg",
  "https://i.imgur.com/cUDQcQI.jpg",
  "https://i.imgur.com/HscadXZ.jpg",
  "https://i.imgur.com/YdVrJPx.jpg",
  "https://i.imgur.com/H1u0pwf.jpg",
  "https://i.imgur.com/WyivZ35.jpg",
  "https://i.imgur.com/Ffga2Sl.jpg",
  "https://i.imgur.com/whpKPF3.jpg",
  "https://i.imgur.com/PGFIwMH.jpg",
  "https://i.imgur.com/00e6ZBN.jpg",
  "https://i.imgur.com/nw0t35H.jpg",
  "https://i.imgur.com/TylU7nj.jpg",
  "https://i.imgur.com/pUw7TIa.jpg",
  "https://i.imgur.com/roQuj2C.jpg",
  "https://i.imgur.com/g7whyVb.jpg",
  "https://i.imgur.com/jrRI54F.jpg",
  "https://i.imgur.com/OPMyGYc.jpg",
  "https://i.imgur.com/updPxqX.jpg",
   "https://i.imgur.com/7CCPkEq.jpg",
   "https://i.imgur.com/RuZrpig.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money -1000})
   var callback = () => api.sendMessage({body:` Mí bà con gái khoái🤧\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/4.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/4.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/4.jpg")).on("close",() => callback());
     }
   };
