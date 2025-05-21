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
import pkg from 'baileys'
const { proto, generateWAMessageFromContent } = pkg

let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = q?.mimetype || ''
if (!/image/.test(mime)) return m.reply(`⚠️ *Reply gambar dengan perintah ${usedPrefix + command}!*`)
await global.loading(m, conn)
try {
let img = await q.download()
let url = await uploader(img)
let response = await fetch(global.API('btz', '/api/tools/decode-qr', { url: url }, 'apikey'))
if (!response.ok) throw new Error(`❌ *Gagal membaca QR Code! Status:* ${response.status}`)
let json = await response.json()
if (!json.status || !json.result) return m.reply('❌ *Gagal membaca QR Code!*')
let hasilQR = json.result
let teks = `📌 *Hasil Scan QR Code:*\n\n\`\`\`${hasilQR}\`\`\`\n\n*Klik tombol di bawah untuk menyalin teks.*`
let msg = generateWAMessageFromContent(m.chat, {
interactiveMessage: proto.Message.InteractiveMessage.create({
body: { text: teks },
footer: { text: "© Naruya Izumi 2024" },
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 Salin Teks",
copy_code: hasilQR
})
}
]
})
})
}, { quoted: m })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['readqr']
handler.tags = ['tools']
handler.command = /^(readqr|decode)$/i
handler.limit = true
handler.register = true

export default handler