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

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) return m.reply(`🍩 *Masukan Nama Character!*\n\n🍰 *Contoh: ${usedPrefix + command} Hu Tao*`)
await global.loading(m, conn)
let url = API("https://genshin-db-api.vercel.app", "/api/v5/characters", { query: text }, false)
let res = await fetch(url)
let data = await res.json()

let txt = `
🍓 *❃ Name: ${data.name}*
🍡 *❃ Title: ${data.title}*

🍬 *❃ Desc:* _${data.description}_

🍭 *❃ Element: ${data.elementText}*
🍫 *❃ Weapon Type: ${data.weaponText}*
🍪 *❃ Substat: ${data.substatText}*
🧁 *❃ Gender: ${data.gender}*
🍮 *❃ Affiliation: ${data.affiliation}*
🍰 *❃ Birthday: ${data.birthday}*
🍨 *❃ Constellation: ${data.constellation}*

🍧 *❃ CV:*
🍬 *• English ~ ${data.cv.english}*
🍬 *• Chinese ~ ${data.cv.chinese}*
🍬 *• Japanese ~ ${data.cv.japanese}*
🍬 *• Korean ~ ${data.cv.korean}*
`.trim()
conn.sendFile(m.chat, data.images.cover1, null, txt, m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['charagenshin']
handler.tags = ['genshin']
handler.command = /^(chara(gi|genshin)|genshin(chara|character))$/i
handler.limit = true
handler.register = true

export default handler