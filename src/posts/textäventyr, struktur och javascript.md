---
title: Textäventyr, struktur och javascript
date: 2023-09-28
summary: Ett textäventyr kan vara många saker, mina tankar går till ett spel i textform, men en bra skönlitterär bok borde väl kunna kvala in som ett textäventyr.
tags: ['javascript', 'böcker', 'spel']
category: anteckningar
---

 I den här texten kommer jag dock fokusera på det förstnämnda, ett spel i textform, och framförallt på hur det kan användas för att arbeta med grunderna i javascript.

## Vad är ett textäventyr?

Ett textäventyr är ett spel där du får en beskrivning av en situation och sedan får du välja vad du vill göra. Beroende på dina val så kan du hamna i nya situationer och så fortsätter berättelsen. Det som skiljer textäventyret från en bok är att händelserna inte är linjära, handlingen är inte förutbestämd. Det är du som spelare som styr handlingen. Det kan liknas vid ett träd där varje val du gör leder till en ny situation.

När jag var lite så spelade jag en del textäventyr i bokform, det kallades för [soloäventyr](https://sv.wikipedia.org/wiki/Solo%C3%A4ventyr) eller [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) på engelska. Det var en bok där du läste en beskrivning av en situation och sedan fick du välja vad du ville göra. Beroende på ditt val så fick du hoppa till en ny sida i boken och läsa en ny beskrivning av en situation. Fler av böckerna jag läste var i serien om [Ensamma vargen](http://www.ensamma-vargen.se/), en fantasyserie där du var hjälten.

## Men javascript då

Premissen för denna text är kopplingen till kod och javascript, så nog om böcker. Textäventyret lämpar sig väl för denna form av koduppgiften tycker jag eftersom den ger möjlighet att utforska flera viktiga koncept.

Ett linjärt äventyr behöver i sig inte så mycket kod, du läser en linjär berättelse just nu (kanske en kan argumentera). Men när läsaren presenteras val och dessa val inte bara leder vidare till nästa sida i boken, utan till en ny situation, då behövs det kod. Det behövs kod för att hålla reda på vilken situation läsaren befinner sig i, vilka val som finns och vilka situationer som valen leder till.

En stor del av uppgiften att översätta äventyret till kod landar naturligt i att skapa en struktur för äventyret och i förlängningen en struktur för koden. Detta är en viktig del av programmering, att kunna skapa strukturer för att hantera data.

## Kom igång

Ett första steg i att koda ett äventyr av det här slaget brukar ganska ofta se ut som följer.

```js
console.log("Du vaknar upp i ett rum. Du ser en dörr och ett fönster.");
console.log("Vad vill du göra?");
console.log("1. Gå till dörren");
console.log("2. Gå till fönstret");

let val = prompt("Vad väljer du? ");
```

Nästa steg är en if-sats som hanterar valet. Denna if-sats har en tendens att växa och växa och sedan leder den till nästlade if-satser. Byt ut fear mot if-satser...

>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.

Detta är ett exempel där kodaren börjar med att koda utan att tänka på strukturen. Det är inget konstigt och ett naturligt steg i att lära sig lösa problem med kod.

## Struktur

Om en istället börjar med att tänka på strukturen så kan en komma fram till att det finns ett antal saker som behöver hanteras.

- Situationer
- Val
- Spelarens val
- Spelarens position

Men för att kunna översätta detta i kod så krävs det kunskap och förståelse om flera koncept. 

Äventyret i sig, berättelsen är en händelse som upprepas om och om igen. Spelaren får en text presenterad för sig, sedan utför spelaren ett val som leder till en ny situation. Detta är en loop som upprepas tills äventyret är över.

```js
while (spelet ska fortsätta) {
    // presentera situation
    // presentera val
    // spelaren gör ett val
    // spelaren hamnar i en ny situation
}
```

Om spelet är linjärt som en bok så kan vi till exempel spara innehållet i en array, där varje position innehåller en sida i boken.

Du kan provköra koden genom att klistra in den i din webbläsares konsol.

```js
let book = [
  "Du vaknar upp i ett rum. Du ser en dörr och ett fönster.",
  "Du går till dörren.",
  "Du går till fönstret."
]

book.forEach((page) => {
  console.log(page);
})
```

## Situationer och val

Textäventyret är inte ett linjärt äventyr och spelaren presenteras löpande val och behöver fatta beslut. Den delen behöver koden hantera och med en genomtänkt struktur så kan en undvika att hamna i en stor if-sats.

En situation kan beskrivas som en text och en lista med val. Varje val består av en text och en referens till en annan situation. Detta kan översättas till kod med hjälp av objekt.

```js
let book = [
  {
    description: "Du vaknar upp i ett rum. Du ser en dörr och ett fönster.",
    choices: [
      {
        description: "Gå till dörren",
      },
      {
        description: "Gå till fönstret",
      }
    ]
  }
]
```

Koden ovan ger möjligheten att beskriva spelarens val, de sparas i en parameter som är en array i objektet. Varje val är ett objekt som innehåller en text som beskriver valet. Men i exemplet ovan saknas något, nämligen möjligheten att referera till en ny situation. För att hänvisa till Soloäventyren från min barndom igen så hänvisar varje val till en ny sida i boken. 

Sidreferensen översättas till kod med en parameter som refererar till en ny situation, ett mål och ett sidnummer. Parametern `target` pekar på ett objekt i listan som identifieras med hjälp av ett id.

```js
let book = [
  {
    id: 0,
    description: "Du vaknar upp i ett rum. Du ser en dörr och ett fönster.",
    choices: [
      {
        description: "Gå till dörren",
        target: 1
      }
    ]
  },
  {
    id: 1,
    description: "Du går till dörren.",
    choices: []
  }
]
```

## Spelarens val

När spelaren gör ett val så behöver koden veta vilken situation som spelaren befinner sig i. Detta kan lösas med en variabel som håller reda på spelarens position i äventyret. I enlighet med att äventyrets lista kallas book så deklareras variabeln som `page`.

```js
let page = 0;
```

### Index i arrayer

Ett sätt att lösa äventyrets sidor på och hålla reda på spelarens position är att använda `page` variabeln och leta reda på "rätt" sida med hjälp av listans index.

```js
let page = 0;

console.log(book[page].description);
```

Det är en fungerande lösning, men likt den nästlade if-satsen så har den en tendens att växa och växa. Det är inte en lösning som är lätt att utöka och underhålla. Vad händer när en vill lägga till en ny situation, när val ändras och när sidor tas bort?

Av den anledningen så är det bättre att använda en variabel som refererar till ett objekt i listan. Ett objekt som identifieras med hjälp av ett id. Datastrukturen som skapas för äventyret är på så sätt inte lika känslig för förändringar.

## Använda objekt.id för spelarens val

För att använda objektens id för att hålla reda på spelarens position så behöver koden först hitta rätt objekt i listan. Detta kan göras med hjälp av en funktion som tar emot ett id och returnerar ett objekt.

```js
function findPage(id) {
  return book.find((page) => {
    return page.id === id;
  })
}
```

Funktionen använder sig av array-metoden `find` för att hitta rätt objekt i listan. `find` tar emot en funktion som parameter och denna funktion körs för varje objekt i listan. Om funktionen returnerar `true` så returneras objektet som `find` hittade. I funktionen som skickas till `find` så jämförs objektets id med id som skickades in som parameter. Om id matchar så returneras objektet.

Med den koden så kan spelarens position i äventyret uppdateras med hjälp av objektets id.

## Använda strukturen för att presentera äventyret

Med en tydlig struktur på plats blir det nu mycket enklare att presentera äventyret för spelaren. Detta kan göras med hjälp av en funktion som tar emot ett objekt och presenterar objektets beskrivning och val.

```js
function presentPage(page) {
  console.log(page.description);
  page.choices.forEach((choice) => {
    console.log(choice.description);
  })
}
```

Funktionen presenterar först objektets beskrivning och sedan presenteras varje val. Detta görs med hjälp av en `forEach`-loop som loopar igenom objektets `choices`-lista. Varje val presenteras med hjälp av `console.log`. Här kan en istället använda `prompt` för att låta spelaren göra ett val.

## Presentera äventyret för spelaren

Med funktionerna på plats så kan äventyret presenteras för spelaren. Detta görs med hjälp av en loop som upprepas tills äventyret är över.

```js
let page = 0;

while (page !== null) {
  let currentPage = findPage(page);
  presentPage(currentPage);
  page = prompt("Vad väljer du? ");
}
```

I loopen så hämtas objektet som spelaren befinner sig i med hjälp av `findPage`-funktionen. Objektet presenteras sedan för spelaren med hjälp av `presentPage`-funktionen. Till sist så uppdateras spelarens position med hjälp av `prompt`.

## Sammanfattning

Pust, det är en sak att tänka sig en artikel som detta, en annan att skriva den. Texten kräver en del två och det ska ordnas, för att presentera ett äventyr med `console.log()` och `prompt()` är inte så kul.

Presentationen för spelaren kan göras mycket bättre med hjälp av en webbsida och DOM-manipulation. I äventyrets struktur finns också en god grund för att introducera JSON.