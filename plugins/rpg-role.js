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

const handler = m => m
handler.before = function (m) {
const user = global.db.data.users[m.sender]
const levels = [
{ min: 0, max: 9, role: 'Minarai 見' },
{ min: 10, max: 19, role: 'Shugyousha 修' },
{ min: 20, max: 29, role: 'Shinobi 忍' },
{ min: 30, max: 39, role: 'Kenshi 剣' },
{ min: 40, max: 49, role: 'Majutsushi 魔' },
{ min: 50, max: 59, role: 'Onmyouji 陰' },
{ min: 60, max: 69, role: 'Ryuuja 竜' },
{ min: 70, max: 79, role: 'Kuraiya 闇' },
{ min: 80, max: 89, role: 'Seirei 霊' },
{ min: 90, max: 99, role: 'Yamibito 影' },
{ min: 100, max: 109, role: 'Shoukanshi 召' },
{ min: 110, max: 119, role: 'Houshi 法' },
{ min: 120, max: 129, role: 'Kagemusha 影' },
{ min: 130, max: 139, role: 'Yamiken 闇剣' },
{ min: 140, max: 149, role: 'Fuuinsha 封' },
{ min: 150, max: 159, role: 'Kikoushi 機' },
{ min: 160, max: 169, role: 'Kensei 賢' },
{ min: 170, max: 179, role: 'Haguruma 歯' },
{ min: 180, max: 189, role: 'Inyoushi 陽' },
{ min: 190, max: 199, role: 'Hijutsu 秘' },
{ min: 200, max: 209, role: 'Sennin 仙' },
{ min: 210, max: 219, role: 'Meifu 冥' },
{ min: 220, max: 229, role: 'Yasha 夜' },
{ min: 230, max: 239, role: 'Noroware 呪' },
{ min: 240, max: 249, role: 'Kuraihime 暗' },
{ min: 250, max: 259, role: 'Kishin 鬼' },
{ min: 260, max: 269, role: 'Tamashii 魂' },
{ min: 270, max: 279, role: 'Raijin 雷' },
{ min: 280, max: 289, role: 'Enma 炎' },
{ min: 290, max: 299, role: 'Reikon 霊魂' },
{ min: 300, max: 319, role: 'Mikazuki 三' },
{ min: 320, max: 339, role: 'Shirogane 銀' },
{ min: 340, max: 359, role: 'Kurotsuki 黒月' },
{ min: 360, max: 379, role: 'Amaterasu 天照' },
{ min: 380, max: 399, role: 'Tsukiyomi 月読' },
{ min: 400, max: 419, role: 'Hoshigami 星' },
{ min: 420, max: 439, role: 'Ryuujin 竜神' },
{ min: 440, max: 459, role: 'Shinsei 神聖' },
{ min: 460, max: 479, role: 'Gensou 幻想' },
{ min: 480, max: 499, role: 'Shinkai 深海' },
{ min: 500, max: 529, role: 'Makyou 魔境' },
{ min: 530, max: 559, role: 'Kuroi 影炎' },
{ min: 560, max: 589, role: 'Rinjin 鱗人' },
{ min: 590, max: 619, role: 'Zetsuen 絶縁' },
{ min: 620, max: 649, role: 'Jikuu 時空' },
{ min: 650, max: 679, role: 'Meidou 冥道' },
{ min: 680, max: 709, role: 'Kishikaisei 起死' },
{ min: 710, max: 739, role: 'Shin’en 深淵' },
{ min: 740, max: 769, role: 'Tenrai 天雷' },
{ min: 770, max: 799, role: 'Kumorigami 雲神' },
{ min: 800, max: 829, role: 'Seihai 聖杯' },
{ min: 830, max: 859, role: 'Tengoku 天国' },
{ min: 860, max: 889, role: 'Shura 修羅' },
{ min: 890, max: 919, role: 'Akuryou 悪霊' },
{ min: 920, max: 949, role: 'Kouzou 構造' },
{ min: 950, max: 979, role: 'Mugen 無限' },
{ min: 980, max: 999, role: 'Shinkirou 蜃気楼' },
{ min: 1000, max: Infinity, role: 'Kami-sama 神様' }
]
const userLevel = user.level
const userRole = levels.find(level => userLevel >= level.min && userLevel <= level.max).role
user.role = userRole
return true
}
export default handler