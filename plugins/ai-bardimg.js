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
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`⚠️ *Balas atau kirim gambar dengan caption!*\n\n*Contoh: ${usedPrefix + command} Jelaskan gambar ini!*`)
await global.loading(m, conn)
let media = await q.download()
if (!media) return m.reply('⚠️ *Gagal mengunduh gambar. Pastikan koneksi stabil!*')
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('⚠️ *Gagal mengunggah gambar. Coba lagi nanti!*')
if (!text) return m.reply(`⚠️ *Masukkan teks untuk analisis gambar!*\n\n*Contoh: ${usedPrefix + command} Jelaskan isi gambar ini!*`)
let apiUrl = global.API("btz", "/api/search/bard-img", { url: linkUpload, text }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan dalam memproses gambar dengan Bard AI. Coba lagi nanti!*')
let json = await response.json()
let resultText = String(json?.result ?? "⚠️ *Hasil tidak ditemukan!*")
let msg = {
text: `✨ *Gemini AI:*\n\n${resultText}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Bard AI",
body: "Analisis gambar dengan Bard AI",
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

handler.help = ['bardimg']
handler.tags = ['ai']
handler.command = /^(bardimg|bardimage)$/i
handler.premium = true
handler.register = true

export default handler