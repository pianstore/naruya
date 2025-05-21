/*
██╗███████╗██╗░░░██╗███╗░░░███╗██╗
██║╚════██║██║░░░██║████╗░████║██║
██║░░███╔═╝██║░░░██║██╔████╔██║██║
██║██╔══╝░░██║░░░██║██║╚██╔╝██║██║
██║███████╗╚██████╔╝██║░╚═╝░██║██║
╚═╝╚══════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝
Note: Terimakasih Telah Membeli Script Ini Semoga Bermanfaat
Copyright © 2024 - 2025 Crystalia
꒰⚘꒱ Admin Contact ꒱⟡
𓅯 𝙉͢𝙖𝙧𝙪𝙮𝙖 𝙄͢𝙯𝙪𝙢𝙞
https://linkbio.co/naruyaizumi
𓅯 𝙑͢𝙡𝙞𝙣𝙚
WhatsApp: wa.me/6285770019354
𓅯 𝑺͢𝑿𝒁𝒏𝒊𝒈𝒉𝒕𝒎𝒂𝒓𝒆
WhatsApp: wa.me/6281398961382
*/

export async function all(m) {
let user = global.db.data.users
let chat = global.db.data.chats
let dataUser = Object.keys(user).filter(v => new Date() - user[v].bannedTime > 0 && user[v].bannedTime != 999 && user[v].banned)
if (dataUser.length > 0) {
for (var i = 0; i < dataUser.length; i++) {
user[dataUser[i]].banned = false
user[dataUser[i]].bannedTime = 0
}
}
let dataChat = Object.keys(chat).filter(v => new Date() - chat[v].isBannedTime > 0 && chat[v].isBannedTime != 999 && chat[v].isBanned)
if (dataChat.length > 0) {
for (var i = 0; i < dataChat.length; i++) {
chat[dataChat[i]].isBanned = false
chat[dataChat[i]].isBannedTime = 0
}
}
}