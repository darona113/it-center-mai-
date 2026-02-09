import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(cors())


// надо вставить токен
const TOKEN = process.env.TG_BOT_TOKEN || 'PASTE_YOUR_BOT_TOKEN_HERE'

// Канал: @itcmai
const CHANNEL_USERNAME = 'itcmai'

app.get('/api/telegram', async (req, res) => {
  if (!TOKEN || TOKEN.includes('PASTE_YOUR_BOT_TOKEN_HERE')) {
    return res.status(500).json({ error: 'Set TG_BOT_TOKEN env var or edit server/index.js' })
  }


  const r = await fetch(`https://api.telegram.org/bot${TOKEN}/getUpdates`)
  const data = await r.json()

  const posts = (data.result || [])
    .filter((u) => u.channel_post && u.channel_post.chat && u.channel_post.chat.username === CHANNEL_USERNAME)
    .slice(-12)
    .reverse()
    .map((u) => ({
      id: u.update_id,
      text: u.channel_post.text || '(пост без текста)',
      link: `https://t.me/${CHANNEL_USERNAME}/${u.channel_post.message_id}`
    }))

  res.json(posts)
})

app.listen(3001, () => {
  console.log('Telegram API server: http://localhost:3001')
})
