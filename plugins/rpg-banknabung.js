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

const xpperlimit = 1

let handler = async (m, { conn, command, args }) => {
let user = global.db.data.users[m.sender]
let all = command.replace(/^atm/i, '')
let count = all ? all : args[0]
count = count ? /all/i.test(count) ? Math.floor(user.money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (user.atm == 0) return m.reply("💳 *Kamu belum punya kartu ATM yaa~*\n🌸 *Yuk craft dulu lewat .craft atm biar bisa menabung cantik~!*")
if (user.bank > user.fullatm) return m.reply('🏦 *Bank kamu sudah penuh loh~*\n💐 *Nggak bisa nabung lagi sampai ada ruang kosong yaa~*')
if (count > user.fullatm - user.bank) return m.reply('⚠️ *Jumlah yang ingin ditabung melebihi kapasitas bank!*')
if (user.money >= xpperlimit * count) {
user.money -= xpperlimit * count
user.bank += count
conn.reply(m.chat, `✨ *Berhasil menabung Rp${toRupiah(count)} ke bank~* 🏦\n*Terima kasih sudah rajin menabung yaa~!* 🌷`, m)
} else {
conn.reply(m.chat, `💸 *Uangnya belum cukup buat nabung Rp${toRupiah(count)} nih~*\n*Coba kumpulin uangnya lagi dulu yaa!* 🌼`, m)
}
}

handler.help = ['atm']
handler.tags = ['rpg']
handler.command = /^(atm([0-9]+)|atm|atmall)$/i
handler.rpg = true
handler.group = true
handler.register = true

export default handler

const toRupiah = number => {
let num = parseInt(number)
return Math.min(num, Number.MAX_SAFE_INTEGER).toLocaleString('id-ID').replace(/\./g, ",")
}