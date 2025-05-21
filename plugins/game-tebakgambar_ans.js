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
if (!m.quoted || !m.quoted.fromMe || !m.text || !/Ketik.*hgamb|ᴋᴇᴛɪᴋ.*ʜɢᴀᴍʙ/i.test(m.quoted.text) || /.*hgamb|.*ʜɢᴀᴍʙ/i.test(m.text))
return !0
this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
let setting = global.db.data.settings[conn.user.jid]
if (setting.composing)
await this.sendPresenceUpdate('composing', m.chat)
if (setting.autoread)
await this.readMessages([m.key])
if (!(id in this.tebakgambar))
return m.reply('Soal itu telah berakhir')
if (m.quoted.id == this.tebakgambar[id][0].id) {
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(this.tebakgambar[id][4])
delete this.tebakgambar[id]
return m.reply('*Yah Menyerah :( !*')
}
let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tebakgambar[id][2]
m.reply(`*Benar!*\n+${this.tebakgambar[id][2]} XP`)
clearTimeout(this.tebakgambar[id][4])
delete this.tebakgambar[id]
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
m.reply(`*Dikit Lagi!*`)
} else if (--this.tebakgambar[id][3] == 0) {
clearTimeout(this.tebakgambar[id][4])
delete this.tebakgambar[id]
conn.reply(m.chat, `*Kesempatan habis!*\nJawaban: *${json.jawaban}*`, m)
} else m.reply(`*Jawaban Salah!*\nMasih ada ${this.tebakgambar[id][3]} kesempatan`)
}
return !0
}
export const exp = 0
