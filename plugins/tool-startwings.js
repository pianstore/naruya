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

import { Client } from "ssh2"

let handler = async (m, { text, conn }) => {
try {
if (!text) return m.reply("❌ *Format salah!* Gunakan: ipvps|pwvps|token_node")
let [ipvps, passwd, token] = text.split("|").map(v => v.trim())
if (!ipvps || !passwd || !token) return m.reply("❌ *Format salah!* Gunakan: ipvps|pwvps|token_node")
const connSettings = {
host: ipvps,
port: "22",
username: "root",
password: passwd
}
const command = `${token} && systemctl start wings`
const ress = new Client()
ress.on("ready", () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on("close", async () => {    
await conn.sendMessage(m.chat, {
text: `🚀 *Wings telah dijalankan dengan sukses!*
━━━━━━━━━━━━━━━━━━━
📡 *IP VPS: ${ipvps}*
⚙️ *Status Wings: Berjalan*
⏳ *Pastikan untuk memeriksa status secara berkala!*
━━━━━━━━━━━━━━━━━━━
🔧 *Gunakan perintah lain untuk konfigurasi tambahan atau pengecekan status.*`,
contextInfo: {
externalAdReply: {
title: "🔥 Wings Berhasil Dijalankan!",
body: "⚡ Server dalam mode aktif dan siap digunakan.",
thumbnailUrl: "https://i.supa.codes/8EcmSG",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
ress.end()
}).on("data", async (data) => {
console.log(data.toString())
}).stderr.on("data", async (data) => {
console.log("STDERR:", data.toString())
})
})
}).on("error", (err) => {
console.log("Connection Error:", err)
m.reply("❌ *Katasandi atau IP tidak valid!*")
}).connect(connSettings)

} catch (err) {
m.reply("❌ *Terjadi kesalahan!* Pastikan format benar dan server bisa diakses.")
}
}

handler.help = ["startwings"]
handler.tags = ["server"]
handler.command = /^(startwings)$/i
handler.mods = true

export default handler