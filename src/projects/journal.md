---
title: Journal
layout: pages/project.njk
project:
    start: 2021-05-03
    end: ?
    status: Kanske
    title: Journal
    git: https://github.com/jensnti/journal
    url: https://github.com/jensnti/journal/releases/tag/1.3
    licens: GPL-3.0
    tech: ["Python", "i18n"]
    hosting: 
    description: "Ett litet program för att skriva journalanteckningar i terminalen. Programmet frågar vanliga standup frågor och sparar svaren i en fil. Om användaren önskar så kan hen lägga till nya frågor. Programmet är skrivet i Python och använder sig av i18n för att hantera språk (engelska och svenska)." 
templateEngineOverride: njk, md
tags: ['python', 'i18n']
---

## Vad

{{ project.description }}

Programmet är inspirerat av [JournalBook](https://github.com/trys/JournalBook).


{% image "./src/images/journal-screen.png", "Skärmdump av Journal programmet" %}

## Hur

Programmet är skrivet med [Python](https://www.python.org/), [i18n](https://github.com/danhper/python-i18n) för översättning och [pyinstaller](https://pyinstaller.org/en/stable/) för att skapa en körbar fil.

Programmet sparar journalerna i JSON format.

## Status

Hela projektet gick ut på att jag ville skriva ett program som gjorde något mer än absoluta grunderna och packetera ihop det. Detta för att helt enkelt göra lite mer i ett språk som jag annars använder för lite.

Jag har använt det själv, men saknar möjligheten att spara i molnet, så hela grejen är lite tveksam.

## Länkar

- Ladda ned senaste versionen: {{ project.url }}
- Koden finns på GitHub {{ project.git }}