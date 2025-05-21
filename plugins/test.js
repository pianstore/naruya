import pkg from "baileys"
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg


let handler = async (m, { conn }) => {
let flow = {
name: "single_select",
paramsJson: JSON.stringify({
title: "Pilih Salah Satu",
sections: [
{
title: "Pilihan Section",
highlight_label: "Native Flow",
rows: [
{ header: "Header A", title: "Pilihan A", description: "Deskripsi A", id: "pilih_1" },
{ header: "Header B", title: "Pilihan B", description: "Deskripsi B", id: "pilih_2" }
]
}
]
})
}

let buttonFlow = {
text: "Hi",
footer: "Crystalia",
buttons: [
{ buttonId: 'test', buttonText: { displayText: 'Tes Biasa' }, type: 1 },
{ buttonId: 'tes2', buttonText: { displayText: 'Tes Lagi' }, type: 1 },
{ buttonId: 'template', buttonText: { displayText: 'Tombol Flow' }, nativeFlowInfo: flow, type: 2 }
],
headerType: 1
}
await conn.sendMessage(m.chat, buttonFlow, { quoted: m })

let buttonBiasa = {
text: "Hi",
footer: "Crystalia",
buttons: [
{ buttonId: 'ping', buttonText: { displayText: 'Ping' }, type: 1 },
{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 },
{ buttonId: 'owner', buttonText: { displayText: 'Owner' }, type: 1 }
],
headerType: 1
}
await conn.sendMessage(m.chat, buttonBiasa, { quoted: m })

let button = [
{ name: "single_select", buttonParamsJson: `{\"title\":\"Selection\",\"sections\":[{\"title\":\"Here Is title\",\"highlight_label\":\"meta native flow\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}` },
{ name: "quick_reply", buttonParamsJson: `{\"display_text\":\"quick_reply\",\"id\":\"here is id\"}` },
{ name: "cta_url", buttonParamsJson: `{\"display_text\":\"url\",\"url\":\"https://www.meta.com\",\"merchant_url\":\"https://www.meta.com\"}` },
{ name: "cta_call", buttonParamsJson: `{\"display_text\":\"call\",\"id\":\"message\"}` },
{ name: "cta_copy", buttonParamsJson: `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}` },
{ name: "cta_reminder", buttonParamsJson: `{\"display_text\":\"cta_reminder\",\"id\":\"message\"}` },
{ name: "cta_cancel_reminder", buttonParamsJson: `{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}` },
{ name: "address_message", buttonParamsJson: `{\"display_text\":\"address_message\",\"id\":\"message\"}` },
{ name: "send_location", buttonParamsJson: "" }
]

let msg = await generateWAMessageFromContent(m.chat, {
interactiveMessage: proto.Message.InteractiveMessage.create({
body: { text: "Hi" },
footer: { text: "WhatsApp API" },
header: { title: "CTA", hasMediaAttachment: false },
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button
})
})
}, { quoted: m })

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}

handler.help = ['testfullflow']
handler.tags = ['test']
handler.command = /^(beton)$/i
handler.register = true

export default handler