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

import { tmpdir } from 'os'
import { join } from 'path'
import fs from 'fs'
let handler = async (m, { args, text, usedPrefix, command }) => {
let info = `*${usedPrefix + command} old name|new name*

*• example:*
*➞ ${usedPrefix + command} inv | rpg-inv*

*• Note:*
*Harap tidak memakai kata .js diakhir kalimat*
*harap tidak menggunakan spasi diantar nama file, seperti "rpg- inv"*`
if (!args[0]) return m.reply(info)
if (!args[1] == "|") return m.reply(`*• example:
➞ ${usedPrefix + command} inv | rpg-inv*`)
if (!args[2]) return m.reply(`*• example:
➞ ${usedPrefix + command} inv | rpg-inv*`)

let from = args[0]
let to = args[2]

let ar = Object.keys(plugins)
let ar1 = ar.map(v => v.replace('.js', ''))
if (!ar1.includes(args[0])) return m.reply(`*🗃️ NOT FOUND!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
await fs.renameSync(`./plugins/${from}.js`, `./plugins/${to}.js`)
conn.reply(m.chat, `*Succes changes "plugins/${from}.js" to "plugins/${to}.js"*`, m)

}
handler.help = ['renamefile']
handler.tags = ['owner']
handler.command = /^(r(ename(file)?|f))$/i
handler.mods = true
export default handler