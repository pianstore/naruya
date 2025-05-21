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

import { readdirSync, readFileSync } from 'fs'
import path from 'path'

let handler = async (m, { text, usedPrefix, command }) => {
if (!text) return m.reply(`✍️ *Contoh penggunaan:* ${usedPrefix + command} tt`)
let pluginsDir = './plugins'
let excludeFiles = ['owner-exec.js', 'owner-exec2.js', 'owner-exec3.js']
let files = getAllJSFiles(pluginsDir).filter(file => !excludeFiles.includes(path.basename(file)))
let hasil = []
for (let file of files) {
let content = readFileSync(file, 'utf-8')
let match = content.match(/handler\.command\s*=\s*\/(.+?)\/[gimsuy]*/)
if (match) {
let raw = match[1]
let cmds = raw
.replace(/\$$/, '')
.split('|')
.map(v => v.replace(/[.*+?^${}()|[\]\\]/g, '').trim())
.filter(v => v)
if (cmds.some(cmd => cmd.toLowerCase() === text.toLowerCase())) {
let hasAPI = content.includes('global.API') ? '✨ Ada' : '—'
let hasFunc = content.includes('function ') || content.includes('=>') ? '✨ Ada' : '—'
hasil.push(`🧸 *File: ${file.replace('./', '')}*
🌸 *Command: ${cmds.join(', ')}*
🍡 *Jumlah: ${cmds.length}*
🔮 *API: ${hasAPI}*
🧠 *Function: ${hasFunc}*`)
}
}
}

if (!hasil.length) return m.reply(`💔 *Nggak nemu fitur dengan command: "${text}"*`)
m.reply(`🔍 *Fitur dengan command: "${text}" ditemukan di:*\n\n${hasil.join('\n\n')}`)
}

handler.help = ['carifitur']
handler.tags = ['tools']
handler.command = /^(carifitur|cf)$/i
handler.owner = true

export default handler

function getAllJSFiles(dir) {
let res = []
for (let file of readdirSync(dir, { withFileTypes: true })) {
let full = path.join(dir, file.name)
if (file.isDirectory()) res.push(...getAllJSFiles(full))
else if (file.name.endsWith('.js')) res.push(full)
}
return res
}