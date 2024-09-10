---
title: Kom igång med express
date: 2024-09-10
category: resurser
summary: "Här är en samlad start för att komma igång med Node.js och Express."
tags: [ 'node', 'express', 'nunjucks', 'webbserver']
draft: true
---

I kursen webbserverprogramering så kör jag `Node.js` och `Express` för att skapa en server. Här är en snabbstart för att komma igång.

Detta förutsätter att du har installerat `Node.js` och `npm`. Förslagsvis så kör du `WSL` (Windows Subsystem for Linux) och `Ubuntu` för att köra `Node.js` och `Express`.

## Code mapp

Jag tycker det är "bäst" och enklast att ha en mapp för all kod. Jag kallar den `code` och den ligger i hemmappen.

```bash
cd
mkdir code
```

## Server setup

För att skapa en server kommer vi att skapa en mapp för projektet, detta för att det ska finnas tillgängligt för Git, men även för att det är enklast att ha allt i en mapp. Detta låter dig initiera projektet, koppla det till git och ha allt städat och strukturerat. 

Följande kommandon skapar mappen, initierar ett npm-projekt, installerar `express` och `nodemon` samt skapar en `.gitignore` fil.

```bash
cd
cd code
mkdir test-server
cd test-server
touch server.js
npm init -y
npm i express
npm i nodemon --save-dev
echo "node_modules" > .gitignore
```

### ESM

ESM är en förkortning för ECMAScript Modules och är en del av ES6. Det är en standard för att importera och exportera moduler i JavaScript. Vi vill skriva server med ESM och inte CommonJS. För att kunna köra den då, behöver vi ange att typen är en module i `package.json`.

```json
"type": "module",
```

För att starta servern behöver vi även skapa ett start script i `package.json`.

```json
"scripts": {
    "dev": "nodemon server.js"
},
```

För att ha något att starta så lägger vi till följande kod i `server.js`.

```javascript
console.log('Hello world');
```

Sedan startar vi server i terminalen med `npm run dev`. Om det fungerar så kommer du att se `Hello world` i terminalen.

## Express

**Se till att du kan starta filen med `npm run dev` innan du går vidare.**

Nu när vi har en server som startar så kan vi börja med att använda `Express`. Vi börjar med att importera `Express` och skapa en instans av den.

```javascript
import express from 'express'

const app = express()
```

För att starta servern så behöver vi lyssna på en port. Vi kan använda `app.listen` för att göra detta.

```javascript
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
```

Om du startar servern nu så kommer du att se att den startar och att den lyssnar på port 3000. Om du går till `http://localhost:3000` i din webbläsare så kommer du att se att den inte svarar. Detta beror på att vi inte har någon route.

### Routes

För att skapa en route så kan vi använda `app.get`. Vi börjar med att skapa en route för att svara på en `GET` request.

Redigera `server.js` och lägg till följande kod innan `app.listen`.

```javascript
app.get('/', (req, res) => {
    res.send('Hello world')
});
```

Om du startar servern nu och går till `http://localhost:3000` så kommer du att se att den svarar med `Hello world`. `res.send` skickar en respons till klienten.

## Templates med nunjucks

För att använda templates så kan vi använda `nunjucks`. Templates låter skapa html på servern och använda oss av variabler. Det hjälper oss att skapa dynamiskt innehåll.
Vi börjar med att installera `nunjucks`.

```bash
npm i nunjucks
```

För att använda `nunjucks` så behöver vi konfigurera den. Konfigurationen gör du i `server.js`, lägg till detta efter `const app = express()`.

```javascript
import nunjucks from 'nunjucks'

nunjucks.configure('views', {
    autoescape: true,
    express: app
})
```

Vi skapar en mapp `views` där vi lägger våra templates. Skapa mappen med följande kommando.

```bash
mkdir views
```

I mappen `views` skapar vi två filer `index.njk`och `layout.njk`. I `layout.njk` skapar vi en grundstruktur för sidan.

{% raw %}
```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}</title>
</head>
<body>
  {% block content %}
  {% endblock %}
</body>
</html>
```
{% endraw %}

I `index.njk` skapar vi en enkel sida som använder layouten.

{% raw %}
```html
{% extends "layout.njk" %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
{% endblock %}
```
{% endraw %}

I `server.js` så skapar vi en route som renderar `index.njk`. Detta gör vi genom att använda `res.render`. Render tar två argument, första är filnamnet på templaten och det andra är ett objekt med variabler som skickas till templaten.

```javascript
app.get('/', (req, res) => {
    res.render('index.njk', {
        title: 'Hello world',
        message: 'This is a message'
    })
})
```

Om du startar servern nu och går till `http://localhost:3000` så kommer du att se att den svarar med en html-sida.

## Statiska filer

För att servern ska kunna skicka statiska filer såsom bilder, css och javascript så kan vi använda `express.static`. Vi kan använda `express.static` för att skapa en route som pekar på en mapp.

Vi skapar en mapp `public` där vi lägger våra statiska filer. Skapa mappen med följande kommando.

```bash
mkdir public
```

I mappen `public` skapar vi en mapp `css` och en fil `style.css`. I `style.css` skriver vi lite css.

```css
body {
    font-family: sans-serif;
    font-size: 1.2rem;
}
```

I `server.js` så skapar vi en route som pekar på mappen `public`.

```javascript
app.use(express.static('public'))
```

Om du startar servern nu och går till `http://localhost:3000/css/style.css` så kommer du att se att den svarar med css-filen.
Vi kan nu använda css-filen i våra templates, redigera `layout.njk` och lägg till följande rad i sidans `<head>`.

```html
<link rel="stylesheet" href="/css/style.css">
```

### Middleware

Middleware är funktioner som körs innan en route. Vi kan använda middleware för att logga information om en request. 

```javascript
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
```

Vi kan även använda detta för att skapa en 404-sida. Lägg till följande kod efter alla routes.

```javascript
app.use((req, res) => {
    res.status(404).send('404 - Not found')
});
```


### Hela server.js

Den färdiga koden ser ut så här. Den förutsätter att du skapar `views` osv.

```javascript
import express from 'express'
import nunjucks from 'nunjucks'

const app = express()

app.use(express.static('public'))

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', (req, res) => {
    res.render('index.njk', {
        title: 'Hello world',
        message: 'This is a message'
    })
})

app.use((req, res) => {
    res.status(404).send('404 - Not found')
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
```

## Avslutning

Detta är en snabbstart för att komma igång med `Node.js` och `Express`. Det finns mycket mer att lära och utforska. Jag rekommenderar att du kollar in [Express dokumentation](https://expressjs.com/) och [Nunjucks dokumentation](https://mozilla.github.io/nunjucks/) för att lära dig mer.
