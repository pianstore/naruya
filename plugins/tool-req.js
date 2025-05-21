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

let handler = async (m, { args, conn }) => {
    if (!args[0]) return m.reply('*⚠️ CONTOH PENGGUNAAN:*\n*.req Fitur Baru Yang Diinginkan*')

    let text = args.join(' ')
    let url = `https://flowfalcon.dpdns.org/imagecreator/ngl?title=Request+Feature&text=${encodeURIComponent(text)}`
    let caption = `*📝 REQUEST FITUR BARU*\n\n` +
                 `*Isi Request:* ${text}\n` +
                 `*Dari:* @${m.sender.split('@')[0]}`

    try {

        await conn.sendMessage('6281398961382@s.whatsapp.net', {
            image: { url },
            caption,
            mentions: [m.sender]
        })


        await conn.sendMessage('120363420049587260@newsletter', {
            image: { url },
            caption: '*📢 ADA REQUEST BARU NIH!*',
            mentions: [m.sender]
        })

        m.reply('*✅ REQUEST KAMU SUDAH TERKIRIM!*\n_Semoga developer bisa membuatkannya ya~_')
    } catch (error) {
        console.error('Request Error:', error)
        m.reply('*❌ GAGAL MENGIRIM REQUEST*\n_Coba lagi nanti atau hubungi admin_')
    }
}

handler.help = ['req <teks>']
handler.command = ['req']
handler.tags = ['tools']
handler.limit = true;
handler.register = true;

export default handler