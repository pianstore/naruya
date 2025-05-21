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

import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
if (!process.send) return m.reply('*Dont: node main.js*\n*Do: node index.js*')
if (global.conn.user.jid == conn.user.jid) {
await m.reply('*R E S T A R T . . .*')
process.send('reset')
} else m.reply('*_eeeeeiiittsssss..._*')
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(res(tart)?)$/i
handler.mods = true
export default handler