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

import baileys from "baileys"

let handler = async (m, { conn, args }) => {
async function fetchParticipants(...jids) {
let results = []
for (const jid of jids) {
let { participants } = await conn.groupMetadata(jid)
participants = participants.map(({ id }) => id)
results = results.concat(participants)
}
return results
}
async function mentionStatus(jids, content) {
const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
upload: conn.waUploadToServer
})
let statusJidList = []
for (const _jid of jids) {
if (_jid.endsWith("@g.us")) {
for (const jid of await fetchParticipants(_jid)) {
statusJidList.push(jid)
}
} else {
statusJidList.push(_jid)
}
}
statusJidList = [...new Set(statusJidList)]
await conn.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id,
statusJidList,
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: jids.map((jid) => ({
tag: "to",
attrs: { jid },
content: undefined
}))
}
]
}
]
})
for (const jid of jids) {
let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage"
await conn.relayMessage(jid, {
[type]: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
}, {
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "true" },
content: undefined
}
]
})
}
return msg
}
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let content = {}
if (mime) {
let media = await q.download()
if (/image/.test(mime)) {
content.image = media
} else if (/video/.test(mime)) {
content.video = media
} else if (/audio/.test(mime)) {
content.audio = media
} else {
return m.reply("Jenis file tidak didukung!")
}
if (q.text && q !== m) content.caption = q.text
} else if (args[0]) {
let url = args[0]
let type = args[1] || 'text'
if (type === 'image') {
content.image = { url }
} else if (type === 'video') {
content.video = { url }
} else if (type === 'audio') {
content.audio = { url }
} else {
content.text = args.slice(1).join(" ") || url
}
} else {
return m.reply("Reply media atau masukkan URL dengan format:\n.status <url> <image/video/audio/text>")
}
mentionStatus([m.chat], content).catch(console.error)
}

handler.help = ['tagsw']
handler.tags = ['owner']
handler.command = /^(tagsw)$/i
handler.owner = true

export default handler