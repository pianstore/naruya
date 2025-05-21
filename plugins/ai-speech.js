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

import { vitsSpeech } from "../lib/scrape.js"
import fs from "fs"

let speech = new vitsSpeech()
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) return m.reply(`🍡 *Masukkan teks yang ingin diubah ke suara!*\n\n*Contoh: ${usedPrefix + command} dasar mesum*\n*${usedPrefix + command} aku sayang kamu|suzu*`)
text = text.split("|")
if (!text[1]) {
let data = JSON.parse(fs.readFileSync('./json/speechModel.json', 'utf-8'))
let result = Object.keys(data.model)
let list = result.map((v, i) => {
return [`${usedPrefix + command} ${text[0]}|${v}`, (i + 1).toString(), data.model[v]]
})
await conn.textList(m.chat, `🍰 Terdapat *${result.length} Model Suara*\nSilakan pilih model yang ingin kamu gunakan yaa~`, false, list, m)
} else {
try {
await global.loading(m, conn)
let res = await fetch(global.API('btz', '/api/tools/translate', {
text: text[1],
lang: 'ja'
}, 'apikey'))
let json = await res.json()
if (!json.status || !json.result) throw '❌ *Gagal menerjemahkan ke bahasa Jepang!*'
let result = await speech.generate(json.result, text[1], 'ja')
await conn.sendMessage(m.chat, {
audio: { url: result.url },
mimetype: 'audio/mpeg',
ptt: true
}, { quoted: m })
} finally {
await global.loading(m, conn, true)
}
}
}

handler.help = ['speech']
handler.tags = ['ai']
handler.command = /^((ai)?speech)$/i
handler.premium = true
handler.register = true

export default handler