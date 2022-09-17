let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / OVO / DANA / GOPAY :
├ • *089516947204*
│
├ SAWERIA
├ _https://mez.ink/botwhatsapp_
│
├ Ownerku
├ _wa.me/6289516947204_
│
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
