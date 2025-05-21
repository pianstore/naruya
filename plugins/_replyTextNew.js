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

export async function before(m) {
if (m.isBaileys || m.fromMe || !m.quoted || !m.quoted.fromMe) return

let regexPattern = text => new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "i")
let id = Object.keys(global.db.data.bots.replyText).find(v => regexPattern(global.db.data.bots.replyText[v].text).test(m.quoted.text))
let replyText = global.db.data.bots.replyText[id]
if (id && !replyText.input) {
if (replyText.command) {
replyText.input = true
let command = replyText.command.replace("INPUT", m.text)
conn.preSudo(command, m.sender, m).then(async _ => {
conn.ev.emit('messages.upsert', _)
})
} else if (Array.isArray(replyText.list)) {
let command = replyText.list.find(v => v[1].toLowerCase() === m.text.toLowerCase())
if (command) {
conn.preSudo(command[0], m.sender, m).then(async _ => {
conn.ev.emit('messages.upsert', _)
})
}
}
return !0
}
return !0
}