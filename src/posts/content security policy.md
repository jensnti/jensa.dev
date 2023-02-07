---
title: Content Security Policy
date: 2023-02-07
summary: "Säkerhet på webben alltid aktuellt och alltid viktigt. Content Security Policy är ett sätt att säkra webbplatsen från attacker."
tags: [ 'säkerhet', 'csp']
category: anteckningar
---

*[CSP]: Content Security Policy

CSP är en HTTP response header som säkerställer att webbsidor inte kan ladda in innehåll från andra källor än de som är tillåtna. Detta är ett sätt att förhindra attacker som Cross Site Scripting (XSS) och Cross Site Request Forgery (CSRF). Mer att läsa om det finns här på [Content-Security-Policy - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

Jag har tidigare tänkt på att fixa detta för den här webbplatsen, men inte riktigt kommit mig för detta. Men av en händelse så kollade jag [Mozilla Observatory](https://observatory.mozilla.org/), en tjänst för att testa webbplatsens säkerhet. Resultatet för den här sidan var inte jättebra och en stor del av det beroende på att jag inte hade någon CSP.

## Fixa en CSP

Eftersom den här sidan hostas på Netlify och byggs med 11ty så började jag att leta lite utifrån det. På Netlify så kan en CSP anges i antingen `netlify.toml` eller i `_headers` (finns säkert [fler sätt](https://docs.netlify.com/routing/headers/)).

Jag hittade ett [_headers exempel](https://github.com/nhoizey/nicolas-hoizey.photo/blob/main/src/_headers.njk) för att bygga en `_headers` fil med `.njk` som verkade ganska rimlig, men problemet var att den inte löste att jag har stilarna inline i min HTML på sidan. Det går att lösa genom att köra `unsafe-inline` för stilarna i CSP, men konsensus verkar vara att då är det bättre att inte ha någon CSP alls.

Jag joxade lite med att hasha script strängen (som det är) med sha i byggprocessen men jag tänkte att det borde finnas en enklare lösning.

## Netlify plugins

Jag hittade ett plugin [Netlify plugin csp generator](https://github.com/MarcelloTheArcane/netlify-plugin-csp-generator) för att automatisera skapandet av en CSP och hasha inline styles. Pluginet konfigureras i `netlify.toml` och genererar headers när projektet byggs.

Efter lite testande och fix så verkade det mesta funka, men sidan ger errors på inline styles, så något ställer till det. Så det finns lite kvar att göra.

## Resultat

En bra mycket bättre score på [Observatory](https://observatory.mozilla.org/analyze/jensa.dev) och med detta en säkrare webbplats för dig som besöker den.

För min egen del så lite nya och utökade lärdomar om webbplatsers säkerhet.