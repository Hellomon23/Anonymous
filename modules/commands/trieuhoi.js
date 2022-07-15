module.exports.config = {
    name: "trieuhoi",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Keyl",
    description: "Triệu hồi ai đó (Không phải triệu hồi Vecna:>>)",
    commandCategory: "Khác",
    usages: "[tag]",
    cooldowns: 90,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn");
setTimeout(() => {a({body: "chả yêu em" + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "anh chán em dồi" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "chả quan tâm đến em" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "chả iu em" + " " + name, mentions: arraytag})} , 10000);
setTimeout(() => {a({body: "hứ" + " " + name, mentions: arraytag})} , 12000);
}