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

import fs from 'fs'
import moment from 'moment-timezone'

const characters = [
"airi", "akane", "akari", "ako", "aris", "arona", "aru", "asuna", "atsuko",
"ayane", "azusa", "cherino", "chihiro", "chinatsu", "chise", "eimi", "erica",
"fubuki", "fuuka", "hanae", "hanako", "hare", "haruka", "haruna", "hasumi",
"hibiki", "hihumi", "himari", "hina", "hinata", "hiyori", "hoshino", "iori",
"iroha", "izumi", "izuna", "juri", "kaede", "karin", "kayoko", "kazusa",
"kirino", "koharu", "kokona", "kotama", "kotori", "main", "maki", "mari",
"marina", "mashiro", "michiru", "midori", "miku", "mimori", "misaki", "miyako",
"miyu", "moe", "momoi", "momoka", "mutsuki", "NP0013", "natsu", "neru", "noa",
"nodoka", "nonomi", "pina", "rin", "saki", "saori", "saya", "sena", "serika",
"serina", "shigure", "shimiko", "shiroko", "shizuko", "shun", "ShunBaby",
"sora", "sumire", "suzumi", "tomoe", "tsubaki", "tsurugi", "ui", "utaha",
"wakamo", "yoshimi", "yuuka", "yuzu", "zunko"
]

let speechQueue = {}
let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
let userId = m.sender
if (!args[0]) return m.reply(`📢 *Masukkan teks untuk diubah ke suara!*\n\n*Contoh: ${usedPrefix + command} Semangat Izumi!*`)
let text = args.join(" ")
speechQueue[userId] = text
let list = characters.map((char, i) => [char, (i + 1).toString(), char])
await conn.textList(m.chat, `🎙 *Pilih Karakter untuk Suara TTS*\n📌 *Teks: "${text}"*`, false, list, m, {
mentions: [m.sender],
contextInfo: {
externalAdReply: {
mentionedJid: [m.sender],
showAdAttribution: true,
mediaType: 1,
title: `🍬 *Suara TTS Karakter Blue Archive*`,
body: `🕒 *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} | Total karakter: ${characters.length}*`,
thumbnailUrl: "https://i.supa.codes/rMfMw2",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
}
}
handler.before = async (m, { conn }) => {
let userId = m.sender
if (!speechQueue[userId]) return
let character = m.text.trim().toLowerCase()
if (!characters.includes(character)) return
let text = speechQueue[userId]
delete speechQueue[userId]
await global.loading(m, conn)
try {
let apiUrl = `https://api.hiuraa.my.id/tools/ttsba?text=${text}&char=${character}&speed=1`
let response = await fetch(apiUrl)
if (!response.ok) {
let errorText = await response.text()
throw new Error(`Gagal membuat suara! API mengembalikan: ${errorText}`)
}
let audioRes = Buffer.from(await response.arrayBuffer())
if (!audioRes || audioRes.length === 0) throw new Error("Buffer audio kosong! Coba lagi nanti.")
await conn.sendMessage(m.chat, { audio: audioRes, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["ttsba"]
handler.tags = ["tool"]
handler.command = /^(ttsba)$/i
handler.limit = true
handler.register = true

export default handler