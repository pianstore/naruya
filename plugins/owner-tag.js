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

import pkg from 'baileys'

const { proto, generateWAMessageFromContent } = pkg

let handler = async (m, { conn }) => {
const message = `
🌷 *Eh, nyari Izumi ya?* 🌷

🌟 *Jangan ragu buat chat dia, ya!*
*Aku yakin Izumi bakal senang banget bisa bantu kamu Yuk, kirim pesan sekarang~* 🌼
`
let interactiveMessage = {
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ text: message }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: "© Naruya Izumi 2024" }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{
"display_text": "CHAT",
"url": "https://api.whatsapp.com/send?phone=6283143663697",
"merchant_url": "https://www.google.com"
}`
}
]
}),
contextInfo: {
mentionedJid: ['6283143663697@s.whatsapp.net']
}
})
}

await conn.relayMessage(m.chat, { viewOnceMessage: { message: interactiveMessage } }, {})
}

handler.customPrefix = /^@6283143663697/i
handler.command = new RegExp()

export default handler