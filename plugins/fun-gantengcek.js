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
conn.reply(m.chat, `${pickRandom(ganteng)}`, m)
}
handler.help = ['gantengcek']
handler.tags = ['fun']
handler.command = /^(gantengcek)$/i
handler.register = true

export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const ganteng = [
'📮 *Ganteng Level : 4%*\n\n*INI MUKA ATAU SAMPAH?!*',
'📮 *Ganteng Level : 7%*\n\n*Serius ya Bro,, Lu ampir mirip kayak Monyet!*',
'📮 *Ganteng Level : 12%*\n\n*Makin lama liat muka lo gw bisa muntah!*',
'📮 *Ganteng Level : 22%*\n\n*Mungkin karna lo sering nonton bokep* 😂',
'📮 *Ganteng Level : 27%*\n\n*Keknya bakal susah dapet jodoh lu,, berdoa aja*',
'📮 *Ganteng Level : 35%*\n\n*Yang sabar ya beb*',
'📮 *Ganteng Level : 41%*\n\n*Semoga diberkati mendapat jodoh*',
'📮 *Ganteng Level : 48%*\n\n*Dijamin cewek susah deketin lu*',
'📮 *Ganteng Level : 56%*\n\n*Lu Setengah Ganteng :v*',
'📮 *Ganteng Level : 64%*\n\n*Cukuplah*',
'📮 *Ganteng Level : 71%\n\n*Lumayan Ganteng juga lu ya*',
'📮 *Ganteng Level : 1%*\n\n*AWOAKAK BURIQQQ!!!*',
'📮 *Ganteng Level : 1%*\n\n*AWOAKAK BURIQQQ!!!*',
'📮 *Ganteng Level : 100%*\n\n*KAMU MEMANG COWOK TERGANTENG!!!*',
'📮 *Ganteng Level : 100%*\n\n*KAMU MEMANG COWOK TERGANTENG!!!*',
'📮 *Ganteng Level : 77%*\n\n*Gak akan Salah Lagi dah bre*',
'📮 *Ganteng Level : 83%*\n\n*Dijamin Cewek gak akan kecewa beb*',
'📮 *Ganteng Level : 89%*\n\n*Cewek2 pasti bakalan pingsan klo ngeliat lu!*',
'📮 *Ganteng Level : 94%*\n\n*AARRGGHHH!!!*',
'📮 *Ganteng Level : 100%*\n\n*KAMU MEMANG COWOK TERGANTENG!!!*',
]