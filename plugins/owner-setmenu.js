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

let handler = async (m, { conn, command, text }) => {
let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
if (type == '') {
if (text) {
conn.menu = text
conn.reply(m.chat, '*Menu berhasil diatur*\n' + info, m)
} else {
conn.menu = {}
conn.reply(m.chat, '*Menu direset*', m)
}
} else {
conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
if (text) {
conn.menu[type] = text
conn.reply(m.chat, '*Menu ' + type + ' berhasil diatur*\n' + info, m)
} else {
delete conn.menu[type]
conn.reply(m.chat, '*Menu ' + type + ' direset*', m)
}
}
}
handler.help = ['before', 'header', 'body', 'footer', 'after'].map(v => 'setmenu' + v)
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
export default handler 

let info = `
*Universal:*
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp yang dibutuhkan untuk levelup)
%limit (Limit)
%level (level)
%role (Role)
%name (Nama)
%weton (Weton Hari ini)
%week (Hari)
%date (Tanggal)
%time (Jam)
%uptime (Uptime Bot)
%rtotalreg (Jumlah User yang daftar di database)
%totalreg (Jumlah User yang ada di database)
%npmname
%npmdesc
%version
%github

*Bagian Menu Header & Footer:*
%category (Kategori)

*Bagian Menu Body:*
%cmd (Command)
%islimit (Jika command di limit)
%isPremium (Jika command premium)
`.trim()
