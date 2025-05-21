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

let handler = async (m, { conn }) => {
try {
await global.loading(m, conn)

let q = m.quoted ? m.quoted : m
let media = await q.download().catch(() => null)
if (!media) return m.reply('⚠️ *Gagal mengunduh audio!*')
let linkUpload = await uploader(media).catch(() => null)
if (!linkUpload) return m.reply('⚠️ *Gagal mengunggah audio. Coba lagi nanti!*')
let msgAwal = {
text: `🎵 *Proses Ekstraksi Audio...* 
⌛ Mohon tunggu sebentar, sedang memisahkan vokal dan instrumental dari audio yang dikirim.`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Instrument Extractor",
body: "Menghapus vokal dan menghasilkan instrumental dari audio Anda.",
thumbnailUrl: "https://i.supa.codes/98NTT6",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}
await conn.sendMessage(m.chat, msgAwal, { quoted: m })
let apiUrl = global.API("btz", "/api/tools/voiceremover", { url: linkUpload }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Terjadi kesalahan saat memproses audio. Coba lagi nanti!*')
let json = await response.json()
if (json.result?.error) return m.reply('⚠️ *Gagal mengekstrak audio. Coba lagi nanti!*')
let { vocal_path, instrumental_path } = json.result
await conn.sendMessage(m.chat, { 
audio: { url: instrumental_path }, 
mimetype: 'audio/mp4', 
fileName: "instrumental.mp3",
ptt: true
}, { quoted: m })
await conn.sendMessage(m.chat, { 
audio: { url: vocal_path }, 
mimetype: 'audio/mp4', 
fileName: "vocal.mp3",
ptt: true
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan Teknis!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['instrument']
handler.tags = ['ai']
handler.command = /^(instrument|voiceremove)$/i
handler.premium = true
handler.register = true

export default handler