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

import '../config.js'
import Redis from 'ioredis'

let redis = null

if (global.useRedis) {
try {
redis = new Redis({
host: global.redis.host,
port: global.redis.port,
username: global.redis.username,
password: global.redis.password,
tls: {}
})

const realFetch = global.fetch
const { Response, Blob, Headers } = globalThis
global.fetch = async function (url, options = {}, ttl = 300) {
if (!url || typeof url !== 'string') throw new Error('URL fetch tidak valid')
if (!redis || ttl <= 0 || url.includes('/auth') || url.includes('/upload')) return await realFetch(url, options)
const cacheKey = `cache:fetch:${url}`
let cached = await redis.get(cacheKey)
if (cached) {
let { body, status, headers } = JSON.parse(cached)
return new Response(new Blob([body]), {
status,
headers: new Headers(headers)
})
}
let res = await realFetch(url, options)
let clone = res.clone()
let body = await clone.text()
await redis.set(cacheKey, JSON.stringify({
body,
status: res.status,
headers: Object.fromEntries(res.headers.entries())
}), 'EX', ttl)

return res
}
} catch (e) {
console.log('[Redis Error]', e)
redis = null
}
}

export default redis