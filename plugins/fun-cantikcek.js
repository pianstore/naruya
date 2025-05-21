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
conn.reply(m.chat,`${pickRandom(cantik)}`, m)
}
handler.help = ['cantikcek']
handler.tags = ['fun']
handler.command = /^(cantikcek)$/i
handler.register = true
export default handler 

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const cantik = [
'*Cantik Level : 4%*\n\n*INI MUKA ATAU SAMPAH KAK?!*',
'*Cantik Level : 7%*\n\n*Njir kayak monyet persis kalau dilihat lihat!*',
'*Cantik Level : 12%*\n\n*Lama lama liat muka kaka aku bisa muntah!*',
'*Cantik Level : 22%*\n\n*Mungkin karna kaka sering nonton bokep* 😂',
'*Cantik Level : 27%*\n\n*Keknya bakal susah dapet jodoh kak...berdoa aja*',
'*Cantik Level : 35%*\n\n*Yang sabar ya sayang*',
'*Cantik Level : 41%*\n\n*Semoga diberkati mendapat jodoh*',
'*Cantik Level : 48%*\n\n*Dijamin cowok susah deketin kakak*',
'*Cantik Level : 56%*\n\n*Kaka Setengah Cantik :v*',
'*Cantik Level : 64%*\n\n*Cukuplah*',
'*Cantik Level : 71%*\n\n*Lumayan cantik juga kaka ini :v*',
'*Cantik Level : 1%*\n\n*WKWKWK BURIQQQ KEK EPEP 8BIT!!!*',
'*Cantik Level : 1%*\n\n*WKWKWK BURIQQQ KEK EPEP 8BIT!!!*',
'*Cantik Level : 1%*\n\n*WKWKWK BURIQQQ KEK EPEP 8BIT!!!*',
'*Cantik Level : 1%*\n\n*WKWKWK BURIQQQ KEK EPEP 8BIT!!!*',
'*Cantik Level : 77%*\n\n*Gak akan Salah Lagi dah cantik*',
'*Cantik Level : 83%*\n\n*Dijamin cowok gak akan kecewa kiw kiw*',
'*Cantik Level : 89%*\n\n*Cowok2 pasti auto salfok kalau ngeliat kaka!*',
'*Cantik Level : 94%*\n\n*AARRGGHHH!!!*',
'*Cantik Level : 100%*\n\n*KAKA EMANG CEWEK TERCANTIK JADI CEWEK OWNERKU AJA!!!*',
]
