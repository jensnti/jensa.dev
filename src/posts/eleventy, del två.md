---
title: Eleventy, del två
date: 2022-09-30
tags: ['webbutveckling', '11ty', 'bilder']
templateEngineOverride: njk, md
category: resurs
lead: Det här är fortsättningen på den första delen om Eleventy.
---

## Innan du kör igång

Se till att du kan skapa och få igång ett Eleventy-projekt. Den första delen av artikeln handlar om det och den finns här, [Kom igång med Eleventy](/posts/kom-igang-med-eleventy/).

## Collections

Istället för ett innehåll skapat i datafiler så kan Eleventy skapa samlad data från innehållet på webbplatsen. Om du tillexempel skapar innehåll för en blogg så kan du använda collections för att skapa en lista med alla blogginlägg. För att testa detta så skapa en ny markdown fil i `src` och kalla den för `blog.njk`. Lägg till följande innehåll.

```markdown
---
layout: base.njk
title: Blogg
---
Alla blogginlägg
```

Notera att filen ovan är en Nunjucks fil istället för en markdown fil. Det gör att Eleventy inte kommer att läsa in innehållet i filen som markdown utan som Nunjucks. På det sättet så kan du använda Nunjucks syntax i filen tillsammans med frontmatter.

Nästa stycke kod använder [Eleventy collections](https://www.11ty.dev/docs/collections/) för att skapa en lista över alla blogposts. Det är väldigt användbart och kan användas för att skapa eller visa data.

{% raw %}
```html
<ul>
{% for post in collections.blog %}
    <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
    {{ post | log }}
{% endfor %}
</ul>
```
{% endraw %}

I templaten så används variabeln `collections` för att hämta data från innehållet, i det här fallet allt innehåll taggat med "blog". Med hjälp av en for loop så skapas sedan en lista med blogginlägg.

Än så länge så har du bara skapat en sida för att visa en lista över alla sidor taggade med "blog". De faktiska blogginläggen som ska visas ska du skapa i en egen mapp. Skapa mappen `src/blog`. I mappen kan du sedan använda en ytterligare Eleventy funktion, mapp-datafiler. Mapp-datafiler är json filer som innehåller data som appliceras som frontmatter på alla filer i mappen. Skapa en fil i `src/blog` och kalla den för `blog.json`. Lägg till följande innehåll.

```json
{
    "layout": "base.njk",
    "tags": "blog"
}
```

Det filen `blog.json` kommer att göra är att sätta layouten till `base.njk` och taggen till `blog` på alla filer i mappen. Tags kan vara en enkel sträng eller en array av strängar. Nu kan du skapa markdown filer i mappen `src/blog` och de kommer att använda layouten och taggen som du har satt i `blog.json`.

Skapa en ny markdown fil i `src/blog` och kalla den för `first-post.md`. Lägg till följande innehåll.

```markdown
---
title: First post
---
Detta är min första bloggpost.
``` 

Uppdatera nu navigationen så att du kan surfa till din blog.

```json
{
    "title": "Blogg",
    "url": "/blog/"
}
```

Nu kan du testa att skapa fler blogginlägg (det vill säga ytterligare markdown filer i mappen blog) och se att de dyker upp i listan. Om du är uppmärksam kanske du märkte att filnamnet blev `first-post`, engelska för första inlägg. Detta för att undvika svenska tecken i filnamnet. Det går såklart att lösa, men mer om det senare.

## Bilder

Något som alltid dyker upp i webbkurserna är att inkludera bilder på webbplatsen. Det kan göras på ett antal olika sätt, dels som bilder i html, men även som bakgrunder med css.

Ett sätt att snabbt använda bilder i Eleventy är att kopiera dem på samma sätt som du [tidigare gjort med css](/posts/kom-igang-med-eleventy/#css). För att göra det så skapar du en mapp för bilderna i src, ```src/images```. Kopiera sedan in de bilder du önskar använda i mappen.
Slutligen behöver du säga åt Eleventy att faktiskt kopiera bilderna, det gör du med ```addPassthroughCopy``` i ```eleventy.js```.

```javascript
eleventyConfig.addPassthroughCopy("src/images");
```

Nu kan du använda bilderna med markdown. För att göra det så lägger du till en bildtagg i markdown. Bildtaggen ser ut så här.

```markdown
![alt text](/images/bildnamn.jpg)
```

### Bildoptimering med Eleventy-img

I steget här ovan så var det främst en fråga om att kopiera bilden så att du kan använda den. Det är såklart ett fungerande sätt att göra det på, men det förutsätter att du sköter bildoptimering manuellt. Med bildoptimering menas att du anpassar bildens upplösning, storlek och format utifrån hur den ska användas på sidan. Att anpassa bilden efter användningen är viktigt och gör att din webbsida laddas snabbare och att användaren får en bättre upplevelse.

Eleventy kan sköta bildoptimeringen åt oss, med hjälp av ett plugin. [Plugins](https://www.npmjs.com/search?q=eleventy-plugin) är något det finns en uppsjö av i Eleventy och de kan användas för att utöka funktionaliteten. För att optimera bilderna på din webbplats kommer du att använda [Eleventy-img](https://www.11ty.dev/docs/plugins/image/). Det är ett plugin som optimerar bilderna åt oss när vi bygger webbplatsen. 

#### Installation

För att installera pluginet så kör du följande kommando i terminalen.

```bash
npm install @11ty/eleventy-img
```

För att använda ett plugin så behöver det registreras i ```eleventy.js```. Det gör du genom att lägga till följande kod (i det här fallet för Eleventy-img).

```javascript
const Image = require("@11ty/eleventy-img");
```

#### Användning

Det här exemplet är hämtat från [Eleventy-img](https://www.11ty.dev/docs/plugins/image/) dokumentationen. Det är en bild som ska visas på en sida med en bredd på 800px. Bilden ska vara i formatet jpg och ska vara av hög kvalitet. För att skapa bilden så skapar du en funktion i ```eleventy.js``` som ser ut så här.

```javascript
async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [800],
    formats: ["jpg"],
    urlPath: "/images/",
    outputDir: "./dist/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}
```

Funktionen tar in tre parametrar, ```src```, ```alt``` och ```sizes```. ```src``` är sökvägen till bilden, ```alt``` är en beskrivning av bilden och ```sizes``` är en sträng som beskriver hur stor bilden ska vara. I exemplet ovan så är bilden 800 pixlar bred.

För att använda funktionen så lägger du till följande kod i ```eleventy.js```.

```javascript
eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
```

Nu kan du använda funktionen i markdown. För att göra det så lägger du till en bildtagg i markdown. Bildtaggen ser ut så här.

{% raw %}
```markdown
{% image "/images/bildnamn.jpg", "alt text", "800px" %}
```
{% endraw %}

För att se hur funktionen fungerar så se till att Eleventy körs (kom ihåg att du kan behöva starta om ditt start script då du gjort ändringar i ```.eleventy.js```), det gör du med ```npm start```. När du har byggt webbplatsen så kan du öppna den i webbläsaren och se att bilden fungerar som den ska. Ta fram utvecklarverktygen i webbläsaren och kolla att bilden har en storlek på 800px, då kommer du även att se den html som pluginet genererat för bilden.

Detta var en kort introduktion till hur du kan använda Eleventy-img för att optimerar bilderna på din webbplats. Läs vidare i dokumentationen för att se hur du kan använda pluginet för att optimera bilderna ytterligare (Format, olika storlekar och så vidare).

## Elventy och template, att skapa sidor och ärva layout

TODO 🙂