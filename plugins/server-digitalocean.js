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

let handler = async (m) => {
try {
const token = global.config.token
if (!token) return m.reply("🚨 *API DigitalOcean belum diset!*")
const headers = { Authorization: `Bearer ${token}` }
const accountResponse = await fetch("https://api.digitalocean.com/v2/account", { headers })
if (!accountResponse.ok) throw new Error("Gagal mengambil data akun DigitalOcean!")
const accountData = await accountResponse.json()
const dropletsResponse = await fetch("https://api.digitalocean.com/v2/droplets", { headers })
if (!dropletsResponse.ok) throw new Error("Gagal mengambil data droplets!")
const dropletData = await dropletsResponse.json()
const dropletLimit = accountData.account.droplet_limit
const totalDroplets = dropletData.droplets.length
const remainingDroplets = dropletLimit - totalDroplets

let dropletList
if (totalDroplets === 0) {
dropletList = "❌ *Tidak ada droplet aktif saat ini!*"
} else {
dropletList = dropletData.droplets.map((droplet, i) => {
const os = `${droplet.image.distribution} ${droplet.image.name}`
const createdAt = new Date(droplet.created_at).toLocaleString("id-ID")
const vcpus = droplet.vcpus
const memory = droplet.memory
const disk = droplet.disk
const backupEnabled = droplet.features.includes("backups") ? "🚀 Aktif" : "❌ Tidak"
const monitoringEnabled = droplet.features.includes("monitoring") ? "🚀 Aktif" : "❌ Tidak"
return `🌐 *${i + 1}. ${droplet.name}*
🍥 *ID: ${droplet.id}*
🚦 *Status: ${droplet.status === "active" ? "🚀 Aktif" : droplet.status === "off" ? "⚪ Mati" : "❌ Error"}*
🌍 *Region: ${droplet.region.slug}*
📀 *OS: ${os}*
🖥 *Spesifikasi: ${vcpus} vCPU, ${memory}MB RAM, ${disk}GB Disk*
📅 *Dibuat: ${createdAt}*`
}).join("\n━━━━━━━━━━━━━━━━━━━\n")
}
const caption = `🌊 *Informasi Droplet DigitalOcean*
━━━━━━━━━━━━━━━━━━━
📊 *Total Droplet Terpakai: ${totalDroplets}/${dropletLimit}*
🔥 *Sisa Droplet yang Bisa Digunakan: ${remainingDroplets}*
━━━━━━━━━━━━━━━━━━━
${dropletList}`
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: "💻 Cek Droplet DigitalOcean",
body: "🔍 Lihat sisa dan daftar droplet yang aktif",
thumbnailUrl: "https://i.supa.codes/8EcmSG",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
} catch (err) {
m.reply("❌ *Terjadi kesalahan saat mengambil data DigitalOcean!*")
}
}

handler.help = ["cekdroplet"]
handler.tags = ["server"]
handler.command = /^(cekdroplet|cekdo)$/i
handler.mods = true

export default handler