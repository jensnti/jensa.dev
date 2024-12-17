---
title: Jul och partikelsnö
emphasis: 3
date: 2024-12-17
summary: "Det måste såklart snöa och förr eller senare så skriver vi alla en partikelgenerator."
tags: [ 'javascript', 'jul']
---

I flera år har vi avslutat terminen med att skapa någon form av julkort (eller vinterkort). Korten har kommit i lite olika former men de flesta har inkluderat någon form av partikelsnö. Så även i år och nu har jag använt koden på den här sidan också.

>Nej, se det snöar, nej, se det snöar, det var väl partiklar, hurra!

## Hur funkar det?

För att skapa och rita ut partiklarna använder jag mig av ett canvas-element. Med javascript ritas sedan partiklarna ut på canvasen. Partiklarna rör sig sedan i slumpmässiga riktningar och hastigheter. När en partikel har rört sig tillräckligt långt utanför canvasen så tas den bort och en ny partikel skapas.

Själva uppdateringen och ritandet av partiklarna sker i en loop som körs med `requestAnimationFrame`.

## Uppgiften

Uppgiften jag skapat finns på [Github - wu1-vinter](https://github.com/jensadev/wu1-vinter), den är gjort för kursen webbutveckling 1. Eftersom det är i webbutveckling 1 så finns inga krav på programmering.

Inlämningen sker i form av en julhälsning med sidan hostad på Github Pages.

### Variant för webbserver

Vi har även gjort en julkorts-variant för webbserverprogrammering 1, där vi använder query parametrar på en Express-server för att skapa en personlig hälsning. Servern hostar vi på [Glitch - Vinterkort](https://perfect-delirious-mambo.glitch.me/?title=God%20jul&message=med%20webbserver).

Inlämningen är även här en länk med julhälsning.

## Säkerhet

För att ha ett uns säkerhet så ändras värdet på frontend varianten av sidan med element.textContent istället för innerHTML. Detta för att undvika att någon skickar in skadlig kod i query parametrarna.

På backend varianten så används query parametrarna för att skapa hälsningen, men eftersom det går genom nunjucks så säkras innehållet. Vill du testa den osäkra varianten så behöver du använda `safe` filtret i din nunjucks-template.

En [säker jul](https://perfect-delirious-mambo.glitch.me/?r=20&g=250&b=190&title=%3Cscript%3Ealert(%22xss%22)%3C/script%3E&message=%3Cscript%3Ealert(%22xss%22)%3C/script%3E) till er alla.

## Sammanfattning

Så med det sagt, jag önskar er alla en riktigt god jul och ett gott nytt år!

Letar du koden så finns den på GitHub.