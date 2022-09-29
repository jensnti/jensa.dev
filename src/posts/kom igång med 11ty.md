---
title: Kom igång med 11ty
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
### Installera 11ty

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