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

let handler  = async (m, { conn }) => {
conn.reply(m.chat,`${pickRandom(iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['fun']
handler.command = /^(iqtest)$/i
handler.owner = false
handler.register = true

export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const iq = [
'*IQ Anda Sebesar : 1*',
'*IQ Anda Sebesar : 14*',
'*IQ Anda Sebesar : 23*',
'*IQ Anda Sebesar : 35*',
'*IQ Anda Sebesar : 41*',
'*IQ Anda Sebesar : 50*',
'*IQ Anda Sebesar : 67*',
'*IQ Anda Sebesar : 72*',
'*IQ Anda Sebesar : 86*',
'*IQ Anda Sebesar : 99*',
'*IQ Anda Sebesar : 150*',
'*IQ Anda Sebesar : 340*',
'*IQ Anda Sebesar : 423*',
'*IQ Anda Sebesar : 500*',
'*IQ Anda Sebesar : 676*',
'*IQ Anda Sebesar : 780*',
'*IQ Anda Sebesar : 812*',
'*IQ Anda Sebesar : 945*',
'*IQ Anda Sebesar : 1000*',
'*IQ Anda Sebesar : Tidak Terbatas!*',
'*IQ Anda Sebesar : 5000*',
'*IQ Anda Sebesar : 7500*',
'*IQ Anda Sebesar : 10000*',
]
