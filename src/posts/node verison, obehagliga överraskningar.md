---
title: Node version, obehagliga överraskningar
date: 2022-10-06
tags: ['11ty', 'netlify', 'node']
category: anteckning
summary: "Det blir inte alltid som en tänkt sig och oväntade fel kan dyka upp som en obehaglig överraskning. Detta hände när jag skulle publicera en sida med 11ty och Netlify."
---

## Problem

Netlify kunde inte köra byggscriptet för [Tema, område, del](/projekt/tema-omrade-del/). Det felmeddelande som Netlify gav var kanske inte supertydligt heller.

```bash
5:53:08 PM: [11ty] Eleventy CLI Fatal Error: (more in DEBUG output)
5:53:08 PM: [11ty] 1. Error in your Eleventy config file '/opt/build/repo/.eleventy.js'. (via EleventyConfigError)
5:53:08 PM: [11ty] 2. Unexpected token '.' (via SyntaxError)
```

Som en stjärna ledde detta till att jag gjorde ett antal commits för att lösa problemet (som jag inte kunde reproducera lokalt), men inget fungerade. Det fungerade inte eftersom allt berodde på att min lokala Node version är 16+ och Netlify använde v12.18.0. Detta gjorde att Netlify failade och inte kunde bygga sidan.

## Lösning

Uppdatera Node version som Netlify använder, men hur?

Det finns två sätt att göra det på, antingen via Netlify UI eller via Netlify.toml.

### Via Netlify UI

1. Gå till din sida på Netlify
2. Klicka på "Site settings"
3. Klicka på "Build & deploy"
4. Klicka på "Edit settings"
5. Klicka på "Environment"
6. Klicka på "New variable"
7. Skriv in "NODE_VERSION" i "Name"
8. Skriv in önskad Node version i "Value"
9. Klicka på "Save"

### Via Netlify.toml

1. Skapa en fil som heter `netlify.toml` i roten för ditt projekt
2. Skriv in följande

```toml
[build]
  publish = "public"
  command = "npm run build"
  environment = { NODE_VERSION = "18" }
```

