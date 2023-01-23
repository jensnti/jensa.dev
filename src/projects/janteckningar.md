---
title: JAnteckningar
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

### Version 1 - 2021

En avskalad design med [Calluna](https://fonts.adobe.com/fonts/calluna) som font. Blåttish och orange. Strukturen skiljer sig inte så mycket från nuvarande design.

Jag skapade sidan som första 11ty-projekt och tog mycket inspiration från [Hylia](https://hylia.website/).

{% image "./src/images/jensa.dev-v1-dark.png", "Version 1 av jensa.dev, darkmode" %}

{% image "./src/images/jensa.dev-v1-light.png", "Version 1 av jensa.dev, lightmode" %}
