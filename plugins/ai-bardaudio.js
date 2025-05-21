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

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : null
if (!q) return m.reply(`⚠️ *Balas pesan yang berisi audio!*\n\n*Contoh: ${usedPrefix + command} Transkrip audio ini*`)
await global.loading(m, conn)
let media = await q.download().catch(() => null)
if (!media) return m.reply('⚠️ *Gagal mengunduh audio. Pastikan koneksi stabil!*')
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('⚠️ *Gagal mengunggah audio. Coba lagi nanti!*')
let inputText = text ? text : "Tolong transkrip audio ini."
let apiUrl = global.API("btz", "/api/search/bard-audio", { url: linkUpload, text: inputText }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam memproses audio dengan Bard AI. Coba lagi nanti!*')
let json = await response.json()
let resultText = json?.result || "⚠️ *Hasil tidak ditemukan!*"
let msg = {
text: `✨ *Gemini AI:*\n\n${resultText}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Bard AI - Speech to Text",
body: "Analisis audio dengan Bard AI",
thumbnailUrl: "https://i.supa.codes/r73xLL",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}
await conn.sendMessage(m.chat, msg, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['bardaud']
handler.tags = ['ai']
handler.command = /^(bardaudio|bardaud)$/i
handler.premium = true
handler.register = true

export default handler