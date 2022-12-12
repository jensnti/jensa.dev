---
title: Advent of code 2022
date: 2022-12-02
lead: 'Det är dags igen!'
tags: ['koda', 'advent of code']
category: anteckning
---

Igår drog [Advent of Code](https://adventofcode.com/) igång igen och jag kan verkligen rekommendera det. Utmana dig själv och försök lösa så många problem som möjligt. Du kommer att få parsa massor med data och hantera den på olika sätt, supernyttigt.

Förra året så lärde jag mig massor med bra saker tycker jag och hoppas på samma i år igen. Utmaningarna blev svårare och svårare och jag stötte på patrull nånstans mot slutet då det krävdes lite mer matte än vad jag kanske är van vid.

Hursomhelst så är målet i år att ta mig tiden till att förstå det samt att tvinga nån kollega (Magnus) att förklara grafteori och pathfindig för mig.

## Köra med JavaScript

Jag kör med javascript och tänkte lite kort bara skriva om hur du kan köra med node för att lösa problemen. Om du är elev på skolan så vet jag att de flesta av er kör med Java, men det kan vara värt att prova något annat också.

* Se till att du har [node installerat](posts/webbserver-programmering/#nodejs)
* Skapa en ny mapp för projektet ```mkdir aoc2022```, och navigera till den med ```cd aoc2022```
* Initiera ett nytt repo (så du kan spara hur det går med Git och jobba från olika datorer) ```git init```
* Initiera ett nytt npm projekt ```npm init -y```
* Kör igång vscode

I filen ```package.json``` så under ```scripts``` så lägger du till följande:

```diff-json
"scripts": {
    ...
+    "start": "node index.js"
}
```

Detta gör att du kan köra ```npm start``` för att köra din kod.

För att läsa in data från filer (både testinput och input) så använder du dig av [fs](https://nodejs.org/api/fs.html) och [path](https://nodejs.org/api/path.html) modulerna. Detta gör att du kan läsa in data från filer som ligger i samma mapp som din kod. Detta gör att du kan köra din kod mot testdata och sedan mot riktig data.

```javascript
const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
```

Nu är du redo att jobba med Advent of Code. Lycka till och prata med oss lärare om du behöver komma åt skolans leaderboard.


