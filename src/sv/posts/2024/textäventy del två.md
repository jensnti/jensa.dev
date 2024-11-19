---
title: Textäventyr med javascript, en fortsättning
emphasis: 1
date: 2024-10-17
summary: Så vad händer på den andra sidan i textäventyret? I den här delen så använder vi den skapade strukturen för att presentera äventyret.
tags: ['javascript', 'böcker', 'spel']
category: anteckningar
toc: true
draft: true
---

När jag avslutade den föregående texten om textäventyr med javascript så hade vi skapat en struktur för äventyret och två funktioner vi kunde använda för att presentera äventyret. I den här delen kommer vi bygga vidare på detta.

## Funktionerna

För att presentera äventyret så skapade vi en funktion, `displayPage` som tog en sida som argument, skrev ut sidans beskrivning och val. 

```js
function displayPage(page) {
  console.log(page.description);
  page.choices.forEach((choice) => {
    console.log(choice.description);
  })
}
```

För att kunna använda den behövde vi kunna hitta rätt sida i äventyret. Detta löste vi med en funktion, `findPage` som tog ett id som argument och returnerade rätt sida.

```js
function findPage(id) {
  return book.find((page) => {
    return page.id === parseInt(id);
  })
}
```

## Presentera äventyret

Så vi använder funktionerna för att hitta en sida och sedan presentera den. Detta görs i en loop som upprepas tills äventyret är över.

Vi kommer inte riktigt introducera den loopen ännu, utan först ska vi arbeta lite med presentation av sidan och att faktiskt göra detta med HTML. Det låter oss utforska lite hur du kan använda javascript för att manipulera HTML.