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

import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
  try {
    const apiKey = '6xfWprwcoMyT4cbwpdfQnWVolqOMx3efEbp9uRK1'
    const requestedBlackhole = text ? text.trim().toLowerCase() : null

    // Get NASA APOD data
    const apodResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=true`)
    const apodData = await apodResponse.json()


    let blackholeInfo = ''
    let customImage = null
    
    if (requestedBlackhole) {

      try {
        const nasaBlackholeResponse = await fetch(`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=blackholes&where=name like '%${encodeURIComponent(requestedBlackhole)}%'&format=json`)
        const nasaBlackholeData = await nasaBlackholeResponse.json()
        
        if (nasaBlackholeData && nasaBlackholeData.length > 0) {
          const bh = nasaBlackholeData[0]
          blackholeInfo = `
*🔎 ${bh.name || requestedBlackhole}:*
• *Tipe:* ${bh.type || 'Tidak diketahui'}
• *Massa:* ${bh.mass ? `${bh.mass} massa matahari` : 'Tidak diketahui'}
• *Jarak:* ${bh.distance ? `${bh.distance} tahun cahaya` : 'Tidak diketahui'}
• *Lokasi:* ${bh.location || 'Tidak diketahui'}
${bh.description ? `\n📝 Deskripsi:\n${bh.description.substring(0, 150)}...` : ''}
          `.trim()
          customImage = bh.image_url
        }
      } catch (e) {
        console.error('NASA Blackhole API error:', e)
      }


      if (!blackholeInfo) {
        try {
          const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(requestedBlackhole + ' black hole')}`)
          const wikiData = await wikiResponse.json()
          
          if (wikiData.extract) {
            blackholeInfo = `*📚 Wikipedia Summary:*\n${wikiData.extract}`
            customImage = wikiData.thumbnail?.source
          }
        } catch (e) {
          console.error('Wikipedia API error:', e)
        }
      }


      if (!blackholeInfo) {
        blackholeInfo = `*⚠️ Tidak menemukan info spesifik untuk "${requestedBlackhole}"*\n\nBeberapa blackhole terkenal yang bisa dicoba:\n• sagittarius\n• m87\n• cygnus\n• ton618`
      }
    }


    const message = `
╭─「 *🕳️🌌 BLACKHOLE INFORMATION* 」
│
│ *🔍 Permintaan:* ${requestedBlackhole || 'Info umum'}
│
${requestedBlackhole ? `│ ${blackholeInfo}\n│\n` : ''}
│ *🌠 Gambar Astronomi Hari Ini:*
│ *${apodData.title || 'NASA Daily Image'}*
│ ${apodData.explanation ? apodData.explanation.substring(0, 120) + '...' : 'Tidak ada penjelasan tersedia'}
│
│ *💡 Contoh Pencarian:*
│ .${command} sagittarius
│ .${command} m87
│ .${command} cygnus
│
│ *🔄 Update Terakhir:* ${new Date().toLocaleTimeString()}
╰───────────────
`.trim()

    await conn.sendMessage(m.chat, {
      text: message,
      contextInfo: {
        externalAdReply: {
          title: `*🪐 ${requestedBlackhole ? requestedBlackhole + ' Black Hole' : 'Blackhole Info'}*`,
          body: '🔭 Data dari NASA & Wikipedia',
          thumbnailUrl: customImage || apodData.url || apodData.thumbnail_url || 'https://i.imgur.com/JNlKd0Q.jpg',
          sourceUrl: 'https://www.nasa.gov/black-holes',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })

  } catch (e) {
    console.error('Main error:', e)
    await conn.reply(m.chat, `*⚠️ Gagal memuat data!*\nError: ${e.message}\n\nCoba gunakan:\n.${command} sagittarius\n.${command} m87`, m)
  }
}

handler.help = ['blackhole [nama?]']
handler.command = /^(blackhole|lubanghitam|bh)$/i
handler.tags = ['tools', 'education']
handler.limit = true;
handler.register = true;

export default handler;