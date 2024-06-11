---
title: Textäventyr, struktur och javascript
date: 2023-09-28
summary: Ett textäventyr kan vara många saker, mina tankar går till ett spel i textform, men en bra skönlitterär bok borde väl kunna kvala in som ett textäventyr.
tags: ['javascript', 'böcker', 'spel']
category: anteckningar
toc: true
cover: cyoa.jpg
---

 I den här texten kommer jag dock fokusera på det förstnämnda, ett spel i textform, och framförallt på hur det kan användas för att arbeta med grunderna i javascript.

## Vad är ett textäventyr?

Ett textäventyr är ett spel där du får en beskrivning av en situation och sedan får du välja vad du vill göra. Beroende på dina val så kan du hamna i nya situationer och så fortsätter berättelsen. Det som skiljer textäventyret från en bok är att händelserna inte är linjära, handlingen är inte förutbestämd. Det är du som spelare som styr handlingen. Det kan liknas vid ett träd där varje val du gör leder till en ny situation.

När jag var en liten, liten, parvel så spelade jag en del textäventyr i bokform, det kallades för [soloäventyr](https://sv.wikipedia.org/wiki/Solo%C3%A4ventyr) eller [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure) på engelska. Det var en bok där du läste en beskrivning av en situation och sedan fick du välja vad du ville göra. Beroende på ditt val så fick du hoppa till en ny sida i boken och läsa en ny beskrivning av en situation. Fler av böckerna jag läste var i serien om [Ensamma vargen](http://www.ensamma-vargen.se/), en fantasyserie där du var hjälten.

## Men javascript då

Premissen för denna text är kopplingen till kod och javascript, så nog om böcker. Textäventyret lämpar sig väl för denna form av koduppgiften tycker jag eftersom den ger möjlighet att utforska flera viktiga koncept.

Ett linjärt äventyr behöver i sig inte så mycket kod, du läser en linjär berättelse just nu (kanske en kan argumentera). Men när läsaren presenteras val och dessa val inte bara leder vidare till nästa sida i boken, utan till en ny situation, då behövs det kod. Det behövs kod för att hålla reda på vilken situation läsaren befinner sig i, vilka val som finns och vilka situationer som valen leder till.

En stor del av uppgiften att översätta äventyret till kod landar naturligt i att skapa en struktur för äventyret och i förlängningen en struktur för koden. Detta är en viktig del av programmering, att strukturera din data för att koden ska kunna hantera den.

## Kom igång

Ett första steg i att koda ett äventyr av det här slaget brukar ganska ofta se ut som följer.

```js
console.log("Du vaknar upp i ett rum. Du ser en dörr och ett fönster.");
console.log("Vad vill du göra?");
console.log("1. Gå till dörren");
console.log("2. Gå till fönstret");

let val = prompt("Vad väljer du? ");
```

Äventyret skrivs ut med ett antal print statements och sedan får spelaren göra ett val med hjälp av `prompt`. Detta är en naturlig start och en bra början.  Nästa steg är en if-sats för att hantera spelarens val. Denna if-sats har en tendens att växa och växa och sedan leder den till nästlade if-satser.

Detta är ett exempel där kodaren börjar med att koda utan att tänka på strukturen. Det är inget konstigt och ett naturligt steg i att lära sig lösa problem med kod.

Äventyret växer så fram och if-satsen blir större och större. Det fungerar helt ok, ett tag, men allteftersom blir äventyret hopplöst svårt att överblicka och koden svårläst. Det är även mycket svårt för äventyret att växa utan att det blir mycket repetition i koden.

## Struktur

Om en istället börjar med att tänka på textens (data/spelet) struktur så kan en komma fram till att det finns ett antal element som behöver hanteras. Du kan öva att identifiera dessa genom att först skriva ned en del av äventyret på papper och sedan identifiera vad som behöver hanteras.

Om vi använder exemplet ovan så kan vi identifiera följande element:

- Situationer (Du vaknar upp i ett rum. Du ser en dörr och ett fönster. Det  vill säga sidans text)
- Val (Gå till dörren, Gå till fönstret)
- Spelarens val (Spelaren förväntas välja ett av valen, bläddra i boken)
- Spelarens position (Spelaren befinner sig i en situation, sidan i boken)

För att kunna översätta detta i kod så krävs det kunskap och förståelse om flera koncept. 

Äventyret i sig, berättelsen består av situationer som följer ett mönster där de upprepas om och om igen (tänk sidor i en bok). Spelaren får en text presenterad för sig, situationen, sedan utför spelaren ett val som leder till en ny situation. Detta är en loop som upprepas tills äventyret är över.

```js
while (spelet ska fortsätta) {
    // presentera situation
    // presentera val
    // spelaren gör ett val
    // spelaren hamnar i en ny situation
}
```

För att veta vad spelaren väljer så behöver vi spara informationen om valet och för att veta vilken situation spelaren befinner sig i så behöver vi spara informationen om situationen.

### Linjär struktur

Om spelet är linjärt som en bok så kan vi spara innehållet i en lista, där varje position i listan är en sida i boken. Då kan vi loopa igenom listan och presentera varje sida för spelaren.

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

Textäventyret är däremot inte linjärt och spelaren presenteras löpande val och behöver fatta beslut, som i sin tur leder till nya situationer. Den delen behöver koden hantera och med en genomtänkt struktur så kan en undvika att hamna i en stor if-sats.

En situation kan beskrivas som en text och en lista med val. Varje val består av en text och en referens till en annan situation. Detta kan översättas till kod genom att använda en lista med objekt.

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

När spelaren gör ett val så behöver koden veta vilken situation som spelaren befinner sig i. Detta kan lösas med en variabel som håller reda på spelarens position i äventyret. I enlighet med att äventyrets lista kallas book så deklareras variabeln som `currentPage`.

```js
let currentPage = 0;
```

### Index i arrayer

Ett sätt att lösa äventyrets sidor på och hålla reda på spelarens position är att använda `currentPage` variabeln och leta reda på "rätt" sida med hjälp av listans index.

```js
let currentPage = 0;

console.log(book[currentPage].description);
```

Det är en fungerande lösning, men likt den nästlade if-satsen så har den en tendens att växa och växa. Det är inte en lösning som är lätt att utöka och underhålla. Vad händer när en vill lägga till en ny situation, när val ändras och när sidor tas bort?

Av den anledningen så är det bättre att använda en variabel som refererar till ett objekt i listan. Ett objekt som identifieras med hjälp av ett id. Datastrukturen som skapas för äventyret är på så sätt inte lika känslig för förändringar.

## Använda ett objekt-id för spelarens val

För att använda objektens id för att hålla reda på spelarens position så behöver koden först hitta rätt objekt i listan. Detta kan göras med hjälp av en funktion som tar emot ett id och returnerar ett objekt.

```js
const findPage = (id) => {
  return book.find((page) => {
    return page.id === parseInt(id);
  })
}
```

Funktionen använder sig av array-metoden `find` för att hitta rätt objekt i listan. `find` tar emot en funktion som parameter och denna funktion körs för varje objekt i listan. Om funktionen returnerar `true` så returneras objektet som `find` hittade. I funktionen som skickas till `find` så jämförs objektets id med id som skickades in som parameter. Om id matchar så returneras objektet.

För att undvika problem konverterar vi `id` till ett heltal med `parseInt` för att jämföra med objektets id. Det kan här vara klokt att fundera på hur eventuella fel ska hanteras.

Med koden ovan så kan spelarens position i äventyret uppdateras med hjälp av objektets id. Vi har med andra ord ett state som håller reda på spelarens position.

## Använda strukturen för att presentera äventyret

Med en tydlig struktur på plats blir det nu mycket enklare att presentera äventyret för spelaren. Detta kan göras med hjälp av en funktion som tar emot ett objekt och skriver ut objektets beskrivning och val.

```js
const printPage = (page) => {
  console.log(page.description);
  page.choices.forEach((choice) => {
    console.log(choice.description);
  })
}
```

Funktionen skriver först ut objektets beskrivning och sedan varje val. Koden för att göra det använder en `forEach`-loop som itererar igenom objektets `choices`-lista. Varje val presenteras med hjälp av `console.log`. 

## Presentera äventyret för spelaren

Med funktionerna på plats så kan äventyret presenteras för spelaren. Detta görs med hjälp av en loop som upprepas tills äventyret är över. Här passar det alltså väl in att använda en while loop, så länge spelet ska fortsätta så presenteras situationen och valen för spelaren.

```js
let currentPage = 0;

while (currentPage !== null) {
  let pageObject = findPage(currentPage);
  printPage(pageObject);
  currentPage = prompt("Vad väljer du? ");
}
```

I loopen så hämtas objektet som spelaren befinner sig i med hjälp av `findPage`-funktionen. Objektet presenteras sedan för spelaren med hjälp av `printPage`-funktionen. Till sist så uppdateras spelarens position med hjälp av den inbyggda javascript-metoden `prompt`.

## Sammanfattning

Pust, det är en sak att tänka sig en artikel som detta, en annan att skriva den. Texten kräver en del två och det ska ordnas, för att presentera ett äventyr med `console.log()` och `prompt()` är inte så kul.

Presentationen för spelaren kan göras mycket bättre med hjälp av en webbsida och DOM-manipulation. I äventyrets struktur finns också en god grund för att introducera JSON.

Så nu har du läste den första delen, vad är ditt val? [Läs sida två](/posts/textaventyr-sida-tva/).