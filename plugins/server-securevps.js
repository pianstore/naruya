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

import { Client } from 'ssh2'

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply("❌ Format salah!\nContoh: .securevps ipvps|passwordvps")
let [ip, pass] = args[0].split("|")
if (!ip || !pass) return m.reply("❌ Format salah!\nContoh: .securevps ipvps|passwordvps")
let ssh = new Client()
ssh.on('ready', () => {
m.reply('🛡️ *Mengamankan VPS kamu... mohon tunggu ya~*')
ssh.exec(`
apt update && apt upgrade -y &&
apt install fail2ban ufw -y &&
systemctl enable --now fail2ban &&
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local &&
systemctl restart fail2ban &&
ufw allow OpenSSH &&
ufw allow ssh &&
ufw allow http &&
ufw allow https &&
ufw default deny incoming &&
ufw default allow outgoing &&
ufw --force enable
`, async (err, stream) => {
if (err) throw err
stream.on('close', async () => {
await conn.sendMessage(m.chat, {
text: `🌸 *VPS berhasil diamankan!*
🔐 *fail2ban aktif*
🔥 *Firewall (UFW) aktif & hanya port penting yang terbuka*
Cek status manual:
\`\`\`bash
ufw status verbose
systemctl status fail2ban
\`\`\`
`,
contextInfo: {
externalAdReply: {
title: 'VPS Secure!',
body: 'Firewall & fail2ban berhasil diaktifkan.',
thumbnailUrl: 'https://i.supa.codes/8EcmSG',
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
ssh.end()
}).stderr.on('data', data => {
console.log('STDERR', data.toString())
})
})
}).on('error', err => {
m.reply(`❌ Gagal terhubung ke VPS:\n${err.message}`)
}).connect({
host: ip,
port: 22,
username: 'root',
password: pass
})
}

handler.help = ['securevps']
handler.tags = ['server']
handler.command = /^(securevps)$/i
handler.mods = true

export default handler