---
title: Journal
layout: pages/project.njk
templateEngineOverride: njk, md
tags: ['python', 'i18n']
---

{% set project = projectsData | getProject(title) %}

{% image "./src/images/journal-screen.png", "Skärmdump av Journal programmet" %}

## Vad

{{ project.description }}

Programmet är inspirerat av [JournalBook](https://github.com/trys/JournalBook).



## Hur

Programmet är skrivet med [Python](https://www.python.org/), [i18n](https://github.com/danhper/python-i18n) för översättning och [pyinstaller](https://pyinstaller.org/en/stable/) för att skapa en körbar fil.

Programmet sparar journalerna i JSON format.

## Status

Hela projektet gick ut på att jag ville skriva ett program som gjorde något mer än absoluta grunderna och packetera ihop det. Detta för att helt enkelt göra lite mer i ett språk som jag annars använder för lite.

Jag har använt det själv, men saknar möjligheten att spara i molnet, så hela grejen är lite tveksam.

## Länkar

- Ladda ned senaste versionen: {{ project.url }}
- Koden finns på GitHub {{ project.git }}