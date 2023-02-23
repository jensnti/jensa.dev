---
title: J.Anteckningar
layout: pages/project.njk
templateEngineOverride: njk, md
tags: ['node', '11ty', 'javascript']
---

{% set project = projectsData | getProject(title) %}

## Vad

Den här webbsidan, ett pågående projekt.

{{ project.description }}

Den här projektsidan är tänkt att husera en dokumentation över de designer detta projekt har haft.

## Hur

Med den bästa stacken, {{ project.tech.join(", ") }} och hostad med {{ project.hosting }}. Jag tycker att [Eleventy](https://11ty.dev) är otroligt trevligt att arbeta med och jag gillar den teknik som det använder. Det är enkelt att komma igång med och det är enkelt att skala upp. Det är också enkelt att dela kod mellan olika sidor och det är enkelt att dela kod mellan olika projekt.

## Status

Sidan rullar på som du ser just nu. Jag bytte domän till .dev ganska nyligen. ~~Snart är det väl dags för en redesign igen eftersom det snart är ett nytt år...~~

## Skärmdumpar

Som dokumentation av de olika designerna så kommer här skärmdumpar med lite tankar/information om dem.

### Version 3 - 2023

{% image "./src/images/Ny-domän-J-Anteckningar.png", "Version 3 av jensa.dev, desktop" %}

Jag har skrivit om vad som ledde till denna [design remix här](/posts/design-remix/). Första steget är rätt färglöst, stealth-edition.

I nuläget så har det tillkommit en del färg, kalla det 3.1. Men som alltid så är det nog en temporär fas.

### Version 2 - 2022

{% image "./src/images/Screenshot 2023-02-03 130714.png", "Version 2 av jensa.dev, desktop" %}

{% image "./src/images/Screenshot 2023-02-03 130824.png", "Version 2 av jensa.dev, mobile" %}{.float-right .w-33}

Version 2 av sidan som nu har levt här i knappt ett år. Från början saknade den färger, men allteftersom har jag försökt att introducera dem. Färgerna kommer från [Ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu) som även är det tema jag använde för kod-exempel.

Grunden började i att testa `grid` och att jag gillar [Neue Grafik](https://en.wikipedia.org/wiki/Neue_Grafik). Jag hittade dessutom en snygg font som passade detta, [aktiv-grotesk](https://fonts.adobe.com/fonts/aktiv-grotesk). Tyvärr så är det eländigt att hosta fonter med Adobe fonts, vilket påverkade LightHouse-resultatet, negativt.

Hursomhelst så tackar jag denna design för allt jag lärde mig.

### Version 1 - 2021

En avskalad design med [Calluna](https://fonts.adobe.com/fonts/calluna) som font. Blåttish och orange. Strukturen skiljer sig inte så mycket från nuvarande design.

Jag skapade sidan som ett av mina första 11ty-projekt och tog mycket inspiration från [Hylia](https://hylia.website/).

{% image "./src/images/jensa.dev-v1-dark.png", "Version 1 av jensa.dev, darkmode" %}

{% image "./src/images/jensa.dev-v1-light.png", "Version 1 av jensa.dev, lightmode" %}
