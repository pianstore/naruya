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

const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
this.menfess = this.menfess ? this.menfess : {}
let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
if (!mf) return !0
console.log({ text: m.text, type: m.quoted?.mtype })
if ((m.text === 'BALAS PESAN' || m.text === '') && m.quoted.mtype == 'extendedTextMessage') return m.reply("*Silahkan kirim pesan balasan kamu.*\n*Ketik pesan sesuatu lalu kirim, maka pesan otomatis masuk ke target balas pesan.*");
else {
let txt = `*Hai kak, kamu menerima balasan nih.*\n\n*Pesan yang kamu kirim sebelumnya:*\n${mf.pesan}\n\n*Pesan balasannya:*\n${m.text}\n`.trim();
await this.reply(mf.dari, txt, null).then(() => {
m.reply('*Berhasil Mengirim balasan.*')
delay(1500)
delete this.menfess[mf.id]
return !0
})
}
return !0
}