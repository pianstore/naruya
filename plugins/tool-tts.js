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

import moment from 'moment-timezone'

const languages = [
["id-ID", "🇮🇩 Indonesia"],
["en-US", "🇺🇸 English"],
["ja-JP", "🇯🇵 Japanese"],
["fr-FR", "🇫🇷 French"],
["fil-PH", "🇵🇭 Filipino"],
["my-MM", "🇲🇲 Burmese"],
["de-DE", "🇩🇪 German"],
["it-IT", "🇮🇹 Italian"],
["ko-KR", "🇰🇷 Korean"],
["th-TH", "🇹🇭 Thai"],
["hi-IN", "🇮🇳 Hindi"],
["ru-RU", "🇷🇺 Russian"]
]

let ttsQueue = {}

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply(`🔊 *Masukkan teks untuk diubah ke suara!*\n\nContoh:\n${usedPrefix + command} Halo dunia`)
let text = args.join(" ")
ttsQueue[m.sender] = text
let list = languages.map(([code, name], i) => [code, (i + 1).toString(), name])
await conn.textList(m.chat, `🗣 *Pilih Bahasa untuk TTS*\n\n📄 *Teks:* "${text}"`, false, list, m, {
mentions: [m.sender],
contextInfo: {
externalAdReply: {
mentionedJid: [m.sender],
showAdAttribution: true,
mediaType: 1,
title: "🌐 Google Cloud Text-to-Speech",
body: `🕒 ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} | ${languages.length} Bahasa Tersedia`,
thumbnailUrl: "https://i.supa.codes/P17fR2",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
}

handler.before = async (m, { conn }) => {
let userId = m.sender
if (!ttsQueue[userId]) return
let langCode = m.text.trim().toLowerCase()
let selected = languages.find(([code]) => code.toLowerCase() === langCode)
if (!selected) return
let text = ttsQueue[userId]
delete ttsQueue[userId]
await global.loading(m, conn)
try {
let apiUrl = global.API("btz", "/api/sound/texttosound", { text1: text, lang: langCode }, "apikey")
let res = await fetch(apiUrl)
if (!res.ok) throw new Error(await res.text())
let json = await res.json()
if (!json.result) throw new Error("Tidak mendapatkan URL audio!")
let audioRes = await fetch(json.result)
let buffer = await audioRes.buffer()
await conn.sendMessage(m.chat, {
audio: buffer,
mimetype: "audio/mpeg",
ptt: true
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Gagal membuat suara!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['tts']
handler.tags = ['tool']
handler.command = /^tts$/i
handler.limit = true
handler.premium = true

export default handler