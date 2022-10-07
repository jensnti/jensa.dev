---
title: Speedrun, centrerad layout
date: 2022-10-07
tags: ['webbutveckling', 'css', 'html']
category: resurs
templateEngineOverride: njk, md
lead: Basen för majoriteten av alla webbsidor är någon form av centrerad layout med en toppnavigation. Detta är en snabbguide för att komma igång med en sådan layout. Kopiera den, lär dig den och ändra!
---

{% set demo = collections.orderedDemos | getDemo("Centrerad layout") %}
<article>
    <h2 id="{{ demo.data.title | slugify }}">
        <a class="header-anchor" href="#{{ demo.data.title | slugify }}">
            <span aria-hidden="true">#</span></a> {{ demo.data.title }}
    </h2>
  {{ demo.templateContent | safe }}
</article>

## Fortsättning

Exemplet ovan är bara ett exempel, en start. Kopiera in den i ditt dokument och bygg vidare. Gör den din och gör den unik, men försök hålla dig till layoutens grund. Kom ihåg [Jakobs law](https://lawsofux.com/jakobs-law/).

> Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.

### Navbar

Styla texten, markera att det är navigation. Byt ut "logo" mot en faktisk logotyp.

Notera även att denna navbar får lite problem på små skärmar. Responsiviteten är inte riktigt där den bör vara. Ett sätt att arbeta med det är att skapa en mediaregel för mindre skärmar (exemplet nedan behöver dock lite mer).

```css
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }
}
```

### Hero / header

Header delen på sidan kan mycket väl ändras till en hero komponent. Texten kan places på bilden och en eventuell Call to action kan läggas till.

Att placera element på varandra har ofta gjorts med ```position: relative``` kombinerat med ```position: absolute```. Det är ett sätt att göra det på som fungerar, men en mindre komplicerad lösning är att använda css grid och template-areas.

```css
.stack {
    display: grid;
    grid-template-areas: "stack";
}

.stack > * {
    grid-area: stack;
}
```

### Footer

Prova gärna att skapa en footer till den här layouten, det är en bra övning. En sidfot är dessutom något som är en självklarhet på de flesta webbsidor.

Vad finns i en footer då? Surfa varsomhelst och titta (eller scrolla ner).

## Avslutning

Nu fick jag chansen att prova på ett koddemo här på sidan och det krävde en del extra arbete. Templaten och Nunjucks macrot fungerar ok, men det blir lite problem med CSS-stilarna (stilen för ```.demo-playground``` försöker återställa stilarna så att inte flera ärvs från den här sidan, använd devtools för att kolla på det).

Med största sannolikhet hittar jag fler fel nästa gång... Tills dess.