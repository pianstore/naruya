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
this.cai = this.cai || {}
let chatId = m.chat
if (m.isBaileys || m.fromMe) return
if (typeof global.prefix === 'function' ? global.prefix(m) : global.prefix instanceof RegExp ? global.prefix.test(m.text) : m.text?.startsWith(global.prefix)) return
if (!this.cai[chatId] || !this.cai[chatId].active) return
if (this.cai[chatId].character !== 'hiura-mihate') return
let sessionid = this.cai[chatId].sessionid || '1'
let text = m.text?.trim()
if (!text) return
try {
await this.readMessages([m.key])
await this.sendPresenceUpdate('composing', chatId)
let res = await fetch(`https://api.nekorinn.my.id/character-ai/hiura-mihate?text=${text}&sessionid=${sessionid}`)
let json = await res.json()
await this.sendPresenceUpdate('paused', chatId)
if (!json.status || !json.result) return
await this.reply(chatId, json.result, m)
} catch (e) {
await this.sendPresenceUpdate('paused', chatId)
console.error(e)
await this.reply(chatId, '❌ *Hiura lagi malu-malu...* 🍓\n💦 *Coba panggil Izumi buat bantuin ya~*')
}
}