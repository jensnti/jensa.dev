---
title: 2024, redesign
date: 2024-04-25
summary: "Klart det ska bli en redesign i år igen."
tags: [ 'reflektion', 'redesign']
category: anteckningar
---

Som titeln och inledningen antyder och som du förmodligen ser så har jag gjort en redesign av sidan.

Jag var aldrig riktigt nöjd med version 3 av sidan, den kändes mörk och ganska eländig. Det är färger jag gillar, men för syftet, innehållet och vad det används till så passade det inte. Rent layoutmässigt så är jag ganska nöjd och kommer nog fortsätta vara det.

Sidans huvudsyfte är ändå att samla ihop det material jag skapat och publicerat för jobbet och presentera det i ett läsbart format för mina elever. De är ändå de som är mina huvudsakliga besökare. Övrig funktion är bonus.

## Grafiskt

För utseendet, eller designen av sidan så är det inga större förändringar. Jag har joxat med fonter, storlek och lite färg, men på det stora hela är det samma. Jag har ändrat i hur listan över poster ser ut och skruvat lite i layouten, men det är mer ett resultat av teknik än design.

## css

En ganska stor förändring är att jag har slopat sass och istället bara skriver css. Med de förändringar som skett det senaste året med css så känns det som att jag inte behöver sass. Detta har även medfört att jag försökt rensa ut css som är onödig eller överflödig och i många fall även onödigt komplicerad.

> Enkelt och tillgängligt

Sen finns det en del kvar att göra i frågan om att skriva css och städa, men det kommer.

### Containers och wrappers

För den här versionen av sidan och layouten så ville jag testa ett annat sätt att skriva containers, eller snarare inte använda den vanliga containern. Ryan Mulligan är en av de som skrivit om detta på sin blogg [Layout Breakouts with CSS Grid](https://ryanmulligan.dev/blog/layout-breakouts/).

Jag tycker hittills att system fungerar bra och är intuitivt att använda. Sen kan jag uppleva att det sätt som jag strukturerat html på och skrivit css inte riktigt är anpassat för detta, men jag tänker att det är en del av processen att testa och lära sig.

Jag skriver mer om detta här, [Containers och wrappers](/posts/containers-och-wrappers).

### Dark mode och light mode

Nu är det möjligt att välja mellan dark mode och light mode igen. Det finns en knapp i navigationen, men den byter också automatisk beroende på din system-inställning.

### Färger

Min ärkefiende, färger. Jag är aldrig nöjd och tycker aldrig att jag lyckas. Nu ville jag ha färger som skulle symbolisera teknik, nyfikenhet och att lära sig. Istället blev det rött och svart, anarki.

<ul class="swatches">
  <li style="background-color: var(--dark); color: var(--light);">dark</li>
  <li style="background-color: var(--light); color: var(--dark);">light</li>
  <li style="background-color: var(--color-primary);">primary</li>
  <li style="background-color: var(--color-secondary);">secondary</li>
</ul>

## Tekniskt

Lite mera javascript har dykt upp på sidan i form av ett sökfält och switchern för dark mode och light mode. Du kan testa sökfunktionen genom knappen i navigationen eller genom att tryck `ctrl+k` eller `cmd+k`.

Själva sökfunktionen i sig använder sig av [Elasticlunr](https://www.npmjs.com/package/elasticlunr) och den letar i en json fil som skapas utifrån 11tys collections. Koden är inget nytt och kommer från någon tutorial jag läste när jag skapade [TOD-projektet](/projekt/tema-omrade-del/).

### css

Eftersom jag bytt från sass till css så vart jag tvungen att uppdatera arbetsflödet lite. Jag tittade på några olika lösningar men valda att använda [Eleventy Plugin: LightningCSS](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-lightningcss). Det var enklast och gjorde det som jag önskade.

En senare fråga blir att eventuellt inlina css för att få sidan att ladda snabbare. Men jag tror det får sitta ihop med lite rensning av npm-paket och annat då post-css ligger kvar och skräpar.

### ...minuters läsning

Jag installerade [Eleventy Plugin: Emoji Read Time](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-emoji-readtime) för att få en uppskattning på hur lång tid det tar att läsa en post. Jag kom senare på att jag redan hade kod för detta i min helper.

## Lighthouse

Det viktigate eller hur? Kanske inte men det ser bra ut. Tillgängligheten är något som jag inte vill tumma på, sidan är för alla och ska fungera för alla.

Det som finns kvar att göra är PWA delen. Sidan kanske inte behöver installeras, det är ingen funktion jag önskar. Men att den ska fungera offline är praktiskt.