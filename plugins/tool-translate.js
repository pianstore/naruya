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

let handler = async (m, { conn, usedPrefix, command, args }) => {
try {
let err = `
🍓 *Contoh penggunaan:*
*${usedPrefix + command} <kode_bahasa> <teks>*

📝 *Contoh:*
*${usedPrefix + command} en Aku lapar*

🌐 *Daftar kode bahasa: https://cloud.google.com/translate/docs/languages*
`.trim()
if (!args[0]) return m.reply(err)
await global.loading(m, conn)
let lang = args[0]
let txt = args.length > 1 ? args.slice(1).join(' ') : ''
let msg = m.quoted ? m.quoted.text : txt
if (!msg) return m.reply(err)
let api = global.API('btz', '/api/tools/translate', {
text: msg,
lang
}, 'apikey')
let res = await fetch(api)
let json = await res.json()
if (!json.status || !json.result) throw '❌ Gagal menerjemahkan teks.'
await m.reply(`🍡 *Hasil Terjemahan:*\n*${json.result}*`)
} catch (e) {
console.error(e)
m.reply('🍎 *Ups! Terjadi kesalahan saat menerjemahkan~*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['translate <lang> <teks>']
handler.tags = ['tools']
handler.command = /^(tr|translate)$/i
handler.limit = true
handler.register = true

export default handler