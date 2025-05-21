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

let handler = async (m, { conn, usedPrefix }) => {
await conn.fetchBlocklist().then(async data => {
let txt = `🍩 *「  Daftar Nomor yang Diblokir 」*\n\n🍰 *Total: ${data.length}*\n\n*┌─🍡*\n`
for (let i of data) {
txt += `*├ 🍬 @${i.split("@")[0]}*\n`
}
txt += "*└────🍓*"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err)
return m.reply('🍪 *Tidak ada yang diblokir~*')
})
}

handler.help = ['listblock']
handler.tags = ['info']
handler.command = /^(listb(lo(ck|k)?)?)$/i
handler.owner = true

export default handler