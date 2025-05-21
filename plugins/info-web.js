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

let handler = async (m, { conn, text }) => {
if (!text) return await conn.sendMessage(m.chat, { text: 'Berikan tautan situs web untuk mendapatkan informasi.' }, { quoted: m });

try {
// Send loading reaction
await conn.relayMessage(m.chat, {
reactionMessage: { 
key: m.key, 
text: '⏱️' 
}
}, { messageId: m.key.id });

// Encode the URL to make it safe for the API request
let encodedUrl = encodeURIComponent(text);
const response = await fetch(`https://itzpire.com/tools/about-website?url=${encodedUrl}`, {
method: 'GET',
headers: { 'accept': 'application/json' }
});
const data = await response.json();

// Check if the response is successful
if (data.status === 'success') {
const { title, description, summary } = data.data;

// Format the message text
let infoText = `
*Title*: ${title}
*Description*: ${description}
*Summary*: ${summary}
`;

// Send the info as a text message
await conn.sendMessage(m.chat, { text: infoText }, { quoted: m });
} else {
// Handle error if the status isn't success
await conn.sendMessage(m.chat, { text: 'Gagal mengambil info situs web.' }, { quoted: m });
}
} catch (error) {
console.error(error);
await conn.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil info situs web. Coba lagi nanti.' }, { quoted: m });
}
};

handler.help = ['infoweb'];
handler.tags = ['internet'];
handler.command = /^infoweb$/i;
handler.register = true;
handler.limit = true;
export default handler;