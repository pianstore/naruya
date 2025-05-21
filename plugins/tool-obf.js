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

import JavaScriptObfuscator from 'javascript-obfuscator'
import fs from 'fs/promises'
import path from 'path'

let handler = async (m, { conn }) => {
try {
let q = m.quoted ? m.quoted : m
if (!q || !q.mimetype || !q.mimetype.includes('javascript'))
return m.reply('⚠️ *Balas file JavaScript yang ingin di-obfuscate!*')
let media = await q.download()
if (!media) return m.reply('⚠️ *Gagal mengunduh file.*')
let fileName = q.fileName || 'script.js'
let filePath = path.resolve(`./tmp/${fileName}`)
await fs.writeFile(filePath, media)
let content = await fs.readFile(filePath, 'utf-8')
let obfuscated = JavaScriptObfuscator.obfuscate(content, {
compact: true,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
deadCodeInjection: true,
deadCodeInjectionThreshold: 1,
debugProtection: true,
debugProtectionInterval: 4000,
disableConsoleOutput: true,
identifierNamesGenerator: 'hexadecimal',
numbersToExpressions: true,
selfDefending: true,
simplify: false,
stringArray: true,
stringArrayEncoding: ['rc4'],
stringArrayThreshold: 1,
splitStrings: true,
splitStringsChunkLength: 5,
stringArrayRotate: true,
stringArrayWrappersCount: 5,
stringArrayWrappersType: 'function',
stringArrayWrappersChainedCalls: true,
unicodeEscapeSequence: false
}).getObfuscatedCode()
await fs.writeFile(filePath, obfuscated, 'utf-8')
await conn.sendMessage(m.chat, {
document: await fs.readFile(filePath),
fileName,
mimetype: 'application/javascript',
caption: `*🧠 Obfuscate Sukses!*\n📂 *File: ${fileName}* 🔐`
}, { quoted: m })
await fs.unlink(filePath).catch(() => {})
} catch (e) {
console.error(e)
return m.reply(`❌ *Proses obfuscate gagal.*\n📄 *Kemungkinan: file tidak valid atau mengandung error syntax.*\n\n🪷 *Detail:* ${e.message}`)
}
}

handler.help = ['obfuscate']
handler.tags = ['tools']
handler.command = /^(obf(uscat(e)?)?)$/i
handler.premium = true

export default handler