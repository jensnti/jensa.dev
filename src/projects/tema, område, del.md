---
title: Tema, område, del
layout: pages/project.njk
templateEngineOverride: njk, md
tags: ['node', '11ty', 'javascript']
---

{% set project = projectsData | getProject(title) %}

{% image "./src/images/toddump-1.png", "Skärmdump av sidan programmering skapad med TOD",  "Skärmdump av sidan programmering skapad med TOD" %}

## Vad

{{ project.description }}

Sidan, eller systemet har en struktur som behöver följas. Kursmaterialet delas upp i övergripande teman, varje tema består i sin tur av områden. De områden som temat består av delas i sin tur upp i ett antal delar. Varje del består av lite information, instruktioner och ett antal uppgifter. Det är i dessa uppgifter som det testbaserade lärandet kommer in.

### Demo

På [tod.jensa.dev](https://tod.jensa.dev) finns ett demo med instruktioner för hur sidan byggs (och hur du kan använda den). Det är dock inte helt uppdaterat.

Webbplatser skapade med systemet:

-   [Programmering](https://programmering.jensa.xyz/)
-   [Webbutveckling](https://webbutveckling.jensa.dev/)
-   [Git och GitHub](https://git.jensa.dev/)

## Hur

Sidan är skapad med {{ project.tech.join(", ") }} och hostad med {{ project.hosting }}.

Du som lärare eller skapare behöver inte nödvändigtvis kunna programmera eller 11ty, men det underlättar såklart. Materialet skrivs med markdown och kan lätt modifieras i en vanlig texteditor.

För användaren så fungerar sidan på det stora hela utan javascript, allt material går att använda och ta del av. Med javascript så får användaren möjlighet att markera uppgifter som slutförda, se hur långt de har kommit, anteckna och om så önskas installera sidan som en app.

## Status

Väldigt aktiv och sidan för [Webbutveckling](https://webbutveckling.jensa.dev) har fått en hel del nytt material. Problemet är väl ofta det att jag fastnar i att uppdatera systemet snarare än innehållet och när jag väl skriver innehåll hittar jag saker att uppdatera i systemet.

Tod för programmering ligger lite i träda eftersom jag inte undervisar Programmering 1 för tillfället. Det finns dock en tanke att göra om upplägget och börja med kod som gör något och sedan leda in vägen på variabler osv.
Uppgifterna behöver dock skrivas om för att följa den testbaserade lärandemodellen.
