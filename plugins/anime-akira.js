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

let handler = async (m, { conn }) => {
let url = akira[Math.floor(Math.random() * akira.length)]
conn.sendFile(m.chat, url, null, '*Akira*', m)
}
handler.command = /^(akira)$/i
handler.tags = ['nsfw']
handler.help = ['akira']
handler.nsfw = true
handler.premium = true
handler.register = true
export default handler

global.akira = [
"https://i.pinimg.com/474x/f6/27/65/f627657859f8b197cfdec94309b76486.jpg",
"https://i.pinimg.com/originals/1e/70/5d/1e705d9d58b39eb2793edfaf9be0d1c2.png",
"http://upload.wikimedia.org/wikipedia/en/5/5d/AKIRA_(1988_poster).jpg",
"https://i.pinimg.com/originals/12/45/34/12453414a6f68ac212c375d72507a9b8.png",
"https://i.pinimg.com/originals/2c/1f/04/2c1f0464ff5cf9692cae9601aba1fd74.jpg",
"https://i.pinimg.com/736x/91/44/93/9144931889e97e8b49b66777b21b9883.jpg",
"https://i.pinimg.com/originals/b5/36/51/b5365185235d417aaa7ffd685e735f5d.jpg",
"https://i.pinimg.com/736x/c8/de/a5/c8dea5945d70755cf75d7f623f4ddd76--akira-trailer-sci-fi-anime.jpg",
"https://i.pinimg.com/originals/a6/9a/2e/a69a2edfe08394936bf64fe660d75da8.jpg",
"https://i.pinimg.com/originals/9b/c1/b0/9bc1b00f9135e139ee4381e0cebf3145.jpg",
"https://i.pinimg.com/originals/c0/c4/fc/c0c4fc755aa73961b28e24c71ad6e154.jpg",
"https://i.pinimg.com/564x/21/44/3f/21443f132f6244d10823d3ee2640cd26--akira-poster-poster-art.jpg",
"https://i.pinimg.com/originals/72/72/b2/7272b2957138ce3982944ea41c85d5b4.png",
"https://i.pinimg.com/originals/6d/1b/69/6d1b697f0f45e6804afa1465ae8aca26.jpg",
"https://i.pinimg.com/originals/01/19/74/011974ef39eb0e5c850b631dfbcbc091.jpg",
"https://i.pinimg.com/736x/0e/2e/81/0e2e81ba0f3a6a9f1791bb115b186d4b.jpg",
"https://i.pinimg.com/originals/35/d5/0e/35d50ea7dac12997c537c9c7e59e5498.jpg",
"https://i.pinimg.com/474x/16/3e/f0/163ef03eff751391e840a839ada6f198.jpg",
"https://i.pinimg.com/736x/41/e2/5a/41e25a1c28e97a602e358fe3037239ee--akira-anime-cyberpunk-anime.jpg",
"https://i.pinimg.com/736x/e6/0b/b0/e60bb031b655eefb921b40cf3b8104a2.jpg",
"https://i.pinimg.com/originals/09/06/f8/0906f89c679e065180125368c34f75c9.jpg",
"https://i.pinimg.com/originals/48/be/c9/48bec9a9e176ddfe8ff54e02a81567b3.jpg",
"https://i.pinimg.com/originals/9e/2f/d7/9e2fd71508f1a1c249c3d01e4ea0a633.jpg",
"https://i.pinimg.com/474x/27/c7/ed/27c7ed35c99d1456e3b58ceb524e3bf3.jpg",
"https://i.pinimg.com/originals/0b/f8/20/0bf8203eac29b01c7c5046dcd14f18fb.jpg",
"https://i.pinimg.com/originals/53/7c/94/537c949bc1bfbd077b586fcf3f4feb69.png",
"https://i.pinimg.com/originals/3b/3f/97/3b3f97994562fbeac69cddf0104baed5.jpg",
"https://i.pinimg.com/originals/2b/61/cf/2b61cfc31fb01395e3a39ba669cdac63.jpg",
"https://i.pinimg.com/736x/8e/dc/9f/8edc9f02abf43ae621592cc7beacadc7.jpg",
"https://i.pinimg.com/originals/da/3a/71/da3a71fd49bd74425a8e83868efbbffe.jpg",
"https://i.pinimg.com/originals/86/33/3a/86333a6912d38132b92636775eb99e5c.jpg",
"https://i.pinimg.com/originals/78/c3/1a/78c31ad222007490f442cc150771e25d.jpg",
"https://i.pinimg.com/736x/e1/95/1d/e1951dc9a747cb1d2ed56e6595cb6d06.jpg",
"https://i.pinimg.com/564x/38/75/63/3875635ae5af99a36aa7025dd0a0b213.jpg",
"https://i.pinimg.com/originals/12/42/ac/1242ac34621c6bc8c8fdd057ed70e667.jpg",
"https://i.pinimg.com/originals/7e/57/cb/7e57cbd6fbab1f0436fad8cecad342e5.png",
"https://i.pinimg.com/originals/f2/fe/94/f2fe945869cb17713dbd58a2abf68334.gif",
"https://i.pinimg.com/originals/f8/9a/23/f89a235a504401afcdc166ee9437aa5d.gif",
"https://i.pinimg.com/originals/7a/2b/d6/7a2bd6fd78ac200e3fd1e836ba4f25e3.jpg",
"https://i.pinimg.com/736x/f0/88/e7/f088e74d95958728a1a11ff11322b408.jpg",
"https://i.pinimg.com/474x/d7/b8/01/d7b801ea18abf2920f482d6d6ac679b4--akira-manga-katsuhiro-otomo.jpg",
"https://i.pinimg.com/originals/f6/8e/8f/f68e8fcb284cfdf21f7150b8e35097c9.jpg",
"https://i.pinimg.com/originals/de/ad/88/dead8872093e2793c7968c2ba1a2d59d.gif",
"https://i.pinimg.com/736x/49/cb/d5/49cbd5e5393ceed268d0f2d578002a0c.jpg",
"https://i.pinimg.com/564x/d0/bc/6f/d0bc6f70c9f9f58c9c336736b9afdc70.jpg",
"https://i.pinimg.com/originals/db/26/25/db2625ae0d72040949c73c12349440f0.png",
"https://i.pinimg.com/originals/ac/0a/ef/ac0aefdda430f64668bc6146040e95e1.jpg",
"https://i.pinimg.com/originals/e4/0b/7a/e40b7a40360ba0666d2785d239c5780f.jpg",
"https://i.pinimg.com/474x/be/5b/16/be5b168518296dcd07f0b1f2d5bde1c7.jpg",
"https://i.pinimg.com/originals/8b/63/c2/8b63c2d89efacf6e35498ae2c8efdcbf.gif",
"https://i.pinimg.com/736x/5e/5b/d8/5e5bd827eab4a20502d9955459cf06c3.jpg",
"https://i.pinimg.com/originals/9d/f7/b2/9df7b2db9c439f3beb433740aef3855f.jpg",
"https://i.pinimg.com/564x/83/58/89/8358892f1edc22b6c64bb261094ee16a.jpg",
"https://i.pinimg.com/564x/52/99/5c/52995c742d2ded17391660e819a93026.jpg",
"https://i.pinimg.com/736x/01/e9/00/01e900c9a0a5fda02fbc60014a3dab48.jpg",
"https://i.pinimg.com/originals/67/96/7d/67967d3be48405eb3d47fb539a06257e.jpg",
"https://i.pinimg.com/originals/17/f7/8c/17f78c79b650eea0583773c0cec14692.gif",
"https://i.pinimg.com/originals/c4/55/15/c45515cf7990aedb6c51e85f9ffb65bd.jpg",
"https://i.pinimg.com/236x/68/a9/97/68a99785d1df270080a0da469856fca4.jpg",
"https://i.pinimg.com/originals/29/04/f8/2904f87dd2d40263b9579f97c00a53a5.gif",
"https://i.pinimg.com/564x/d5/15/c6/d515c6856e3b48b4b3df010f075bca33--akira-manga-katsuhiro-otomo.jpg",
"https://i.pinimg.com/originals/ac/0b/df/ac0bdf5c854c74af9e0bbc985b7cb2ef.jpg",
"https://i.pinimg.com/736x/19/0e/38/190e386f226bf18915dcee81d48bfd89.jpg",
"https://i.pinimg.com/236x/d6/c6/fa/d6c6fa855412c403458484efa9bec945.jpg",
"https://i.pinimg.com/736x/2a/65/91/2a65914a6607a1730c7d0ab7cbb77eab--katsuhiro-otomo-manga-anime.jpg",
"https://i.pinimg.com/originals/57/81/5c/57815c9b7a006e3e75b55014b13b0a56.gif",
"https://i.pinimg.com/originals/47/30/2b/47302b4b18215d75698e110413446869.jpg",
"https://i.pinimg.com/originals/8c/5c/88/8c5c88664816f5de42fc6b4393d8dafb.png",
"https://i.pinimg.com/originals/76/32/f4/7632f465ff46ebaf5516fb84f53fc272.jpg",
"https://i.pinimg.com/originals/63/db/77/63db7777520669ee010552761de63a71.jpg",
"https://i.pinimg.com/originals/cb/b3/5a/cbb35a2c16812af108f972be22420411.jpg",
"https://i.pinimg.com/originals/22/e2/dc/22e2dc4a386dbe65de6fd72a44e8a176.png",
"https://i.pinimg.com/originals/65/6e/a7/656ea79f75091ba67aa0c3d2a333a841.jpg",
"https://i.pinimg.com/originals/f4/3d/6b/f43d6b47e57c0becc93a731da73ae1b6.jpg",
"https://i.pinimg.com/736x/11/3c/2b/113c2bd5ca3a0d29e6c639f2e1c6da02.jpg",
"https://i.pinimg.com/736x/81/3d/bb/813dbbd545752290c2546a4e3ea8fa6e.jpg",
"https://i.pinimg.com/736x/6e/df/25/6edf25a75158c963300a546b52ed1c02.jpg",
"https://i.pinimg.com/originals/36/56/5b/36565b319e1f74961b26b9da90693435.jpg",
"https://i.pinimg.com/474x/d3/8a/45/d38a459f196e5ca1737a0201cefe9eb5.jpg",
"https://i.pinimg.com/564x/bc/5c/b0/bc5cb000fe7f9ccf15b9d641d02ae5a6.jpg",
"https://i.pinimg.com/564x/87/12/fe/8712fee75df5fc75e0fe368e91c43373.jpg",
"https://i.pinimg.com/550x/d6/16/27/d61627ae9f6947c8e7e443ba1b9c7b8e.jpg",
"https://i.pinimg.com/originals/95/f5/bb/95f5bb19509506f3327eec343d5fdfce.jpg",
"https://i.pinimg.com/originals/11/63/8b/11638b2f373042936b6aa688708532a9.jpg",
"https://i.pinimg.com/736x/34/7d/da/347dda907613b93819cc69e5d2868572.jpg",
"https://i.pinimg.com/originals/30/78/0a/30780a6ac1811c3aae5f1bc84dba4b81.jpg",
"https://i.pinimg.com/736x/ed/eb/54/edeb54b65789e6ea8dcbf9518c8e5457.jpg",
"https://i.pinimg.com/originals/68/af/33/68af332d483b06f54cc0b245e8af2ff7.png",
"https://i.pinimg.com/originals/de/47/f5/de47f5f1cce3fe7925af8ceeb698c620.jpg",
"https://i.pinimg.com/736x/62/fa/6c/62fa6c3cc3badbbb425cca21ae1cde8f.jpg",
"https://i.pinimg.com/originals/7d/b5/e2/7db5e28c162b4d03163e50038fe86ee1.jpg",
"https://i.pinimg.com/originals/92/59/ee/9259eefc365f54ba9ea7535bee425598.jpg",
"https://i.pinimg.com/736x/63/2f/0d/632f0dacb82051510cb4889b83e8350d.jpg",
"https://i.pinimg.com/originals/b2/1e/96/b21e9649641d215b39a9762decde5c82.jpg",
"https://i.pinimg.com/736x/31/74/d7/3174d726d6e2aafd04f7a49d69850162.jpg",
"https://i.pinimg.com/originals/71/98/11/71981161c4783fff27075c62d9efc8ca.jpg",
"https://i.pinimg.com/originals/42/a9/3a/42a93a28940b0e9792f9ab633c01d1dd.jpg",
"https://i.pinimg.com/736x/c9/06/03/c9060312e5b6f8c9a86bce0ce6482b5b--akira-tetsuo-art-manga.jpg",
"https://i.pinimg.com/originals/fe/6e/b5/fe6eb51f7621dbcb0e2c9d056b33285e.jpg",
"https://i.pinimg.com/736x/2e/68/6b/2e686b70cf4552c933ec4bb8181f3e17.jpg"
]
