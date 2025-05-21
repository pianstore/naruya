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

import crypto from "crypto"
import fs from "fs"
import pkg from 'baileys'
const { proto, generateWAMessageFromContent } = pkg

const formatRamDisk = (value) => value === "0" ? "Unlimited" : value.length > 4 ? value.slice(0, 2) + "GB" : value.charAt(0) + "GB"
const formatCpu = (value) => value === "0" ? "Unlimited" : value + "%"
const plans = {
"1gb": { ram: "1024", disk: "2024", cpu: "15", days: 30 },
"2gb": { ram: "2048", disk: "3048", cpu: "25", days: 30 },
"3gb": { ram: "3072", disk: "4072", cpu: "35", days: 30 },
"4gb": { ram: "4096", disk: "5096", cpu: "50", days: 30 },
"5gb": { ram: "5120", disk: "6120", cpu: "60", days: 30 },
"6gb": { ram: "6144", disk: "7144", cpu: "70", days: 30 },
"7gb": { ram: "7168", disk: "8168", cpu: "80", days: 30 },
"8gb": { ram: "8192", disk: "9192", cpu: "90", days: 30 },
"9gb": { ram: "9216", disk: "10216", cpu: "100", days: 30 },
"10gb": { ram: "10240", disk: "11240", cpu: "110", days: 30 },
"11gb": { ram: "11264", disk: "12264", cpu: "120", days: 30 },
"12gb": { ram: "12288", disk: "13288", cpu: "130", days: 30 },
"13gb": { ram: "13312", disk: "14312", cpu: "140", days: 30 },
"14gb": { ram: "14336", disk: "15336", cpu: "150", days: 30 },
"15gb": { ram: "15360", disk: "16360", cpu: "160", days: 30 },
"16gb": { ram: "16384", disk: "17384", cpu: "170", days: 30 },
"17gb": { ram: "17408", disk: "18408", cpu: "180", days: 30 },
"18gb": { ram: "18432", disk: "19432", cpu: "190", days: 30 },
"19gb": { ram: "19456", disk: "20456", cpu: "200", days: 30 },
"20gb": { ram: "20480", disk: "21480", cpu: "210", days: 30 },
"unlimited": { ram: "0", disk: "0", cpu: "0", days: 30 }
}
let handler = async (m, { conn, args }) => {
let input = args.join(" ").split(".")
if (input.length < 2) return m.reply("⚠️ *Format salah!*\n📌 *Contoh: .cpanel izumi.62xxx*")
let [username, numberRaw, planKey] = input
let number = numberRaw.replace(/[^\d+]/g, '') + "@s.whatsapp.net"
if (!planKey) {
let list = Object.keys(plans).map((plan, i) => [
`.cpanel ${username}.${numberRaw}.${plan}`,
(i + 1).toString(),
`💻 RAM: ${formatRamDisk(plans[plan].ram)} | 📡 Disk: ${formatRamDisk(plans[plan].disk)} | ⚡ CPU: ${formatCpu(plans[plan].cpu)}`
])
return await conn.textList(m.chat, `📌 *Pilih spesifikasi server Anda:*`, false, list, m, {
contextInfo: {
externalAdReply: { showAdAttribution: true, mediaType: 1, thumbnail: fs.readFileSync("./media/thumbnail.jpg"), renderLargerThumbnail: true }}
})
}
let plan = plans[planKey]
if (!plan) return m.reply("❌ *Paket tidak valid!*")
let expiresAt = Date.now() + (plan.days * 86400000)
let email = `${username}@naruyaizumi.com`
let password = username + crypto.randomBytes(3).toString("hex")
try {
let userResponse = await fetch(`${global.config.domain}/api/application/users`, {
method: "POST",
headers: {
Accept: "application/json", "Content-Type": "application/json",
Authorization: `Bearer ${global.config.apikey}`
},
body: JSON.stringify({
email,
username,
first_name: username,
last_name: "© IZUMI",
language: "en",
password
})
})
let userData = await userResponse.json()
if (!userResponse.ok || userData.errors) {
let errorMessage = userData.errors ? userData.errors[0].detail : "Gagal membuat pengguna di panel."
return m.reply(`❌ ${errorMessage}`)
}
let usr_id = userData.attributes.id
let eggData = await fetch(`${global.config.domain}/api/application/nests/${global.config.nestid}/eggs/${global.config.egg}`, {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
Authorization: `Bearer ${global.config.apikey}`,
},
})
let eggInfo = await eggData.json()
if (!eggData.ok || !eggInfo.attributes || !eggInfo.attributes.startup) {
return m.reply("😢 *Aduh, gagal membaca konfigurasi startup dari Egg~* 💔\n*Coba cek lagi ID Nest dan ID Egg-nya, ya!* ✨")
}
let startup_cmd = eggInfo.attributes.startup
let serverResponse = await fetch(`${global.config.domain}/api/application/servers`, {
method: "POST",
headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${global.config.apikey}` },
body: JSON.stringify({
name: username,
description: "COPYRIGHT © 2025 NARUYA IZUMI.",
user: userData.attributes.id,
egg: parseInt(global.config.egg),
docker_image: "docker.io/bionicc/nodejs-wabot:latest",
startup: startup_cmd,
environment: {
INST: "npm",
USER_UPLOAD: "0",
AUTO_UPDATE: "0",
CMD_RUN: "npm start"
},
limits: {
memory: plan.ram,
swap: 0,
disk: plan.disk,
io: 500,
cpu: plan.cpu
},
feature_limits: {
databases: 3,
backups: 3,
allocations: 3 },
deploy: {
locations: [parseInt(global.config.loc)],
dedicated_ip: false, port_range: []
}
})
})
let serverData = await serverResponse.json()
if (!serverResponse.ok || serverData.errors) return m.reply(`❌ ${serverData.errors ? serverData.errors[0].detail : "Gagal membuat server di panel."}`)
let server = serverData.attributes
let teks = `
📑 *\`DETAIL AKUN\`*
━━━━━━━━━━━━━━━━━━━━
📌 *ID Server: ${server.id}*
📛 *Nama: ${username}*
👤 *Username: ${userData.attributes.username}*
📧 *Email: ${email}*
🔑 *Password: ${password}*
🕒 *Masa Berlaku: ${new Date(expiresAt).toLocaleDateString('id-ID')}*
🌐 *Login: https://www.mediafire.com/file/df8rzb8ynljiim6/IZUMI.apk/file*
💻 *\`SPESIFIKASI\`*
━━━━━━━━━━━━━━━━━━━━
🖥️ *RAM: ${formatRamDisk(plan.ram)}*
📡 *Disk: ${formatRamDisk(plan.disk)}*
📈 *CPU: ${formatCpu(plan.cpu)}*
`
let msg = generateWAMessageFromContent(number, {
interactiveMessage: proto.Message.InteractiveMessage.create({
body: { text: teks },
footer: { text: "✨ Naruya Izumi 2024 ✨" },
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 Salin Username",
copy_code: userData.attributes.username
})
},
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "🔑 Salin Password",
copy_code: password
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "🫧 Unduh Aplikasi",
url: "https://www.mediafire.com/file/df8rzb8ynljiim6/IZUMI.apk/file",
merchant_url: "https://www.mediafire.com/file/df8rzb8ynljiim6/IZUMI.apk/file"
})
}
]
})
})
}, { quoted: m })
await conn.relayMessage(number, msg.message, { messageId: msg.key.id })
m.reply("🌸 *Detail akun berhasil dikirim ke nomor tujuan!* 😊")
} catch (error) {
console.error(error)
m.reply("❌ *Terjadi kesalahan dalam pembuatan server, coba lagi nanti!*")
}
}

handler.help = ["cpanel"]
handler.tags = ["server"]
handler.command = /^cpanel$/i
handler.premium = true
handler.register = true

export default handler