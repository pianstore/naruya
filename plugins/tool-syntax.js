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

import { readdirSync, statSync, readFileSync } from 'fs'
import { join } from 'path'
import { parse } from 'acorn'

let handler = async (m) => {
function scanJS(dir) {
let res = []
for (let file of readdirSync(dir)) {
let full = join(dir, file)
if (statSync(full).isDirectory()) res.push(...scanJS(full))
else if (file.endsWith('.js')) res.push(full)
}
return res
}
let files = scanJS('./plugins')
let hasil = []
for (let file of files) {
try {
let code = readFileSync(file, 'utf8')
parse(code, { ecmaVersion: 'latest', sourceType: 'module' })
} catch (e) {
let lines = readFileSync(file, 'utf8').split('\n')
let errorLine = lines[(e.loc?.line || 1) - 1]?.trim()
hasil.push([
`📄 *File: ${file.replace('./', '')}*`,
`🚫 *Error: ${e.name}*`,
`📌 *Baris: ${e.loc?.line ?? '-'}, Kolom: ${e.loc?.column ?? '-'}*`,
`💬 *Pesan: _${e.message}_*`,
errorLine ? `🔎 *Cuplikan:*\n\n\`\`\`${errorLine.slice(0, 100)}\`\`\`` : null
].filter(Boolean).join('\n'))
}
}
if (!hasil.length) return m.reply('🌸 *Semua plugin aman, tidak ditemukan syntax error.*')
m.reply(`*🌸 Ditemukan error syntax:*\n\n${hasil.join('\n\n')}`)
}

handler.help = ['syntaxcheck']
handler.tags = ['owner']
handler.command = /^(syntaxcheck|syntax)$/i
handler.owner = true

export default handler