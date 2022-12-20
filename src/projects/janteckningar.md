---
title: JAnteckningar
layout: pages/project.njk
project:
    start: 2021-06-13
    end: ?
    status: Aktivt
    title: JAnteckningar
    git: https://github.com/jensnti/jensa.dev
    url: https://jensa.dev
    licens: GPL-3.0
    tech: ["[11ty](https://11ty.dev)", "javascript", "[sass](https://sass-lang.com)"]
    hosting: "[Netlify](https://netlify.com/)"
    description: "Personlig webbplats med mina anteckningar och projekt. Innehåller även kursmaterial från mina kurser." 
templateEngineOverride: njk, md
tags: ['node', '11ty', 'javascript']
---

## Vad

Den här webbsidan!

{{ project.description }}

Den här projektsidan är tänkt att husera en dokumentation över de designer detta projekt har haft.

## Hur

Med den bästa stacken, {{ project.tech.join(", ") }} och hostad med {{ project.hosting }}.

## Status

Sidan rullar på som du ser just nu. Jag bytte domän till .dev ganska nyligen. Snart är det väl dags för en redesign igen eftersom det snart är ett nytt år...

## Screeshots

### Version 1 - 2021

En avskalad design med [Calluna](https://fonts.adobe.com/fonts/calluna) som font. Blåttish och orange. Strukturen skiljer sig inte så mycket från nuvarande design.

Jag skapade sidan som första 11ty-projekt och tog mycket inspiration från [Hylia](https://hylia.website/).

{% image "./src/images/jensa.dev-v1-dark.png", "Version 1 av jensa.dev, darkmode" %}

{% image "./src/images/jensa.dev-v1-light.png", "Version 1 av jensa.dev, lightmode" %}