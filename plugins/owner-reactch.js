let handler = async (m, { text, conn, isOwner }) => {
if (!text) return m.reply("🎀 *Contoh: .reactch https://whatsapp.com/channel/xxx/123* ❤️\n*.reactch https://whatsapp.com/channel/xxx/123 ❤️|5*")
const huruf = {
a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
'0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
'5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
}
const [mainText, offsetStr] = text.split('|')
const argsa = mainText.trim().split(" ")
const link = argsa[0]
if (!link.includes("https://whatsapp.com/channel/")) return m.reply("⚠️ *Link tidak valid!*\n*Contoh: .reactch https://whatsapp.com/channel/xxx/123 ❤️|3*")
const channelId = link.split('/')[4]
const rawMessageId = parseInt(link.split('/')[5])
if (!channelId || isNaN(rawMessageId)) return m.reply("❌ Link tidak lengkap sayang~")
const offset = parseInt(offsetStr?.trim()) || 1
const teksNormal = argsa.slice(1).join(' ')
const teksTanpaLink = teksNormal.replace(link, '').trim()
if (!teksTanpaLink) return m.reply("🍡 *Masukkan teks atau emoji untuk direaksikan~*")
const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
if (c === ' ') return '―'
return huruf[c] || c
}).join('')
try {
const metadata = await conn.newsletterMetadata("invite", channelId)
let success = 0, failed = 0
for (let i = 0; i < offset; i++) {
let msgId = (rawMessageId - i).toString()
try {
await conn.newsletterReactMessage(metadata.id, msgId, emoji)
success++
} catch (e) {
failed++
}
}
m.reply(`*꒰ 🍓 Reaction Terkirim ꒱*\n\n🎀 *Emoji: ${emoji}*\n🍬 *Channel: ${metadata.name}*\n🍰 *Sukses: ${success} pesan*\n🧁 *Gagal: ${failed} pesan*`)
} catch (err) {
console.error(err)
m.reply("😖 *Gagal memproses permintaan, mungkin link-nya gak valid*")
}
}

handler.help = ['reactch']
handler.tags = ['owner']
handler.command = /^(reactch|rch)$/i
handler.owner = true

export default handler