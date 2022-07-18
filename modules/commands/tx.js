module.exports.config = {
	name: "tx",
	version: "0.1.1",
	hasPermssion: 0,
	credits: "Keyl",
	description: "Tài xỉu",
	commandCategory: "Game",
	usages: "[tài/xỉu] [số tiền]",
	cooldowns: 5
};	
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   
   const request = require('request');
   const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream, fs } = require("fs-extra");
  const { threadID, messageID, senderID } = event;
  const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
  const choose = args[0];
  const kqua = args[1];
  const tiencuoc = args[2];
  if (!existsSync(__dirname + '/cache/taixiu.jpeg')) {
        request('https://raw.githubusercontent.com/KhangGia1810/data/main/casinogame-crop-crop-1645143014593.jpeg').pipe(createWriteStream(__dirname + '/cache/taixiu.jpeg'));
      }
  if(!choose){
    var msg =  {body: `Bạn phải cược tài hoặc xỉu\nNhập /taixiu [tài/xỉu] [số tiền]`, attachment : [
      require("fs").createReadStream(__dirname + "/cache/taixiu.jpeg")
    ]}
   return api.sendMessage(msg,  threadID)
     }
  const typ = ['tài', 'xỉu'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
   var xiu = [4,5,6,7,8,9,10];
    var tai =[11,12,13,14,15,16,17];
    if (random == 'tài') {
    var defl_number = tai[Math.floor(Math.random() * tai.length)];
  }
  if (random == 'xỉu') {
    var defl_number = xiu[Math.floor(Math.random() * xiu.length)];
  }
  if (choose == 'tài' || choose == 'xỉu') { 
    if (kqua < 50 || isNaN(kqua)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$", threadID, messageID);
    if (moneyUser < kqua) return api.sendMessage(`Số dư bạn không đủ ${kqua}$ để có thể chơi`, threadID, messageID);
if (choose == random) {
  	await Currencies.increaseMoney(senderID, parseInt(kqua));
  return api.sendMessage(`Bạn thắng\nKết quả: Bot lắc ra ${defl_number}\nNhận được: ${kqua}$`,event.threadID, event.messageID)
} else {
  await Currencies.decreaseMoney(senderID, parseInt(kqua ));
      return api.sendMessage(`Bạn thua\nKết quả: Bot lắc ra ${defl_number}\nMất: ${kqua}$`,event.threadID, event.messageID)}
  }
}
