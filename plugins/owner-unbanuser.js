let handler = async (m, { conn, text}) => {
    if (!text) throw 'Siapa yang mau di unbanned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `berhasil unbanned`, m)
}

handler.menugroup = ['ban @tag']
handler.tagsgroup = ['owner']
handler.command = /^unban$/i

handler.owner = true

export default handler