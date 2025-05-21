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

let handler = async (m, { args, mentionedJid }) => {
if (!args[0] && !mentionedJid?.length) return m.reply('🍩 *Masukkan nomor atau tag user untuk ditambahkan ke whitelist.*\n🍰 *Contoh: .wl 6281234567890 atau .wl @user*')
let nomor = mentionedJid?.length
? mentionedJid[0].replace(/\D/g, '')
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
if (!Array.isArray(content.whitelist)) content.whitelist = []
let exists = content.whitelist.some(n => typeof n === 'object' && n.nomor === nomor)
if (exists) return m.reply('🍓 *Nomor tersebut sudah ada di whitelist.*')
content.whitelist.push({ nomor, status: 'active' })
let updateRes = await fetch(api, {
method: 'PUT',
headers: {
Authorization: `token ${token}`,
'Content-Type': 'application/json'
},
body: JSON.stringify({
message: `add ${nomor} to pairing whitelist`,
content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
sha
})
})
if (!updateRes.ok) throw '🧁 *Gagal menambahkan nomor ke whitelist!*'
m.reply(`🍡 *Nomor ${nomor} berhasil ditambahkan ke whitelist!*`)
}

handler.help = ['whitelist']
handler.tags = ['owner']
handler.command = /^(wl|whitelist)$/i
handler.owner = true

export default handler