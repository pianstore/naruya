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

import syntaxerror from 'syntax-error'
import { inspect } from 'util'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'

let q = {
key: {
remoteJid: 'status@broadcast',
participant: '12066409886@s.whatsapp.net'
},
message: {
documentMessage: {
title: '𝐄 𝐕 𝐀 𝐋'
}
}
}
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

let handler = async (m, _2) => {
let { conn, usedPrefix, noPrefix } = _2
let _text = noPrefix
let _syntax = ''
let _return
let old = m.exp * 1
try {
if (m.text.startsWith('=>')) {
_return = await eval(`(async () => { return ${_text} })()`)
} else {
_return = await eval(`(async () => { ${_text} })()`)
}
} catch (e) {
let err = syntaxerror(_text, 'Eval Function', {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: 'module'
})
if (err) _syntax = '```' + err + '```\n\n'
_return = e
} finally {
await conn.sendMessage(m.chat, {
text: _syntax + inspect(_return, { depth: null, maxArrayLength: null }),
}, { quoted: q })
m.exp = old
}
}

handler.help = ['>', '=>']
handler.tags = ['owner']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i
handler.mods = true

export default handler