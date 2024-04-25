---
title: Spelsite - En samlingsida för elevarbeten
layout: pages/project.njk
templateEngineOverride: njk, md
tags: ['javascript', '11ty', 'jobb', 'puppeteer']
---

{% set project = projectsData | getProject(title) %}

{% image "./src/images/2023-Spelutveckling.png", "Skärmdump av sidan" %}

## Vad

{{ project.description }}

Från och med 2018 har det blivit en tradition på teknikprogrammet att utveckla webbspel som en del av kursen. Jag insåg att det fanns ett behov av att samla alla elevers projekt för att kunna visa upp deras arbete. Därför skapade jag en sidmall för att göra detta möjligt.

## Hur

Sidan är skapad med hjälp av 11ty. Den återspeglar nog väl vad jag tyckte var viktigt och hur jag jobbade 2021.

## Status

För varje år som går blir det fler spel i olika former.

Jag vet att sättet spel representeras på sidan skulle behöva förbättras. Det borde helt göras från `.json` filer för att bespara mig elände.

Det finns även en sida jag skapat för att visa elevernas clicker-spel som jag brukar köra i webb-1 och den sidan borde också integreras i denna sidan. Den finns på [clickers](https://clickers.umea-ntig.se/).

För den sidan skrev jag även ett script med [puppeteer](https://pptr.dev/), [getimage](https://github.com/jensadev/getimage) för att automatisera skärmdumpar av spelen, något som jag borde göra för denna sidan också.

## Länkar

- Testa projektet: {{ project.url }}
- Koden finns på GitHub {{ project.git }}
- Testa [clickers](https://clickers.umea-ntig.se/)
- Koden finns på GitHub https://github.com/jensadev/11ty-clicker-collection