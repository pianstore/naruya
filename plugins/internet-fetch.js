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

import { writeFileSync, readFileSync } from 'fs'

let handler = async (m, { text, conn, usedPrefix, command }) => {
try {
if (!/^https?:\/\//.test(text)) return m.reply(`*❌ Awali URL dengan http:// atau https://*\n\n📌 *Contoh: ${usedPrefix + command} https://google.com`)
await global.loading(m, conn)
let _url = new URL(text)
let url = text
let redirectCount = 0
let redirectUrl = url
while (redirectCount < 10) {
let res = await fetch(redirectUrl, { redirect: "manual" })
let statusCode = res.status
let statusMessage = HTTP_STATUS_MESSAGES[statusCode] || res.statusText || "Unknown Status"
let contentLength = res.headers.get("content-length") ?? 0
if (contentLength > 100 * 1024 * 1024) return m.reply(`❌ *Ukuran file terlalu besar!*\n💾 Content-Length: ${contentLength}`)
const contentType = res.headers.get("content-type") || "unknown"
const contentDisposition = res.headers.get("content-disposition") || ""
let filename = contentDisposition?.split("filename=")[1]?.trim() || new URL(redirectUrl).pathname.split("/").pop() || "unknown.file"
let responseMessage = `
🌍 *Fetch Request Info*
📎 *URL: ${text}*
📥 *Redirects: ${redirectCount}*
📡 *Status: ${statusCode} - ${statusMessage}*
📄 *Content-Type: ${contentType}*
📂 *Filename: ${filename}*
`.trim()
await conn.sendMessage(m.chat, {
text: responseMessage,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: "Fetch Request",
body: `Status: ${statusCode} - ${statusMessage}`,
thumbnailUrl: "https://i.supa.codes/h5G7jo",
sourceUrl: "https://instagram.com/naruyaizumi_",
renderLargerThumbnail: true
}
}
}, { quoted: m })
if ([301, 302, 307, 308].includes(statusCode)) {
let location = res.headers.get("location")
if (location) {
redirectUrl = location
redirectCount++
continue
}
}
let ext = ''
if (contentType.includes('html')) ext = 'html'
else if (contentType.includes('json')) ext = 'json'
else if (contentType.includes('javascript')) ext = 'js'
if (ext) {
let textContent = await res.text()
let filePath = `./tmp/fetch-output.${ext}`
writeFileSync(filePath, textContent)
await conn.sendMessage(m.chat, {
document: readFileSync(filePath),
fileName: `fetch-output.${ext}`,
mimetype: contentType
}, { quoted: m })
}
break
}
if (redirectCount >= 10) return m.reply(`❌ *Terlalu banyak pengalihan!*\n⚠️ Maksimum: 10`)
} catch (e) {
m.reply(`❌ *Terjadi kesalahan!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

const HTTP_STATUS_MESSAGES = {
100: "Continue", 101: "Switching Protocols", 102: "Processing", 103: "Early Hints",
200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used",
300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect",
400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "URI Too Long", 415: "Unsupported Media Type", 416: "Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Too Early", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 451: "Unavailable For Legal Reasons",
500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 510: "Not Extended", 511: "Network Authentication Required"
}

handler.help = ["fetch", "get"]
handler.tags = ["internet"]
handler.command = /^(fetch|get)$/i
handler.owner = true

export default handler