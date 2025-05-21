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

import os from "os"
import { execSync } from "child_process"

let handler = async (m, { conn }) => {
try {
await global.loading(m, conn)
let botUptime = process.uptime()
let serverUptime = os.uptime()
let waktu = formatWaktu(botUptime)
let serverUptimeFormatted = formatUptime(serverUptime)
let bandwidth = getBandwidthUsage()
let message = `
🖥️ *\`INFO SERVER & BOT\`*
🌥️ *Tanggal: ${waktu.namaHari}, ${waktu.tanggal} ${waktu.namaBulan} ${waktu.tahun}*
⏰ *Jam: ${waktu.jam}:${waktu.menit} WIB*
━━━━━━━━━━━━━━━━━━━━
🚀 *Uptime Bot: ${waktu.uptime}*
🖥️ *Uptime Server: ${serverUptimeFormatted}*
📤 *Upload: ${bandwidth.upload} MB*
📥 *Download: ${bandwidth.download} MB*
━━━━━━━━━━━━━━━━━━━━`
await conn.sendMessage(m.chat, {
text: message,
contextInfo: {
externalAdReply: {
title: global.config.author,
body: global.config.watermark,
thumbnailUrl: "https://i.supa.codes/LSRRda",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ["runtime"]
handler.tags = ["info"]
handler.command = ["runtime", "rt"]
handler.owner = true

export default handler

function formatWaktu(seconds) {
let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
let sekarang = new Date()
let jakarta = new Date(sekarang.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }))
let namaHari = hari[jakarta.getDay()]
let tanggal = jakarta.getDate()
let namaBulan = bulan[jakarta.getMonth()]
let tahun = jakarta.getFullYear()
let jam = String(jakarta.getHours()).padStart(2, "0")
let menit = String(jakarta.getMinutes()).padStart(2, "0")
let d = String(Math.floor(seconds / 86400)).padStart(2, "0")
let h = String(Math.floor((seconds % 86400) / 3600)).padStart(2, "0")
let m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
let s = String(Math.floor(seconds % 60)).padStart(2, "0")

return { namaHari, tanggal, namaBulan, tahun, jam, menit, uptime: `${d}:${h}:${m}:${s}` }
}
function formatUptime(seconds) {
let d = String(Math.floor(seconds / 86400)).padStart(2, "0")
let h = String(Math.floor((seconds % 86400) / 3600)).padStart(2, "0")
let m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
let s = String(Math.floor(seconds % 60)).padStart(2, "0")
return `${d}:${h}:${m}:${s}`
}
function getBandwidthUsage() {
try {
let output = execSync("cat /proc/net/dev").toString()
let lines = output.split("\n").slice(2)
let totalDownload = 0, totalUpload = 0

lines.forEach(line => {
let data = line.trim().split(/\s+/)
if (data.length > 9) {
totalDownload += parseInt(data[1])
totalUpload += parseInt(data[9])
}
})
return {
download: (totalDownload / (1024 * 1024)).toFixed(2),
upload: (totalUpload / (1024 * 1024)).toFixed(2)
}
} catch (e) {
return { download: "Unknown", upload: "Unknown" }
}
}