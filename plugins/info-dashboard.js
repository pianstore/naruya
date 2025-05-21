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
let stats = Object.entries(global.db.data.stats).map(([key, val]) => {
let name = Array.isArray(global.plugins[key]?.help) ? global.plugins[key]?.help?.join(' & '): global.plugins[key]?.help || key
if (/exec/.test(name)) return
return {
name,
...val
}
})
stats = stats.sort((a, b) => b.last - a.last)
let txt = stats.slice(0, 10).map(({
name, total, last
}, idx) => {
if (name.includes('-') && name.endsWith('.js')) name = name.split('-')[1].replace('.js', '')
return `(${idx + 1})\n*Command : ${name}*\n*Digunakan : ${total}x*\n*Terakhir Digunakan : ${getTime(last)}*`
}).join`\n\n`
m.reply(`*Dashboard ${conn.user.name}*\n\n${txt}`)
}
handler.help = ['dashboard']
handler.tags = ['info']
handler.command = /^dashboard$/i
handler.owner = true

export default handler

export function parseMs(ms) {
if (typeof ms !== 'number') throw 'Parameter must be filled with number'
return {
days: Math.trunc(ms / 86400000),
hours: Math.trunc(ms / 3600000) % 24,
minutes: Math.trunc(ms / 60000) % 60,
seconds: Math.trunc(ms / 1000) % 60,
milliseconds: Math.trunc(ms) % 1000,
microseconds: Math.trunc(ms * 1000) % 1000,
nanoseconds: Math.trunc(ms * 1e6) % 1000
}
}

export function getTime(ms) {
let now = parseMs(+new Date() - ms)
if (now.days) return `${now.days} days ago`
else if (now.hours) return `${now.hours} hours ago`
else if (now.minutes) return `${now.minutes} minutes ago`
else return `a few seconds ago`
}