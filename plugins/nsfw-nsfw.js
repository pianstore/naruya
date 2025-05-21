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
let categories = ['ahegao', 'ass', 'blowjob', 'cuckold', 'bdsm', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'jahy', 'masturbation', 'panties', 'pussy', 'orgy', 'tentacles', 'thighs', 'uniform', 'incest', 'yuri']
let type = categories[Math.floor(Math.random() * categories.length)]
let url = `https://raw.githubusercontent.com/Yunxvoid/GOJO-BOT/682aff3f1cedbf9e60332940a9993dbeb282af5b/Shikimori/imports/hmfull/src/images/${type}.json`
try {
global.db.data.settings[conn.user.jid].loading ? await m.reply(global.config.loading) : false
let res = await fetch(url)
let data = await res.json()
let img = data[Math.floor(Math.random() * data.length)]
await conn.sendFile(m.chat, img, 'nsfw.jpg', `🍑 *Random NSFW nya kak*`, m)
} catch (e) {
m.reply('❌ *Gagal ambil gambar, coba lagi nanti ya sayang~*')
}
}

handler.help = ['nsfw']
handler.tags = ['nsfw']
handler.command = /^(nsfw)$/i
handler.nsfw = true
handler.premium = true
handler.register = true
handler.age = 18

export default handler
