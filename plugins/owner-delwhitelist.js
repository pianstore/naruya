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

let handler = async (m, { args }) => {
if (!args[0] && !m.mentionedJid?.length) return m.reply('🍬 *Masukkan nomor atau tag user yang ingin dihapus dari whitelist.*\n🍡 *Contoh: .delwl 6281234567890 atau .delwl @user*')
let nomor = m.mentionedJid?.length
? m.mentionedJid[0].replace(/\D/g, '')
: args[0].replace(/\D/g, '')
let token = global.config.gh
let repo = 'naruyaizumi/naruyaizumi'
let path = 'api/data/pairing.json'
let api = `https://api.github.com/repos/${repo}/contents/${path}`
let res = await fetch(api, {
headers: { Authorization: `token ${token}` }
})
if (!res.ok) throw '🍫 *Gagal mengambil file pairing.json!*'
let json = await res.json()
let content = JSON.parse(Buffer.from(json.content, 'base64').toString())
let sha = json.sha
if (!Array.isArray(content.whitelist)) return m.reply('🧁 *Format whitelist tidak valid.*')
let index = content.whitelist.findIndex(n => typeof n === 'object' && n.nomor === nomor)
if (index === -1) return m.reply('🍩 *Nomor tersebut tidak ada di whitelist.*')
content.whitelist.splice(index, 1)
let updateRes = await fetch(api, {
method: 'PUT',
headers: {
Authorization: `token ${token}`,
'Content-Type': 'application/json'
},
body: JSON.stringify({
message: `remove ${nomor} from pairing whitelist`,
content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
sha
})
})
if (!updateRes.ok) throw '🧁 *Gagal menghapus nomor dari whitelist!*'
m.reply(`🍓 *Nomor ${nomor} berhasil dihapus dari whitelist.*`)
}

handler.help = ['delwl']
handler.tags = ['owner']
handler.command = /^(delwl|delwhitelist)$/i
handler.owner = true

export default handler