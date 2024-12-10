---
title: Textäventyr med javascript, en fortsättning
emphasis: 1
date: 2024-10-17
summary: Så vad händer på den andra sidan i textäventyret? I den här delen så använder vi den skapade strukturen för att presentera äventyret.
tags: ["javascript", "böcker", "spel"]
category: anteckningar
toc: true
---

När jag avslutade den föregående texten om textäventyr med JavaScript hade vi skapat en struktur för äventyret och två funktioner för att presentera det. I den här delen bygger vi vidare på detta.

## Funktionerna

För att presentera äventyret så skapade vi en funktion, `displayPage` som tar en sida som argument och skriver ut sidans beskrivning och val.

```js
function displayPage(page) {
  console.log(page.description)
  page.choices.forEach((choice) => {
    console.log(choice.description)
  })
}
```

För att kunna använda `displayPage`  behövde vi hitta rätt sida i äventyret. Detta löste vi med en funktion, findPage, som tar ett id som argument och returnerar rätt sida.

```js
function findPage(id) {
  return book.find((page) => {
    return page.id === parseInt(id)
  })
}
```

## Presentera äventyret

Vi använder funktionerna för att hitta en sida och sedan presentera den. I nuläget fungerar detta som en typ av "game-loop". Spelaren gör val och klickar sig igenom äventyret.

För att utveckla spelet vidare kommer vi senare att introducera element som kan göra spelet och sidorna mer interaktiva. Men först, presentationen.

## HTML

För att presentera äventyret så skapar vi en grundläggande HTML sida. Vi använder en `main` tagg för allt innehåll. I main skapar vi sedan varje sida i spelet som en `article` tagg. I artikeln så skapar vi en `p` tagg för beskrivningen och en `ul` tagg för valen. I `ul` taggen kommer vi att iterera över valen och skapa en `li` tagg för varje val.

Det här ger oss en semantiskt korrekt struktur för att presentera äventyret.

```html
<!DOCTYPE html>
...
<body>
  <main class="container">
    <article id="page">
      <p id="description"></p>
      <ul id="choices"></ul>
    </article>
  </main>
</body>
</html>
```

Jag inkluderar inte några stilar i detta exempel, det finns många sätt att göra det på och du kan hitta hur jag gjort det i tidigare texter.

## Javascript

Med javascript kan vi sedan manipulera HTML strukturen för att presentera äventyret. Först behöver vi hitta elementen i HTML. För det använder vi `document.querySelector`. Vi hittar elementen för sidan, beskrivningen och valen.

```js
const pageElement = document.querySelector("#page")
const descriptionElement = document.querySelector("#description")
const choicesElement = document.querySelector("#choices")
```

Vi kan sedan använda dessa element för att uppdatera `displayPage` funktionen. I funktionen använder vi `element.textContent` för att redigera text. För att skapa nya element använder vi `document.createElement`.

```js
function displayPage(page) {
  descriptionElement.textContent = page.description
  choicesElement.innerHTML = ""
  page.choices.forEach((choice) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.textContent = choice.description
    button.addEventListener("click", (event) => {
      const nextPage = findPage(choice.target)
      displayPage(nextPage)
    })
    li.appendChild(button)
    choicesElement.appendChild(li)
  })
}
```

`displayPage` använder nu `descriptionElement` och `choicesElement` för att visa berättelsen och valen. Vi skapar en `li` tagg för varje val och lägger till en knapp med en eventlyssnare som kallar `displayPage` med rätt sida när användaren klickar på valet.
För att ersätta nuvarande sida så skriver vi över innehållet i `choicesElement` med en tom sträng innan vi lägger till nya val.

## Testa

Nu kan vi testa vår funktion för att presentera äventyret. Vi skapar en array med sidor och val och anropar `displayPage` med den första sidan.

```js
const book = [
  {
    id: 0,
    description: "Du vaknar upp i ett rum. Du ser en dörr och ett fönster.",
    choices: [
      {
        description: "Gå till dörren",
        target: 1
      },
      {
        description: "Gå till fönstret",
        target: 5
      }
    ]
  },
  {
    id: 1,
    description: "Du står framför dörren. Vad gör du?",
    choices: [
      {
      description: "Öppna dörren",
      target: 2
    }, {
      description: "Gå tillbaka",
      target: 0
    }
  ],
  },
  {
    id: 2,
    description: "Dörren öppnar sig och du ser en korridor. Vad gör du?",
    choices: [
      {
      description: "Gå framåt",
      target: 3
    }, {
      description: "Gå tillbaka",
      target: 0
    }
  ],
  },
]
```

Starta äventyret i din kod med:

```js
displayPage(book[0])
```

Du är fri att strukturera äventyret och dess filer som du vill, men det kan vara en bra idé att separera JavaScript från HTML och CSS. Detta gör det enklare att underhålla och utveckla koden. Jag rekommenderar även att ha äventyret i en separat fil, inte i din JavaScript-fil. Du kan till och med välja att spara det i en JSON-fil eller en databas.

## Testa äventyret på Codepen

Här är en länk till en Codepen med all kod:

<div class="feature">
  <p class="codepen" data-height="600" data-default-tab="html,result" data-slug-hash="abeWxGa" data-user="jensadev" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>See the Pen <a href="https://codepen.io/jensadev/pen/abeWxGa">
    Centrerad layout</a> by Jens Andreasson (<a href="https://codepen.io/jensadev">@jensadev</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
  <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</div>

## Ladda äventyret från JSON

För att ladda äventyret från en separat fil så kan du använda `fetch` för att hämta filen och sedan `json` för att konvertera den till ett javascript objekt.

```js
fetch("adventure.json")
  .then((response) => response.json())
  .then((data) => {
    displayPage(data[0])
  })
```

JSON är väldigt likt den array vi skapade tidigare. Här är ett exempel på hur JSON-filen kan se ut:

```json
[
  {
    "id": 0,
    "description": "Du vaknar upp i ett rum. Du ser en dörr och ett fönster.",
    "choices": [
      {
        "description": "Gå till dörren",
        "target": 1
      },
      {
        "description": "Gå till fönstret",
        "target": 5
      }
    ]
  },
]
```

## Avslutning

I den här delen har vi använt den skapade strukturen för att presentera äventyret. Vi har skapat en grundläggande HTML-sida och använt JavaScript för att manipulera sidan. Vi har även tittat på hur du kan ladda äventyret från en fil.

Du har nu en grund att stå på för att bygga vidare på ditt textäventyr. Du kan lägga till fler sidor, fler val och fler funktioner. Du kan även lägga till bilder genom att inkludera värden i äventyrsobjektet och sedan rita ut dem med `displayPage` funktionen.