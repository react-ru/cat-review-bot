cat-review-bot
===

Чат-бот для раздела [Кот ревьюн](http://xn----7sbbr0a7arc7b.xn--p1ai/code-review/) русскоязычного [сообщества](http://xn----7sbbr0a7arc7b.xn--p1ai/) react разработчиков в telegram.

Что делает
---

Очень простой бот, который принимает заявки с сайта и дублирует во все чаты, в которых состоит, включая приватные, а также создает карточку в Trello с этой задачей.

Как запустить
---

Нужна установленная БД [mongodb](https://www.mongodb.com/) и VPN-соединение для выхода в Интернет, если вы из России, где телеграмм заблокирован.

### 1. Запустить mongodb

```bash
chmod +x start_mongodb.sh
./start_mongodb
```

### 2. Создать файл `.env`

```bash
cp .env.example .env
nano .env
```

Зарегиструйте бота в BotFather и пропишите токен в `.env`-файле.

Получите API token в Trello и сохраните также в `.env`-файле.

### 4. Стартовать бота

```bash
npm start
```

REST API
---

Бот дает RESTful API для создания заявок.

### /api/v1/request

Создает заявку на ревью. И карточку на доске в Trello.

#### Request body

##### Headers

* Content-Type: application/json

```javascript
{
	"telegram": "ychebotaev",
	"link": "https://github.com/YChebotaev/cat-review-bot",
	"comment": "Попробуйте ка найти здесь ошибки, господа"
}
```
