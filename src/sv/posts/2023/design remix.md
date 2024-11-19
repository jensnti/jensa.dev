---
title: Design remix
emphasis: 1
date: 2023-02-02
summary: 'Det kliar alltid i fingrarna för att ändra på saker här på sidan och särskilt då jag hittar något nytt intressant. Efter att jag tittat på Andy Bells talk, "Be the browser’s mentor, not its micromanager" och applicerat det på en sida var jag helt enkelt tvungen att applicera det här.'
tags: ['redesign', 'css']
category: anteckningar
youtube: true
---

Jag har alldeles nyligen arbetat med att uppdatera min mors webbsida [skareus.se](https://www.skareus.se). Jag ville få bort en del konstiga val jag tyckte var bra när jag skapade sidan runt 2016 (tror jag). Men framförallt så saknades möjligheten för henne att uppdatera sidan själv.

Jag letade bland [Starter projects](https://www.11ty.dev/docs/starter/) och hittade [Eleventy Netlify Boilerplate](https://eleventy-netlify-boilerplate.netlify.app/), vilket fungerade utmärkt. Så det som kvarstod då var att skriva nya templater och css.

## Inspiration

Nu hade jag chansen att skriva om allt från grunden och använda nya lärdomar. Så jag passade på att titta på Andys talk – Be the browser’s mentor, not its micromanager för att inspireras och det gjorde det verkligen. Det är superintressant, smart och ger en fantastik grund att arbeta utifrån. Till presentationen så har han skapat en en demosida för att visa det han pratar om, [buildexcellentwebsit.es](https://buildexcellentwebsit.es/).

{% youtube '5uhIiI9Ld5M', 'Andy Bell – Be the browser’s mentor, not its micromanager' %}

Utöver detta så finns det även en 11ty starter baserat på presentationen, [eleventy-excellent](https://eleventy-excellent.netlify.app/), skapad av [Lene Saile](https://www.lene.dev/).

## Css och att skriva mindre och bättre css

Det händer att GitHub copilot läser mina tankar...

> Jag har alltid haft en känsla av att jag skriver för mycket css.

Så full av inspiration började jag med målet att skriva mindre css när jag designade om [skareus.se](https://www.skareus.se) och det gick rätt så bra tycker jag. Det var roligt att göra och såklart började det då klia i fingrar att göra om den här sidan också.

## Ny design

När jag designade den här sidan ( och samtidigt joxade med [tod](/projekt/tod) ) så läste jag en del om BEM, jag ville ha en systematik i min css. Jag använde mycket [Bootstrap](https://getbootstrap.com/) men för att lära mig mer så ville jag sluta med det. När jag sedan designade om den här sidan för nästan ett år sedan så levde så mycket css kvar från den gamla sidan. Det var inte bra.

### Ett blankt blad

Jag började med att ta bort all CSS för sidan och ta bort alla klasser från html koden. Det var utgångspunkten. Jag gjorde även en insats med att förenkla html koden och ta bort en massa onödiga element (samt ta bort lite nunjucks-macro-besvärlighet).

Efter det så kunde arbetet med att applicera den metodik som Andy föreslår börja.

-   Fluid type & Space, [Utopia](https://utopia.fyi/)
-   Flexible Layouts, en del eget men också från [Every Layout](https://every-layout.dev/)
-   Progressive Enhancement

Jag har inte följt allt fullt ut, men en hel del och det gör underverk tycker jag. Det jag känner och vill göra att eliminera så många specifika klasser som möjligt. Det kan vara så att jag går för långt, men det känns också som att den tidigarae designen var helt uppbyggd på klasser och undantag och det vill jag undvika.

## Resultatet

Ser du här och det är väl inte helt färdigt. Det är monotomt i färgvalet för det är där jag brukar landa, men jag ska fortsätta jobba på det. Det finns även en del som jag vill gå igenom igen och se om det går att göra bättre.

Jag tror att delen med koddemos kommer bli länkar till [Codepen](https://codepen.io/) istället för att ha koden direkt i sidan. Det är enklare att uppdatera och det blir lättare att dela. Sen är jag lur på att flytta resurserna till Git-Repos för att samla/versionshantera dem.

Så i vanlig ordning är cirkeln sluten, jag är tillbaka i det jag tänkte göra om. Men jag har lärt mig en del i processen 😊

Netlifys lighthouse plugin levererade även goda nyheter med uppdateringen:

{% image "./src/images/Screenshot 2023-02-03 131851.png", "Lighthouse score" %}

Det kan nog ha och göra med att jag rensat en hel del, men även bytt font från Typekit hostad till lokalt hostad [Work Sans](https://github.com/weiweihuanghuang/Work-Sans).
