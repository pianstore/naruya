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

let handler = async (m, { conn, text, usedPrefix, command }) => {
let [ ip, port ] = text.split(' ')
if (!ip || !port) return m.reply(`Masukan Ip Server Dan Port!\n\nContoh :\n${usedPrefix + command} mc.caldronsmp.me 19132`)
if (port == 19132) {
let response = await fetch(`https://api.mcsrvstat.us/bedrock/2/${ip}`)
let data = await response.json()
let caption = `
*Server ${data.motd.clean}*

*Ip : ${data.ip}*
*Port : ${data.port}*
*Players : ${data.players.online} / ${data.players.max}*
*Version : ${data.version}*
*Online : ${data.online ? '✅' : '❎'}*
*Map : ${data.map}*
*Game Mode : ${data.gamemode}*
*ServerId : ${data.serverid}*
`.trim()
m.reply(caption)
} else {
let response = await fetch(`https://api.mcsrvstat.us/2/${ip}`)
let data = await response.json()
let caption = `
*Server ${data.motd.clean}*

*Ip : ${data.ip}*
*Port : ${data.port}*
*Players : ${data.players.online} / ${data.players.max}*
*Version : ${data.version}*
*Online : ${data.online ? '✅' : '❎'}*
*Map : ${data.map}*
*Game Mode : ${data.gamemode}*
*ServerId : ${data.serverid}*
`.trim()
m.reply(caption)
}
}
handler.help = ['mcserver']
handler.tags = ['internet']
handler.command = /^((mc|minecraft)server)$/i
handler.register = true

export default handler