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

import { Client } from 'ssh2'

const handler = async (m, { conn }) => {
if (global.conn.user.jid !== conn.user.jid) return
if (!m.text.startsWith('# ') || !m.text.slice(2).trim()) return m.reply('⚠️ *Masukkan perintah root yang ingin dijalankan!*')

const ssh = new Client()
ssh.on('ready', () => {
ssh.exec(m.text.slice(2).trim(), (err, stream) => {
if (err) return m.reply(`❌ *Kesalahan Eksekusi: ${err.message}*`)
let output = ''
stream.on('data', (data) => output += data.toString())
stream.stderr.on('data', (data) => output += data.toString())
stream.on('close', () => {
ssh.end()
if (!output.trim()) return
m.reply(`\`\`\`${output.trim()}\`\`\``)
})
})
})
ssh.on('error', (err) => m.reply(`❌ *Gagal Terhubung ke VPS: ${err.message}*`))
ssh.connect({
host: global.config.VPS.host,
port: global.config.VPS.port,
username: global.config.VPS.username,
password: global.config.VPS.password
})
}

handler.help = ['#']
handler.tags = ['owner']
handler.customPrefix = /^# /
handler.command = new RegExp()
handler.mods = true

export default handler