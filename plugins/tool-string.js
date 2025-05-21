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

let handler = async (m, { usedPrefix, command, text }) => {
let [mode, ...message] = text.split(" ")
let input = message.join(" ")

if (!mode || !input) return m.reply(`🍀 *Konversi String ke ASCII (CharCode) & Sebaliknya* 🍀\n\n✨ *Cara Penggunaan:*\n🍫 *Encode:* ${usedPrefix}${command} encode abcdefg\n🍡 *Decode:* ${usedPrefix}${command} decode 97,98,99,100,101,102,103`)
if (mode.toLowerCase() === "encode") {
let charCode = input.split("").map(c => c.charCodeAt(0)).join(", ")
return m.reply(`🍩 *Hasil Encode (CharCode):*\n${charCode}`)
}
if (mode.toLowerCase() === "decode") {
let decoded = String.fromCharCode(...input.split(",").map(n => parseInt(n.trim())))
return m.reply(`🍔 *Hasil Decode (String):*\n${decoded}`)
}
m.reply(`🍀 *Mode tidak dikenali! Gunakan encode/decode.*`)
}

handler.help = ["string"]
handler.tags = ["tools"]
handler.command = /^(string|str)$/i
handler.register = true

export default handler