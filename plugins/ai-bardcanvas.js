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
if (!mime) return m.reply(`⚠️ *Balas atau kirim gambar dengan caption!*\n\n*Contoh:* ${usedPrefix + command} Ubah latar belakang jadi biru!`)
await global.loading(m, conn)
let media = await q.download()
if (!media) return m.reply('⚠️ *Gagal mengunduh gambar. Pastikan koneksi stabil!*')
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('⚠️ *Gagal mengunggah gambar. Coba lagi nanti!*')
if (!text) return m.reply(`⚠️ *Masukkan teks perintah untuk edit gambar!*\n\n*Contoh:* ${usedPrefix + command} Buat lebih terang!`)
let apiUrl = `https://api.hiuraa.my.id/ai/gemini-canvas?text=${text}&imageUrl=${linkUpload}`
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan saat memproses gambar dengan Gemini Canvas. Coba lagi nanti!*')
let json = await response.json()
let resultText = json?.result?.message || "⚠️ *Tidak ada pesan dari API!*"
let imageBase64 = json?.result?.image?.base64
let imageMime = json?.result?.image?.mimetype

if (!imageBase64 || !imageMime) return m.reply('⚠️ *Gagal mendapatkan gambar hasil edit!*')

let buffer = Buffer.from(imageBase64, 'base64')

await conn.sendMessage(m.chat, {
image: buffer,
caption: `✨ *Gemini Canvas:*\n\n${resultText}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Gemini AI - Canvas",
body: "Edit gambar dengan kecerdasan buatan!",
thumbnailUrl: "https://i.supa.codes/r73xLL",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}, { quoted: m })

} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['bardcanvas']
handler.tags = ['ai']
handler.command = /^(bardcanvas|canvas)$/i
handler.premium = true
handler.register = true

export default handler