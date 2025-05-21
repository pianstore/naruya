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

let handler = async (m, { args, text, usedPrefix, command }) => {
const query = text || args[0];
if (!query) {
return m.reply(`
❌ *Kesalahan Input:*

📌 *Masukkan nama domain yang ingin dicari!*
💡 *Contoh Penggunaan:*
${usedPrefix + command} example
`.trim());
}

await global.loading(m, conn);

try {
const response = await fetch(global.API('lol', '/api/domainsearch', { query }, 'apikey'));

if (!response.ok) {
const statusCode = response.status;
const errorMessage = statusCode === 500
? '⚠️ *API mengalami masalah internal. Mohon coba lagi nanti.*'
: `⚠️ *Terjadi kesalahan dengan status kode: ${statusCode}.*`;
return m.reply(errorMessage);
}

const json = await response.json();
const { results } = json;

if (!results || results.length === 0) {
return m.reply(`
❌ *Hasil Tidak Ditemukan:*

📌 *Tidak ada domain yang cocok dengan pencarianmu.*
💡 *Coba gunakan kata kunci lain.*
`.trim());
}

let resultMessage = `
🌐 *Hasil Pencarian Domain* 🌸

📋 *Kata Kunci:* ${query}
🔍 *Ditemukan ${results.length} domain:*

${results.map((domain, i) => `*${i + 1}. ${domain.domain}*\n💰 *Harga:* ${domain.price}`).join('\n\n')}

✨ *Semoga bermanfaat untuk kebutuhanmu!*
`.trim();

m.reply(resultMessage);

} catch (error) {
console.error('Error:', error);
m.reply(`
❌ *Terjadi Kesalahan:*

⚠️ *Detail:* ${error.message}
📌 *Mohon coba lagi nanti.*
`.trim());
}
};

// Metadata Handler
handler.help = ['domainsearch'];
handler.tags = ['tools'];
handler.command = /^(domainsearch)$/i;
handler.premium = true;

export default handler;