---
title: Eleventy, del två
date: 2022-09-30
tags: ['webbutveckling', 'setup', '11ty', 'wsl']
templateEngineOverride: njk, md
category: resurs
lead: Det här är fortsättningen på den första delen om Eleventy.
---

## Innan du kör igång

Se till att du kan skapa och få igång ett Eleventy-projekt. Den första delen av artikeln handlar om det och den finns här, [Kom igång med Eleventy](/posts/kom-igang-med-eleventy/).

### Collections

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

Nu kan du testa att skapa fler blogginlägg och se att de dyker upp i listan. Om du är uppmärksam kanske du märkte att filnamnet blev `first-post`, engelska för första inlägg. Detta för att undvika svenska tecken i filnamnet. Det går såklart att lösa, men mer om det senare.

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

[Eleventy image](https://www.11ty.dev/docs/plugins/image/)
