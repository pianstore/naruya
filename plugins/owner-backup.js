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

import fs from "fs"
import { execSync } from "child_process"

let handler = async (m, { conn }) => {
try {
const tempDir = "./tmp"
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true })
let files = fs.readdirSync(tempDir)
if (files.length > 0) {
for (let file of files) {
fs.unlinkSync(`${tempDir}/${file}`)
}
}
await m.reply("*📦 Memproses backup script bot...*")
const backupName = "crystalia"
const backupPath = `${tempDir}/${backupName}.zip`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe !== "node_modules" &&
pe !== "sessions" &&
pe !== "package-lock.json" &&
pe !== "yarn.lock" &&
pe !== ""
)
await execSync(`zip -r ${backupPath} ${ls.join(" ")}`)
await conn.sendMessage(m.sender, {
document: await fs.readFileSync(backupPath),
fileName: `${backupName}.zip`,
mimetype: "application/zip"
}, { quoted: m })
fs.unlinkSync(backupPath)
if (m.chat !== m.sender) return m.reply("*Script bot berhasil dikirim ke private chat!*")
} catch (e) {
console.error(e)
m.reply("❌ *Gagal membuat backup script!*")
}
}

handler.help = ["backup"]
handler.tags = ["owner"]
handler.command = /^(backup|bk)$/i
handler.mods = true

export default handler