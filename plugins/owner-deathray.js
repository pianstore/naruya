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

const DEATH_RAY_CONFIG = {
    damageRange: [10000, 50000], 
    criticalMultiplier: 20, 
    cooldown: 600000, 
    rayTypes: ['*PLASMA*', '*GAMMA*', '*QUANTUM*', '*NEUTRON*', '*ANTIMATTER*']
}

const handler = async (m, { conn, usedPrefix, command, isOwner }) => {
    try {

        await conn.sendMessage(m.chat, { 
            text: '*☠️ DEATH RAY SYSTEM INITIALIZING...*' 
        }, { quoted: m })

        const isMod = global.mods?.includes(m.sender) || false
        if (!isOwner && !isMod) {
            return showExample(m, conn, usedPrefix, command, 
                '*☠️ ACCESS DENIED*\n_Death Ray requires owner/mods access_')
        }


        const who = m.mentionedJid?.[0] || (m.quoted ? m.quoted.sender : '')
        if (!who) return showExample(m, conn, usedPrefix, command, '*☠️ TARGET REQUIRED*')
        if (!global.db.data.users[who]) return showExample(m, conn, usedPrefix, command, '*💀 Target not registered in RPG*')
        if (who === m.sender) return showExample(m, conn, usedPrefix, command, '*☠️ Cannot attack yourself*')


        const user = global.db.data.users[m.sender]
        const cooldownLeft = DEATH_RAY_CONFIG.cooldown - (Date.now() - (user.lastdeathray || 0))
        if (cooldownLeft > 0) {
            return showExample(m, conn, usedPrefix, command,
                `*⏳ COOLDOWN ACTIVE*\n_Wait ${clockString(cooldownLeft)} more_`)
        }


        const damage = calculateDamage()
        const rayType = pickRandom(DEATH_RAY_CONFIG.rayTypes)
        
        const attackMessage = {
            text: `*☠️ DEATH RAY FIRED* 🔥\n\n` +
                  `*🎯 Target:* @${who.split('@')[0]}\n` +
                  `*💥 Damage:* ${damage.toLocaleString()}\n` +
                  `*⚡ Type:* ${rayType}\n\n` +
                  `_Cooldown: 10 minutes_`,
            mentions: [who]
        }

        await conn.relayMessage(
            m.chat,
            generateWAMessageFromContent(m.chat, attackMessage, {}),
            { messageId: crypto.randomUUID() }
        )

        user.lastdeathray = Date.now()

    } catch (error) {
        console.error('DeathRay Error:', error)
        await showExample(m, conn, usedPrefix, command,
            `*☠️ SYSTEM ERROR*\n_${error.message}_`)
    }
}


function showExample(m, conn, usedPrefix, command, message = '') {
    const exampleText = `*⚡ EXAMPLE USAGE:*\n` +
                       `• ${usedPrefix}${command} @target\n` +
                       `• ${usedPrefix}dr @username\n\n` +
                       `*💀 DAMAGE RANGE:* 10,000-50,000\n` +
                       `*☠️ CRITICAL HIT:* 20x damage\n` +
                       `*⏱ COOLDOWN:* 10 minutes`
    
    return conn.sendMessage(m.chat, {
        text: message ? `${message}\n\n${exampleText}` : exampleText,
        mentions: []
    }, { quoted: m })
}

function calculateDamage() {
    const [min, max] = DEATH_RAY_CONFIG.damageRange
    const baseDamage = Math.floor(Math.random() * (max - min + 1)) + min

    return Math.random() < 0.05 ? baseDamage * DEATH_RAY_CONFIG.criticalMultiplier : baseDamage
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function clockString(ms) {
    const h = Math.floor(ms / 3600000)
    const m = Math.floor(ms / 60000) % 60
    const s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


handler.help = ['deathray @target']
handler.tags = ['rpg', 'owner']
handler.command = /^(deathray|dr|annihilate)$/i
handler.owner = true;
handler.group = true;
handler.rpg = true;
handler.limit = true;

export default handler