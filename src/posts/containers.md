---
title: Containers
date: 2024-09-02
summary: "Ett test, ett nytt sätt, ett resultat?"
tags: ['css', 'layout']
category: anteckningar
draft: false
---

Containers har funnits i olika former på webben i evigheter, men deras funktion och användning har varierat över tid. När jag tittade tillbaka på en webbsida jag kodade <time datetime="1999-01-01">1999</time>, så var innehållet i en container. Den containern var förvisso en `<div>` med `align="center"` som innehöll ett `<center>`-element som i sin tur innehöll ett table med `width="800px"`, men det tjänade samma syfte. Tack och lov har mycket förändrats sedan dess!

Syftet med en container, eller med en `.container`-klass är att kunna justera och placera innehåll på en webbplats. Innehållet ska med fördel då även anpassa sig efter skärmens storlek (ett måste idag).

Om vi öppnar utvecklar-verktygen och aktiverar grid-linjer så ser vi dels de linjer som sidans innehåll anpassar sig efter. Vi kan även se måtten för padding och margin för det valda elementet (finns under computed).

{% image "./src/images/Screenshot 2024-09-03 122610.png", "Screenshot av containers på den här webbplatsen" %}


## Ord och begrepp

Ord är viktiga och ibland kallas även containers på webben för wrappers. Det är inte riktigt samma sak, men de används ibland synonymt. En container är en behållare för innehåll, medan en wrapper omsluter innehållet. Det är upp till dig att välja den semantik som passar ditt arbete bäst

## Exempel

Jag har skapat några exempel på CodePen för att illustrera olika containers. Jag har använt dem i olika projekt, och de har tjänat mig väl. `.container`-klassens utveckling har följt med nya möjligheter i CSS och blir bara bättre och bättre.

<div class="feature">
<p class="codepen" data-height="600" data-default-tab="html,result" data-slug-hash="rNEqLEQ" data-user="jensadev" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/jensadev/pen/rNEqLEQ">
  Navbars</a> by Jens Andreasson (<a href="https://codepen.io/jensadev">@jensadev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</div>

Här är ett exempel på en uppdaterad container från [SmolCSS.dev](https://smolcss.dev/#smol-container), den känns igen från min länkade codepen ovan.


## Den här sidan, just nu

I den nuvarande iterationen av den här webbplatsen, 2024, valde jag att testa en ny teknik för att skapa containers. Tidigare har jag experimenterat med olika metoder för att återskapa bleed-effekter på sidan. Bleed kommer från tryckvärlden och innebär att innehållet går ut över sidans kanter. Dessa layouteffekter var jag inte nöjd med och tyckte inte att de fungerade bra.

Så det du nu ser är ett helt annat sätt att skapa containers och det är med namngivna grid-areas.

### Inspiration

Koden och inspirationen till detta kommer från en video av Kevin Powell där han visar ett alternativ till den klassiska container. Det gjorde mig nyfiken att testa.

{% youtube 'c13gpBrnGEw', 'Kevin Powell, A new approach to container and wrapper classes' %}

Ursprunget till detta kommer från Ryan Mulligan och här kan du läsa hans artikel om [Layout breakouts with css grid](https://ryanmulligan.dev/blog/layout-breakouts/).

## Vad ska du använda

Det beror på dina behov. I mitt fall önskade jag extra kontroll, men insåg att jag var fast i en struktur skapad utifrån en klassisk container-klass. För att få till funktionen fick jag skriva om en hel del HTML och tänka om. Resultatet är inte riktigt där ännu, men det är som alltid en work in progress.

## Avslutning

Som vanligt leder upptäckten av ny teknik till en redesigna av den här webbplatsen... Verkar rimligt, kan till och med vara sidans egentliga syfte.
