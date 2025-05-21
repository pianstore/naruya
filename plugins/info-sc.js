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

let handler = async (m, { conn }) => {
const note = `
*╭─╼⃝𖥔꙳ 𝐂𝐑𝐘𝐒𝐓𝐀𝐋𝐈𝐀 ꒰⸝⸝꒱* ☁️˚｡⋆*
*┊⋆ Price: 70.000 IDR*
*┊⋆ Version: 3.0 (Beta)*
*╰─▸ WhatsApp bot script ₓ˚. ୭ ˚○◦˚.*

*꒰⚘꒱ Lifetime Free Updates*
*꒰⚘꒱ No Database, Key, or Validation*
*꒰⚘꒱ ES Module (Modern JavaScript)*
*꒰⚘꒱ Recommended Node.js v20+*
*꒰⚘꒱ Ultra Lightweight & Clean Modules*

*❍⌇─➭ Additional Information ﹀﹀ ︵↷*
*⋆˙⟡ Script Name: Crystalia*
*⋆˙⟡ Framework: Whiskeysockets Baileys*
*⋆˙⟡ License: MIT Open License*
*⋆｡ﾟ☁︎｡─────────────｡☁︎ﾟ｡⋆*
`
let ownerData = global.config.owner[0]
let ownerNumber = ownerData[0].replace(/\D/g, '')
let name = global.config.author
let desc = '⋆｡ﾟ☁️ Hai kak! Hubungi owner Izumi langsung di bawah ini ya⋆'
let vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;;
FN:${name}
item1.TEL;waid=${ownerNumber}:+${ownerNumber}
item1.X-ABLabel:Ponsel
X-WA-BIZ-DESCRIPTION:${desc}
X-WA-BIZ-NAME:${name}
END:VCARD`
let qkontak = {
key: {
fromMe: false,
participant: '12066409886@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
contactMessage: {
displayName: name,
vcard
}
}
}
await conn.sendMessage(m.chat, {
contacts: {
displayName: name,
contacts: [{ vcard }]
}
}, { quoted: qkontak })
await conn.relayMessage(m.chat, {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 70000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: note
}
}
}
}, {})
}

handler.help = ['script', 'sc']
handler.tags = ['info']
handler.command = /^(script|sc)$/i

export default handler