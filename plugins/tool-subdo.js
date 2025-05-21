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

let handler = async (m, { args, conn }) => {
try {
if (!args[0]) return m.reply("❌ *Format salah!* Gunakan: .subdo subdomain|ip")
const input = args.join(" ").split("|").map(v => v.trim())
if (input.length < 2) return m.reply("❌ *Format salah!* Gunakan: .subdo subdomain|ip")
const [subdomain, ip] = input
const dom = Object.keys(global.config.Subdo)
if (dom.length === 0) return m.reply("🚨 *Tidak ada domain yang tersedia!*")
const domainList = dom.map((d, i) => `*${i + 1}.* ${d}`).join("\n")
const caption = `✨ *Pilih Domain untuk Subdomain*
━━━━━━━━━━━━━━━━━━━
🌐 *Subdomain: ${subdomain}*
📡 *IP: ${ip}*
━━━━━━━━━━━━━━━━━━━
📍 *Daftar Domain:*
${domainList}
━━━━━━━━━━━━━━━━━━━
🔧 *Gunakan: .domain nomor subdomain|ip*
🔧 *Contoh: .domain 2 ${subdomain}|${ip}*
🔧 *Artinya: Tambah ${subdomain}.domain-ke-2 ke ${ip}*`
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "🌐 Setup Subdomain",
body: "🔍 Pilih domain yang tersedia",
thumbnailUrl: "https://i.supa.codes/8EcmSG",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
} catch (err) {
m.reply("❌ *Terjadi kesalahan!* Periksa kembali format perintah.")
}
}

handler.help = ["subdo"]
handler.tags = ["server"]
handler.command = /^(subdo|subdomain)$/i
handler.mods = true

export default handler