---
title: Måltidsloggen
layout: pages/project.njk
templateEngineOverride: njk, md
tags: ['node', 'nextjs', 'sql']
---

{% set project = projectsData | getProject(title) %}

{% image "./src/images/matdump-1.png", "Skärmdump av Måltidsloggen",  "Skärmdump av Måltidsloggen" %}

## Vad

En webbsida / app för att logga dina måltider. Backend med node.js och pgsql för auth och att spara data. Backend finns på [github/jensnti/mat](https://github.com/jensnti/mat).Frontend med Nextjs.

## Varför

> Relationships are just two people constantly asking eachother what they want to eat, until one of them dies

Måltidsloggens koncept skapades vid middagsbordet. Tanken är att hjälpa dig hålla reda på vad du ätit/äter. När du saknar inspiration, inte kommer ihåg vad ni åt igår, eller bara är trött så kollar du Måltidsloggen. 

Syftet med Måltidsloggen är att hjälpa dig att snabbt och enkelt logga din mat.
Du kan sedan använda din sparade data för att:
* se din historik
* söka
* få tips
* eller bara minnas

{% image "./src/images/matdump-2.png", "Skärmdump av Måltidsloggen",  "Skärmdump av Måltidsloggen" %}
## Hur

Projektet började med att jag kodade en backend/microservice/api. Grundsyftet där var att skapa en api, testa någon form av auth (först [auth0](https://auth0.com/), sedan egen) och skriva tester (supertest, mocha, chai).

För frontend så var planen att jobba med ett ramverk och lära mig grunderna för det. Först skrev jag en [version 1](https://github.com/jensnti/mat-react) med  [React](https://reactjs.org/), men den kom att ersättas med en [version 2](https://github.com/jensnti/mat-nextjs) där jag använde [Nextjs](https://nextjs.org/) istället.

För frontend så är css-grunden gjord med Bootstrap. Jag testade även att göra en hel del animationer med [Framer](https://www.framer.com/motion/).

## Status

Hela kalaset behöver en gigantisk update och en hel del refactoring. Det var ett projekt där jag lärde mig React medans jag byggde det och det märks.

I nuläget är backend offline efter att Heroku tagit bort sin free-tier. 

