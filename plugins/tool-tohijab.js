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
if (!media || !(media instanceof Buffer)) {
return m.reply('⚠️ *Gagal mengunduh media atau format tidak dikenali.*')
}
let url = await uploader(media).catch(() => null)
if (!url) return m.reply('⚠️ *Gagal mengunggah gambar. Coba lagi nanti!*')
let api = `https://api.hiuraa.my.id/tools/to-hijab?imageUrl=${encodeURIComponent(url)}`
let res = await fetch(api)
if (!res.ok) throw 'Gagal memproses gambar.'
let buff = Buffer.from(await res.arrayBuffer())
await conn.sendMessage(m.chat, {
image: Buffer.from(buff),
caption: '🧕 *Berhijab dengan anggun~*'
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi kesalahan!*\n📌 *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['tohijab']
handler.tags = ['tools']
handler.command = /^(tohijab|jadihijab)$/i
handler.limit = true
handler.register = true

export default handler