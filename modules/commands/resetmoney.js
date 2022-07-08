module.exports.config = {
    name: "xoatien",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "manhG",
    description: "xoá số tiền của cả nhóm về 0",
    commandCategory: "Admin",
    usages: "[cc], [del], [all]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
    return api.sendMessage("Số tiền của thành viên nhóm đã được reset về mức 0 !", event.threadID);
}