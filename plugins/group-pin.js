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

let handler = async (m, { conn, command }) => {
if (command == 'pin') {
if (!m.quoted) return m.reply('🍩 *Balas dulu pesan yang mau dipin ya sayang~*')
await conn.chatModify({ pin: true }, m.chat)
m.reply('🧁 *Pesan berhasil dipin ya sayang~*')
} else if (command == 'unpin') {
await conn.chatModify({ pin: false }, m.chat)
m.reply('🍪 *Pin dihapus dari chat ini yaa~*')
}
}

handler.help = ['pin','unpin']
handler.tags = ['group']
handler.command = /^(pin|unpin)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler