---
title: Den engelska versionen har landat
emphasis: 2
date: 2024-10-08
summary: "Känn lugnet och koda vidare!"
tags: [ 'i18n', 'english', 'translation']
---

Det är en sanning med modifikation att allt innehåll på den här sidan är tillgängligt, men nu finns i alla fall möjligheten för mig att skriva på engelska.

Om allt fungerar som det ska så kommer innehållet för ditt valda språk att visas, startsidan kommer även att finnas på `/`, övriga sidor kommer att finnas på `/sv/` eller `/en/`. Så på grund av detta så kommer det förmodligen att bli 404:or. Vi får se hur Netlify hanterar mina omdirigeringar.

## Hur fungerar det?

Eleventy har stöd för att skapa flerspråkiga sidor och det är det jag har använt för att skapa en engelsk version av den här sidan. Om du är intresserad så går det att läsa mer på den [officiella dokumentationen](https://www.11ty.dev/docs/i18n/). Men på en sida som den här som faktiskt växt en hel del (innehållsmässigt) sen jag startade så var det inte helt enkelt. Av den anledningen så letade jag runt lite efter material och hittade en bra guide på Lene Sailes blogg, [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/).

Systemet och hur Eleventy fungerar gör så att för de sidor och poster som finns på både språken så visar navigation, både i navigationen och i sidfoten, att det finns en engelsk/svensk version tillgänglig. I bakgrunden så betyder det att det finns en fil som heter samma i mappstrukturen.

```plaintext
src
├── en
│   ├── index.md
│   ├── posts
│   │   ├── 2024
            ├── den engelska versionen har landat.md
└── sv
    ├── index.md
    ├── posts
        ├── 2024
            ├── den engelska versionen har landat.md
```

Sen skapas collections utifrån vilket språk som är det aktiva. Det gör att jag kan visa enbart de poster som är på det aktiva språket.

## Innehållet och översättningen

När det gäller innehållet så kommer det ofta vara en översättning gjord av en maskin, det är inget jag kommer att låtsas att jag har gjort. Men det betyder inte att jag inte kommer ändra i texten och redigera texten för att göra den mer läsbar. Med tanke på det så tänker jag att jag kommer ange källa för översättningen.

Det finns en viktig kvalite att behålla när en använder AI och det är en den personliga rösten. Det är något som väldigt lätt kan försvinna och det är inget AI kan skapa.

## Återkoppling

Om du hittar något som inte stämmer eller om du har något att säga om översättningen så får du gärna kontakta mig. Jag är öppen för att ta emot feedback och för att förbättra innehållet.

{% include "layouts/contact-form.njk" %}