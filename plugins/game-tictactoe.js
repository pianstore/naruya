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

import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.tictactoe = conn.tictactoe || {}
if (Object.values(conn.tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) {
return m.reply('🍬 *Kamu masih ada di dalam game, sayang!*')
}
let room = Object.values(conn.tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('🍡 *Partner ditemukan!*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => ({
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]))

let str = `
🍭 *Tic Tac Toe Game Started!*
🍥 *Room ID: ${room.id}*
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

🍧 *Giliran: @${room.game.currentTurn.split('@')[0]}*
🍓 *Ketik: nyerah untuk menyerah*
`.trim()
if (room.x !== room.o) await conn.reply(room.x, str, m, {
mentions: conn.parseMention(str)
})
await conn.reply(room.o, str, m, {
mentions: conn.parseMention(str)
})
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}

if (text) room.name = text
m.reply(`🍡 *Menunggu partner untuk bermain...*${text ? `\n\n*Ketik: ${usedPrefix + command} ${text}*` : ''}`)
conn.tictactoe[room.id] = room

}
}

handler.help = ['tictactoe']
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/i
handler.game = true
handler.group = true
handler.register = true

export default handler