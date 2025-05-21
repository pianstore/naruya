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
if (!args[0]) return m.reply("⚠️ *Domain tidak ditemukan!*\n*Gunakan: .domain nomor host|ip*")
if (isNaN(args[0])) return m.reply("⚠️ *Domain tidak ditemukan!*\n*Gunakan: .domain nomor host|ip*")
const dom = Object.keys(global.config.Subdo)
if (Number(args[0]) > dom.length) return m.reply("⚠️ *Domain tidak ditemukan!*\n*Gunakan: .domain nomor host|ip*")
if (!args[1]?.includes("|")) return m.reply("⚠️ *Format salah! Gunakan: .domain nomor host|ip*")
const tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|").map(v => v.trim())
async function subDomain1(host, ip) {
const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${global.config.Subdo[tldnya].zone}/dns_records`, {
method: "POST",
headers: {
Authorization: `Bearer ${global.config.Subdo[tldnya].apitoken}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
type: "A",
name: `${host}.${tldnya}`,
content: ip,
ttl: 3600,
priority: 10,
proxied: false
})
})
const res = await response.json()
if (res.success) {
return { success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content }
} else {
const errMsg = res.errors?.[0]?.message || "Terjadi kesalahan saat membuat subdomain!"
return { success: false, error: errMsg }
}
}
const result = await subDomain1(host.toLowerCase(), ip)
if (result.success) {
const caption = `🎉 *Subdomain Berhasil Dibuat!*
━━━━━━━━━━━━━━━━━━━
🏷️ *Subdomain: ${result.name}*
🌍 *IP Server: ${result.ip}*
📡 *Domain: ${tldnya}*
━━━━━━━━━━━━━━━━━━━`
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "Subdomain Baru 🚀",
body: `${result.name} berhasil dibuat!`,
thumbnailUrl: "https://i.supa.codes/8EcmSG",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
} else {
m.reply(`❌ *Gagal membuat subdomain!* ${result.error}`)
}
} catch (err) {
m.reply("⚠️ *Terjadi kesalahan!* Periksa kembali format perintah.")
}
}

handler.help = ["domain"]
handler.tags = ["server"]
handler.command = /^(domain)$/i
handler.mods = true

export default handler