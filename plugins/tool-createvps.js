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
const regionRes = await fetch("https://api.digitalocean.com/v2/regions", { headers })
if (!regionRes.ok) throw new Error("Gagal mengambil data region!")
const regionData = await regionRes.json()
const sizeRes = await fetch("https://api.digitalocean.com/v2/sizes", { headers })
if (!sizeRes.ok) throw new Error("Gagal mengambil data ukuran!")
const sizeData = await sizeRes.json()
const imageRes = await fetch("https://api.digitalocean.com/v2/images?type=distribution", { headers })
if (!imageRes.ok) throw new Error("Gagal mengambil data OS!")
const imageData = await imageRes.json()

if (!args[0]) {
const caption = `✨ *Daftar Opsi DigitalOcean* ✨  
━━━━━━━━━━━━━━━━━━━
📍 *Region:*
${regionData.regions.map((r, i) => `*${i + 1}. ${r.slug} - ${r.name}*`).join("\n")}
━━━━━━━━━━━━━━━━━━━
🖥️ *Ukuran (Size):*
${sizeData.sizes.map((s, i) => `*${i + 1}. ${s.slug} - ${s.vcpus} vCPU, ${s.memory}MB RAM*`).join("\n")}
━━━━━━━━━━━━━━━━━━━
📀 *OS (Image):*
${imageData.images.map((i, idx) => `*${idx + 1}. ${i.slug} - ${i.distribution} ${i.name}*`).join("\n")}
━━━━━━━━━━━━━━━━━━━
🔧 *Gunakan: .cvps nama.region.size.os*
🔧 *Contoh: .cvps izumi.1.6.9*`
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: { externalAdReply: {
title: "🛠️ Opsi DigitalOcean",
body: "🔍 Cek daftar region, ukuran, dan OS yang tersedia",
thumbnailUrl: "https://i.supa.codes/8EcmSG",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}}
})
return
}
const input = args[0].split(".")
if (input.length < 4) return m.reply("❌ *Format salah! Gunakan: .cvps nama.region.size.os*")
const [dropletName, regionIdx, sizeIdx, imageIdx] = input
const region = regionData.regions[regionIdx - 1]?.slug
const size = sizeData.sizes[sizeIdx - 1]?.slug
const image = imageData.images[imageIdx - 1]?.slug
if (!region || !size || !image) return m.reply("❌ *Nomor tidak valid! Periksa daftar dengan .cvps*")
const pass = "NARUYA@1ZUMI"
const userData = `#!/bin/bash
echo -e "${pass}\\n${pass}" | passwd root
sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
systemctl restart ssh`
const createRes = await fetch("https://api.digitalocean.com/v2/droplets", { 
method: "POST", 
headers: { ...headers, "Content-Type": "application/json" }, 
body: JSON.stringify({ name: dropletName, region, size, image, user_data: userData })
})
if (!createRes.ok) throw new Error("Gagal membuat droplet!")
await m.reply("⏳ *Sedang membuat VPS... Mohon tunggu beberapa menit sambil sistem menyiapkan IP.*")
const result = await createRes.json()
const dropletId = result.droplet.id
let ipAddress = null, attempts = 0
while (attempts < 60 && !ipAddress) {
await new Promise(resolve => setTimeout(resolve, 10000))
const dropletRes = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, { headers })
if (!dropletRes.ok) throw new Error("Gagal mengambil detail droplet!")
const dropletData = await dropletRes.json()
ipAddress = dropletData.droplet.networks.v4.find(net => net.type === "public")?.ip_address || null
attempts++
}
const caption = `🌊 *VPS Berhasil Dibuat!*  
━━━━━━━━━━━━━━━━━━━
🌐 *Nama: ${dropletName}*
📍 *Region: ${region}*
🖥️ *Spesifikasi: ${size}*
📀 *OS: ${image}*
🔑 *Password Root: ${pass}*
📡 *IP Address: ${ipAddress || "Belum tersedia, coba cek ulang nanti"}*
📡 *ID: ${dropletId}*
━━━━━━━━━━━━━━━━━━━
⚠️ *Segera login dan ubah password root untuk keamanan!*`
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: { externalAdReply: {
title: "🖥️ Droplet DigitalOcean",
body: "🔧 Berhasil membuat droplet baru",
thumbnailUrl: "https://i.supa.codes/8EcmSG",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}}
})
} catch (err) {
m.reply("❌ *Terjadi kesalahan!* Cek kembali parameter atau API DigitalOcean.")
}
}

handler.help = ["createvps"]
handler.tags = ["server"]
handler.command = /^(cvps|createvps)$/i
handler.mods = true

export default handler