---
title: Eleventy och sass
emphasis: 1
date: 2022-10-07
tags: ['webbutveckling', '11ty', 'css', 'sass']
category: resurser
summary: Hur du kan använda sass i Eleventy. Sass står för "Syntactically Awesome Style Sheets". Läs vidare för att få en grundläggande introduktion.
---

## Innan du kör igång

Se till att du kan skapa och få igång ett Eleventy-projekt. Behöver du hjälp med det så läs[Kom igång med Eleventy](/posts/kom-igang-med-eleventy/).

## SASS

[SASS](https://sass-lang.com/) är ett CSS-preprocessor som gör det möjligt att använda funktioner och variabler i CSS. Det gör att du kan skriva mindre kod och att du kan återanvända kod. Det finns två olika versioner av SASS, SCSS och SASS. SCSS är en superset av CSS och är mer likt CSS än SASS. I det här exemplet kommer jag att använda SCSS.

Mycket av funktionerna i SASS finns nu tillgängliga direkt i CSS, men det finns fortfarande många funktioner som inte finns i CSS. Det är därför som många fortfarande använder SASS och därför är det fortfarande relevant att du lär dig hur du kan använda SASS.

## Installera SASS

Du kan antingen välja att installera SASS globalt eller lokalt. För att installera npm paket global så används flaggan ```-g```. Eftersom du kommer (om du läser webbutveckling 2) att hosta ditt projekt på [Netlify](https://www.netlify.com/) så behöver du installera SASS lokalt. Detta eftersom Netlify kommer att behöva se och installera SASS i byggprocessen eftersom det är en dependency till ditt projekt.

```bash
npm install sass
```

## Setup för att använda SASS

Skapa en mapp i ditt projekt som heter ```src/sass```. I den mappen skapar du en fil som heter ```style.scss```. Notera att filändelsen är ```.scss``` och inte ```.css```. Detta eftersom vi vill använda SASS (med scss) och inte CSS.

Skapa en css-regel för att testa att SASS fungerar. I ```style.scss``` skriver du:

```scss
body {
  background-color: red;
}
```

Kommandot för att bygga din css från din sass-fil är som följer och det går att köra direkt i bash. Vill du veta mer kolla ```--help``` flaggan.

```bash
npx sass src/sass/style.scss:dist/css/style.css
```

Nästa steg är att skapa de script som kommer att kompilera din SASS till CSS. De scripten skriver du i ```package.json```.

De script du behöver är ett för att uppdatera sass när du utvecklar och ett script för att bygga sass när du publicerar. För enkelhetens skull så kopiera följande till ```package.json```. Innan du kan köra det så behöver du installera paketet ```npm-run-all```.

```json
    "watch:sass": "sass  --no-source-map --watch src/sass:dist/css",
    "watch:eleventy": "eleventy --serve",
    "build:sass": "sass  --no-source-map src/sass:dist/css",
    "build:eleventy": "eleventy",
    "start": "npm-run-all build:sass --parallel watch:*",
    "build": "npm-run-all build:sass build:eleventy"
```

## Eleventy config

För att dra nytta av SASS tillsammans med Eleventy så behöver du konfigurera Eleventy. Det gör du i ```eleventy.js```. För att de ändringar du gör i SASS filerna ska trigga en rebuild av Eleventy så behöver du konfigurera en watch target. Det gör du genom att lägga till följande i ```eleventy.js```.

```js
eleventyConfig.addWatchTarget("./src/sass/");
```

Nu startar du Eleventy med ```npm run start``` och du bör se att din bakgrundsfärg är röd. Detta eftersom vi satt bakgrundsfärgen till röd i ```style.scss```. Ändra färgen till något annat och se att det uppdateras i din webbläsare.

## CSS reset med SASS

En bra sak att ha som de flesta sidor behöver är en [CSS reset](https://meyerweb.com/eric/tools/css/reset/). Det är en CSS-fil som sätter alla element till samma värden. Det gör att du kan vara säker på att alla element har samma utseende oavsett vilken webbläsare du använder. Det finns många olika CSS resets men jag brukar oftast använda mig [Andy Bells modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/) version eller [Stephanie Eckles](https://github.com/5t3ph) modifierade version.

Den reset som jag använder på den här sidan finns på GitHub, [_reset.scss](https://github.com/jensadev/jensa.dev/blob/main/src/sass/global/_reset.scss). Du kan testa att använda den i din SASS-fil och se att den fungerar. Spara filen som ```_reset.scss```, ett understreck i filnamnet indikerar att det är en partial och att den inte ska kompileras till CSS.

För att använda den så behöver du importera den i din ```style.scss``` fil. Det gör du genom att skriva följande:

```scss
@use "reset";
```

## Nästa steg

Du har nu en grund för att kunna använda SASS med Eleventy, du kan börja med att skriva vanlig CSS i SCSS filen. Det fungerar bra så länge, men du kan nu allt eftersom lära dig mer om SASS och dess funktioner och inludera det i din CSS.

Ett tips är att kolla på [SASS dokumentationen](https://sass-lang.com/documentation) och [SASS guiden](https://sass-lang.com/guide).
