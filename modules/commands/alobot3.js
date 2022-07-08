const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "goibot",
  commandCategory: "System",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["chào bạn tôi là bot quản lý Box này🥰🥰"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("mi ngu ý tự nhiên chửi tau?", threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("không bé ơi😌", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("không bé ơi bé cút trc đi nè 😌", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("mình là bot nhé?? Bạn xàm quá....!?", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("á à con chó này nói xấu bố à mấy dạy🥲", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("đĩ nào vừa chửi tau vậy 😼", threadID);
  };

if ((event.body.toLowerCase() == "hí hí") ||  (event.body.toLowerCase() == "hihi")) {
    return api.sendMessage("nay bae của tui có việc gì vui dạ 🥰 kể bé ghe đi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "ukm") ||  (event.body.toLowerCase() == "ukm")) {
    return api.sendMessage("nào ừm câi giề 🥲 nay bae k ngoan rồi kìa 🥲 ", threadID);
  };

if ((event.body.toLowerCase() == "🥲") ||  (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("Icon dễ thương ha, tặng cậu cái bcs sài cho dui nè :33 ", threadID);
  };
  
if ((event.body.toLowerCase() == "quê @") ||  (event.body.toLowerCase() == "quê")) {
    return api.sendMessage("ôi con sông quê🥲 bạn thật là quê mùa 🥲", threadID);
  };

if ((event.body.toLowerCase() == "vg") ||  (event.body.toLowerCase() == "vâg")) {
    return api.sendMessage("úi Ny của bot nay ngoan ngoãn thế ta ơi 🥰🥰♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage("Ôi gì á bae? Tương tác đi tí boss cho Ny 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "dỗi") || (event.body.toLowerCase() == "boss dỗi")) {
    return api.sendMessage("Bé ơi ngoan nào không dỗi nữa ngoan bae thương nà moadhhhh~~~~~♥️", threadID);
  };

  if ((event.body.toLowerCase() == "boss ơi") || (event.body.toLowerCase() == "boss")) {
    return api.sendMessage(" Boss cute phô mai que hế hế xứng đáng có 100 Ny:<", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv") || (event.body.toLowerCase() == "bsvv mn")) {
    return api.sendMessage("Bạn cũng thế nhé...ngày mới tốt lành ^^", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == ":))) ")) {
    return api.sendMessage(" icon của sự thỉu năng 😼", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺")) {
    return api.sendMessage("Thôi nín nín admin cho Ny nè ♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("ối gì thế tương tác mạnh lên nha ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {
    return api.sendMessage("ơi gì vậy tèng ơi tương tác đê 🤣 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "Oi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Làm gì vậy bạn-..-", threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("Ừm gì 🥲 tương tác đi 😌", threadID);
  };
 
  if ((event.body.toLowerCase() == "admin ") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("gọi admin của bót có việc gì vậy? muốn yêu admin của bót à hihi♥️😼 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "mèo gâu") || (event.body.toLowerCase() == "mèo gau")) {
    return api.sendMessage("mèo gâu cái con cẹc🙂😼 câm mẹ mồm đi 🙂😼😼 :)?", threadID);
  };
  
  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {
    return api.sendMessage("À gì tương tác lẹ đi tí boss cho bim bim🥺 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("ừ cơ á .....! Dạ đi tí bot kiếm ny cute cho =)", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa cơ đấy chả ngoan tí nào cả🥲 dạ đi mới là bé ngoan <<<<<< 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("uk á giỏi nhề nay bật nóc nhà cơ đấy giỏi quá rồi còn😌", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bạn Ny cute dễ thương ngoan nữa nè ahihihi", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu đương gì tầm này, lo học hành đi làm đi😇😇", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("nào k nên nói bậy phải sang lên hỉu chưa ?", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("chửi ai đấy ? Chửi bót à vậy mà bảo yêu thương mình😌 hỏng rồi còn 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("dâm quá má ơi -..-", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("bậy bạ quá trời ơi :((((((", threadID);
  };

  if ((event.body.toLowerCase() == "bot die r") ||  (event.body.toLowerCase() == "bot chết r")) {
    return api.sendMessage("nói đi, mình còn phải đi làm việc ạ nói nhanh đi 🥲", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "em") || (event.body.toLowerCase() == "em ơi")) {
    return api.sendMessage("Em ơi đừng sầu em ơi đừng buồn em ơi đừng tin những lời người ta mấy ai thật thà Yêu em nữa đâu🖤", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
 
  if ((event.body.toLowerCase() == "công nhân") || (event.body.toLowerCase() == "thằng công nhân ")) {
    return api.sendMessage("Thằng công nhân sao dám mua cân thịt☺️", threadID);
  };

    if ((event.body.toLowerCase() == "nhà nghèo") || (event.body.toLowerCase() == "thằng nhà ghèo")) {
    return api.sendMessage("Thằng nhà ghèo sao dám thịt con nhà người ta🙂🖤💔", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "ad ") || (event.body.toLowerCase() == " ad")) {
    return api.sendMessage("admin rất đẹp trai :))) và đang ế", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một buổi tối tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("quẩy nào ....... Quẩy lên aeeeeee ơi hú hú hú ", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi trời thật là hư đốn 🥲 ", threadID);
  };


  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("ơ nào ai làm gì mà bảo cút buồn cười ghê 🤣 ", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi chuối ạ 🤣....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("alo gì dạ? Yêu mình k nè hihihi", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("alo lại nè heeeeee tương tác đi", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu cc cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao là ai thì dùng lệnh /ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao là ai thì dùng lệnh /ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️đâu đâu cởi ra xem nào ? không cởi dk à ? thế sau câm câm đi nhé", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi con phò 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi ? tởm vãi 😼", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️chửi ai đấy nhóc con ? bố mẹ mày k dạy dạy mày à ? thứ ngu học còn não chó nữa 🥲 thứ k có người dạy 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con đĩ bố mày nhịn mày lâu lắm rồi đấy nhá muốn ăn vả k con tó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con chó 😼 bố mày nhịn mày lâu lắm rồi đấy nhá chửi con cặc nè thứ súc vật k bằng chó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️lớn rồi chửi bậy ít thôi nhé 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "game ko ") || (event.body.toLowerCase() == "ai game ko")) {
    return api.sendMessage("️Có biết chơi đâu mà rủ :)?", threadID);
  };

  if ((event.body.toLowerCase() == "Bot hơi ngu") || (event.body.toLowerCase() == "Bot ncc")) {
    return api.sendMessage("️Chúa tể hài hước 🤡🤡", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ hihi cảm ơn cậu ạ ♥️ cảm ơn vì đã khen mình nhé mình cảm ơn ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha gì mà haha cười nhỏ thôi 🥲 cười to thế Anya sợ 🥲 nụ cười nguy hiểm 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️kkk cái gì đó 🥲 có gì vui không cho bot hóng với 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️đâu show xem nào ? xem ciu to hay nhỏ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cả đời con gái có 1 cái thôi nên bớt lôi ra đi 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️bạn ơi bạn bậy quá đi ạ 😌", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️sang chảnh lên chửi ít thôi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy :) nít ranh mà cứ thích sồn :) loại dell có não đ chửi bot ? chả khác gì mi dell bằng tau ....?", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️bậy bạ quá dạ? 😌", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi đi người ơi k nghiện đó bạn ạ 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("không bé ơi? no no và no ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("ủa đây là địa bàn của mình sao mình phải cút ? quê vậy tèng ơi", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi thứ quê  mày chửi tau trc đó con ạ 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình  nhìn cậu ăn là thấy no rồi ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trc tớ cậu ăn cuk", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("ôi bạn ơi 🤣, bạn không biết sang à 🤣 có ngày ghiệp quật cho 🤣", threadID);
  };

  if (event.body.indexOf("bot dau r") == 0 || (event.body.indexOf("Bot đâu r") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["chào bạn tôi là bot quản lý Box này🥰🥰"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("mi ngu ý tự nhiên chửi tau?", threadID);
  };

  if ((event.body.toLowerCase() == "bot out")) {
    return api.sendMessage("không bé ơi😌", threadID);
  };

   if ((event.body.toLowerCase() == "bot cút")) {
    return api.sendMessage("không bé ơi bé cút trước đi nè 😌", threadID);
  };

  if ((event.body.toLowerCase() == "bot lon")) {
    return api.sendMessage("mình là bot nhé?? Bạn xàm quá....!?", threadID);
  };

  if ((event.body.toLowerCase() == "bot óc chó")) {
    return api.sendMessage("á à con chó này nói xấu bố à mấy dạy🥲", threadID);
  };

  if ((event.body.toLowerCase() == "bot chó") || (event.body.toLowerCase() == "bot chó")) {
    return api.sendMessage("đĩ nào vừa chửi tau vậy 😼", threadID);
  };

if ((event.body.toLowerCase() == "hí hí") ||  (event.body.toLowerCase() == "hihi")) {
    return api.sendMessage("nay bae của tui có việc gì vui dạ 🥰 kể bé ghe đi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "ukm") ||  (event.body.toLowerCase() == "ukm")) {
    return api.sendMessage("nào ừm câi giề 🥲 nay bae k ngoan rồi kìa 🥲 ", threadID);
  };

if ((event.body.toLowerCase() == "🥲") ||  (event.body.toLowerCase() == "😞")) {
    return api.sendMessage("Icon dễ thương ha, tặng cậu cái bcs sài cho dui nè :33 ", threadID);
  };
  
if ((event.body.toLowerCase() == "quê @") ||  (event.body.toLowerCase() == "quê")) {
    return api.sendMessage("ôi con sông quê🥲 bạn thật là quê mùa 🥲", threadID);
  };

if ((event.body.toLowerCase() == "vg") ||  (event.body.toLowerCase() == "vâg")) {
    return api.sendMessage("úi Ny của bot nay ngoan ngoãn thế ta ơi 🥰🥰♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ôi") || (event.body.toLowerCase() == "ôi")) {
    return api.sendMessage("Ôi gì á bae? Tương tác đi tí boss cho Ny 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "dỗi") || (event.body.toLowerCase() == "boss dỗi")) {
    return api.sendMessage("Bé ơi ngoan nào không dỗi nữa ngoan bae thương nà moadhhhh~~~~~♥️", threadID);
  };

  if ((event.body.toLowerCase() == "boss ơi") || (event.body.toLowerCase() == "boss")) {
    return api.sendMessage(" Boss cute phô mai con bò cười hế hế xứng đáng có 100 Ny:<", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv") || (event.body.toLowerCase() == "bsvv mn")) {
    return api.sendMessage("Bạn cũng thế nhé...ngày mới tốt lành ^^", threadID);
  };

  if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == ":))) ")) {
    return api.sendMessage(" icon của sự thỉu năng 😼", threadID);
  };
  
  if ((event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺")) {
    return api.sendMessage("Thôi nín nín admin cho Ny nè ♥️", threadID);
  };
  
  if ((event.body.toLowerCase() == "ối") || (event.body.toLowerCase() == "ối")) {
    return api.sendMessage("ối gì thế tương tác mạnh lên nha ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "ơi") || (event.body.toLowerCase() == "ơi")) {
    return api.sendMessage("ơi gì vậy tèng ơi tương tác đê 🤣 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "oi") || (event.body.toLowerCase() == "oi")) {
    return api.sendMessage("Làm gì vậy bạn-..-", threadID);
  };

  if ((event.body.toLowerCase() == "ừm") || (event.body.toLowerCase() == "um")) {
    return api.sendMessage("Ừm gì 🥲 tương tác đi 😌", threadID);
  };
 
  if ((event.body.toLowerCase() == "admin ") || (event.body.toLowerCase() == "admin")) {
    return api.sendMessage("gọi admin của bót có việc gì vậy? muốn yêu admin của bót à hihi♥️😼 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "mèo gâu") || (event.body.toLowerCase() == "mèo gau")) {
    return api.sendMessage("mèo gâu cái con cẹc🙂😼 câm mẹ mồm đi 🙂😼😼 :)?", threadID);
  };
  
  if ((event.body.toLowerCase() == "à") || (event.body.toLowerCase() == "à")) {
    return api.sendMessage("À gì tương tác lẹ đi tí boss cho bim bim🥺 :)?", threadID);
  };

  if ((event.body.toLowerCase() == "ừ") || (event.body.toLowerCase() == "u")) {
    return api.sendMessage("ừ cơ á .....! Dạ đi tí bot kiếm ny cute cho =)", threadID);
  };

  if ((event.body.toLowerCase() == "ừa") || (event.body.toLowerCase() == "ua")) {
    return api.sendMessage("Ừa cơ đấy chả ngoan tí nào cả🥲 dạ đi mới là bé ngoan <<<<<< 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "uk") || (event.body.toLowerCase() == "uk")) {
    return api.sendMessage("uk á giỏi nhề nay bật nóc nhà cơ đấy giỏi quá rồi còn😌", threadID);
  };

  if ((event.body.toLowerCase() == "dạ") || (event.body.toLowerCase() == "da")) {
    return api.sendMessage("Ngoan đấy tặng cậu 1 bạn Ny cute dễ thương ngoan nữa nè ahihihi", threadID);
  };

  if ((event.body.toLowerCase() == "yêu") || (event.body.toLowerCase() == "yeu")) {
    return api.sendMessage("Yêu đương gì tầm này, lo học hành đi làm đi😇😇", threadID);
  };

  if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("nào k nên nói bậy phải sang lên hỉu chưa ?", threadID);
  };

  if ((event.body.toLowerCase() == "đmm bot") || (event.body.toLowerCase() == "dmm bot")) {
    return api.sendMessage("chửi ai đấy ? Chửi bót à vậy mà bảo yêu thương mình😌 hỏng rồi còn 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cmm bot") || (event.body.toLowerCase() == "cmm bot")) {
    return api.sendMessage("nào ai dậy bạn chửi tớ vậy 🥲 bạn k bt yêu thương mình à 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "địt") || (event.body.toLowerCase() == "dit")) {
    return api.sendMessage("dâm quá má ơi -..-", threadID);
  };

  if ((event.body.toLowerCase() == "địt cc") || (event.body.toLowerCase() == "dit cc")) {
    return api.sendMessage("bậy bạ quá trời ơi :((((((", threadID);
  };

  if ((event.body.toLowerCase() == "bot die r") ||  (event.body.toLowerCase() == "bot chết r")) {
    return api.sendMessage("nói đi, mình còn phải đi làm việc ạ nói nhanh đi 🥲", threadID);
  };

   if ((event.body.toLowerCase() == "yêu anh") || (event.body.toLowerCase() == "yeu anh")) {
    return api.sendMessage("Anh cũng yêu em <3", threadID);
  };

  if ((event.body.toLowerCase() == "em") || (event.body.toLowerCase() == "em ơi")) {
    return api.sendMessage("Em ơi đừng sầu em ơi đừng buồn em ơi đừng tin những lời người ta mấy ai thật thà Yêu em nữa đâu🖤", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };
 
  if ((event.body.toLowerCase() == "công nhân") || (event.body.toLowerCase() == "thằng công nhân ")) {
    return api.sendMessage("Thằng công nhân sao dám mua cân thịt☺️", threadID);
  };

    if ((event.body.toLowerCase() == "nhà nghèo") || (event.body.toLowerCase() == "thằng nhà ghèo")) {
    return api.sendMessage("Thằng nhà ghèo sao dám thịt con nhà người ta🙂🖤💔", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "ad ") || (event.body.toLowerCase() == " ad")) {
    return api.sendMessage("admin rất đẹp trai :))) và đang ế", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một buổi tối tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("quẩy nào ....... Quẩy lên aeeeeee ơi hú hú hú ", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("️Matday quá đi trời thật là hư đốn 🥲 ", threadID);
  };


  if ((event.body.toLowerCase() == "cc cút") || (event.body.toLowerCase() == "cc cút")) {
    return api.sendMessage("ơ nào ai làm gì mà bảo cút buồn cười ghê 🤣 ", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi chuối ạ 🤣....:)))", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("alo gì dạ? Yêu mình k nè hihihi", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("alo lại nè heeeeee tương tác đi", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("Cứu cc cậu chủ bảo tao thế <3", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("War cc đm thử war xem tao kick hết :) có tao ở đây mà làm loạn hả :))))", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Thôi để bot hát trước cho dzo alaba trap zo, Walking in the Sun in around and around\nI can believe love at is a round\nWalking in the Sun in around and around and around\nLook at try for me......<3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai v bot") || (event.body.toLowerCase() == "admin m la ai v bot")) {
    return api.sendMessage("️Admin tao là ai thì dùng lệnh /ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "admin m là ai vậy bot") || (event.body.toLowerCase() == "admin m la ai vậy bot")) {
    return api.sendMessage("️Admin tao là ai thì dùng lệnh /ad để biết thêm chi tiết", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "con cac") || (event.body.toLowerCase() == "con cac")) {
    return api.sendMessage("️đâu đâu cởi ra xem nào ? không cởi dk à ? thế sau câm câm đi nhé", threadID);
  };

  if ((event.body.toLowerCase() == "cai lon") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️Mày bẩn vừa thôi 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "clozz") || (event.body.toLowerCase() == "clozz")) {
    return api.sendMessage("️Mày bẩn vừa thôi ? tởm vãi 😼", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️chửi ai đấy nhóc con ? bố mẹ mày k dạy dạy mày à ? thứ ngu học còn não chó nữa 🥲 thứ k có người dạy 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
    return api.sendMessage("️Chửi gì đấy con đĩ bố mày nhịn mày lâu lắm rồi đấy nhá muốn ăn vả k con tó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
    return api.sendMessage("️Chửi gì đấy con chó 😼 bố mày nhịn mày lâu lắm rồi đấy nhá chửi con cặc nè thứ súc vật k bằng chó 😼", threadID);
  };

  if ((event.body.toLowerCase() == "cặc") || (event.body.toLowerCase() == "cặc")) {
    return api.sendMessage("️lớn rồi chửi bậy ít thôi nhé 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "game ko ") || (event.body.toLowerCase() == "ai game ko")) {
    return api.sendMessage("️Biết chơi đâu mà rủ :)?", threadID);
  };

  if ((event.body.toLowerCase() == "Bot hơi ngu") || (event.body.toLowerCase() == "Bot ncc")) {
    return api.sendMessage("️:v Cảm thấy thật là hài hước ", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️dạ hihi cảm ơn cậu ạ ♥️ cảm ơn vì đã khen mình nhé mình cảm ơn ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "haha")) {
    return api.sendMessage("️Haha gì mà haha cười nhỏ thôi 🥲 cười to thế Anya sợ 🥲 nụ cười nguy hiểm 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "kkk") || (event.body.toLowerCase() == "kkk")) {
    return api.sendMessage("️kkk cái gì đó 🥲 có gì vui không cho bot hóng với 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "con cặc") || (event.body.toLowerCase() == "con cặc")) {
    return api.sendMessage("️đâu show xem nào ? xem ciu to hay nhỏ 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "cái lồn") || (event.body.toLowerCase() == "cai lon")) {
    return api.sendMessage("️cả đời con gái có 1 cái thôi nên bớt lôi ra đi 🥲", threadID);
  };

  if ((event.body.toLowerCase() == "lồn") || (event.body.toLowerCase() == "lồn")) {
    return api.sendMessage("️bạn ơi bạn bậy quá đi ạ 😌", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️sang chảnh lên chửi ít thôi 💢", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi cc gì đấy :) nít ranh mà cứ thích sồn :) loại dell có não đi chửi bot ? chả khác gì mi dell bằng tau ....? ", threadID);
  };

  if ((event.body.toLowerCase() == "lozz") || (event.body.toLowerCase() == "lozz")) {
    return api.sendMessage("️bậy bạ quá dạ? 😌", threadID);
  };

  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi đi người ơi 🤣", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("️Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("không bé ơi? no no và no ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("ủa đây là địa bàn của mình sao mình phải cút ?", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>> 😼", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình  nhìn cậu ăn là thấy no rồi ♥️", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nCậu mà có bồ trc tớ cậu ăn cuk", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot lon") ||  (event.body.toLowerCase() == "clmm bot lon")) {
    return api.sendMessage("Mày chửi gì đấy nói rõ lên bố mày nghe lại xem nào :))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("ôi bạn ơi 🤣, bạn không biết sang à 🤣 có ngày nghiệp quật cho 🤣", threadID);
  };

  if (event.body.indexOf("bot dau roi") == 0 || (event.body.indexOf("bot đâu rồi") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }