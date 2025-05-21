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
global.db.data.bots.ultah[m.chat] = global.db.data.bots.ultah[m.chat] || {}
let ultah = global.db.data.bots.ultah[m.chat]
let user = global.db.data.users
let data = Object.keys(ultah)
let caption = `
*List Ultah Yang Ada Di ${await conn.getName(m.chat)}*
${data.map((v, i) => {
let { tanggal, bulan, tahun } = ultah[v]
let info = calculateBirthdayInfo(tanggal, bulan, tahun)
return `
*${i + 1}. ${capitalize(user[v].registered ? user[v].name : conn.getName(v))}*
*Tanggal Lahir : ${tanggal}-${bulan}-${tahun}*
*Umur : ${info.age}*
*${capitalize(user[v].registered ? user[v].name : conn.getName(v))} akan berulang tahun dalam ${info.daysUntilBirthday} hari lagi!*
`
}).join("\n")}
`.trim()
m.reply(caption)
}
handler.help = ["listultah"]
handler.tags = ["fun"]
handler.command = /^(listulta(h)?)$/i
handler.register = true 
export default handler

function calculateBirthdayInfo(birthDate, birthMonth, birthYear) {
const today = new Date()
const birthDay = new Date(birthYear, birthMonth - 1, birthDate)
let age = today.getFullYear() - birthYear
const thisYearBirthDay = new Date(today.getFullYear(), birthMonth - 1, birthDate)
if (today < thisYearBirthDay) {
age--
}
const nextBirthDay = new Date(today.getFullYear(), birthMonth - 1, birthDate)
if (today > thisYearBirthDay) {
nextBirthDay.setFullYear(today.getFullYear() + 1)
}
const daysUntilBirthday = Math.round((nextBirthDay - today) / (1000 * 3600 * 24))
return {
daysUntilBirthday,
age
}
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}