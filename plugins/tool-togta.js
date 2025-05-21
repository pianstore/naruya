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
await global.loading(m, conn)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`⚠️ *Balas atau kirim gambar dengan caption!*\n\n📌 *Contoh: ${usedPrefix + command}*`)
if (!/image\/(jpeg|png|jpg)/.test(mime)) return m.reply('⚠️ *Format gambar tidak didukung! Gunakan JPG atau PNG.*')
let media = await q.download().catch(() => null)
if (!media) return m.reply('⚠️ *Gagal mengunduh gambar! Pastikan file tidak rusak.*')
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('⚠️ *Gagal mengunggah gambar. Coba lagi nanti!*')
let apiUrl = global.API("btz", "/api/maker/jadigta", { url: linkUpload }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan saat memproses gambar. Coba lagi nanti!*')
let json = await response.json()
if (!json.status || !json.result) return m.reply('⚠️ *Gagal mendapatkan hasil. Coba lagi nanti!*')
await conn.sendMessage(m.chat, { image: { url: json.result }, caption: `🎮 *Gambar berhasil dikonversi ke gaya GTA!*` }, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['togta']
handler.tags = ['tools']
handler.command = /^(togta|jadigta)$/i
handler.premium = true
handler.register = true

export default handler