module.exports.config = {
    name: "nude",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Sen",//credit như loz
    description: "Ảnh nude 18+",
    commandCategory: "Ảnh",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    const data = [
"Sắc dục là xiềng xích của đời này, chúng ta say đắm, không thể tự cứu. Sắc dục là bệnh nặng nhất của đời này, chúng ta khốn khổ, đến chết chẳng khỏi. Sắc dục là tai họa của đời này, chúng ta gặp phải, lâm nguy khó tránh , nữ sắc suy cho cùng cũng chỉ là da với thịt, máu mủ tanh hôi.",
    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
                  }