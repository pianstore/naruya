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

let bpink = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt')
.then(res => res.text())
.then(txt => bpink = txt.split('\n'))
let handler = async (m, { conn }) => {
let img = bpink[Math.floor(Math.random() * bpink.length)]
if (!img) throw img
await conn.sendFile(m.chat, img, '', '🎀 *Nih Kak Bˡᵃᶜᵏᵖⁱⁿᵏ Nya~* 🌸', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}

handler.help = ['blackpink']
handler.tags = ['random']
handler.command = /^(blackpink)$/i
handler.limit = true
handler.register = true

export default handler