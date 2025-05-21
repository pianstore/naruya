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

import pkg from "baileys"
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg

let handler = async (m, { conn, participants }) => {
const qlocJpm = {
key: {
participant: '12066409886@s.whatsapp.net',
...(m.chat ? { remoteJid: `status@broadcast` } : {})
},
message: {
locationMessage: {
name: global.config.author,
jpegThumbnail: null
}
}
}
const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.config.logo }}, { upload: conn.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*𝙉𝙖𝙧𝙪𝙮𝙖 𝙄𝙯𝙪𝙢𝙞 • 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡*"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
━━━━━━━━━━━━━━━━━━━━━━
🚀 *PRICE LIST PANEL*
━━━━━━━━━━━━━━━━━━━━━━
🛒 *PILIHAN PANEL YANG TERSEDIA*
*➤ 1 GB RAM / 15% CPU – Rp 3.000*
*➤ 2 GB RAM / 25% CPU – Rp 4.000*
*➤ 3 GB RAM / 35% CPU – Rp 5.000*
*➤ 4 GB RAM / 50% CPU – Rp 6.000*
*➤ 5 GB RAM / 60% CPU – Rp 7.000*
*➤ 6 GB RAM / 70% CPU – Rp 8.000*
*➤ 7 GB RAM / 80% CPU – Rp 9.000*
*➤ 8 GB RAM / 90% CPU – Rp 10.000*
*➤ 9 GB RAM / 100% CPU – Rp 11.000*
*➤ 10 GB RAM / 110% CPU – Rp 12.000*
*➤ Unlimited RAM / CPU – Rp 13.000*
━━━━━━━━━━━━━━━━━━━━━━
💎 *PREMIUM ACCESS*
*➤ Premium Features and Priority Access – Rp 20.000 / Month*
*➤ Access all features of the VIP API implementation bot.*
*➤ Reseller and Create panel pterodatly.*
*➤ Customer service.*
`,
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"𝘾𝙡𝙞𝙘𝙠 𝙏𝙤 𝘽𝙪𝙮\",\"url\":\"https://linkbio.co/naruyaizumi\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
},
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
━━━━━━━━━━━━━━━━━━━━━━
⚠️ *SUPERIORITY AND SPECIFICATION*
━━━━━━━━━━━━━━━━━━━━━━
🚨 *SECURITY & SERVER DETAILS:*
*➤ Protected with: Cloudflare, Google reCAPTCHA, Fail2Ban, and Rootkit Hunter.*
*➤ Real-time attack monitoring and automated mitigation.*
*➤ Fail2Ban active on SSH and web services to prevent brute-force attacks.*
*➤ Regular security audits and updates to prevent vulnerabilities.*
*➤ Warranty: 10 Days (1x Replace).*
*➤ Active period up to 30 days without any deductions.*
`,
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"𝘾𝙖𝙩𝙖𝙡𝙤𝙜\",\"url\":\"https://wa.me/p/7935903263176374/6283143663697\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
},
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `
━━━━━━━━━━━━━━━━━━━━━━
📌 *GRUP & CHANNEL OFFICIAL*
━━━━━━━━━━━━━━━━━━━━━━
📢 *Grup Publik: https://chat.whatsapp.com/DEHPtAWYxyJ0uX4jz8PEcU*
🌟 *Channel Informasi: https://whatsapp.com/channel/0029Vat4WXOAzNbrY6iwA71c*
━━━━━━━━━━━━━━━━━━━━━━
👑 *OWNER CONTACT*
━━━━━━━━━━━━━━━━━━━━━━
📬 *Telegram: https://t.me/naruyaizumi*
📷 *Instagram: https://www.instagram.com/naruyaizumi_*
🌐 *Website: https://linkbio.co/naruyaizumi*
💎 *Testimoni: https://tinyurl.com/2y7ra9ly*
━━━━━━━━━━━━━━━━━━━
🍃 *Pastikan kamu sudah join grup & channel untuk update terbaru!*
`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"𝙄𝙕𝙐𝙈𝙄\",\"url\":\"${global.config.owner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await conn.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}
let mention = participants.map(v => v.id)
let groups = Object.entries(await conn.groupFetchAllParticipating()).map(([jid]) => jid)
for (let jid of groups) await slideButton(jid, mention)
}

handler.help = ['jpmhidetag']
handler.tags = ['owner']
handler.command = /^(jpmhidetag|jpmht)$/i
handler.owner = true

export default handler