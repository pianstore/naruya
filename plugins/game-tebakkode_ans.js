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

const threshold = 0.85

export async function before(m) {
if (!m) return
let id = m.chat
if (m.isBaileys || m.fromMe) return
if (
!m.quoted ||
!m.quoted.fromMe ||
!m.text ||
!/Ketik.*hcode|ketik.*hcode/i.test(m.quoted.text) ||
/.*hcode/i.test(m.text)
) return !0
this.tebakkode = this.tebakkode || {}
let setting = global.db.data.settings[this.user.jid]
if (setting.composing) await this.sendPresenceUpdate('composing', m.chat)
if (setting.autoread) await this.readMessages([m.key])
if (!(id in this.tebakkode)) return m.reply('⚠️ *Soal sudah berakhir.*')
if (m.quoted.id === this.tebakkode[id][0].id) {
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (isSurrender) {
clearTimeout(this.tebakkode[id][4])
delete this.tebakkode[id]
return m.reply('😢 *Kamu menyerah...*')
}
let json = JSON.parse(JSON.stringify(this.tebakkode[id][1]))
if (m.text.toLowerCase() === json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tebakkode[id][2]
m.reply(`🔥 *Jawaban benar!*\n*+${this.tebakkode[id][2]} XP*`)
clearTimeout(this.tebakkode[id][4])
delete this.tebakkode[id]
} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
m.reply('🤏 *Dikit lagi!*')
} else if (--this.tebakkode[id][3] === 0) {
clearTimeout(this.tebakkode[id][4])
delete this.tebakkode[id]
this.reply(m.chat, `🚨 *Kesempatan habis!*\n*Jawaban: ${json.jawaban}*`, m)
} else {
m.reply(`❌ *Salah!*\n*Kesempatan tersisa: ${this.tebakkode[id][3]}*`)
}
}
return !0
}

export const exp = 0