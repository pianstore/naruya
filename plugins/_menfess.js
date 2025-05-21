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
conn.menfess = conn.menfess ? conn.menfess : {}
if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
let [jid, name, pesan] = text.split('|');
if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note: nama pengirim boleh nama samaran atau anonymous.*\n\n*Contoh: ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.*`;
jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let data = (await conn.onWhatsApp(jid))[0] || {};
if (!data.exists) throw '*Nomer tidak terdaftar di whatsapp.*';
if (jid == m.sender) throw '*tidak bisa mengirim pesan menfess ke diri sendiri.*'
let mf = Object.values(conn.menfess).find(mf => mf.status === true)
if (mf) return !0
let id = + new Date
let tek = `Hai @${data.jid.split("@")[0]}, *kamu menerima pesan Menfess nih.*\n\n*Dari: ${name}*\n*Pesan:* \n*${pesan}*\n\n> *Mau balas pesan ini kak? bisa kok kak. tinggal ketik pesan kakak lalu kirim, nanti saya sampaikan ke ${name}.*`.trim();
let imgr = 'https://telegra.ph/file/6d369fd6d1256c0c47941.jpg'
/*await conn.sendFile(data.jid, imgr, 'menfess.jpg', `${tek}`, `Menfes nih :v`)*/
await conn.sendMessage(data.jid, { image: { url: imgr }, caption: tek })
.then(() => {
m.reply('*Berhasil mengirim pesan menfess.*')
conn.menfess[id] = {
id,
dari: m.sender,
nama: name,
penerima: data.jid,
pesan: pesan,
status: false
}
return !0
})
}
handler.tags = ['internet']
handler.help = ['menfess', 'menfes']
handler.command = /^(menfess|menfes)$/i
handler.private = true
handler.limit = true
handler.register = true

export default handler