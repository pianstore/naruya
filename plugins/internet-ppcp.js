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
await global.loading(m, conn)
let url = await global.API('btz', '/api/wallpaper/couplepp', {}, 'apikey')
let res = await (await fetch(url)).json()
let cowo = await (await fetch(res.result.male)).buffer()
await conn.sendFile(m.chat, cowo, '', '🍫 *Nih pp buat cowoknya~*', m)
let cewe = await (await fetch(res.result.female)).buffer()
await conn.sendFile(m.chat, cewe, '', '🍓 *Nih pp buat ceweknya~*', m)
await global.loading(m, conn, true)
}

handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true
handler.register = true

export default handler