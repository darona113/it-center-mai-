# IT-центр МАИ (Vite + React + Tailwind)

## Запуск фронта
```bash
npm install
npm run dev
```
Открой: http://localhost:5173/

## (Опционально) Запуск backend для Telegram-ленты
```bash
cd server
npm install
# Windows PowerShell:
$env:TG_BOT_TOKEN="ВАШ_ТОКЕН"
npm run dev
```
После этого лента на фронте начнёт загружаться с http://localhost:3001/api/telegram
