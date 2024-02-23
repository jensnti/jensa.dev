---
title: Skolbesök - quiz app
layout: pages/project.njk
templateEngineOverride: njk, md
tags: ['javascript', 'react']
---

{% set project = projectsData | getProject(title) %}

{% image "./src/images/skolapp.png", "Skärmdump av appen" %}

## Vad

{{ project.description }}

## Hur

Appen är skriven med React, det kändes som att det var lämpligt. Bild genererat med Adobe Firefly. 

Jag fick bra hjälp med testning av bonusdotter och teknikettorna på skolan.

## Status

Runt 10 timmars arbete har lagts ner på projektet. Det är en slags fungerande prototyp. Troligtvis blir det inget mer jobb på den, men det är ett projekt som kan användas i pedagogiskt syfte framöver.

Det finns gott om saker att refaktorisera om en säger så.

## Länkar

- Testa projektet: {{ project.url }}
- Koden finns på GitHub {{ project.git }}