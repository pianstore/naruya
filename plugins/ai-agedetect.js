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

let handler = async (m, { conn, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime || !/image\/(jpeg|png|jpg)/.test(mime)) return m.reply(`📸 *Balas atau kirim gambar dengan perintah:*\n\n📌 Contoh: *${usedPrefix + command}*`)
await global.loading(m, conn)
let media = await q.download().catch(() => null)
if (!media) return m.reply('⚠️ *Gagal mengunduh gambar! Pastikan file tidak rusak.*')
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('⚠️ *Gagal mengunggah gambar. Coba lagi nanti!*')
let apiUrl = global.API("btz", "/api/search/agedetect", { url: linkUpload }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan saat menganalisis gambar!*')
let json = await response.json()
if (!json.result) return m.reply('⚠️ *Wajah tidak terdeteksi atau terjadi kesalahan!*')
let { score, age, gender, expression, faceShape } = json.result
let caption = `
🔍 *Deteksi Usia & Gender*
━━━━━━━━━━━━━━━━━━━
📊 *Perkiraan Usia: ${age}*
🧑 *Jenis Kelamin: ${gender}*
😐 *Ekspresi Wajah: ${expression}*
🔵 *Bentuk Wajah: ${faceShape}*
📉 *Confidence Score: ${score}%*
━━━━━━━━━━━━━━━━━━━
📸 *Analisis dari gambar yang dikirim!*
`.trim()
await conn.sendMessage(m.chat, {
image: { url: linkUpload },
caption,
contextInfo: {
externalAdReply: {
title: "Age Detector",
body: "Deteksi usia, gender, dan ekspresi wajah dari gambar!",
thumbnailUrl: "https://i.supa.codes/3_c3bd",
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}, { quoted: q.id ? q : m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['agedetect']
handler.tags = ['ai']
handler.command = /^(agedetect|deteksiusia)$/i
handler.premium = true
handler.register = true

export default handler