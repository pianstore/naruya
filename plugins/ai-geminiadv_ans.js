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

import { uploader } from '../lib/uploader.js'

export async function before(m) {
this.cai = this.cai || {}
let chatId = m.chat
if (m.isBaileys || m.fromMe) return
if (typeof global.prefix === 'function' ? global.prefix(m) : global.prefix instanceof RegExp ? global.prefix.test(m.text) : m.text?.startsWith(global.prefix)) return
if (!this.cai[chatId] || !this.cai[chatId].active) return
if (this.cai[chatId].character !== 'gemini-advanced') return
let sessionid = this.cai[chatId].sessionid || '1'
let text = (m.text || m.caption || '').trim()
if (!text) return
let mediaUrl = null
let mediaSource = null
if (m.quoted && /image/.test(m.quoted.mimetype)) {
mediaSource = m.quoted
} else if (m.mimetype && /image/.test(m.mimetype)) {
mediaSource = m
}
if (mediaSource) {
try {
let media = await mediaSource.download()
let link = await uploader(media).catch(() => null)
if (link) mediaUrl = link
} catch (e) {
console.log(e)
}
}
try {
await this.readMessages([m.key])
await this.sendPresenceUpdate('composing', chatId)
let endpoint = `https://api.nekorinn.my.id/ai/gemini-advanced?text=${text}&sessionid=${sessionid}`
if (mediaUrl) endpoint += `&_mediaUrl=${mediaUrl}`
let res = await fetch(endpoint)
let json = await res.json()
await this.sendPresenceUpdate('paused', chatId)
if (!json.status || !json.result) return
await this.reply(chatId, json.result, m)
} catch (e) {
await this.sendPresenceUpdate('paused', chatId)
console.error(e)
await this.reply(chatId, '🍰 *Gemini Advanced lagi error...*\n🌸 *Coba tanya Izumi sebentar lagi ya~*')
}
}