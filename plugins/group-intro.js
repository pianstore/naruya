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
let teks = `
*༺♡⃛・‧₊˚ 𝐼𝑁𝑇𝑅𝑂 𝑀𝐸𝑀𝐵𝐸𝑅 𝐵𝐴𝑅𝑈 ˚₊‧・♡⃛༻*

*╭─❍ 𝙁𝙊𝙍𝙈𝘼𝙏 𝙄𝙉𝙏𝙍𝙊 ❍─╮*
*│ ✦ 𝑁𝑎𝑚𝑎:*
*│ ✦ 𝑈𝑚𝑢𝑟:*
*│ ✦ 𝐾𝑒𝑙𝑎𝑠:*
*│ ✦ 𝐺𝑒𝑛𝑑𝑒𝑟:*
*│ ✦ 𝐴𝑠𝑘𝑜𝑡:*
*│ ✦ 𝐻𝑜𝑏𝑖:*
*│ ✦ 𝑆𝑡𝑎𝑡𝑢𝑠:*
*╰────────────────╯*

*˚₊‧୨୧ 𝐶𝑎𝑡𝑎𝑡𝑎𝑛 ୨୧‧₊˚*
🌸 *Jangan lupa makan ya~*
✨ *Patuhi aturan grup~*
🧁 *Daftar ke database bot~*
💌 *Jangan spam, baca deskripsi dulu ya!*
`.trim()
let msg = generateWAMessageFromContent(m.chat, {
interactiveMessage: proto.Message.InteractiveMessage.create({
body: { text: teks },
footer: { text: "꒰ © 𝟐𝟎𝟐𝟒 𝙉𝙖𝙧𝙪𝙮𝙖 𝙄𝙯𝙪𝙢𝙞 ꒱" },
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 Salin Format Intro",
copy_code: teks.replace(/\*/g, '').replace(/_/g, '')
})
}
]
})
})
}, { quoted: m })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

handler.help = ['intro']
handler.tags = ['group']
handler.command = /^(intro)$/i
handler.group = true
handler.register = true

export default handler