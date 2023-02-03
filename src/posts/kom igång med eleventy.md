---
title: Kom igång med Eleventy
date: 2022-09-29
tags: ['webbutveckling', 'setup', '11ty', 'wsl']
templateEngineOverride: njk, md
category: resurser
summary: Eleventy har blivit en av mina favoritverktyg när det handlar om att skapa webbsidor. Det är ett otroligt bra verktyg för att generera html från markdown tillsammans med massa andra praktiska funktioner. I det här inlägget går jag igenom hur du kommer igång med Eleventy.
---

Det här inlägget riktar sig främst till dig som läser Webbutveckling 2 där vi använder [Eleventy](https://11ty.dev). Jag har tidigare skrivit om att använda [eleventy i klassrummet](/posts/arbeta-med-eleventy-i-klassrummet/), men det är om Eleventy hur fungerar i undervisningssyfte.

## Innan du kör igång

För att följa denna introduktion så kräver det att du har installerat Node, NPM och WSL, du kan hitta hur i [installationsposten för webbserverprogrammering](/posts/webbserver-programmering/).

Det är även en fördel om du har lite koll på markdown och javascript.

När jag började använda Eleventy för egen del så kodade jag igenom den här [videoserien](https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3). Det är såklart frivilligt men kan vara ett alternativ för dig som föredrar video.

## Vad är Eleventy då?

{% image "./src/images/11ty-mascot.png", "11ty mascot", "20vw" %}{.float-right} 

Eleventy är en static site builder, eleventy bygger statiska webbsidor. Eleventy är ett verktyg som ger dig mer kontroll, bättre arbetssätt och en förbättrad utvecklingsupplevelse (Developer experience, DX) med grundläggande webbtekniker som HTML, CSS och JavaScript. Det utan att förlita sig på stora bygg eller ramverk som påverkar användarens upplevelse (User experience, UX).

Eleventy är inte svaret på alla utvecklingsutmaningar, men det är ett verktyg och det är ditt jobb som utvecklare att veta när det passar att använda.

Eleventy underlättar arbetet med html med hjälp av template-språk. I den här guiden kommer du att använda [Markdown](https://www.markdownguide.org/) tillsammans [Nunjucks](https://mozilla.github.io/nunjucks/).

Markdown är fantastiskt, lär dig det, använd det. Nunjucks är en smaksak, Eleventy stöder ett stort antal template-språk om du inte gillar Nunjucks. Ett tips för att göra arbetet med Nunjucks lite enklare är att säga åt VS code att hantera ```njk``` som ```html```.

>Tips du kan skriva markdown i google docs.

## Hur?

Skapa en ny mapp för ditt projekt och initialisera ett nytt projekt med npm där. Kommandot ```npm init -y``` skapar ```package.json```.

```bash
mkdir 11ty-intro
cd 11ty-intro
npm init -y
```

Den skapade filen ```package.json``` ser ut så här.

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
### Installation

För att installera Eleventy skriver du ```npm install @11ty/eleventy```. Detta kommer att installera Eleventy och lägga till det som en dependency i ```package.json```.

Noter att nu skapas en ```package-lock.json``` som håller koll på vilka versioner av paket som används. ```package-lock.json``` är inte en fil som du ska redigera manuellt utan den skapas automatiskt av NPM.

I filen ```package.json``` så kan du se att Eleventy har lagts till som en dependency.

```json
"dependencies": {
    "@11ty/eleventy": "^1.0.2"
}
```

Innan du kan starta upp eleventy så behöver du skapa ett startskript i ```package.json```. Rediger filen och lägg till följande i ```scripts```.

```json
"scripts": {
    "start": "eleventy --serve"
}
```

### En första fil

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

I filen `.eleventy.js` finns Eleventy konfigurationen. Öppna filen och redigera den. Koden här nedanför är en minimal konfiguration för att komma igång. Det är en start och du kan alltid använda den som en grund. Du kan läsa mer om konfigurationen [här](https://www.11ty.dev/docs/config/).

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

Eftersom Eleventy nu utgår från ```src``` mappen så behöver du flytta innehållet dit. Flytta `index.md` till `src`. Kör sedan ```npm start```. Sidan bör fortfarande byggas, med skillnaden att Eleventy sparar html filer i `dist` istället för `_site`.

### Templates

Templaterna till Eleventy sparar du i mappen `src/_includes`. Mappen ```_includes``` är förkonfigurerad för att innehålla Eleventy templater, så Eleventy tittar automatiskt där. Template språket som den här guiden använder är [Nunjucks](https://mozilla.github.io/nunjucks/).

Skapa en ny fil i `src/_includes` och kalla den för `base.njk`. Den här filen kommer att innehålla grundläggande html-taggar för att skapa ett validerande html-dokument. 

{% raw %}
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
{% endraw %}

Som du ser så är det mer eller mindre ett html-dokument. Det som skiljer sig är att dokumentet använder variabler, `title` och `content`. Variablerna kommer att fyllas med data från markdown filerna. Variablerna är en del av hur Eleventy arbetar med templaterna. Notera att för variabeln ```content``` så används ett filter, `safe`. Detta är för att säkerställa att innehållet i variabeln inte filtreras bort. Det finns ett sort antal inbyggda [filter i Nunjucks](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) och du kallar på dem med `|` följt av filternamnet.

Innan en templat kan används så måste Eleventy veta att den ska användas, det behöver anges i `index.md`. Valet av templat anges i markdown filen med frontmatter. Frontmatter är en del av markdown som används för att lägga till metadata om markdown filen. Frontmatter börjar och slutar med tre bindestreck. I exemplet nedan så anges att `base.njk` ska användas för att skapa html filen.

```markdown
---
layout: base.njk
title: Hem
---
```

### CSS

För att kunna använda CSS filer så behöver du konfigurera Eleventy att kopiera dem till `dist`. Filerna behöver kopieras av systemet då dist mappen är något som byggs när du kör Eleventy. Skapa mappen ```src/css```. I mappen ```css``` skapar du sedan en css fil, ```style.css```. För att Eleventy ska kopiera mappen behöver du lägga till följande kod i `.eleventy.js`.

```js
eleventyConfig.addPassthroughCopy("src/css");
```

Nu kan du redigera css filen du har skapat. Lägg till följande kod.

```css
body {
    --container-width: 80ch;
    width: min(var(--container-width), 100vw - 1rem);
    margin-inline: auto;

    font-family: sans-serif;
}
```

Uppdatera sedan `base.njk` så att den använder CSS filen. Notera att sökvägen till filerna ska börja med ```/``` och aldrig heller innehålla ```src``` eller ```dist```.

```html
    <link rel="stylesheet" href="/css/style.css">
```

## Hur använder jag Markdown, Nunjucks och Eleventy?

Eleventy kan skapa flera sidor från markdown filer. För varje markdown fil i `src` skapas html. Testa detta genom att skapa en till fil, kalla den för `om.md`. I filen kan du lägga till följande innehåll.

```markdown
---
layout: base.njk
title: Om
---
Om den här sidan.
```

### Navigation

För att länka mellan sidorna du skapat hittills så kan du bygga en navigation. Ett sätt att göra det är att skapa en separat Nunjucks fil som innehåller navigationen. Skapa en ny fil i `src/_includes` och kalla den för ```navigation.njk```. I filen kan du lägga till följande innehåll.

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

### Data

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

## Avslutning och fortsättning

Detta är en introduktion till att bygga statiska sidor med Eleventy som verktyg. Mer information och instruktioner kommer då du får lära dig att utöka innehållet på sidan.

Jag har valt att dela upp innehållet för att sidan inte skulle bli för lång. Du kan läsa mer om hur du kan utöka sidan i [Eleventy, del två](/posts/eleventy-del-tva/).
