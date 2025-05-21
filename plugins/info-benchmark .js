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

import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)

let handler = async (m) => {
let o
await global.loading(m, conn)
try {
o = await exec('g++ gcc.cpp -o nench && ./nench')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout?.trim()) m.reply(`📥 *Output:*\n\`\`\`${stdout.trim()}\`\`\``)
if (stderr?.trim()) m.reply(`❗ *Error Output:*\n\`\`\`${stderr.trim()}\`\`\``)
}
await global.loading(m, conn, true)
}

handler.help = ['benchmark']
handler.tags = ['info']
handler.command = /^(benchmark|bench)$/i
handler.owner = true

export default handler