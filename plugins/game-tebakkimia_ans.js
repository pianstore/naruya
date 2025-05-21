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

import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
let id = m.chat
if (m.isBaileys || m.fromMe) return
if (!m.quoted || !m.quoted.fromMe || !m.text || !/Ketik.*hmia|ᴋᴇᴛɪᴋ.*ʜᴍɪᴀ/i.test(m.quoted.text) || /.*hmia|.*ʜᴍɪᴀ/i.test(m.text))
return !0
this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
let setting = global.db.data.settings[conn.user.jid]
if (setting.composing)
await this.sendPresenceUpdate('composing', m.chat)
if (setting.autoread)
await this.readMessages([m.key])
if (!(id in this.tebakkimia))
return m.reply('Soal itu telah berakhir')
if (m.quoted.id == this.tebakkimia[id][0].id) {
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(this.tebakkimia[id][4])
delete this.tebakkimia[id]
return m.reply('*Yah Menyerah :( !*')
}
let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
if (m.text.toLowerCase() == json.unsur.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tebakkimia[id][2]
m.reply(`*Benar!*\n+${this.tebakkimia[id][2]} XP`)
clearTimeout(this.tebakkimia[id][4])
delete this.tebakkimia[id]
} else if (similarity(m.text.toLowerCase(), json.unsur.toLowerCase().trim()) >= threshold) {
m.reply(`*Dikit Lagi!*`)
} else if (--this.tebakkimia[id][3] == 0) {
clearTimeout(this.tebakkimia[id][4])
delete this.tebakkimia[id]
conn.reply(m.chat, `*Kesempatan habis!*\nJawaban: *${json.jawaban}*`, m)
} else m.reply(`*Jawaban Salah!*\nMasih ada ${this.tebakkimia[id][3]} kesempatan`)
}
return !0
}
export const exp = 0