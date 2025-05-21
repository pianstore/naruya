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

let handler = async (m, { text, usedPrefix, command }) => {
if (!text) return m.reply(`Masukan query\n\nContoh:\n${usedPrefix + command} wibu`)
let data = await(await fetch(API('https://api.lolhuman.xyz', '/api/kbbi', { query: text }, 'apikey'))).json()
let kelas = data.result[0].makna[0].kelas.map(v => {
return `Kode: ${v.kode}\nNama: ${v.nama}\nDesc: ${v.deskripsi}`
}).join('\n\n')
let makna = data.result[0].makna.map(v => {
return v.submakna
})
let teks = `
*• Submakna:*
${makna}

*• Kelas:*
${kelas}

*• Note:*
p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
n = Nomina: kata benda
`.trim()
m.reply(teks)
}
handler.help = ['kbbi']
handler.tags = ['internet']
handler.command = /^kbbi$/i
handler.register = true

export default handler