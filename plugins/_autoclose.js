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

import cron from 'node-cron'
import moment from 'moment-timezone'

const CONFIG = {
  TIMEZONE: 'Asia/Jakarta',
  LOCALE: 'id-ID',
  KODE_KOTA: '3275', 
  CLOSE_DURATION: 10  
}

let prayerTimes = {}
let originalGroupNames = {}

async function fetchPrayerTimes() {
  const today = moment().tz(CONFIG.TIMEZONE).format('YYYY/MM/DD')
  try {
    const res = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${CONFIG.KODE_KOTA}/${today}`)
    const { data } = await res.json()
    prayerTimes = {
      Subuh: data.jadwal.subuh,
      Dzuhur: data.jadwal.dzuhur,
      Ashar: data.jadwal.ashar,
      Maghrib: data.jadwal.maghrib,
      Isya: data.jadwal.isya
    }
    console.log('✅ Jadwal sholat diperbarui:', prayerTimes)
  } catch (e) {
    console.error('❌ Gagal ambil jadwal sholat:', e)
  }
}

async function closeGroup(conn, groupId, originalName, prayerName) {
  try {
    const waktuSekarang = moment().tz(CONFIG.TIMEZONE).format('dddd, DD MMMM YYYY [pukul] HH:mm')
    const bukaPukul = moment().tz(CONFIG.TIMEZONE).add(CONFIG.CLOSE_DURATION, 'minutes').format('HH:mm')


    await conn.groupSettingUpdate(groupId, 'announcement')
    await conn.groupUpdateSubject(groupId, `🔒 TUTUP - ${originalName}`)
    

    await conn.sendMessage(groupId, {
      text: `📢 **PENGUMUMAN PENTING** 📢\n\n` +
            `🕋 **WAKTU ${prayerName.toUpperCase()} TELAH TIBA**\n` +
            `📅 **${waktuSekarang}**\n\n` +
            `Grup ditutup sementara untuk:\n` +
            `✓ **Sholat ${prayerName} berjamaah**\n` +
            `✓ **Dzikir dan doa**\n` +
            `✓ **Istirahat dari gadget**\n\n` +
            `⏳ **Akan dibuka pukul ${bukaPukul}**`
    })
    
    console.log(`🔒 Grup ${groupId} ditutup untuk ${prayerName}`)
  } catch (e) {
    console.error(`❌ Gagal menutup grup ${groupId}:`, e)
  }
}

async function openGroup(conn, groupId, originalName, prayerName) {
  try {

    await conn.groupSettingUpdate(groupId, 'not_announcement')
    await conn.groupUpdateSubject(groupId, originalName)
    

    await conn.sendMessage(groupId, {
      text: `📢 **Grup dibuka kembali** 📢\n\n` +
            `🕌 **Sholat ${prayerName} selesai**\n` +
            `✨ **Semoga ibadah kita diterima**\n` +
            `💬 **Silahkan melanjutkan aktivitas**`
    })
    
    console.log(`🔓 Grup ${groupId} dibuka kembali`)
  } catch (e) {
    console.error(`❌ Gagal membuka grup ${groupId}:`, e)
  }
}

export function autoPrayStart(conn) {

  cron.schedule('* * * * *', async () => {
    const now = moment().tz(CONFIG.TIMEZONE).format('HH:mm')
    const prayerName = Object.keys(prayerTimes).find(key => prayerTimes[key] === now)
    
    if (!prayerName) return
    
    console.log(`🕒 Waktu ${prayerName} terdeteksi: ${now}`)
    

    for (const jid in global.db.data.chats) {
      if (!jid.endsWith('@g.us')) continue
      
      const chat = global.db.data.chats[jid]
      if (!chat?.autoPray) continue
      
      try {

        const metadata = await conn.groupMetadata(jid).catch(() => null)
        if (!metadata) continue
        

        if (!originalGroupNames[jid]) {
          originalGroupNames[jid] = metadata.subject
        }
        
        
        await closeGroup(conn, jid, originalGroupNames[jid], prayerName)
        setTimeout(() => {
          openGroup(conn, jid, originalGroupNames[jid], prayerName)
        }, CONFIG.CLOSE_DURATION * 60 * 1000)
        
      } catch (e) {
        console.error(`❌ Error di grup ${jid}:`, e)
      }
    }
  })
  
 
  fetchPrayerTimes()
  cron.schedule('0 0 * * *', fetchPrayerTimes) 
}


let handler = async (m, { conn }) => {
  await m.reply(`**🕌 Auto Prayer System**\n\n` +
                `Status: **Aktif**\n` +
                `Lokasi: **Bekasi**\n` +
                `Update Jadwal: **Setiap hari pukul 00:00**`)
}

handler.help = ['autopray']
handler.tags = ['group']
handler.command = /^(autopray|autosholat)$/i
handler.admin = true
handler.group = true

export default handler