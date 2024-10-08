---
title: Sidebar layout
date: 2023-05-26
tags: ['webbutveckling', 'css', 'html']
category: resurser
templateEngineOverride: njk, md
summary: En sidebar, eller ett sidofält, en spalt med navigation eller information är en vanligt förekommande layout på webben. Men hur skapas den och hur skapades den på ett sätt så att den funkar på alla enheter?
---

Koden i det här exemplet grundar sig på lösningen som går att finna i [Every Layout](https://every-layout.dev/layouts/sidebar/), läs gärna mer där.

Som du kan se i exemplet så är det ganska mycket innehåll i sidebar delen, men det kan likväl vara enbart navigation.

<div class="feature">
<p class="codepen" data-height="600" data-default-tab="html,result" data-slug-hash="YzJggJo" data-user="jensadev" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/jensadev/pen/YzJggJo">
  Sidebar layout</a> by Jens Andreasson (<a href="https://codepen.io/jensadev">@jensadev</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</div>

## Utöka

Med hjälp av css så är det tämligen enkelt att byta placering på sidebaren, från vänster till höger. Detta görs genom att byta ordningen på elementen med flex-direction.

```css
.with-sidebar {
  flex-direction: row-reverse;
}
```

Testa även att kombinera detta exempel med layout och hjälpklasserna från tidigare exempel. Kombinera centrering med sidebar layouten och navbar till exempel.