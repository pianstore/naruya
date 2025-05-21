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

let handler = async (m, { args }) => {
try {
const token = global.config.token
if (!token) return m.reply("🚨 *API DigitalOcean belum diset!*")
const headers = { Authorization: `Bearer ${token}` }
if (!args[0]) return m.reply("❌ *Masukkan ID droplet yang ingin dihapus!*")
const dropletId = args[0]

const deleteResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: "DELETE",
headers
})
if (!deleteResponse.ok) {
if (deleteResponse.status === 404) {
throw new Error("❌ *Droplet dengan ID tersebut tidak ditemukan!*")
}
throw new Error("❌ *Gagal menghapus droplet!*")
}
await conn.sendMessage(m.chat, {
text: `🔥 *Droplet dengan ID ${dropletId} berhasil dihapus!*`,
contextInfo: {
externalAdReply: {
title: "💻 Penghapusan Droplet DigitalOcean",
body: "🔍 Droplet berhasil dihapus, cek informasi lainnya di sini",
thumbnailUrl: "https://i.supa.codes/8EcmSG",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
} catch (err) {
m.reply(err.message)
}
}

handler.help = ["deldroplet"]
handler.tags = ["tool"]
handler.command = /^(delvps|deldroplet)$/i
handler.mods = true

export default handler