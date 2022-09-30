---
title: Kom igång med Eleventy
date: 2022-09-29
tags: ['webbutveckling', 'setup', '11ty', 'wsl']
templateEngineOverride: njk, md
category: resurs
lead: Eleventy har blivit en av mina favoritverktyg när det handlar om att skapa webbsidor. Det är ett otroligt bra verktyg för att generera html från markdown tillsammans med massa andra praktiska funktioner. I det här inlägget går jag igenom hur du kommer igång med 11ty.
---

Det här inlägget riktar sig främst till dig som läser Webbutveckling 2 där vi använder [Eleventy](). Jag har tidigare skrivit om att använda [eleventy i klassrummet](/posts/arbeta-med-eleventy-i-klassrummet/) och det är ett bra ställe att börja om du vill läsa mer om hur Eleventy fungerar i undervisningssyfte.

## Innan du kör igång

För att följa denna introduktion så kräver det att du har installerat Node, NPM och WSL, du kan hitta hur i [installationsposten för webbserverprogrammering](/posts/webbserver-programmering/).

Det är även en fördel om du har lite koll på markdown och javascript.

## Setup

För att skapa ett projekt med 11ty så används främst NPM. Vi kommer att skapa en ny mapp och initialisera ett nytt projekt med npm där. ```npm init -y``` skapar ```package.json``` åt oss.

```bash
mkdir 11ty-intro
cd 11ty-intro
npm init -y
```

```json
{
    "name": "11ty-intro",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```
### Installera Eleventy

För att installera 11ty så skriver vi ```npm install @11ty/eleventy```. Detta kommer att installera 11ty och lägga till det som en dependency i ```package.json```.

Noter att nu skapas en ```package-lock.json``` som håller koll på vilka versioner av paket som används. ```package-lock.json``` är inte en fil som du ska redigera manuellt utan den skapas automatiskt av NPM.

I filen ```package.json``` så ser vi att 11ty har lagts till som en dependency.

```json
"dependencies": {
    "@11ty/eleventy": "^1.0.2"
}
```

Innan vi använder och startar upp 11ty så behöver vi skapa ett startskript i ```package.json```. Detta gör vi genom att lägga till en ny rad i ```scripts```-objektet.

```json
"scripts": {
    "start": "eleventy --serve"
}
```

# Vad är Eleventy då?

Eleventy är en static site builder, eleventy bygger statiska webbsidor. Eleventy är ett verktyg som ger dig mer kontroll, bättre arbetssätt och en förbättrad utvecklingsupplevelse (Developer experience, DX) med grundläggande webbtekniker som HTML, CSS och JavaScript. Det utan att förlita sig på stora bygg eller ramverk som påverkar användarens upplevelse (User experience, UX).

Eleventy underlättar arbetet med html med hjälp av template-språk. I den här guiden kommer du att använda [Markdown](https://www.markdownguide.org/) tillsammans [Nunjucks](https://mozilla.github.io/nunjucks/).

Markdown är fantastiskt, lär dig det, använd det. Nunjucks är en smaksak, Eleventy stöder ett stort antal template-språk om du inte gillar Nunjucks. Ett tips för att göra arbetet med Nunjucks lite enklare är att säga åt VS code att hantera ```njk``` som ```html```.

**Tips du kan skriva markdown i google docs.**

## Ett exempel

För att skapa en html-sida från en markdown fil behöver du inte göra mer än att skapa en markdown fil i projektets rot. Kalla filen för `index.md`.

```markdown
# Hello world

Markdown till html med [11ty](https://11ty.dev)!
```

Nu kan du testa att bygga sidan med Eleventy. Kör `npm start` i terminalen. Detta kommer att starta en lokal webbserver på http://localhost:8080/. Öppna sedan addressen i din webbläsare. Du kan nu redigera `index.md` och se hur sidan uppdateras i webbläsaren (det sker med ett verktyg som heter Browsersync).

Om du undersöker den html som Eleventy skapat så hittar du den i mappen `_site`. Öppna filen `index.html` med VS code. Som du ser så har Eleventy omvandlat markdown till html, men det saknas grundläggande taggar för att skapa ett [validerande html-dokument](https://validator.nu/).

För att skapa ett komplett dokument så kommer behöver du konfigurera Eleventy att använda en template fil. Innan du kan göra det så behöver du skapa en mapp och konfigurationsfil. Kör följande kommandon från projektets rot.

```bash
mkdir src
touch .eleventy.js
```

I filen `.eleventy.js` finns Eleventys konfiguration. Öppna filen och redigera den. Den kod som följer är en minimal konfiguration för att komma igång. Det är en start och du kan alltid använda den som en grund. Du kan läsa mer om konfigurationen [här](https://www.11ty.dev/docs/config/).

```js
module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
```

Den här konfigurationen säger åt Eleventy att läsa innehållet från mappen `src` och att skriva ut det till mappen `dist`. Vi kommer att lägga våra markdown filer i `src` och Eleventy kommer att skapa html filer i `dist`.

Nu kan vi flytta `index.md` till `src` och skapa en template fil. Testa sedan att starta om Eleventy scriptet, ```npm start```. Projeket bör byggas utan problem, med skillnaden att Eleventy sparar html filer i `dist` istället för `_site`.

## Templates

Templaterna sparar till Eleventy sparas i mappen `src/_includes`. Mappen ```_includes``` är förkonfigurerad för att innehålla Eleventys templater, så systemet tittar automatiskt där. Som tidigare nämnt använder du [Nunjucks](https://mozilla.github.io/nunjucks/) som template-språk.

Skapa en ny fil i `src/_includes` och kalla den för `base.njk`. Den här filen kommer att innehålla grundläggande html-taggar för att skapa ett validerande html-dokument. 

```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    {{ content | safe }}
</body>
</html>
```

Som du ser så är det mer eller mindre ett html-dokument. Det som skiljer sig är att dokumentet använder variabler, `title` och `content`. Variablerna kommer att fyllas med data från markdown filerna. Variablerna är en del av hur Eleventy arbetar med templaterna, mer om det senare.

Innan template används så måste Eleventy veta att den ska användas för `index.md`. Valet av templat anges i markdown filen med frontmatter. Frontmatter är en del av markdown som används för att lägga till metadata till markdown filen. Frontmatter börjar och slutar med tre bindestreck. I exemplet nedan så anges att `base.njk` ska användas för att skapa html filen.

```markdown
---
layout: base.njk
title: Hem
---
```

## CSS fil

FÖr att kunna använda CSS filer så behöver du konfigurera Eleventy att kopiera dem till `dist`. Det gör du genom att lägga till följande kod i `.eleventy.js`.

```js
eleventyConfig.addPassthroughCopy("src/css");
```

Det kan även vara klokt att lägga till en watch task för att kunna se ändringar i CSS filerna direkt i webbläsaren. Eleventy kan göra det åt dig. Lägg till följande kod i `.eleventy.js`.

```js
eleventyConfig.addWatchTarget("src/css");
```

Skapa sedan en mapp, `src/css`, och lägg till en CSS fil. Kalla filen för `style.css`. I filen kan du lägga till några grundläggande CSS regler.

```css
body {
    --container-width: 80ch;
    font-family: sans-serif;
    width: min(var(--container-width), 100vw - 1rem);
    margin-inline: auto;
}
```

Uppdatera sedan `base.njk` så att den använder CSS filen.

```html
    <link rel="stylesheet" href="/css/style.css">
```

## Flera sidor

Eleventy kan skapa flera sidor från markdown filer. Det gör du genom att lägga till en ny markdown fil i `src`. Kalla filen för `om.md`. I filen kan du lägga till följande innehåll.

```markdown
---
layout: base.njk
title: Om
---
Om den här sidan.
```

## Navigation

För att länka mellan sidorna du skapat hittils så kan du bygga en navigation. Ett sätt att göra det är att skapa en separat Nunjucks fil som innehåller navigationen. Skapa en ny fil i `src/_includes` och kalla den för ```navigation.njk```. I filen kan du lägga till följande innehåll.

```html
<nav>
    <ul>
        <li><a href="/">Hem</a></li>
        <li><a href="/om/">Om</a></li>
    </ul>
</nav>
```

Nu kan du lägga till navigationen i `base.njk`.

{% raw %}
```html
<body>
    {% include "navigation.njk" %}
    <h1>{{ title }}</h1>
    {{ content | safe }}
</body>
```
{% endraw %}

```css
nav > ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 1rem;
}
```

## Data

Eleventy kan även använda något som kallas för datafiler. I datafiler så kan du spara data som kan användas i templaterna. Datafiler läses in från mappen `_data` automatiskt av Eleventy, likt `_includes`. Skapa mappen `src/_data` och en fil i den. Kalla filen för `navigation.json`. I filen kan du lägga till följande innehåll.

```json
[
    {
        "title": "Hem",
        "url": "/"
    },
    {
        "title": "Om",
        "url": "/om/"
    }
]
```

Datafiler kan vara i formatet JSON, YAML eller JavaScript. I exemplet ovan så används JSON. Nu kan du använda datafilen i templaten. Uppdatera `navigation.njk` för att använda datafilen.

```html
<nav>
    <ul>
        {% for item in navigation %}
            <li>
                <a href="{{ item.url }}">{{ item.title }}</a>
            </li>
        {% endfor %}
    </ul>
</nav>
```

Det som sker i templaten är att variabeln `navigation` fylls med data från datafilen. Med hjälp av [Nunjucks for loop](https://mozilla.github.io/nunjucks/templating.html#for) så skapas sedan en lista med länkar.

## Collections

Istället för ett innehåll skapat i datafiler så kan Eleventy skapa samlad data från innehållet på webbplatsen. Om du tillexempel skapar innehåll för en blogg så kan du använda collections för att skapa en lista med alla blogginlägg. För att testa detta så skapa en ny markdown fil i `src` och kalla den för `blog.njk`. Lägg till följande innehåll.

```markdown
---
layout: base.njk
title: Blogg
---
Alla blogginlägg
```

Notera att filen ovan är en Nunjucks fil istället för en markdown fil. Det gör att Eleventy inte kommer att läsa in innehållet i filen som markdown utan som Nunjucks. På det sättet så kan du använda Nunjucks syntax i filen tillsammans med frontmatter.

Nästa stycke kod använder [Eleventy collections](https://www.11ty.dev/docs/collections/) för att skapa en lista över alla blogposts. Det är väldigt användbart och kan användas för att skapa eller visa data.

```html
<ul>
{% for post in collections.blog %}
    <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
    {{ post | log }}
{% endfor %}
</ul>
```

I templaten så används variabeln `collections` för att hämta data från innehållet, i det här fallet allt innehåll taggat med "blog". Med hjälp av en for loop så skapas sedan en lista med blogginlägg.

Än så länge så har du bara skapat en sida för att visa en lista över alla sidor taggade med "blog". De faktiska blogginläggen som ska visas ska du skapa i en egen mapp. Skapa mappen `src/blog`. I mappen kan du sedan använda en ytterligare Eleventy funktion, mapp-datafiler. Mapp-datafiler är json filer som innehåller data som appliceras som frontmatter på alla filer i mappen. Skapa en fil i `src/blog` och kalla den för `blog.json`. Lägg till följande innehåll.

```json
{
    "layout": "base.njk",
    "tags": "blog"
}
```

Det filen `blog.json` kommer att göra är att sätta layouten till `base.njk` och taggen till `blog` på alla filer i mappen. Tags kan vara en enkel sträng eller en array av strängar. Nu kan du skapa markdown filer i mappen `src/blog` och de kommer att använda layouten och taggen som du har satt i `blog.json`.

Skapa en ny markdown fil i `src/blog` och kalla den för `first-post.md`. Lägg till följande innehåll.

```markdown
---
title: First post
---
Detta är min första bloggpost.
``` 

Uppdatera nu navigationen så att du kan surfa till din blog.

```json
{
    "title": "Blogg",
    "url": "/blog/"
}
```

Nu kan du testa att skapa fler blogginlägg och se att de dyker upp i listan. Om du är uppmärksam kanske du märkte att filnamnet blev `first-post`, engelska för första inlägg. Detta för att undvika svenska tecken i filnamnet. Det går såklart att lösa, men mer om det senare.