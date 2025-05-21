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
if (!m.quoted || !m.quoted.fromMe || !/Ketik.*suska|ᴋᴇᴛɪᴋ.*ꜱᴜꜱᴋᴀ/i.test(m.quoted.text)) return !0
this.susunkata = this.susunkata ? this.susunkata : {}
let setting = global.db.data.settings[conn.user.jid]
if (setting.composing)
await this.sendPresenceUpdate('composing', m.chat)
if (setting.autoread)
await this.readMessages([m.key])
if (!(id in this.susunkata)) return m.reply('Soal itu telah berakhir')
if (m.quoted.id == this.susunkata[id][0].id) {
let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].money += this.susunkata[id][2]
global.db.data.users[m.sender].limit += 2
m.reply(`*🎉BENAR!🎉*\n*+${this.susunkata[id][2]} 💰Money*\n*+2 🎫Limit*`)
clearTimeout(this.susunkata[id][4])
delete this.susunkata[id]
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
m.reply(`*Dikit Lagi!*`)
} else if (--this.susunkata[id][3] == 0) {
clearTimeout(this.susunkata[id][4])
delete this.susunkata[id]
conn.reply(m.chat, `*Kesempatan habis!*\nJawaban: *${json.jawaban}*`, m)
} else m.reply(`*Jawaban Salah!*\nMasih ada ${this.susunkata[id][3]} kesempatan`)
}
return !0
}
export const exp = 0