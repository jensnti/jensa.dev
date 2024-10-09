---
title: Incremental spel med javascript
date: 2024-10-07
summary: "En introduktion till javascript genom att skapa ett inkrementellt clicker-spel."
tags: [ "javascript", "webbutveckling", "spel"]
category: resurser
---

## Vad är ett incremental spel?

Ett incremental spel (inkrementella, ökande, svårt att översätta), är ett spel där spelare gör små handlingar för att öka en siffra eller poäng. Det finns lite olika typer, clickers, idle och management. Det är en genre som är populär på webben och i mobila enheter. Allt eftersom spelaren ökar sin poäng så kan spelaren köpa uppgraderingar som ökar poängen automatiskt eller i större mängd.

### Olika typer

- Inkrementella spel: Fokuserar på gradvis framsteg och ackumulering av resurser.
- Idle-spel: Betonar automatisering och framsteg medan spelaren är borta.
- Clicker-spel: Kräver aktivt klickande för att göra framsteg, särskilt i de tidiga stadierna.

Som du ser så är det olika typer av spel med en gemensam grund.

## Hur fungerar det då?

Inkrementella spel har ett enkelt spelsystem som uppmuntrar spelare att fortsätta spela genom att erbjuda belöningar och engagerande mekanik. Några nyckelkomponenter i ett inkrementellt spel inkluderar:

- Spelloop: Kärnan i spelet som spelare upprepar (t.ex. klicka, tjäna, uppgradera).
- Belöningar: Incitament som håller spelarna motiverade (t.ex. prestationer, nya funktioner).
- Engagerande mekanik: Unika funktioner som skiljer spelet från andra (t.ex. storyelement, specialhändelser).

### Viktiga frågor

Som alla spel är det svåraste att göra det engagerande och roligt. Här är några viktiga frågor att ställa när du designar ett inkrementellt spel:

- Framsteg: Hur säkerställer spelet en känsla av framsteg?
- Balans: Hur upprätthåller spelet en utmaning utan att bli frustrerande?
- Feedback: Hur kommunicerar spelet framgång och framsteg till spelaren?

## Exempel på ett Inkrementellt Clicker-spel

Om du har svårt med att komma på ett spel så kan du använda mallen ovan som input för prompt till en generativ AI. Det kan hjälpa med kreativiteten och att komma igång. Fråga också efter flera förslag.{.important}

Här hittar du [min prompt och Chat-GPTs svar](https://chatgpt.com/share/6703bf1f-9728-8002-aaed-78fead50ddc2).

En av fördelarna med att arbeta med AI på det här sättet är också att du kan fortsätta ställa frågor och utveckla idén. Kom ihåg att det är en AI tjänst och är du inte nöjd med svaret så kan du ställa om frågan eller be om fler förslag.

För den här texten så kör vi med iden från Chat-GPTs svar, ett cyberpunk clicker-spel.

### Cyberpunk Hackersyndikat

I en dystopisk framtid styr megakorporationer städerna och övervakar allt. Du leder ett underjordiskt hackersyndikat med ett mål: att ta tillbaka kontrollen. Genom att hacka företag och stjäla deras data bryter du ner systemet bit för bit. Men varje framsteg innebär större risker – avancerad säkerhet hotar din existens.

{% image "./src/images/cyberhacker.jpg", "Adobe firefly illustrtaion av speliden" %}

Som mästare över stadens digitala underjord måste du balansera risk och belöning. Kan du krossa megakorporationernas grepp, eller förlorar du allt i jakten på digital makt?

Jag passade även på att be om hjälp med namn för spelet då Cyberpunk Hackersyndikat inte direkt rullar av tungan. Förslagen var sådär så vi kör med **Nollskiftet**.

#### Olika typer:

- Inkrementellt spel: Spelaren samlar digitala resurser och hackar in i system för att tjäna pengar och kontrollera staden.
- Idle-spel: Automatisera dina hackare och AI-program för att samla data och resurser medan du är borta.
- Clicker-spel: Klicka för att hacka system och samla in data manuellt i de tidiga stadierna.

#### Hur fungerar det då?

- Spelloop: Klicka för att hacka in i system, stjäla data och resurser, och investera i kraftfullare hackningsverktyg och AI-botar.
- Belöningar: Uppgradera dina hackverktyg och lås upp större mål, såsom multinationella företag och regeringssystem.
- Engagerande mekanik: Fokusera på strategi genom att balansera risken för att bli upptäckt med potentiell belöning.

#### Viktiga frågor:

- Framsteg: Hackningsnivån ökar, och större och farligare system blir tillgängliga att hacka.
- Balans: Spelaren måste balansera riskerna med att bli upptäckt mot de stora belöningarna från framgångsrika hack.
- Feedback: Spännande grafisk feedback och ljud när ett system bryts ner och ett hack lyckas.

## Att skapa spelet

Nu har vi en idé att arbeta med. Så nu är det dags att sätta igång och skapa spelet. Vi kommer att använda oss av javascript, html och css för att skapa spelet.

### Grundläggande struktur

Vi börjar med att skapa en grundläggande struktur för spelet. Vi behöver en HTML-fil, en CSS-fil och en JavaScript-fil.

Du kan skapa filerna lokalt eller kopiera projektet på [Codepen](https://codepen.io/jensadev/pen/eYqzwxX).

#### HTML

För att fokusera på det viktigaste så inkluderar jag inte den fullständiga strukturen för en webbsida. Vi behöver en container för spelet, en rubrik, en knapp för att hacka systemet och en räknare för stulen data.

```html
<main class="container">
  <h1>Nollskiftet</h1>
  <p>Klicka för att hacka systemet och stjäla data!</p>
  <button id="hackButton">Hacka!</button>
  <p>Stulen Data: <span id="dataStolen">0</span></p>
</main>
```

#### CSS

Stilarna på spelet är väldigt viktigt, men det blir snabbt mycket kod. Här är en enkel stil för att testa. Vill du se den fullständiga stilmallen så finns den på [Codepen](https://codepen.io/jensadev/pen/eYqzwxX).

```css
body {
  font-family: sans-serif;
  font-size: 1.2rem;
}
.container {
  width: min(70ch, 100% - 3rem);
  margin-inline: auto;
}
button {
  padding: 0.5em;
  font-size: 2rem;
  cursor: pointer;
}
```

### JavaScript

För att göra spelet interaktivt behöver vi JavaScript för att hantera klickhändelsen och uppdatera data. Här är en enkel JavaScript-kod för att räkna stulen data när spelaren klickar på knappen.

```javascript
const hackButton = document.querySelector("#hackButton")
const dataElement = document.querySelector("#dataStolen")

let dataStolen = 0

hackButton.addEventListener('click', () => {
  dataStolen += 1
  dataElement.textContent = dataStolen
});
```

Koden väljer element med querySelector och lägger till en händelselyssnare för klickhändelsen på knappen. När spelaren klickar på knappen ökar dataStolen-värdet med 1 och uppdaterar textinnehållet i dataElement.

## Sammanfattning

I den här texten har vi tittat på vad ett inkrementellt spel är och hur det fungerar. Vi har också skapat en grundläggande struktur för ett inkrementellt clicker-spel med

- HTML för att skapa strukturen för spelet.
- CSS för att styla spelet och göra det visuellt tilltalande.
- JavaScript för att skapa spelets logik och interaktivitet.

I nästa del, [Incremental spel, game loop] kommer vi att titta på hur vi kan utöka spelet med fler funktioner och mekaniker för att göra det mer engagerande och roligt att spela.


