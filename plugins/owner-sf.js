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

import fs from 'fs'
import path from 'path'

let handler = async (m, { conn, args }) => {
let dest = args[0] || ''
if (!m.quoted) {
if (!dest) {
let list = fs.readdirSync('./')
.map(name => {
let stats = fs.statSync(name)
return {
name,
isDir: stats.isDirectory()
}
}).sort((a, b) => {
if (a.isDir && !b.isDir) return -1
if (!a.isDir && b.isDir) return 1
return a.name.localeCompare(b.name)
}).map(item => item.isDir ? `📁 */${item.name}/*` : `📄 *${item.name}*`).join('\n')
return m.reply(`🌸 *Contoh Penggunaan:*\n`.concat(
`*.sf reply file .js*\n`,
`*.sf /plugins reply file .js*\n\n`,
`📂 *Root Directory:*\n${list}`
))
}
return m.reply('🌺 *Reply file yang mau disimpan~*')
}
let filename = m.quoted.fileName
let buffer = await m.quoted.download()
let folder = dest.startsWith('/') ? dest.slice(1) : dest || ''
let fullpath = path.join(folder, filename)

fs.mkdirSync(path.dirname(fullpath), { recursive: true })
fs.writeFileSync(fullpath, buffer)
await m.reply(`🍓 *Berhasil disimpan sebagai:*\n📁 *${fullpath}*`)
}

handler.help = ['sf']
handler.tags = ['owner']
handler.command = /^(sf|savefile)$/i
handler.mods = true

export default handler