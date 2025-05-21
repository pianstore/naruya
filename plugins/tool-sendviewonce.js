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

let handler = async (m, { conn }) => {
if (!m.quoted) return m.reply("⚠️ *Silakan reply gambar, video, atau audio yang ingin dijadikan View Once!*")
let mime = m.quoted.mimetype || ""
if (!/image|video|audio/.test(mime)) return m.reply("⚠️ *Hanya bisa mengubah gambar, video, atau audio menjadi View Once!*")
try {
let media = await m.quoted.download()
if (!media) return m.reply("❌ *Gagal mengunduh media!*")
let options = {
caption: m.quoted.text || "",
viewOnce: true
}
if (/image/.test(mime)) {
await conn.sendMessage(m.chat, { image: media, ...options }, { quoted: m })
} else if (/video/.test(mime)) {
await conn.sendMessage(m.chat, { video: media, ...options }, { quoted: m })
} else if (/audio/.test(mime)) {
await conn.sendMessage(m.chat, { audio: media, mimetype: "audio/ogg", ptt: true, viewOnce: true }, { quoted: m })
}
} catch (e) {
console.error(e)
m.reply("❌ *Gagal mengubah media menjadi View Once!*")
}
}

handler.help = ["sendviewonce"]
handler.tags = ["tools"]
handler.command = /^send(view(once)?)?|svo$/i
handler.register = true
handler.premium = true

export default handler